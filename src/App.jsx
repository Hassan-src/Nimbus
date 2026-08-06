import "./App.css";
import Main from "./components/Main";
import Logo from "./components/Header/Logo";
import Header from "./components/Header/Header";
import SearchBar from "./components/Header/SearchBar";
import { MainProvider } from "./context/MainProvider";
import MainWeatherInfo from "./components/MainWeatherInfo";
function App() {
  return (
    <MainProvider>
      <Header>
        <Logo />
        <SearchBar />
      </Header>
      <Main>
        <MainWeatherInfo />
      </Main>
    </MainProvider>
  );
}

export default App;
