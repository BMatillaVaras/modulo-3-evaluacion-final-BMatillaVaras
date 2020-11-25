const getDataFromApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          species: character.species,
          origin: character.origin.name,
          episodes: character.episode,
          status: character.status,
        };
      });
    });
};

const objectToExport = { getDataFromApi };

export default objectToExport;
