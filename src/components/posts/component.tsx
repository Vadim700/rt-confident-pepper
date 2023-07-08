import React from "react";
import { Post } from "./post/component";

export const Posts: React.FC = (): JSX.Element => {
	return (
		<div className="posts">
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}