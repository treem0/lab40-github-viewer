import { FETCH_USERINFO, fetchUserInfo, FETCH_USERINFO_LOADING } from './githubActions';

jest.mock('../services/githubApi.js');

describe('github actions', () => {
  it('creats a fetch github action', () => {
    const dispatch = jest.fn();
    const action = fetchUserInfo();
    
    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USERINFO_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USERINFO,
          payload: {
            'login': 'treem0',
            'id': 38818872,
            'node_id': 'MDQ6VXNlcjM4ODE4ODcy',
            'avatar_url': 'https://avatars0.githubusercontent.com/u/38818872?v=4',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/treem0',
            'html_url': 'https://github.com/treem0',
            'followers_url': 'https://api.github.com/users/treem0/followers',
            'following_url': 'https://api.github.com/users/treem0/following{/other_user}',
            'gists_url': 'https://api.github.com/users/treem0/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/treem0/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/treem0/subscriptions',
            'organizations_url': 'https://api.github.com/users/treem0/orgs',
            'repos_url': 'https://api.github.com/users/treem0/repos',
            'events_url': 'https://api.github.com/users/treem0/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/treem0/received_events',
            'type': 'User',
            'site_admin': false,
            'name': 'Travis Molter',
            'company': null,
            'blog': 'https://www.linkedin.com/in/travismolter/',
            'location': 'Portland, OR',
            'email': null,
            'hireable': null,
            'bio': 'Snowboard and outdoor enthusiast who also loves to code!',
            'public_repos': 48,
            'public_gists': 0,
            'followers': 1,
            'following': 0,
            'created_at': '2018-04-28T20:12:56Z',
            'updated_at': '2020-02-14T05:31:44Z'
          }
        });
      });
  });
})
;
