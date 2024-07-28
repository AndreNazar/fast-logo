import { useEffect, useState } from "react"
import { TSelectedMaket } from "../../../../types"

type TProperties = {
    x: number
    y: number
    deg: number
}

const RenderCrawMaket = ({ selectedMaket }: { selectedMaket: TSelectedMaket }) => {
    
  const gp = selectedMaket.generatePoints

  const x: number = 250
  const y: number = 250

  const properties: TProperties[] = [
    {x: x + 234, y: y + 171, deg: 0},
    {x: x - 110, y: y + 48, deg: 90},
    {x: x - 71, y: y - 67, deg: 180},
    {x: x + 29, y: y - 135, deg: 270},
  ]

  return properties.map((props, i) => <polygon key={i}
  fill={selectedMaket.color} 
  transform={`translate(${props.x}, ${props.y}) rotate(${props.deg}, ${props.x}, ${props.y})`} 
  points={`51.63 0 0 0 ${gp[0]} ${gp[1]} 51.63 ${gp[2]} ${gp[3]} 137.55 ${gp[4]} ${gp[5]} ${gp[6]} ${gp[7]} ${gp[8]} ${gp[9]} 159.66 133.39 174 59.75 ${gp[10]} ${gp[11]} 153.92 55.58 ${gp[12]} ${gp[13]} 87 ${gp[14]} 51.63 0`} />)
}

export default RenderCrawMaket
