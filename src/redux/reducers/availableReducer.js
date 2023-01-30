const available = (state = false, action) => {
  switch (action.type) {
    case 'SETAVAILABLE':
      return (state = action.payload);
    default:
      return state;
  }
};

export default available;

