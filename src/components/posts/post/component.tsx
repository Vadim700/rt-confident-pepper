import React from "react";
import styles from './style.module.scss';
import { GrClose } from 'react-icons/gr';

type PostProps = {
	title: string;
	body: string;
	id: number;
	onclickRemove: any;
}

export const Post: React.FC<PostProps> = ({ title, body, id, onclickRemove }): JSX.Element => {

	const removeItem = (event: any) => {
		onclickRemove(id);
	}
	
	return (
		<article className={styles.post__item}>
			<button className={styles.post__close} onClick={removeItem}>
				<GrClose />
			</button>
			<span className={styles.post__checkbox_body}>
				<input type="checkbox" name="close" className={styles.post__checkbox} />
			</span>
			<h2 className={styles.post__title}>{ title }</h2>
			<p className={styles.post__text}>{body}</p>
			<span>{ id }</span>
		</article>
	);
} 