const filteredDevices = (state = [], action) => {
  switch (action.type) {
    case 'SETFILTEREDDEVICES':
      return (state = action.payload);
    default:
      return state;
  }
};

export default filteredDevices;