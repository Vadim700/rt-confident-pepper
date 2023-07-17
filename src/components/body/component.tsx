import React from "react";
import { FC, useState } from "react";
import { Posts } from '../posts/component';
import { Albums } from "../albums/component";
import { Todos } from "../todos/component";
import { IPosts } from "../../types/types";
import {Container, Pagination, TextField, Stack, Link } from "@mui/material";

import styles from './style.module.scss';

type BodyProps = {
	data: IPosts[] ;
	state: string;
	removeItem: any;
	pageNumber: any;
}

const pages: number[] = Array(10).fill(1).map((v, i) => i + 1);

export const Body: FC<BodyProps> = ({ state, data, removeItem, pageNumber }): JSX.Element => {
	const [valueNav, setValueNav] = useState(1);

	const handlerClick = (event: any) => {
		// setValueNav(event.target.childNodes[0].data * 10 - 1);
		// pageNumber(event.target.childNodes[0].data);
		pageNumber(event.target?.innerText);
		setValueNav(event.target?.innerText * 10 - 1);
		console.log(event.target?.innerText)
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
			
				{/* <nav className={styles.navigation}>
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
				</nav> */}

				<Container>
					<Stack spacing={5}>
						<Pagination
							className={styles.navigation}
							count={10}
							variant="outlined"
							shape="rounded"
							onClick={handlerClick}
							sx={{
								color: 'white',
								'& .MuiButtonBase-root': {
									color: 'white',
									borderColor: 'white',
									columnGap: '20px'
								},
								'& .MuiPaginationItem-root': {
									color: 'white',
								},
								'& .Mui-selected': {
									backgroundColor: 'rgba(255, 255, 255, .2)',
								},
							}}
						/>
					</Stack>
				</Container>
			</div>
		</main> 
	);
}  