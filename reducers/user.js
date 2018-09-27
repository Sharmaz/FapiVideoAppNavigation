function user(state = false, action) {
  /**
   * Dependiendo del tipo de acción seteamos el usuario o lo removemos (para cerrar sesión)
   */
  switch(action.type) {
    case 'SET_USER': {
      return {...action.payload};
    }
    case 'REMOVE_USER': {
      return false;
    }
    default: 
      return state;
  }
}

export default user;
