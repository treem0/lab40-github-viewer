import { FETCH_USERINFO_LOADING, FETCH_USERINFO } from '../actions/githubActions';

const initialState = {
  loading: true,
  username: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERINFO_LOADING:
      return { ...state, loading: true };
    case FETCH_USERINFO:
      return { ...state, loading: false, payload: action.payload };
    default:
      return state;
  }
}
