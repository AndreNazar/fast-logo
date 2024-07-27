import { Ref, useRef, useState } from "react"
import "./preview-block.scss"
import PreviewNavigation from "./navigation-block/PreviewNavigation"
import Logo from "./logo-block/Logo"
import { TSelectedMaket } from "../../types"

function PreviewBlock() {

  const refField: Ref<SVGSVGElement> = useRef(null)
  const [selectedMaket, setSelectedMaket] = useState<TSelectedMaket>({type: -1, generatePoints: []})
  const [mainColor, setMainColor] = useState<string>('')

    return <div className="preview-container">
      <div className="preview-wrapper">
        <Logo mainColor={mainColor} selectedMaket={selectedMaket} refField={refField}/>
        <PreviewNavigation setMainColor={setMainColor} setSelectedMaket={setSelectedMaket} />
      </div>
    </div>
  }
  
  export default PreviewBlock
  