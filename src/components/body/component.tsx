import React from "react";
import { FC, useRef } from "react";
import { Posts } from '../posts/component';
import { Albums } from "../albums/component";
import { Todos } from "../todos/component";
import { IPosts } from "../../types/types";

import {Container, Checkbox, Pagination, TextField, Stack, Link } from "@mui/material";

import styles from './style.module.scss';

type BodyProps = {
	data: IPosts[] ;
	state: string;
	removeItem: any;
	pageNumber: any;
}

// const pages: number[] = Array(10).fill(1).map((v, i) => i + 1);

export const Body: FC<BodyProps> = ({ state, data, removeItem, pageNumber }): JSX.Element => {

	const handlerClick = (event: any) => {
		pageNumber(event.target?.innerText);
	}

	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const checkbox = useRef(null);

	
	const selectAll = (e:any) => {
		console.log(e);
	}


	return (
		<main className={ styles.content}>
			<div className="container"> 
				
			<span className={styles.checkbox}>
					<Checkbox
						onChange={selectAll}
						ref = {checkbox}
						className={styles.post__checkbox}
						{...label}
						sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
					/>
				<button
					onClick={selectAll}>
					Select all
				</button>
			</span>
				
				{state === 'posts' && <Posts
					data={data}
					onclickRemove={removeItem}
				/>} 
				
				{state === 'albums' && <Albums data={data} />}
				
				{state === 'todos' && <Todos data={ data } />}
			
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