import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsAdmin, setDevices, setFilteredDevices } from '../redux/actions';
import DeviceContainer from '../components/DeviceContainer'

import '../scss/devices.scss';
import SearchBar from '../components/SearchBar';


const Devices = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredDevices = useSelector((state) => state.filteredDevices);
  const notification = useSelector((state) => state.notification);

  const userOrAdmin = async () => {
    const userId = localStorage.getItem('userId');
    const response = await fetch(
      `https://js-test-api.etnetera.cz/api/v1/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': localStorage.getItem('token'),
      }
    });

    const data = await response.json();
    
    if (data.type === 'admin') {
      dispatch(setIsAdmin(true));
    }

    if (response.status !== 200) {
      navigate('/login');
    }
  }

  const getPhones = async () => {
    const response = await fetch(`https://js-test-api.etnetera.cz/api/v1/phones`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': localStorage.getItem('token'),
      }
    })

    const data = await response.json();

    if (response.status === 200) {
      dispatch(setDevices(data));
      dispatch(setFilteredDevices(data))
    }
  }
console.log(notification);

   useEffect(() => {
     userOrAdmin();
     getPhones();
   }, []);

  return (
    <main>
      <SearchBar />
      
      {notification && (
        <div>{notification}</div>
      )}
      <div className="devices-container">
        {filteredDevices && filteredDevices.map((device) => (
          <DeviceContainer
            key={device.id}
            id={device.id}
            model={device.model}
            vendor={device.vendor}
            os={device.os}
            osVersion={device.osVersion}
            image={device.image}
            borrowed={device.borrowed}
          />
        ))}
      </div>
    </main>
  );
};

export default Devices;
