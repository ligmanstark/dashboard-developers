import styles from './UserTitle.module.scss';
import { LocalGithubUser } from '../../types/user';

interface UserTitleProps
	extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
});

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
	const createdDate = localDate.format(new Date(created));
	return (
		<div className={styles.userTitle}>
			<h2>{name}</h2>
			<h3>{login}</h3>
			<span>{createdDate}</span>
		</div>
	);
};
