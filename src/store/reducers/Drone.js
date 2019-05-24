// Drone Reducer [store/reducers/Drone]

import getDroneFeed from "../../store/api/getDroneFeed";

// Actions
const FETCH_DRONE = "COMMAND/FETCH_DRONE_FEED";
const FETCH_DRONE_RECEIVED = "EVENT/FETCH_DRONE_RECEIVED";
const UPDATE_LAST = "EVENT/UPDATE_LAST";
// Initial state
const initialState = {
  loading: true,
  data: [],
  last: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRONE:
      return { ...state, loading: true };
    case FETCH_DRONE_RECEIVED:
      return { ...state, loading: false, data: action.data, last: 0 };
    case UPDATE_LAST:
      console.log(state);
      return { ...state, last: ++state.last };
    default:
      return state;
  }
};

export function startFetch() {
  return {
    type: FETCH_DRONE
  };
}

export function completeFetch(data) {
  return {
    type: FETCH_DRONE_RECEIVED,
    data: data
  };
}
export function lastUpdate() {
  return {
    type: UPDATE_LAST
  };
}

export function fetchDrone() {
  return async dispatch => {
    dispatch(startFetch());
    const response = await getDroneFeed();
    dispatch(completeFetch(response.data.data));
  };
}
