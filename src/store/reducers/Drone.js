// Drone Reducer [store/reducers/Drone]

// Actions
export const FETCH_DRONE = "COMMAND/FETCH_DRONE_FEED";
export const FETCH_DRONE_RECEIVED = "EVENT/FETCH_DRONE_RECEIVED";
export const FETCH_CANCEL = "EVENT/FETCH_DRONE_CANCEL";

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

    default:
      return state;
  }
};
