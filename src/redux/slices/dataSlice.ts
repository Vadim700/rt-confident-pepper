// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// type Post = {
// 	id: number
// 	userId: number
// 	title: string
// 	body: string
// }

// interface PostsData {
// 	data: Post[]
// }

// const initialState: PostsData = {
// 	data: []
// }

// // https://jsonplaceholder.typicode.com/${state}?_page=${page}&_limit=${limit}
// // https://jsonplaceholder.typicode.com/posts?_limit=10
// export const fetchData = createAsyncThunk<
// 	PostsData,
// 	undefined,
// 	{ rejectValue: string }
// >('data/getData', async (_, { rejectWithValue }) => {
// 	const dataValue = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts?_limit=10`
// 	)
// })

// const dataSlice = createSlice({
// 	name: 'data',
// 	initialState,
// 	reducers: {
// 		setData: (state, action) => {
// 			state.data = action.payload
// 		}
// 	}
// })

// export const { setData } = dataSlice.actions

// export default dataSlice.reducer
