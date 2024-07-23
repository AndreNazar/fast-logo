import { IconTypes, TAligns } from "../../types"


interface Iip {
    type: string
    fill: string
    size: number
    align: TAligns
  }
  
  const GetIcon = ({ ip }: { ip: Iip }) => {

    const OutputFigure = () => {
      switch (ip.type) {
        case IconTypes.WINDOW: return <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm320-320v240h240v-240H520Zm0-80h240v-240H520v240Zm-80 0v-240H200v240h240Zm0 80H200v240h240v-240Z"/>
        case IconTypes.SEARCH: return <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
          default:
          return <div></div>
      }
    }

    const getAlign = () => {
      switch (ip.align) {
        case "left": return { x: 0, y: 0.5 }
        case "center": return "middle"
        case "right": return "end"
        default: return "middle"
      }
    }
  
    return (
        <OutputFigure />
    )
  }

  export default GetIcon