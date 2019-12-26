import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import SearchResults from "./searchResults";
import ThemeContext from "./themeContext";

const SearchParams = () => {
  async function searchAnimals() {
    try {
      const { animals } = await pet.animals({
        breed,
        location,
        type: animal
      });

      setPets(animals);
    } catch (error) {
      console.error(error);
    }
  }

  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

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
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />

        <BreedDropdown />

        <button style={{ backgroundColor: theme }}>Search</button>
      </form>

      <SearchResults pets={pets} />
    </div>
  );
};

export default SearchParams;
