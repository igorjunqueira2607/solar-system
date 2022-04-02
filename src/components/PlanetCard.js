import React from 'react';

function PlanetCard(props) {
  const { planetName, planetImage } = props;
  return (
    <div className="flex flex-col items-center justify-end space-y-2.5">
      <h2 className="text-white text-center font-semibold">{planetName}</h2>
      <img src={planetImage} alt="nome do planeta" className="sm:hover:scale-125 duration-500"/>
    </div>
  )
}

export default PlanetCard;