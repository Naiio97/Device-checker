const osReducer = (state = false, action) => {
  switch (action.type) {
    case 'SETOS':
      return (state = action.payload);
    default:
      return state;
  }
};


export default osReducer;