import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export default function Details() {
  const { id } = useParams();
  // useParams returns object, not number
  // console.log(id);
  const [petDetails, setPetDetails] = useState({});

  useEffect(() => {
    getPetDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getPetDetails() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const data = await res.json();
    // console.log(data.pets[0].name);
    setPetDetails(data.pets[0]);
  }
  return (
    <div className='details'>
      <div className='details-content'>
        <h1>Hi my name is {petDetails.name}</h1>
        <h2>{`${petDetails.animal} - ${petDetails.breed}`}</h2>
        <div>
          {petDetails.images ? (
            <img
              className='image-details'
              src={petDetails.images[0]}
              alt={petDetails.animal}
            />
          ) : (
            <div />
          )}
        </div>

        <p>{petDetails.description}</p>
        <button>Add friend</button>
      </div>
    </div>
  );
}
