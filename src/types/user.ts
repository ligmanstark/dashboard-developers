export type LocalGithubUser = {
	login: string;
 	avatar: string;
	name: string;
	company: string | null;
	blog: string | null;
	location: string | null;
	bio: string;
	twitter: string | null;
	repos: number;
	followers: number;
	following: number;
	created: string;
};
export type GithubUser = {
	login: string;
	id: number;
	avatar_url: string;
	name: string;
	company: string;
	blog: string;
	location: string;
	bio: string;
	twitter_username: string;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
};

export type GithubError = {
	message: string;
	documentation_url: string;
};

// {
//     "login": "ligmanstark",
//     "id": 57450873,
//     "node_id": "MDQ6VXNlcjU3NDUwODcz",
//     "avatar_url": "https://avatars.githubusercontent.com/u/57450873?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/ligmanstark",
//     "html_url": "https://github.com/ligmanstark",
//     "followers_url": "https://api.github.com/users/ligmanstark/followers",
//     "following_url": "https://api.github.com/users/ligmanstark/following{/other_user}",
//     "gists_url": "https://api.github.com/users/ligmanstark/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/ligmanstark/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/ligmanstark/subscriptions",
//     "organizations_url": "https://api.github.com/users/ligmanstark/orgs",
//     "repos_url": "https://api.github.com/users/ligmanstark/repos",
//     "events_url": "https://api.github.com/users/ligmanstark/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/ligmanstark/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Danil Kozyavin",
//     "company": null,
//     "blog": "",
//     "location": "Izhevsk",
//     "email": null,
//     "hireable": null,
//     "bio": "beginner frontend developer",
//     "twitter_username": null,
//     "public_repos": 12,
//     "public_gists": 0,
//     "followers": 2,
//     "following": 4,
//     "created_at": "2019-11-06T15:29:18Z",
//     "updated_at": "2023-11-12T04:50:55Z"
//   }
