import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { openSidenavAction, closeSidenavAction } from './sidenav';
import sidenav, { ISidenav } from './sidenav';

export interface IStore {
  sidenav: ISidenav;
}

const rootReducer = combineReducers({
  index: (state: {} = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  },
  sidenav,
});

export default rootReducer;
