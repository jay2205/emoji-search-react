import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import EmojiResults from "./components/EmojiResults";
import SearchEmojis from "./logic/SearchEmojis";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  function searchInputHandler(value) {
    setValue(value);
  }

  return (
    <div className="App">
      <SearchInput value={value} onSearchHandle={searchInputHandler} />
      <EmojiResults emojis={SearchEmojis(value)} />
    </div>
  );
}

export default App;
