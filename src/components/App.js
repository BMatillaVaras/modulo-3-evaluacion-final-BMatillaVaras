import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharacterDetail from "./CharacterDetail";
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

  characters.sort(function (prevName, nextName) {
    if (prevName.name < nextName.name) return -1;
    if (prevName.name > nextName.name) return 1;
    return 0;
  });

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });

  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return characterId === character.id;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p>No se ha encontrado el personaje</p>;
    }
  };
  console.log(filteredCharacters);

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
          <Route path="/character-detail/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
