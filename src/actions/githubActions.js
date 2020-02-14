import { getGithubUser } from '../services/githubApi';

export const FETCH_USERINFO_LOADING = 'FETCH_USERINFO_LOADING';
export const FETCH_USERINFO = 'FETCH_USERINFO';
export const fetchUserInfo = loginName => dispatch => {
  dispatch({ type: FETCH_USERINFO_LOADING });
  return getGithubUser(loginName)
    .then(user => dispatch({
      type: FETCH_USERINFO,
      payload: user
    }));
};
