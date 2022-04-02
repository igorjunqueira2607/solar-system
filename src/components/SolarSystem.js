import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div className="flex flex-col mb-6">
      <Title />
      <div className="flex flex-col mt-6 space-y-4 sm:flex sm:flex-row">
        {planets.map((planet) => (
          <PlanetCard 
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    </div>
  )
}

export default SolarSystem;
