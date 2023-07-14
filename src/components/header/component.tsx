import React, { FC, useEffect } from "react";
import { GiChiliPepper } from 'react-icons/gi';
import { BsPostcard, BsCardImage, BsCheck2Square } from "react-icons/bs";

import styles from './style.module.scss';


type HeaderProps = {
	title: string;
	onClick: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
	state: string;
}

export const Header: FC<HeaderProps> = ({ title, onClick, state }): JSX.Element => {

	const handleClick = (event:any) => {
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
						className={ styles.header__button }
						id='posts'
						onClick={handleClick}
						style={state === 'posts'
							? {
								color: 'white',
								backgroundColor: 'tomato',
								transform: 'scale(1.25) translateX(13px)',
								// ============
								border: 'none'
							}
							: {}}
					>
						< BsPostcard />
						posts
					</button>

					<button
						className={ styles.header__button }
						id='albums'
						onClick={handleClick}
						style={state === 'albums'
							? {
								color: 'white',
								backgroundColor: 'tomato',
								transform: 'scale(1.25)',
								// ============
								border: 'none'
							} 
							: {}}
					>
						<BsCardImage/>
						albums
					</button>

					<button
						className={ styles.header__button }
						id='todos'
						onClick={handleClick}
						style={state === 'todos'
							? {
								color: 'white',
								backgroundColor: 'tomato',
								transform: 'scale(1.25)',
								// ============
								border: 'none'
							}
							: {}}
					>
						< BsCheck2Square />
						todos
					</button>
				</div>
			</div>
		</header>
	);
} 