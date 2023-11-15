import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';
import { BASE_URL } from 'config';
import { extractLocalUser } from 'helpers/extract-local-user';
import { isGithubUser } from 'helpers/typeguard';
import { defaultUser } from 'mock/index';
import { useState } from 'react';
import { LocalGithubUser, GithubError, GithubUser } from 'types';

const App = () => {
	const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username;

		const res = await fetch(url);
		const user = (await res.json()) as GithubUser | GithubError;

		if (isGithubUser(user)) {
			setUser(extractLocalUser(user))
		} else { 
			setUser(null)
		}
	};

	return (
		<Container>
			<TheHeader />
			<Search hasError={!user} onSubmit={fetchUser} />
			{user && <UserCard {...user} />}
		</Container>
	);
};

export default App;
