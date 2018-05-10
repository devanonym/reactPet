export const ACTION_TYPES = {
    TOGGLE_SIDEMENU: 'TOGGLE_SIDEMENU'
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
    default:
      return state;
  }
};

// Actions

export const sideMenuOpen = () => ({
    type: ACTION_TYPES.TOGGLE_SIDEMENU
});
