const isLogged = (state = false, action) => {
  switch (action.type) {
    case 'SINGIN':
      return (state = action.payload);
    default:
      return state;
  }
};

export default isLogged;
