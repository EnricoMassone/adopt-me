import React from "react";
import Pet from "./pet";

const SearchResults = ({ pets }) => {
  let results = <h1> No Pets Found</h1>;

  if (pets && pets.length) {
    results = pets.map(pet => (
      <Pet
        animal={pet.type}
        breed={pet.breeds.primary}
        id={pet.id}
        key={pet.id}
        location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
        media={pet.photos}
        name={pet.name}
      />
    ));
  }

  return <div className="search">{results}</div>;
};

export default SearchResults;
