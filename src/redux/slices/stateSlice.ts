import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { store } from '../../redux/store';

interface StateTypes {
  value: string;
}

setTimeout(() => {
  console.log(initialState)  
}, 0);

const initialState: StateTypes = {
  state: 'posts',
}


export const stateSlice = createSlice({
	name: 'state',

  initialState,
  reducers: {


    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const selectCount = (state: StateTypes) => state.state.value

export default stateSlice.reducer   