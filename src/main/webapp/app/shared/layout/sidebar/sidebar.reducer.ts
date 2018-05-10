export const ACTION_TYPES = {
    TOGGLE_SIDEMENU: 'TOGGLE_SIDEMENU',
    SIDEMENU_CLOSE: 'SIDEMENU_CLOSE'
};

const initialState = {
  isSideMenuOpen: false
};

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SIDEMENU:
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen
      };
    case ACTION_TYPES.SIDEMENU_CLOSE:
      return {
        ...state,
        isSideMenuOpen: false
      };
    default:
      return state;
  }
};

// Actions

export const sideMenuOpen = () => ({
    type: ACTION_TYPES.TOGGLE_SIDEMENU
});

export const sideMenuClose = () => ({
    type: ACTION_TYPES.SIDEMENU_CLOSE
});
