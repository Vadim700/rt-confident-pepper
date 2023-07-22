import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface StateTypes {
	state: string
}

const initialState: StateTypes = {
	state: 'posts'
}

const stateSlice = createSlice({
	name: 'state',
	initialState,
	reducers: {
		setState: (state, action: PayloadAction<string>) => {
			state.state = action.payload
		}
	}
})

export const { setState } = stateSlice.actions

export default stateSlice.reducer
