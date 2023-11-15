import { TheSwitcher } from 'components/TheSwitcher';

import styles from './TheHeader.module.scss';

export const TheHeader = () => (
	<div className={styles.header}>
    <div className={styles.logo}>
       Developers Dashboard
    </div>
    <TheSwitcher />
	</div>
);
