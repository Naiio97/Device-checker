const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SETNOTIFICATION':
      return (state = action.payload);
    default:
      return state;
  }
};

export default notificationReducer;
