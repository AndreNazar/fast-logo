import { createSlice } from '@reduxjs/toolkit'

export const mainReducer = createSlice({
  name: 'main',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment} = mainReducer.actions

export default mainReducer.reducer