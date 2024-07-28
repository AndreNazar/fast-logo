import { Ref, useState } from "react"
import "./preview-block.scss"
import PreviewNavigation from "./navigation-block/PreviewNavigation"
import Logo from "./logo-block/Logo"
import { TSelectedMaket } from "../../types"

function PreviewBlock() {
  const [refField, setRefField] = useState<Ref<SVGSVGElement>>(null)
  const [selectedMaket, setSelectedMaket] = useState<TSelectedMaket>({type: -1, generatePoints: [], color: "#000000"})
  const [prevMaket, setPrevMaket] = useState<TSelectedMaket>({type: -1, generatePoints: [], color: "#000000"})

    return <div className="preview-container">
      <div className="preview-wrapper">
        <Logo selectedMaket={selectedMaket} setRefField={setRefField}/>
        <PreviewNavigation 
        refField={refField} 
        selectedMaket={selectedMaket}
        setSelectedMaket={setSelectedMaket}
        prevMaket={prevMaket} 
        setPrevMaket={setPrevMaket} />
      </div>
    </div>
  }
  
  export default PreviewBlock
  