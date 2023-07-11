import  { FC } from "react";
import { Posts } from '../posts/component';
import { Albums } from "../albums/component";
import { Todos } from "../todos/component";
import { IPosts } from "../../types/types";

type BodyProps = {
	data: IPosts[] | IPosts[];
	state: string;
}

export const Body: FC<BodyProps> = ({ state, data }): JSX.Element => {

	return (
		<main className="content">
			<div className="container"> 
				{state === 'posts' && <Posts data={ data } />} 
				{state === 'albums' && <Albums data={ data } />}
				{state === 'todos' && <Todos data={ data }/>}
			</div>
		</main> 
	);
}  