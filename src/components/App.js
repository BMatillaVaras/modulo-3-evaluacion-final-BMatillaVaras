import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../stylesheets/App.scss";
import api from "../services/api";
import Main from "./Main";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };
  console.log(filterText);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div className="app">
      <Header />
      <Main
        characters={filteredCharacters}
        handleFilter={handleFilter}
        filterText={filterText}
      />
    </div>
  );
};

export default App;
