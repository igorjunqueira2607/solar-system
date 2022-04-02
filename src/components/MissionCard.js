import React from 'react';

function MissionCard(props) {
  const { missionName, missionYear, missionCountry, missionDestination} = props;
  return (
    <div className="border-2 border-white rounded w-9/12 text-white mb-6 h-fit hover:border-sky-500 duration-200">
      <h3 className="text-white font-bold text-center h-1/5 pt-1">{missionName}</h3>
      <div className="flex flex-col items-start pl-3 h-4/5 py-3">
        <p className="text-sm">{missionYear}</p>
        <p className="text-sm">{missionCountry}</p>
        <p className="text-sm">{missionDestination}</p>
      </div>
    </div>
  )
}

export default MissionCard;
