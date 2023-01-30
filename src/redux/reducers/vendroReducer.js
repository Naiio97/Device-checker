const vendorFilter = (state = false, action) => {
  switch (action.type) {
    case 'SETVENDOR':
      return (state = action.payload);
    default:
      return state;
  }
};

export default vendorFilter;
