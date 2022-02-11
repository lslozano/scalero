import { MainContainer, GamesContainer } from './styles';
// Components
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
// Data
import { gamesData } from './gamesData';

const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      <GamesContainer>
        {gamesData.map((game, index) => {
          const { name, description, year } = game;
          return (
            <GameCard
              key={index}
              name={name}
              description={description}
              year={year}
            />)}
          )}

      </GamesContainer>
    </MainContainer>
  );
}

export default Main;
