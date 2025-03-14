import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CharacterList from './pages/characterList';
import CreateCharacterForm from './pages/createCharacter';
import CharacterPage from './pages/characterPage';
import Home from './pages/home'; // Import the Home component
import Open5eClassesPage from './pages/open5e'; // Import the Open5eClassesPage component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className='absolute inset-x-0 top-25 h-16'>
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
          <li>
            <Link to="/classes">Classes</Link>
          </li>
        </ul>
      </nav>
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/create" element={<CreateCharacterForm />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="/classes" element={<Open5eClassesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;