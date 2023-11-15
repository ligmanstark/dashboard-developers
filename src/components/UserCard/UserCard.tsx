import { UserStat } from 'components/UserStat';
import styles from './UserCard.module.scss';
import { LocalGithubUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import { UserAvatar } from 'components/UserAvatar';
import { UserBio } from 'components/UserBio';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
	<div className={styles.userCard}>
		<UserAvatar avatar={props.avatar} login={props.login} />
		<UserTitle
			name={props.name}
			created={props.created}
			login={props.login}
		/>
		<UserBio bio={props.bio} />
		<UserStat
			repos={props.repos}
			followers={props.followers}
			following={props.following}
		/>
		<UserInfo
			blog={props.blog}
			company={props.company}
			location={props.location}
			twitter={props.twitter}
		/>
	</div>
);
