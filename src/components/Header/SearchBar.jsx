import useWeatherPost from "../../context/useWeatherPost";
import styles from "./SearchBar.module.css";
function SearchBar() {
  const { search, setSearch, setCity } = useWeatherPost();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search.trim()) return;
    setCity(search.trim());
    setSearch("");
  }
  return (
    <form className={styles.searchBarForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search City"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={styles.searchBoxButton}>search</button>
    </form>
  );
}

export default SearchBar;
