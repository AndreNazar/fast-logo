import { useSelector } from "react-redux"
import "./preview-block.scss"

function PreviewBlock() {
  const backgroundProperties = useSelector((s: any) => s.main.backgroundProperties)
    return <div className="preview-container">
      <div className="preview-wrapper">
        <canvas className="preview-field">
          <div className={"preview-background bg-" + backgroundProperties.type}></div>
        </canvas>
        <div className="preview-navigation">
          <input type="text" /> 
          <div className="download-button">Скачать</div>
        </div>
      </div>
    </div>
  }
  
  export default PreviewBlock
  