import { useEffect, useState } from "react"
import { TSelectedMaket } from "../../../../types"

type TProperties = {
    x: number
    y: number
    deg: number
    points: number[]
}

const RenderTrantMaket = ({ selectedMaket }: { selectedMaket: TSelectedMaket }) => {
    
  const gp = selectedMaket.generatePoints

  const x: number = 250
  const y: number = 250

  const properties: TProperties[] = [
    {x: x + 14, y: y + 41, deg: 0, points: [125.66, 175.87, 117.91, 41.09, 66.31, 11.53, 0, 43.97, 47.2, 0, 57.96, 134.79, 109.56, 164.34, 175.87, 131.91, 125.66]},
    {x: x + 84, y: y - 70, deg: 0, points: [125.66, 175.87, 117.91, 41.09, 66.31, 11.53, 0, 43.97, 47.2, 0, 57.96, 134.79, 109.56, 164.34, 175.87, 131.91, 125.66]},
    {x: x + 264, y: y - 70, deg: 0, points: [50.22, 0, 57.96, 134.79, 109.56, 164.34, 175.87, 131.91, 128.67, 175.87, 117.91, 41.09, 66.31, 11.53, 0, 43.97, 50.22]},
    {x: x + 334, y: y + 41, deg: 0, points: [50.22, 0, 57.96, 134.79, 109.56, 164.34, 175.87, 131.91, 128.67, 175.87, 117.91, 41.09, 66.31, 11.53, 0, 43.97, 50.22]},
    
    {x: x - 19, y: y + 35, deg: 180, points: [125.66, 175.87, 117.91, 41.09, 66.31, 11.53, 0, 43.97, 47.2, 0, 57.96, 134.79, 109.56, 164.34, 175.87, 131.91, 125.66]},
    {x: x + 3, y: y + 0, deg: 180, points: [125.66, 175.87, 117.91, 41.09, 66.31, 11.53, 0, 43.97, 47.2, 0, 57.96, 134.79, 109.56, 164.34, 175.87, 131.91, 125.66]},
    {x: x - 103, y: y + 0, deg: 180, points: [50.22, 0, 57.96, 134.79, 109.56, 164.34, 175.87, 131.91, 128.67, 175.87, 117.91, 41.09, 66.31, 11.53, 0, 43.97, 50.22]},
    {x: x - 81, y: y + 35, deg: 180, points: [50.22, 0, 57.96, 134.79, 109.56, 164.34, 175.87, 131.91, 128.67, 175.87, 117.91, 41.09, 66.31, 11.53, 0, 43.97, 50.22]},
  ]
  
  const getPolygonPoints = (points: number[]):string => {
    let result = ""
    points.forEach((p, i) => result += p + " " + gp[i] + " ")
    return result
  }


  return properties.map((props, i) => <polygon key={i}
  fill={selectedMaket.color} 
  transform={`translate(${props.x}, ${props.y}) rotate(${props.deg}, ${props.x}, ${props.y})`} 
  points={getPolygonPoints(props.points)} />)
  
}

export default RenderTrantMaket
