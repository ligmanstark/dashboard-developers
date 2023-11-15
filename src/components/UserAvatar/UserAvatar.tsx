import { LocalGithubUser } from 'types';
import styles from './UserAvatar.module.scss';

interface UserAvatarProps extends Pick<LocalGithubUser, 'avatar' | 'login'> {}

export const UserAvatar = ({ avatar, login }: UserAvatarProps) => (
	<>
		<img src={avatar} className={styles.avatar} alt={login} />
	</>
);
