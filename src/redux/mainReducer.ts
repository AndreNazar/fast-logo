import { createSlice } from '@reduxjs/toolkit'

export const mainReducer = createSlice({
  name: 'main',
  initialState: {
    

  },
  reducers: {
    setCurrentTab: (state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  setCurrentTab, 

} = mainReducer.actions

export default mainReducer.reducer