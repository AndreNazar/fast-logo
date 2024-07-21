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
      {name: "AdventPro", type: TextTypes.ADVENT},
      {name: "BadScript", type: TextTypes.BADSCRIPT},
      {name: "Caveat-Regular", type: TextTypes.CAVEAT},
      {name: "Comfortaa-Regular", type: TextTypes.COMFORTAA},
      {name: "ComforterBrush-Regular", type: TextTypes.COMFORTERBRUSH},
      {name: "DidactGothic-Regular", type: TextTypes.DIDACTGOTHIC},
      {name: "FlowCircular", type: TextTypes.FLOWCIRCULAR},
      {name: "GreatVibes", type: TextTypes.GREATVIBES},
      {name: "IBMPlexSerif-Regular", type: TextTypes.IBMPLEXSERIF},
      {name: "Kablammo-Regular", type: TextTypes.KABLAMMO},
      {name: "KellySlab-Regular", type: TextTypes.KELLYSLAB},
      {name: "Lobster-Regular", type: TextTypes.LOBSTER},
      {name: "Montserrat-Regular", type: TextTypes.MONTSERRAT},
      {name: "Murecho", type: TextTypes.MURECHO},
      {name: "Pacifico-Regular", type: TextTypes.PACIFICO},
      {name: "Play-Regular", type: TextTypes.PLAY},
      {name: "ReggaeOne-Regular", type: TextTypes.REGGAEONE},
      {name: "RubikBrokenFax-Regular", type: TextTypes.RUBIKBROKENFAX},
      {name: "RubikGlitch-Regular", type: TextTypes.RUBIKGLITCH},
      {name: "RubikGlitchPop-Regular", type: TextTypes.RUBIKGLITCHPOP},
      {name: "RubikMonoOne-Regular", type: TextTypes.RUBIKMONOONE},
      {name: "RubikScribble-Regular", type: TextTypes.RUBIKSCRIBBLE},
      {name: "RuslanDisplay-Regular", type: TextTypes.RUSLANDISPLAY},
      {name: "RussoOne-Regular", type: TextTypes.RUSSOONE},
      {name: "StalinistOne-Regular", type: TextTypes.STALINISTONE},
      {name: "Stick-Regular", type: TextTypes.STICK},
      {name: "Tiny5-Regular", type: TextTypes.TINY5},
      {name: "TrainOne-Regular", type: TextTypes.TRAINONE},
    ] as IItems[],

    iconItems: [
      {name: "Search", type: IconTypes.SEARCH},
      {name: "Window", type: IconTypes.WINDOW},
    ] as IItems[],


    backgroundProperties: {
      type: BackgroundTypes.NONE,
      backgroundColor: "#0000",
      borderColor: "#000000",
      borderWidth: 1
    } as IBackgroundProperties,

    textProperties: {
      type: TextTypes.NONE,
      text: "Аа",
      color: "#000000",
      size: 72,
      align: "center"
    } as ITextProperties,

    iconProperties: {
      type: IconTypes.NONE,
      color: "#000000",
      size: 72,
      align: "center"
    } as IIconProperties,


  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload
    },
    selectElement: (state, action) => {
      switch (state.currentTab) {
        case 0: { 
            state.backgroundProperties.type = action.payload.type
          break;
        }
        case 1: {
            state.textProperties.type = action.payload.type
          break;
        }
        case 2: {
            state.iconProperties.type = action.payload.type
          break;
        }
        default:
          break;
      }
    },
    setBackgroundColor: (state, action) => {
      if(action.payload[0] === "") state.backgroundProperties.backgroundColor = "#"
      else if(action.payload[0] === "#" && action.payload.length <= 7) 
      state.backgroundProperties.backgroundColor = action.payload
    },
    setBorderColor: (state, action) => {
      if(action.payload[0] === "") state.backgroundProperties.borderColor = "#"
      else if(action.payload[0] === "#" && action.payload.length <= 7) 
      state.backgroundProperties.borderColor = action.payload
    },
    setBorderWidth: (state, action) => {
      if(action.payload < 0) state.backgroundProperties.borderWidth = 0
      else if(action.payload > 50) state.backgroundProperties.borderWidth = 50
      else state.backgroundProperties.borderWidth = action.payload
    },
    setTextColor: (state, action) => {
      if(action.payload[0] === "") state.textProperties.color = "#"
      else if(action.payload[0] === "#" && action.payload.length <= 7) 
      state.textProperties.color = action.payload
    },
    setTextSize: (state, action) => {
      if(action.payload < 0) state.textProperties.size = 0
      else if(action.payload > 200) state.textProperties.size = 200
      else state.textProperties.size = action.payload
    },
    setTextAlign: (state, action) => {
      state.textProperties.align = action.payload
    },
    setTextText: (state, action) => {
      state.textProperties.text = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  increment, 
  setCurrentTab, 
  selectElement, 
  setBackgroundColor,
  setBorderColor,
  setBorderWidth,
  setTextColor,
  setTextSize,
  setTextAlign,
  setTextText
} = mainReducer.actions

export default mainReducer.reducer