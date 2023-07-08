import React from 'react';
import { Todo } from './todo/component';

export const Todos: React.FC = ():JSX.Element => {
	return (
		<div className="todos">
			<Todo />
			<Todo />
			<Todo />
			<Todo />
		</div>
	);
}