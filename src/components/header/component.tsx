import React, { FC } from "react";
import { GiChiliPepper } from 'react-icons/gi';

import styles from './style.module.scss';

import { BsPostcard, BsCardImage, BsCheck2Square } from "react-icons/bs";

type HeaderProps = {
	title: string;
	onClick: (event: any) => void;
}

export const Header: FC<HeaderProps> = ({ title, onClick }): JSX.Element => {
	
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onClick(event.target);
	}

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__top}>
					<GiChiliPepper className={ styles.header__logo} />
					<h1 className={ styles.header__title}>{ title + ' Vadimikus'}</h1>
				</div>
				<div className={ styles.header__bottom}>
					<button
						className={styles.header__button}
						id='posts'
						onClick={handleClick}
						title="posts"
					>
						< BsPostcard />
						posts
					</button>

					<button
						className={styles.header__button}
						id='albums'
						onClick={handleClick}
					>
						<BsCardImage/>
						albums
					</button>

					<button
						className={styles.header__button}
						id='todos'
						onClick={handleClick}
					>
						< BsCheck2Square />
						todos
					</button>
				</div>
			</div>
		</header>
	);
} 