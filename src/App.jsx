import "./App.css";
import useCityWeatherCurrent from "./hooks/useCityWeatherCurrent";
import sun from "./assets/Weather-sunny.svg";
import night from "./assets/Night.avif";
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
    <>
      <main>
        <img className="main" src={night} alt="" />
        <div className="a">
          <div className="we">
            <img className="sun" src={sun} alt="sun" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
