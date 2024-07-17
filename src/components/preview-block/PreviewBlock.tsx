import "./preview-block.scss"
import SVGUpdater from "./SVGUpdater"

function PreviewBlock() {
    return <div className="preview-container">
      <div className="preview-wrapper">
        <SVGUpdater />
        <div className="preview-navigation">
          <input className="name-input" placeholder="Название файла" type="text" /> 
          <div className="download-button">Скачать</div>
        </div>
      </div>
    </div>
  }
  
  export default PreviewBlock
  