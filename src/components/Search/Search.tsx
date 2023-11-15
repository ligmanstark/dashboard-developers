import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import { useRef } from 'react';
import { Button } from 'components/Button';

interface SearchProps {
	hasError: boolean;
	onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
	const searchRef = useRef<HTMLInputElement | null>(null);

	const handleSumbmit = (event: React.FormEvent) => {
		event.preventDefault();
		const text = searchRef.current?.value || '';
		if (text.trim()) {
			onSubmit(text);
			if (searchRef.current) {
				searchRef.current.value = '';
			}
		}
	};

	return (
		<form onSubmit={handleSumbmit} autoComplete="off">
			<div className={styles.search}>
				<label htmlFor="search" className={styles.label}>
					<SearchIcon />
				</label>
				<input
					type="text"
					ref={searchRef}
					className={styles.textField}
					id="search"
					name="username"
					placeholder="Search github username..."
				/>
				{hasError && <div className={styles.error}>No resault</div>}
				<Button>Search</Button>
			</div>
		</form>
	);
};
