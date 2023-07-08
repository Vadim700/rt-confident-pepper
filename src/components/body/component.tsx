import React,  { FC } from "react";
import { Posts } from '../posts/component';
import { Photos } from "../photos/component";
import { Todos } from "../todos/component";


export const Body: React.FC = (): JSX.Element => {

	const [valueContent, setValueContent] = React.useState(<Posts />);
	
	console.log(valueContent)

	return (
		<main className="content">
			<div className="container">
				<Posts />
				<Photos />
				<Todos />
			</div>
		</main>
	);
}