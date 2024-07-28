import { useEffect, useState } from "react"
import { TSelectedMaket } from "../../../../types"

type TProperties = {
    x: number
    y: number
    deg: number
    points: number[]
}

const RenderRectMaket = ({ selectedMaket }: { selectedMaket: TSelectedMaket }) => {
    
  const x: number = 250
  const y: number = 250

  const [properties, setProperties] = useState<TProperties[]>([
    {x: x + 72, y: y + 30, deg: 0, points: [0, 188, 89, 110, 42, 112, 30]},
    {x: x + 258, y: y + 30, deg: 0, points: [188, 0, 99, 78, 146, 76, 158]},
    {x: x - 18, y: y - 20, deg: 180, points: [0, 188, 89, 110, 42, 112, 30]},
    {x: x - 80, y: y - 20, deg: 180, points: [188, 0, 99, 78, 146, 76, 158]},
  ])
  const [isLoad, setIsLoad] = useState(false)

  const getPolygonPoints = (points: number[]):string => {
    return `${points[0]} ${points[8]} ${points[0]} ${points[7]} ${points[2]} ${points[9]} ${points[2]} ${points[7]} ${points[1]} ${points[7]} ${points[1]} ${points[10]} ${points[1]} ${points[11]} ${points[3]} ${points[14]} ${points[4]} ${points[12]} ${points[5]} ${points[12]} ${points[5]} ${points[13]} ${points[6]} ${points[13]} ${points[0]} ${points[8]}`
  }
  
  useEffect(() => {
    let random_points:number[] = selectedMaket.generatePoints

    setProperties(properties.map((p: TProperties) => ({...p, points: [...p.points, ...random_points]})))
    setIsLoad(true)
  }, [])

  return isLoad ? properties.map((props, i) => <polygon key={i}
  fill={selectedMaket.color} 
  transform={`translate(${props.x}, ${props.y}) rotate(${props.deg}, ${props.x}, ${props.y})`} 
  points={getPolygonPoints(props.points)} />)
  : <></>
}

export default RenderRectMaket
