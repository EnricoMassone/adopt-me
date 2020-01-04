import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import SearchResults from "./searchResults";
import { connect } from "react-redux";
import changeLocation from "./actionCreators/changeLocation";
import changeTheme from "./actionCreators/changeTheme";

const SearchParams = props => {
  async function searchAnimals() {
    try {
      const { animals } = await pet.animals({
        breed,
        location: props.location,
        type: animal
      });

      setPets(animals);
    } catch (error) {
      console.error(error);
    }
  }

  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      if (!breeds) {
        return;
      }

      const breedNames = breeds.map(({ name }) => name);
      setBreeds(breedNames);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          searchAnimals();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            value={props.location}
            onChange={e => props.setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />

        <BreedDropdown />

        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={props.theme}
            onBlur={e => props.setTheme(e.target.value)}
            onChange={e => props.setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="pink">Pink</option>
            <option value="darkblue">Dark Blue</option>
          </select>
        </label>

        <button style={{ backgroundColor: props.theme }}>Search</button>
      </form>

      <SearchResults pets={pets} />
    </div>
  );
};

const mapStateToProps = ({ location, theme }) => ({
  location,
  theme
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => {
    const action = changeLocation(location);
    dispatch(action);
  },
  setTheme: theme => {
    const action = changeTheme(theme);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);
