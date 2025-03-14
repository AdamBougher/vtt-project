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
      <nav className="absolute inset-x-0 top-0 flex items-center justify-between">
        <div className="text-lg lg:flex-grow bg-gray-700">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
            Home
          </Link>
          <Link
            to="/characters"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
            Characters
          </Link>
          <Link
            to="/create"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
            Create Character
          </Link>
        </div>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/create" element={<CreateCharacterForm />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;