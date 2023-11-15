import { useState, useEffect } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import styles from './TheSwitcher.module.scss';

export const TheSwitcher = () => {
	const [isDark, setDark] = useState(false);

	const themeText = isDark ? 'Light' : 'Dark';
	const ThemeIcon = isDark ? SunIcon : MoonIcon;

	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
	}, [isDark]);

	return (
		<div className={styles.switcher} onClick={() => setDark(!isDark)}>
			<span>{themeText}</span>
			<ThemeIcon className={styles.icon} />
		</div>
	);
};
