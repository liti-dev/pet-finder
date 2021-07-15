import Pet from "./Pet";

export default function PetList({ pets }) {
  // console.log("pets are", pets);
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            ></Pet>
            // <Pet {...pet} key={pet.id}></Pet> similar way but Harder to read
          );
        })
      )}
    </div>
  );
}
