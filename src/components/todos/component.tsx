import React from 'react'
import { Todo } from './todo/component'
import { ITodos } from '../../types/types'

import styles from './style.module.scss'

type TodosProps = {
	data: any[]
}

export const Todos: React.FC<TodosProps> = ({ data }): JSX.Element => {
	return (
		<div className={styles.todos}>
			{data.map(item => (
				<Todo title={item.title} completed={item.completed} key={item.id} />
			))}
		</div>
	)
}
