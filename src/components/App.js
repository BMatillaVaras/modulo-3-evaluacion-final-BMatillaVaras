import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
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
      <main>
        <Switch>
          <Route exact path="/">
            <Main
              characters={filteredCharacters}
              handleFilter={handleFilter}
              filterText={filterText}
            />
          </Route>
          <Route path="/character-detail/:characterId " />
        </Switch>
      </main>
    </div>
  );
};

export default App;
