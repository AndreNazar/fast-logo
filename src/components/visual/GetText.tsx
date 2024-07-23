import { TAligns } from "../../types"

interface Itp {
  type: string
  text: string
  color: string
  size: number
  align: TAligns
}

const getAlign = (align: TAligns) => {
  switch (align) {
    case "left": return { x: 0, y: 0.5 }
    case "center": return "middle"
    case "right": return "end"
    default: return "middle"
  }
}

const GetText = ({ tp }: { tp: Itp }) => {
  const align = getAlign(tp.align)
    return <text textAnchor="middle" x={72} y={100} fill={tp.color} fontSize={tp.size} style={{ fontFamily: `${tp.type}` }} className="element-text">
        {tp.text}
      </text>
}

export default GetText
