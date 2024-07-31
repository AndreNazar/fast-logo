import RenderCirleMaket from "./makets/RenderCircleMaket"
import RenderRectMaket from "./makets/RenderRectMaket"
import { TSelectedMaket } from "../../../types"
import RenderCrawMaket from "./makets/RenderCrawMaket"
import RenderChainMaket from "./makets/RenderChainMaket"
import RenderTrantMaket from "./makets/RenderTrantMaket"
import { useEffect, useState } from "react"
import EmptyMaket from "./EmptyMaket"
import "./logo-block.scss"

const Logo = ({ svgHeight, setRefField, selectedMaket }: { svgHeight: any, setRefField: any; selectedMaket: TSelectedMaket }) => {
  const [classSvg, setClassSvg] = useState("maket")
  const [newSelectedMaket, setNewSelectedMaket] = useState(selectedMaket)
  const [isStartedGenerate, setIsStartedGenerate] = useState(false)

  const OutputMaket = () => {
    switch (newSelectedMaket.type) {
      case 0:
        return <RenderCirleMaket selectedMaket={newSelectedMaket} />
      case 1:
        return <RenderRectMaket selectedMaket={newSelectedMaket} />
      case 2:
        return <RenderCrawMaket selectedMaket={newSelectedMaket} />
      case 3:
        return <RenderChainMaket selectedMaket={newSelectedMaket} />
      case 4:
        return <RenderTrantMaket selectedMaket={newSelectedMaket} />
      default:
        return <polygon></polygon>
    }
  }

  useEffect(() => {
    if (selectedMaket.status === "prev" || selectedMaket.status === "change_color_prev") setClassSvg("maket maket-animate-prev")
    else setClassSvg("maket maket-animate-new")

      let timer = setTimeout(() => {
        
        if (selectedMaket.status === "prev" || selectedMaket.status === "change_color_prev") setClassSvg("maket prev-maket")
        else setClassSvg("maket new-maket")
        
        let timer2 = setTimeout(() => {
          setNewSelectedMaket(selectedMaket)
          clearTimeout(timer)
          clearTimeout(timer2)
          setClassSvg("maket")
        }, 100)
      }, 200)

      if(!isStartedGenerate && selectedMaket.type !== -1) {
        const startTimer = setTimeout(() => {
          setIsStartedGenerate(true)
          clearTimeout(startTimer)
        }, 300);
      }

  }, [selectedMaket.generatePoints])

  useEffect(() => {
    if(selectedMaket.status === "change_color_next" 
    || selectedMaket.status === "change_color_new"
    || selectedMaket.status === "change_color_prev"){
     setNewSelectedMaket(selectedMaket)
     setClassSvg("maket new-color")

      let timer = setTimeout(() => {
        setClassSvg("maket")
        clearTimeout(timer)
      }, 50);
    }
  }, [selectedMaket.color])

  return isStartedGenerate
  ? <svg ref={setRefField} xmlns="http://www.w3.org/2000/svg" className={classSvg} viewBox="0 0 960 960">
      <OutputMaket />
    </svg>
  : <EmptyMaket svgHeight={svgHeight} makettype={selectedMaket.type} />
}

export default Logo
