import { Link } from 'react-router-dom';
const Pet = ({ name, animal, breed, location, images, id }) => {
  let petIMG =
    'https://i.pinimg.com/favicons/a91729a6dc82246c14cf9079b82ec3c85b969d52564ad538dd336ae2.png';

  // console.log("pet name", name, images);

  return (
    <Link to={`/details/${id}`} className='pet'>
      <div className='image-container'>
        {/* images.length returns undefined because on the first load, no data is
        returned */}
        {!images ? (
          <img src={petIMG} alt={animal} />
        ) : (
          <img src={images[0]} alt={animal} />
        )}
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};
export default Pet;
