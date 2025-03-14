import { useEffect, useState } from 'react';
import ky from 'ky';
import { Link } from 'react-router-dom';
import { CharacterInfo as Character } from "../Components/character";

function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="character-card">
      <h3>{character.name} : {character.level}</h3>
      <p>{character.race} {character.class_type}</p>
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await ky<Character[]>("http://127.0.0.1:8000/api/characters/").json();
        setCharacters(response);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div>Loading characters...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="character-list">
      {characters.map((character) => (
        <Link key={character.id} to={`/characters/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      ))}
    </div>
  );
}

export default CharacterList;