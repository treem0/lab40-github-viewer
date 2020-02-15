import { getGithubUser, getRepos } from '../services/githubApi';

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

export const FETCH_REPO_LOADING = 'FETCH_REPO_LOADING';
export const FETCH_REPO = 'FETCH_REPO';
export const fetchRepo = loginName => dispatch => {
  dispatch({ type: FETCH_REPO_LOADING });
  return getRepos(loginName)
    .then(repos => dispatch({
      type: FETCH_REPO,
      payload: repos
    }));
};
