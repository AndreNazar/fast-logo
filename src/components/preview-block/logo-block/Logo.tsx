import RenderCirleMaket from "./makets/RenderCircleMaket"
import RenderRectMaket from "./makets/RenderRectMaket"
import { TSelectedMaket } from "../../../types"
import RenderCrawMaket from "./makets/RenderCrawMaket"

const Logo = (
  { setRefField, selectedMaket }: 
  { setRefField: any, selectedMaket: TSelectedMaket }
  ) => {

    const OutputMaket = () => {
      switch (selectedMaket.type) {
        case 0:
          return <RenderCirleMaket selectedMaket={selectedMaket}/>
        case 1:
          return <RenderRectMaket selectedMaket={selectedMaket}/> 
        case 2:
          return <RenderCrawMaket selectedMaket={selectedMaket}/> 
        default: return <svg></svg>
      }
    }

  return (
    <svg ref={setRefField} xmlns="http://www.w3.org/2000/svg" className="circle-maket" viewBox="0 0 960 960">
      <OutputMaket />
    </svg>
  )
}

export default Logo
