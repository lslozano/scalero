import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
// Views
import Home from './views/Home';
import Game from './views/Game';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Hook
import useLocalStorage from './Hooks/useLocalStorage';
// Default Data
import { gamesData } from './gamesData';
// Styles
import { breakPoints } from './breakPoints';

const MainContainer = styled.div.attrs({
  className: 'mainContainer',
})`
  background-color: #f4fafa;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 10px;

  ${breakPoints.smallTablet} {
    padding: 0 50px;
  }
`;

const App = () => {
  // Custom hook that sets global persistent state
  const [games, setGames] = useLocalStorage('gamesData', gamesData);

  return (
    <MainContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home gamesState={games} setGames={setGames} />} />
            <Route path="/:game" element={<Game gamesState={games} setGames={setGames} />} />
          </Routes>
          <Footer />
        </Router>
    </MainContainer>
  );
}

export default App;
