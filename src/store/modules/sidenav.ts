// Action Types
const OPEN_SIDENAV = 'OPEN_SIDENAV';
const CLOSE_SIDENAV = 'CLOSE_SIDENAV';

interface IActionPayload {
  type: string;
  value: boolean;
}

export interface ISidenav {
  isActive: boolean;
}

// Action Creators
export const openSidenavAction = () => ({ type: OPEN_SIDENAV, value: true });
export const closeSidenavAction = () => ({ type: CLOSE_SIDENAV, value: false });

// Initial State
const initialState: ISidenav = {
  isActive: false,
};


// Reducer
const sidenav = (state: ISidenav = initialState, action: IActionPayload) => {
  switch (action.type) {
    case OPEN_SIDENAV:
      return { ...initialState, isActive: action.value };
    case CLOSE_SIDENAV:
      return { ...initialState, isActive: action.value };
    default:
      return state;
  }
};

export default sidenav;
