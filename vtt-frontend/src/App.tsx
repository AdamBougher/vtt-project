import { useEffect, useState } from 'react';
import './App.css';
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

function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <p>Race: {character.race}</p>
      <p>Class: {character.class_type}</p>
      <p>Level: {character.level}</p>
      <p>Stats: {JSON.stringify(character.stats)}</p>
    </div>
  );
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for the new character form
  const [newCharacterName, setNewCharacterName] = useState('');
  const [newCharacterRace, setNewCharacterRace] = useState('');
  const [newCharacterClass, setNewCharacterClass] = useState('');
  const [newCharacterLevel, setNewCharacterLevel] = useState(1);
  const [newCharacterStrength, setNewCharacterStrength] = useState(10);
  const [newCharacterDexterity, setNewCharacterDexterity] = useState(10);
  const [newCharacterConstitution, setNewCharacterConstitution] = useState(10);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get<Character[]>("http://127.0.0.1:8000/api/characters/");
        setCharacters(response.data);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleCreateCharacter = async (e: React.FormEvent) => {
    e.preventDefault();

    const newCharacter = {
      name: newCharacterName,
      race: newCharacterRace,
      class_type: newCharacterClass,
      level: newCharacterLevel,
      stats: {
        strength: newCharacterStrength,
        dexterity: newCharacterDexterity,
        constitution: newCharacterConstitution,
      },
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/characters/", newCharacter);
      // Update the character list with the new character
      setCharacters([...characters, response.data]);

      // Clear the form
      setNewCharacterName('');
      setNewCharacterRace('');
      setNewCharacterClass('');
      setNewCharacterLevel(1);
      setNewCharacterStrength(10);
      setNewCharacterDexterity(10);
      setNewCharacterConstitution(10);

    } catch (e: any) {
      setError(e.message);
    }
  };

  if (loading) {
    return <div>Loading characters...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>VTT App - Characters</h1>
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <h2>Create New Character</h2>
      <form onSubmit={handleCreateCharacter}>
        <label>
          Name:
          <input
            type="text"
            value={newCharacterName}
            onChange={(e) => setNewCharacterName(e.target.value)}
          />
        </label>
        <label>
          Race:
          <input
            type="text"
            value={newCharacterRace}
            onChange={(e) => setNewCharacterRace(e.target.value)}
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            value={newCharacterClass}
            onChange={(e) => setNewCharacterClass(e.target.value)}
          />
        </label>
        <label>
          Level:
          <input
            type="number"
            value={newCharacterLevel}
            onChange={(e) => setNewCharacterLevel(parseInt(e.target.value))}
          />
        </label>
         <label>
          Strength:
          <input
            type="number"
            value={newCharacterStrength}
            onChange={(e) => setNewCharacterStrength(parseInt(e.target.value))}
          />
        </label>
         <label>
          Dexterity:
          <input
            type="number"
            value={newCharacterDexterity}
            onChange={(e) => setNewCharacterDexterity(parseInt(e.target.value))}
          />
        </label>
         <label>
          Constitution:
          <input
            type="number"
            value={newCharacterConstitution}
            onChange={(e) => setNewCharacterConstitution(parseInt(e.target.value))}
          />
        </label>
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
}

export default App;
