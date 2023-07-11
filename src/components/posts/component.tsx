import React from "react";
import { Post } from "./post/component";
import styles from './style.module.scss';
import { IPosts } from "../../types/types";


type PostsProps = {
	data: IPosts[];
}

export const Posts: React.FC<PostsProps> = ({  data }): JSX.Element => {
	
	return (
		<div className={styles.posts}>
			{
				data
					.filter((item, index: number) => index <= 20)
					.map((item: IPosts) => <Post
						title={item.title}
						body={item.body}
						key={item.id}
					/>) 
			}
		</div>
	);
}    