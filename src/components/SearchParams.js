import React, { useState, useEffect } from "react";
import PetList from "./PetList";
import useBreedList from "./useBreedList";

const ANIMALS = ["dog", "bird", "cat", "reptile"];

export default function SearchParams() {
  const [location, setLocation] = useState("Denver, CO");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  // replace `const breeds = [];`
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleAnimalSelect = (event) => {
    console.log(event.target.value);
    setAnimal(event.target.value);
  };

  const handleBreedSelect = (event) => {
    setBreed(event.target.value);
  };

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const data = await res.json();
    console.log("data is ", data);
    setPets(data.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          // prevent submitting form and reloading the page
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          {/* Nest input in label for better accessibility */}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleLocationChange}
          ></input>
        </label>
        {/* Dropdown */}
        <label htmlFor="animal">Animal</label>
        <select id="animal" value={animal} onChange={handleAnimalSelect}>
          <option />
          {ANIMALS.map((animal) => {
            return (
              <option value={animal} key={animal}>
                {animal}
              </option>
            );
          })}
        </select>

        <label htmlFor="breed">Breed</label>
        <select id="breed" value={breed} onChange={handleBreedSelect}>
          <option />
          {breeds.map((breed) => {
            return (
              <option value={breed} key={breed}>
                {breed}
              </option>
            );
          })}
        </select>

        <button>Search</button>
      </form>

      <PetList pets={pets} />
    </div>
  );
}
