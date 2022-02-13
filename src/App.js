import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
// Views
import Home from './views/Home';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainContainer = styled.div`
  background-color: #f4fafa;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 10px;
`;

const App = () => {
  return (
    <MainContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:game" element={<p>Here goes the game info</p>} />
          </Routes>
          <Footer />
        </Router>
    </MainContainer>
  );
}

export default App;
