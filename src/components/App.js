import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/App.scss";
import api from "../services/api";
import Main from "./Main";
import Loading from "./Loading";

const App = () => {
  //state
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(false);

  //life cycle
  useEffect(() => {
    setLoading(true);
    api.getDataFromApi().then((data) => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  //filter
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

  // character detail
  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return characterId === character.id;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p className="notFound">No se ha encontrado el personaje</p>;
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        {loading === true ? <Loading></Loading> : null}
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
