const devices = (state = [], action) => {
  switch (action.type) {
    case 'SETDEVICES':
      return (state = action.payload);
    default:
      return state;
  }
};

export default devices;
