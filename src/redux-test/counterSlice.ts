import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number;
  value2: number
}

const initialState: CounterState = {
  value: 0,
  value2: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value2 += action.payload
    },
  },
})

// Action creator dibuat untuk setiap fitur reducer case
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer