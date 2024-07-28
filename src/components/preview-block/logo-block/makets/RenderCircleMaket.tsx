import { useEffect, useState } from "react"
import { TSelectedMaket } from "../../../../types"

type TProperties = number

const RenderCirleMaket = ({ selectedMaket }: { selectedMaket: TSelectedMaket }) => {
    
  const x: number = 250
  const y: number = 250

  const [points, setPoints] = useState<string>("")
  
  const properties:TProperties[] = [0, 45, 90, 135, 180, 225, 270, 315] // deg
  
  useEffect(() => {
    let gp: number[] = selectedMaket.generatePoints

    setPoints(`185.82 190.88 ${gp[4]} ${gp[11]} 54 154.52 ${gp[6]} ${gp[7]} ${gp[8]} ${gp[0]} ${gp[5]} ${gp[10]} ${gp[1]} ${gp[2]} ${gp[9]} ${gp[8]} 185.82 ${gp[3]}`)
  }, [])

  return properties.map((p, i) => <polygon key={i}
  fill={selectedMaket.color} 
  transform={`translate(${x}, ${y}) rotate(${p}, ${x}, ${y})`} 
  points={points} />)
}

export default RenderCirleMaket
