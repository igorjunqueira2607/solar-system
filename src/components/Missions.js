import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

function Missions() {
  return (
    <div>
      <div>
        <h3 className="text-white text-2xl sm:text-4xl font-bold text-center p-4 mb-4">Missões</h3>
      </div>
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {missions.map((mission) => (
          <MissionCard 
            key={ mission.name }
            missionName={ mission.name }
            missionYear= { mission.year }
            missionCountry= { mission.country }
            missionDestination= { mission.destination }
          />
        ))}
      </div>
    </div>
  ) 
}

export default Missions;
