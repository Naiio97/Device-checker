import React, { useState } from 'react';
import '../scss/devices.scss';
import data from '../data/data.json';
import image from '../assets/no-image.png';
import SearchBar from '../components/SearchBar';

const Devices = () => {
  const [devices, setDevices] = useState(data);
  return (
    <main>
      <SearchBar />
      <div className="main-devices">
        {devices.map((device) => (
          <div key={device.id} className="device-div">
            <img src={image} className="device-img" alt="logo" />
            <div className="device-info">
              <h1>{device.model}</h1>
              <span>{device.producer}</span> <br />
              <span className="span-os">
                <br />
                {device.os}/{device.versionOs}
              </span>
            </div>
            <button id="btn-device">Půjčit</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Devices;
