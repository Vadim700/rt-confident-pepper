import React, { FC, useEffect } from "react";
import { GiChiliPepper } from 'react-icons/gi';
import { BsPostcard, BsCardImage, BsCheck2Square } from "react-icons/bs";

import styles from './style.module.scss';


type HeaderProps = {
	title: string;
	onClick: (event: any) => void;
	state: string;
}

export const Header: FC<HeaderProps> = ({ title, onClick, state }): JSX.Element => {

	const [stylesButton, setStylesButton] = React.useState<string>()
	const [selected, setSelected] = React.useState(false);

	const handleClick = (event:any) => {
		onClick(event.target);
		setStylesButton(event.target.attributes.id.value);

		event.target.attributes.id.value === state
			? event.currentTarget.style.color = 'red'
			: event.currentTarget.style.color = 'blue'

		// event.currentTarget.style.color = 'red';
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
						title={state}
						// style={stylesButton === state ? {color: 'red'} : {color: 'blue'}}
					>
						< BsPostcard />
						posts
					</button>

					<button
						className={styles.header__button}
						id='albums'
						onClick={handleClick}
						title={state}
						// style={stylesButton === state ? {color: 'red'} : {color: 'blue'}}
					>
						<BsCardImage/>
						albums
					</button>

					<button
						className={styles.header__button}
						id='todos'
						onClick={handleClick}
						title={state}
						// style={stylesButton === state ? {color: 'red'} : {color: 'blue'}}
					>
						< BsCheck2Square />
						todos
					</button>
				</div>
			</div>
		</header>
	);
} 