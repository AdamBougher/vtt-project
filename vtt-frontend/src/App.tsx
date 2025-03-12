import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CharacterList from './pages/characterList';
import CreateCharacterForm from './pages/createCharacter';
import CharacterPage from './pages/characterPage';
import Home from './pages/home'; // Import the Home component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className='flex space-x-4 justify-center'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/create">Create Character</Link>
          </li>
        </ul>
      </nav>
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use the Home component for the root path */}
          <Route path="/characters" element={<CharacterList />} /> {/* Changed path to /characters */}
          <Route path="/create" element={<CreateCharacterForm />} />
          <Route path="/characters/:id" element={<CharacterPage />} /> {/* Changed path to /characters/:id */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;