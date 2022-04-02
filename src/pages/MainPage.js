import React from 'react';
import Header from '../components/Header';
import Missions from '../components/Missions';
import SolarSystem from '../components/SolarSystem';
import '../css/mainpage.css';

function MainPage() {
  return(
    <div className="main-page flex-col">
      <Header />
      <SolarSystem />
      <Missions />
    </div>
  )
}

export default MainPage;
