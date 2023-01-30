import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../scss/deviceContainer.scss';
import no_image from '../assets/no_image.png';
import { RxCross2 } from 'react-icons/rx';

const DeviceContainer = ({
  id,
  model,
  os,
  vendor,
  osVersion,
  image,
  borrowed,
}) => {
  const [borrowersUserId, setBorrowersUserId] = useState(
    borrowed ? borrowed.user.id : null
  );
  const [isDeviceBorrowed, setIsDeviceBorrowed] = useState(
    borrowed ? true : false
  );
  const [thisUserBorrowed, setThisUserBorrowed] = useState(
    borrowersUserId === localStorage.getItem('userId')
  );
  const [borrowerDetails, setBorrowerDetails] = useState({});
  const isAdmin = useSelector((state) => state.isAdmin);
  const [display, setDisplay] = useState('none');

  const returnDevice = async () => {
    await fetch(`https://js-test-api.etnetera.cz/api/v1/phones/${id}/return`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': localStorage.getItem('token'),
      },
    });

    setBorrowerDetails({});
    setBorrowersUserId(null);
    setIsDeviceBorrowed(false);
    setThisUserBorrowed(false);
  };

  const borrowDevice = async () => {
    const response = await fetch(
      `https://js-test-api.etnetera.cz/api/v1/phones/${id}/borrow`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': localStorage.getItem('token'),
        },
      }
    );

    const data = await response.json();
    console.log('🚀 ~ file: DeviceContainer.js:57 ~ borrowDevice ~ data', data);

    setBorrowerDetails({
      userId: data.borrowed.user.id,
      userName: data.borrowed.user.name,
      date: new Date(data.borrowed.date).toLocaleString(),
    });

    setBorrowersUserId(data.borrowed.user.id);
    setIsDeviceBorrowed(true);
    setThisUserBorrowed(true);
  };

  const getBorrowersData = async () => {
    const response = await fetch(
      `https://js-test-api.etnetera.cz/api/v1/phones/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': localStorage.getItem('token'),
        },
      }
    );

    const data = await response.json();

    if (data && data.borrowed) {
      setBorrowerDetails({
        userId: data.borrowed.user.id,
        userName: data.borrowed.user.name,
        date: new Date(data.borrowed.date).toLocaleString(),
      });
    }
  };

  const deleteDevice = async () => {
    const response = await fetch(
      `https://js-test-api.etnetera.cz/api/v1/phones/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': localStorage.getItem('token'),
        },
      }
    );
  };

  useEffect(() => {
    if (borrowed) {
      getBorrowersData();
    }
  }, []);

  if (!image) {
    image = no_image;
  }
  let button;

  const showButton = (e) => {
    e.preventDefault();
    setDisplay('block');
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay('none');
  };

  if (isDeviceBorrowed && thisUserBorrowed) {
    button = (
      <button onClick={returnDevice} className="btn-device">
        Vrátit
      </button>
    );
  } else if (isDeviceBorrowed && !thisUserBorrowed) {
    button = (
      <button
        disabled
        onClick={returnDevice}
        className="btn-device"
        style={{ backgroundColor: '#b9b7b7' }}
      >
        Vrátit
      </button>
    );
  } else {
    button = (
      <button onClick={borrowDevice} className="btn-device">
        Vypujčit
      </button>
    );
  }
  return (
    <div
      className="device-container"
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <div key={id} className="device-div">
        {isAdmin ? (
          <RxCross2 className={display} onClick={(e) => deleteDevice(e)} />
        ) : (
          ''
        )}
        <img src={image} className="device-img" alt="logo" />
        {isDeviceBorrowed && (
          <div className="borrowed_detail">
            <span>{`Vypujčeno: ${borrowerDetails.userName}, ${borrowerDetails.date}`}</span>
          </div>
        )}
        <div className="device-info">
          <h1>{model}</h1>
          <span>{vendor}</span> <br />
          <span className="span-os">
            <br />
            {os}/{osVersion}
          </span>
        </div>
        {button}
      </div>
    </div>
  );
};

export default DeviceContainer;
