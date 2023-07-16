import  { FC, useState } from "react";
import { Posts } from '../posts/component';
import { Albums } from "../albums/component";
import { Todos } from "../todos/component";
import { IPosts, ITodos } from "../../types/types";
import styles from './style.module.scss';

type BodyProps = {
	data: IPosts[] ;
	state: string;
	removeItem: any;

}

const pages: number[] = Array(10).fill(1).map((v, i) => i + 1);

export const Body: FC<BodyProps> = ({ state, data, removeItem }): JSX.Element => {
	const [valueNav, setValueNav] = useState(1);

	const handlerClick = (event: any) => {
		setValueNav(event.target.childNodes[0].data * 10 - 1)
	}

	return (
		<main className={ styles.content}>
			<div className="container"> 
				
				{state === 'posts' && <Posts
					data={data}
					onclickRemove={removeItem}
					navButton={valueNav}
				/>} 
				
				{state === 'albums' && <Albums data={data} />}
				
				{state === 'todos' && <Todos data={ data } />}
			
				<nav className={styles.navigation}>
					<button className={ styles.navigation__prev}></button>
					{pages
						.map((item, index) => (
							<span className={styles.navigation__item} key={index}>
								<button
									className={styles.navigation__link}
									onClick={handlerClick}
								>
									{item}
								</button>
							</span>))
					}
					<button className={ styles.navigation__next}></button>
				</nav>
			</div>
		</main> 
	);
}  