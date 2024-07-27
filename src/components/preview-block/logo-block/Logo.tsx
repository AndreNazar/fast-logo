import { Ref, useCallback } from "react"
import RenderCirleMaket from "./makets/RenderCircleMaket"
import RenderRectMaket from "./makets/RenderRectMaket"
import { TSelectedMaket } from "../../../types"

const Logo = (
  { mainColor, refField, selectedMaket }: 
  { mainColor: string, refField: Ref<SVGSVGElement>, selectedMaket: TSelectedMaket }
  ) => {

    const OutputMaket = () => {
      switch (selectedMaket.type) {
        case 0:
          return <RenderCirleMaket selectedMaket={selectedMaket} mainColor={mainColor}/>
        case 1:
          return <RenderRectMaket selectedMaket={selectedMaket} mainColor={mainColor}/> 
        default: return <svg></svg>
      }
    }

  return (
    <svg ref={refField} xmlns="http://www.w3.org/2000/svg" className="circle-maket" viewBox="0 0 960 960">
      <OutputMaket />
    </svg>
  )
}

export default Logo
