import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../scss/searchBar.scss';
import { MdSearch } from 'react-icons/md';

import {
  setAvailable,
  setFilteredDevices,
  setSearch,
  setVendor,
  setOs,
} from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const available = useSelector((state) => state.available);
  const vendorFilter = useSelector((state) => state.vendorFilter);
  const osFilter = useSelector((state) => state.osFilter);
  const devices = useSelector((state) => state.devices);

  useEffect(() => {
    let filteredDevices = devices.filter((device) => {
      if (!search && !osFilter && !vendorFilter) {
        return true;
      }

      if (device.model && device.model.toLowerCase().includes(search)) {
        return true;
      }

      if (device.os && device.os.toLowerCase().includes(search)) {
        return true;
      }

      if (device.vendor && device.vendor.toLowerCase().includes(search)) {
        return true;
      }

      if (osFilter && device.os === osFilter) {
        return true;
      }

      if (vendorFilter && device.vendor === vendorFilter) {
        return true;
      }
       return false;
    });

    filteredDevices = available
      ? filteredDevices.filter((device) => !('borrowed' in device))
      : filteredDevices;
    dispatch(setFilteredDevices(filteredDevices));
  }, [search, available, osFilter, vendorFilter]);

  // const getDevices = async () => {
  //   const response = await fetch(
  //     'https://js-test-api.etnetera.cz/api/v1/phones',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Auth-Token': localStorage.getItem('token'),
  //       },
  //     });
  //   const data = await response.json();
  // };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value.toLowerCase()));
  };

  const handleAvailable = (e) => {
    dispatch(setAvailable(e.target.checked));
  };

  const vendors = devices.map((device) => device.vendor);
  let vendorSelectValues = [...new Set(vendors)];

  const handleVendor = (e) => {
    if (e.target.value === 'Všichni') {
      dispatch(setVendor(''));
    } else {
      dispatch(setVendor(e.target.value));
    }
  };

  const os = devices.map((device) => device.os);
  let osSelectValues = [...new Set(os)];

  const handleOs = (e) => {
    if (e.target.value === 'Všechny') {
      dispatch(setOs(''));
    } else {
      dispatch(setOs(e.target.value));
    }
  
  };

  

  return (
    <div className="search-bar">
      <div className="search-os">
        <label>Systém</label>
        <select id="os" name="os" onChange={(e) => handleOs(e)}>
          <option>Všechny</option>
          {osSelectValues.map((os) => {
            return (
              <option key={os} value={os}>
                {os}
              </option>
            );
          })}
        </select>
      </div>
      <div className="search-producer">
        <label>Výrobce</label>
        <select
          id="vendor"
          name="vendor"
          onChange={(e) => handleVendor(e)}
        >
          <option>Všichni</option>
          {vendorSelectValues.map((vendor) => {
            return (
              <option key={vendor} value={vendor}>
                {vendor}
              </option>
            );
          })}
          ;
        </select>
      </div>
      <div className="available-checkbox">
        <input
          id="available"
          type="checkbox"
          name="available"
          onChange={(e) => handleAvailable(e)}
        ></input>
        <label>Jen dostupné</label>
      </div>
      <div className="search-model">
        <MdSearch />
        <input
          id="search"
          type="text"
          placeholder="Hledat model"
          onChange={(e) => handleSearch(e)}
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
