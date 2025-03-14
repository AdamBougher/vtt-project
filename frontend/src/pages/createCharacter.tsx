import { useState } from "react";
import ky from "ky";
import { CharacterInfo as Character } from "../Components/character";

function CreateCharacterForm() {
  const [system, setSystem] = useState("");
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [classType, setClassType] = useState("");
  const [level, setLevel] = useState(1);
  const [characterStats, setCharacterStats] = useState({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    wisdom: 10,
    intelligence: 10,
    charisma: 10,
  });
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleCreateCharacter = async (e: React.FormEvent) => {
    e.preventDefault();

    const newCharacter = {
      name,
      race,
      class_type: classType,
      level,
      stats: characterStats,
    };

    try {
      const response = await ky
        .post<Character>("http://127.0.0.1:8000/api/characters/", {
          json: newCharacter,
        })
        .json();
      // Update the character list with the new character
      setCharacters([...characters, response]);

      // Clear the form
      setName("");
      setRace("");
      setClassType("");
      setLevel(1);
      setCharacterStats({
        strength: 10,
        dexterity: 10,
        constitution: 10,
        wisdom: 10,
        intelligence: 10,
        charisma: 10,
      });
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleStatChange = (stat: string, value: number) => {
    setCharacterStats((prevStats) => ({
      ...prevStats,
      [stat]: value,
    }));
  };

  return (
    <div>
      <h2>Create a new character</h2>
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleCreateCharacter}>
        <label>
          System:
          <input
            type="text"
            value={system}
            onChange={(e) => setSystem(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Race:
          <input
            type="text"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          />
        </label>
        <label>
          Level:
          <input
            type="number"
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value))}
          />
        </label>
        {Object.entries(characterStats).map(([stat, value]) => (
          <label key={stat}>
            {stat.charAt(0).toUpperCase() + stat.slice(1)}:<br/>
            <input
              type="number"
              value={value}
              onChange={(e) => handleStatChange(stat, parseInt(e.target.value))}
            />
          </label>
        ))}
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
}

export default CreateCharacterForm;
