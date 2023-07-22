import React, { FC } from 'react'
import { FaCrutch } from 'react-icons/fa'
import { BsPostcard, BsCardImage, BsCheck2Square } from 'react-icons/bs'

import { useAppDispatch } from '../../hooks'
import { useAppSelector } from '../../hooks'
import { setState } from '../../redux/slices/stateSlice'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import styles from './style.module.scss'

type HeaderProps = {
	title: string
	data: any
	onchange: any
}

export const Header: FC<HeaderProps> = ({
	title,
	data,
	onchange,
}): JSX.Element => {
	const dispatch = useAppDispatch()
	const state = useAppSelector((a: any) => a.state.state)

	const [perPage, setPerPage] = React.useState('')

	const handleChange = (event: SelectChangeEvent) => {
		setPerPage(event.target.value),
			onchange(event.target.value),
	}

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__top}>
					<FaCrutch className={styles.header__logo} />
					<h1 className={styles.header__title}>{title + ' Vadimikus'}</h1>
					<span>
						Coutn of data: <strong>{data.length}</strong>{' '}
					</span>
				</div>

				<div className={styles.header__bottom}>
					<button
						className={styles.header__button}
						id='posts'
						onClick={() => dispatch(setState('posts'))}
						style={
							state === 'posts'
								? {
										color: 'white',
										backgroundColor: 'tomato',
										border: 'none'
								}
								: {}
						}
					>
						<BsPostcard />
						posts
					</button>

					<button
						className={styles.header__button}
						id='albums'
						onClick={() => dispatch(setState('albums'))}
						style={
							state === 'albums'
								? {
										color: 'white',
										backgroundColor: 'tomato',
										border: 'none'
								}
								: {}
						}
					>
						<BsCardImage />
						albums
					</button>

					<button
						className={styles.header__button}
						id='todos'
						onClick={() => dispatch(setState('todos'))}
						style={
							state === 'todos'
								? {
										color: 'white',
										backgroundColor: 'tomato',
										border: 'none'
								}
								: {}
						}
					>
						<BsCheck2Square />
						todos
					</button>
					<FormControl
						className={styles.formControl}
						sx={{
							m: 1,
							minWidth: 180,
							marginLeft: 'auto',
							'& .MuiOutlinedInput-notchedOutline': {
								// borderColor: 'white'
							}
						}}
					>
						<InputLabel
							className={styles.label}
							id='demo-simple-select-autowidth-label'
							sx={{
								color: 'white',
								backgroundColor: '#333',
								padding: '0 6px',
								'&	.Mui-focused': {
									color: 'red'
								}
							}}
						>
							{state} per page:
						</InputLabel>
						<Select
							labelId='demo-simple-select-autowidth-label'
							id='demo-simple-select-autowidth'
							value={perPage}
							onChange={handleChange}
							autoWidth
							sx={{
								color: 'white',
								'& .MuiSvgIcon-root MuiSvgIcon-fontSizeMedium': {
									color: 'white'
								}
							}}
						>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={20}>20</MenuItem>
							<MenuItem value={30}>30</MenuItem>
							<MenuItem value={50}>50</MenuItem>
							<MenuItem value={100}>100</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</header>
	)
}
