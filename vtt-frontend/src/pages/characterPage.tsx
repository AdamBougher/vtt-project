import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
}

interface Character {
  id: number;
  name: string;
  race: string;
  class_type: string;
  level: number;
  stats: CharacterStats;
}

function CharacterPage() {
  const { id } = useParams<{ id: string }>(); // Get the character ID from the URL
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get<Character>(`http://127.0.0.1:8000/api/characters/${id}/`);
        setCharacter(response.data);
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
      <h2>{character.name}</h2>
      <p>Race: {character.race}</p>
      <p>Class: {character.class_type}</p>
      <p>Level: {character.level}</p>
      <p>Stats:
        <ul>
          <li>Strength: {character.stats.strength}</li>
          <li>Dexterity: {character.stats.dexterity}</li>
          <li>Constitution: {character.stats.constitution}</li>
        </ul>
      </p>
    </div>
  );
}

export default CharacterPage;