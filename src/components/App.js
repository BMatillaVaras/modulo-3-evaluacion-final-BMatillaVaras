import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../stylesheets/App.scss";
import api from "../services/api";
import Main from "./Main";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  console.log(characters);

  return (
    <body className="app">
      <Header />
      <Main characters={characters} />
    </body>
  );
};

export default App;
