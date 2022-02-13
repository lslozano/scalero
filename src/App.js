import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
// Views
import Home from './views/Home';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Hook
import useLocalStorage from './Hooks/useLocalStorage';
// Default Data
import { gamesData } from './gamesData';

const MainContainer = styled.div`
  background-color: #f4fafa;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 10px;
`;

const App = () => {
  const [games, setGames] = useLocalStorage('gamesData', gamesData);

  return (
    <MainContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home games={games} setGames={setGames} />} />
            <Route path="/:game" element={<p>Here goes the game info</p>} />
          </Routes>
          <Footer />
        </Router>
    </MainContainer>
  );
}

export default App;
