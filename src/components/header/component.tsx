import React, { FC } from "react";
import { GiChiliPepper } from 'react-icons/gi';
import { Button } from "../button/component";

type HeaderProps = {
	title: string;
}



export const Header: FC<HeaderProps> = ({title}): JSX.Element => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__top">
					<GiChiliPepper className="header__logo"/>
					<h1 className="header__title">{ title + ' Vadimikus'}</h1>
				</div>
				<div className="header__bottom">
					<Button id='posts' title = 'posts' />
					<Button id='photos' title = 'photos' />
					<Button id='todos' title = 'todos' />
				</div>
			</div>
		</header>
	);
} 