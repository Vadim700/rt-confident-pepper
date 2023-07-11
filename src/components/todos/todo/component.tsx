import React from 'react';

type TodoProps = {
	title: string;
	completed: boolean;
}

export const Todo: React.FC<TodoProps> = ({ title, completed }):JSX.Element => {
	return (
		<div className='todos__title' data-completed={completed}>
			{title}
		</div>
	);
}