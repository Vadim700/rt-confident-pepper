import React from "react";
import { Post } from "./post/component";
import styles from './style.module.scss';
import { IPosts } from "../../types/types";


type PostsProps = {
	// data: IPosts[];
	data: any;
	onclickRemove: () => void;
	navButton: any;
}

export const Posts: React.FC<PostsProps> = ({ data, onclickRemove, navButton }): JSX.Element => {

	return (
		<div className={styles.posts}>
			{
				data
					.slice(navButton, navButton + 10)
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