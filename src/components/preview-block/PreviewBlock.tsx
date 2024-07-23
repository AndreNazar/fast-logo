import { useCallback, useEffect, useState } from "react"
import "./preview-block.scss"
import SVGUpdater from "./SVGUpdater"
import html2canvas from "html2canvas"

function PreviewBlock() {

  const [refField, setRefField]: any = useState()

  const downloadFile = useCallback(() => {
  }, [refField])

  useEffect(() => {},[])

    return <div className="preview-container">
      <div className="preview-wrapper">
        <canvas id="myCanvas" width="200" height="200" />
        <SVGUpdater setRefField={setRefField}/>
        <div className="preview-navigation">
          <input className="name-input" placeholder="Название файла" type="text" /> 
          <div onClick={() => downloadFile()} className="download-button">Скачать</div>
        </div>
      </div>
    </div>
  }
  
  export default PreviewBlock
  