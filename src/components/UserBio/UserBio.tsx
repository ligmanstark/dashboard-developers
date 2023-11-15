import { LocalGithubUser } from 'types';
import styles from './UserBio.module.scss';

interface UserBioProps extends Pick<LocalGithubUser,'bio'> {}

export const UserBio = ({bio}: UserBioProps) => (
	< >
		<p className={`${styles.bio}${bio ? '': ` ${styles.empty}`}`}>
		{bio?bio:'This profile has no bio'}
		</p> 
	</>
);
