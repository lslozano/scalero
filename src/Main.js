import { MainContainer } from "./styles";
import Navbar from './components/Navbar';

const Main = () => {
  return (
    <MainContainer>
      <Navbar />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </MainContainer>
  );
}

export default Main;
