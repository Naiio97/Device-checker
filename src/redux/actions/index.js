export const setIsAdmin = (bool) => {
  return {
    type: 'SETISADMIN',
    payload: bool,
  };
};

export const setIsLogged = (bool) => {
  return {
    type: 'SINGIN',
    payload: bool,
  };
};

export const setDevices = (arr) => {
  return {
    type: 'SETDEVICES',
    payload: arr,
  };
};

export const setAvailable = (bool) => {
  return {
    type: 'SETAVAILABLE',
    payload: bool,
  };
};


export const setFilteredDevices = (arr) => {
  return {
    type: 'SETFILTEREDDEVICES',
    payload: arr,
  }
}

export const setSearch = (bool) => {
  return {
    type: 'SETSEARCH',
    payload: bool,
  }
} 

export const setVendor = (bool) => {
  return {
    type: 'SETVENDOR',
    payload: bool,
  }
}

export const setOs = (bool) => {
  return {
    type: 'SETOS',
    payload: bool,
  }
}

export const setNotification = (arr) => {
  return {
    type: 'SETNOTIFICATION',
    payload: arr,
  }
}