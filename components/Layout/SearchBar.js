import { useEffect, useRef } from "react";
import SearchIcon from "@/components/svg/SearchIcon";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const inputRef = useRef(null);

  function handlePropagation(e) {
    e.stopPropagation();
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function documentOnKeyDown(e) {
    if (e.key === "/") {
      inputRef.current.focus();
      e.preventDefault();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", documentOnKeyDown);

    return () => {
      document.removeEventListener("keydown", documentOnKeyDown);
    };
  }, []);

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Type “/” to focus"
        onKeyDown={handlePropagation}
      />

      <button className="aspect-square w-8 m-0 p-0 flex justify-center items-center bg-primary rounded-xl text-gray-6">
        <SearchIcon className="w-[13.54px]" />
      </button>
    </form>
  );
}

export default SearchBar;
