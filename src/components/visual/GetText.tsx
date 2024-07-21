import { TAligns } from "../../types"

interface Itp {
  type: string
  text: string
  color: string
  size: number
  align: TAligns
}

const GetText = ({ tp }: {tp: Itp}) => (
  <svg className="visual-text" xmlns="http://www.w3.org/2000/svg" width={215} height={215} viewBox="0 0 150 150">
    <text textAnchor="middle"  x={72} y={100} fill={tp.color} fontSize={tp.size} style={{ fontFamily: `${tp.type}` }} className="element-text">
      {tp.text}
    </text>
  </svg>
)

export default GetText