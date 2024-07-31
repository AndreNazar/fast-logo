import { Ref, useEffect, useState } from "react"
import "./preview-block.scss"
import PreviewNavigation from "./navigation-block/PreviewNavigation"
import Logo from "./logo-block/Logo"
import { TSelectedMaket } from "../../types"

function PreviewBlock() {
  const [refField, setRefField] = useState<Ref<SVGSVGElement>>(null)
  const [selectedMaket, setSelectedMaket] = useState<TSelectedMaket>({type: -1, generatePoints: [], color: "#000000", status: "new"})
  const [prevMaket, setPrevMaket] = useState<TSelectedMaket>({type: -1, generatePoints: [], color: "#000000", status: "prev"})
  const [svgHeight, setSvgHeight] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setSvgHeight(window.innerWidth)
      console.log(window.innerWidth)
      if(window.innerWidth < 340){
        // менять размер svg
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

    return <div className="preview-container">
      <div className="preview-wrapper">
        <Logo svgHeight={svgHeight} selectedMaket={selectedMaket} setRefField={setRefField}/>
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
  