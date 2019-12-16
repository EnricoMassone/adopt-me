import React from "react";

const Pet = ({ name, animal, breed, media, location, id }) => {
  let heroImage = "http://placecorgi.com/300/300";
  if (media && media.length) {
    heroImage = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={heroImage} alt={name} />
      </div>

      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
