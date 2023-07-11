import React from "react";
import styles from './style.module.scss';

type PostProps = {
	title: string;
	body: string;
}

export const Post: React.FC<PostProps> = ({ title, body }): JSX.Element => {
	
	return (
		<article className={styles.post__item}>
			<h2 className={styles.post__title}>{ title }</h2>
			<p className={styles.post__text}>{ body }</p>
		</article>
	);
} 