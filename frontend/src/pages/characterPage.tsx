import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ky from 'ky';
import { CharacterInfo as Character} from "../Components/character";



function CharacterPage() {
  const { id } = useParams<{ id: string }>(); // Get the character ID from the URL
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await ky<Character>(`http://127.0.0.1:8000/api/characters/${id}/`).json();
        setCharacter(response);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>Loading character...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!character) {
    return <div>Character not found.</div>;
  }

  return (
    <div className="character-page">
      <h1>{character.name}</h1>
      <p>
        Level: {character.level} : {character.race} {character.class_type}
      </p>
      <p>
        <ul>
          {character.stats &&
            Object.entries(character.stats).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
        </ul>
      </p>
    </div>
  );
}

export default CharacterPage;