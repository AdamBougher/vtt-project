import { useState } from 'react';
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

function CreateCharacterForm() {
  const [newCharacterName, setNewCharacterName] = useState('');
  const [newCharacterRace, setNewCharacterRace] = useState('');
  const [newCharacterClass, setNewCharacterClass] = useState('');
  const [newCharacterLevel, setNewCharacterLevel] = useState(1);
  const [newCharacterStrength, setNewCharacterStrength] = useState(10);
  const [newCharacterDexterity, setNewCharacterDexterity] = useState(10);
  const [newCharacterConstitution, setNewCharacterConstitution] = useState(10);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  return (
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
  );
}

export default CreateCharacterForm;