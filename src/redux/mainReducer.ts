import { createSlice } from '@reduxjs/toolkit'
import { BackgroundTypes, TextTypes, IconTypes, IBackgroundProperties, ITextProperties, IIconProperties, TAligns, IItems } from '../types'

export const mainReducer = createSlice({
  name: 'main',
  initialState: {
    value: 0,
    currentTab: 0,
    tabs: ["Фон", "Текст", "Иконка"] as string[],

    backgroundItems: [
      {name: "Квадрат", type: BackgroundTypes.SQUARE},
      {name: "Круг", type: BackgroundTypes.CIRCLE},
      {name: "Круглый квадрат", type: BackgroundTypes.SQUIRCLE},
      {name: "Треугольник", type: BackgroundTypes.TRIANGLE},
    ] as IItems[],

    textItems: [
      {name: "Arial", type: TextTypes.ARIAL},
    ] as IItems[],

    iconItems: [
      {name: "Search", type: IconTypes.SEARCH},
    ] as IItems[],


    backgroundProperties: {
      type: BackgroundTypes.NONE,
      backgroundColor: "#f1f1f1",
      borderColor: "#f1f1f1",
      borderWidth: 0
    } as IBackgroundProperties,

    textProperties: {
      type: TextTypes.NONE,
      color: "#f1f1f1",
      size: 16,
      align: "left"
    } as ITextProperties,

    iconProperties: {
      type: IconTypes.NONE,
      color: "#f1f1f1",
      size: 16,
      align: "left"
    } as IIconProperties,


  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, setCurrentTab } = mainReducer.actions

export default mainReducer.reducer