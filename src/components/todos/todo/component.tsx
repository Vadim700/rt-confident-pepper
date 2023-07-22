import React from 'react'
import styles from './style.module.scss'

type TodoProps = {
	title: string
	completed: boolean
}

export const Todo: React.FC<TodoProps> = ({
	title,
	completed
}): JSX.Element => {
	return (
		<article className={styles.todos__item}>
			<div
				className={styles.todos__title}
				style={completed ? { textDecoration: 'line-through' } : {}}
			>
				{title}
			</div>
		</article>
	)
}
