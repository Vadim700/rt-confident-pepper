import React from 'react';

type ButtonProps = {
	id: string;
	title: string;
}

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	console.dir(e);
}

export const Button: React.FC<ButtonProps> = ({id, title}): JSX.Element => {
	return (
		<button onClick={ handleClick } className="button">
			{title}
		</button>
	);
}