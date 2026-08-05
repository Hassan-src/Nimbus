import "./App.css";
import useCityWeatherCurrent from "./hooks/useCityWeatherCurrent";
import Main from "./components/Main";
import Logo from "./components/Logo";
function App() {
  const { curWeather, curWeatherCondition, curContry, curCity, curLocalTime } =
    useCityWeatherCurrent("tehran");
  console.log(
    curWeather,
    curWeatherCondition,
    curContry,
    curCity,
    curLocalTime,
  );
  return (
    <Main>
      <Logo />
    </Main>
  );
}

export default App;
