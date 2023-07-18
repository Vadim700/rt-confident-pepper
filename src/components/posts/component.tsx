import React from "react";
import { Post } from "./post/component";
import styles from './style.module.scss';
import { IPosts } from "../../types/types";


type PostsProps = {
	data: any;
	onclickRemove: () => void;
}

export const Posts: React.FC<PostsProps> = ({ data, onclickRemove }): JSX.Element => {

	return (
		<div className={styles.posts}>
			{
				data
					.map((item: IPosts) => <Post
						title={item.title}
						body={item.body}
						id={item.id}
						key={item.id}
						onclickRemove={onclickRemove}
					/>) 
			}
		</div>
	);
}    