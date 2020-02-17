const request = path => {
  return fetch(`https://api.github.com/users${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};

export const getGithubUser = username => request(`/${username}`);
export const getRepos = username => request(`/${username}/repos`);
