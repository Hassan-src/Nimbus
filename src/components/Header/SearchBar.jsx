import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <form className={styles.searchBarForm}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search City"
      />
    </form>
  );
}

export default SearchBar;
