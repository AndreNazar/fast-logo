import { TSelectedMaket } from "../../../../types"

type TProperties = {
    x: number
    y: number
    deg: number
    color: string
}

const RenderChainMaket = ({ selectedMaket }: { selectedMaket: TSelectedMaket }) => {
    
  const gp = selectedMaket.generatePoints

  const pointsString = `${gp[0]} ${gp[13]} ${gp[10]} ${gp[12]} ${gp[1]} ${gp[2]} ${gp[3]} ${gp[4]} ${gp[10]} ${gp[4]} 0 ${gp[8]} ${gp[11]} 253 ${gp[11]} ${gp[8]} 110 ${gp[8]} ${gp[14]} ${gp[7]} ${gp[9]} 146 ${gp[9]} 0 ${gp[5]} ${gp[14]} ${gp[6]} 75`

  const x: number = 250
  const y: number = 250

  const properties: TProperties[] = [
    {color: "#ff0000",x: x + 37 , y: y + 21, deg: 0},
    {color: "#00ff00",x: x - 18 , y: y + 0, deg: 90},
    {color: "#0000ff",x: x - 13 , y: y - 18, deg: 180},
    {color: "#aaaa00",x: x + 3 , y: y - 28, deg: 270},
  ]

  return properties.map((props, i) => <polygon key={i}
  fill={selectedMaket.color} 
  transform={`translate(${props.x}, ${props.y}) rotate(${props.deg}, ${props.x}, ${props.y})`} 
  points={pointsString} />)
}

export default RenderChainMaket
