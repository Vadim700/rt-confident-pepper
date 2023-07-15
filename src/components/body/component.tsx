import  { FC } from "react";
import { Posts } from '../posts/component';
import { Albums } from "../albums/component";
import { Todos } from "../todos/component";
import { IPosts, ITodos } from "../../types/types";

type BodyProps = {
	data: IPosts[] ;
	state: string;
	removeItem: any;
}

export const Body: FC<BodyProps> = ({ state, data, removeItem }): JSX.Element => {

	return (
		<main className="content">
			<div className="container"> 
				{state === 'posts' && <Posts data={ data } onclickRemove={removeItem} />} 
				{state === 'albums' && <Albums data={ data } />}
				{state === 'todos' && <Todos data={ data }/>}
			</div>
		</main> 
	);
}  