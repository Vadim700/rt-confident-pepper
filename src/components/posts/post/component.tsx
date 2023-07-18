import React from "react";
import styles from './style.module.scss';
import { GrClose } from 'react-icons/gr';
import Checkbox from '@mui/material/Checkbox';

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

	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	
	return (
		<article className={styles.post__item}>
			<button
				className={styles.post__close}
				onClick={removeItem}>
				<GrClose />
			</button>
			<span className={styles.post__checkbox_body}>
				<Checkbox
					className={styles.post__checkbox}
					{...label}
					sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
				/>
			</span>
			<h2 className={styles.post__title}>
				{title}
			</h2>
			<p className={styles.post__text}>{body}</p>
			<span>№ { id }</span>
		</article>
	);
} 







      


