import { FETCH_USERINFO, FETCH_USERINFO_LOADING } from '../actions/githubActions';
import reducer from './userInfoReducer';

describe('user info reducer', () => {
  it('handles the fetch user info loading action', () => {
    const action = { type: FETCH_USERINFO_LOADING };
    const initialState = { loading: false };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ loading: true });
  });

  it('handles the fetch user info action', () => {
    const action = { type: FETCH_USERINFO, payload: { username: 'treem0' } };
    const initialState = { loading: true, username: null };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ loading: false, username: { username: 'treem0' } });
  });
});
