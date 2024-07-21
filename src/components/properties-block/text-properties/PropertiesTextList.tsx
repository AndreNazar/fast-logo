import { useDispatch, useSelector } from "react-redux"
import { setTextAlign, setTextColor, setTextSize, setTextText } from "../../../redux/mainReducer"

const PropertiesTextList = () => {

    const dispatch = useDispatch()
    
    const textProperties = useSelector((s: any) => s.main.textProperties)


    function getTitle(key: string) {
        switch (key) {
            case "type": return "Тип"
            case "text": return "Текст логотипа"
            case "color": return "Цвет текста"
            case "size": return "Размер текста"
            case "align": return "Положение"
            default: return ""
        }
    }

    function getValueLayout(key: string) {
      switch (key) {
        case "type":
          return <p className="value">{textProperties[key]}</p>
        case "text":
          return <input className="value text-input" value={textProperties[key]} onChange={(e) => dispatch(setTextText(e.target.value))} />
        case "color":
          return <input className="value color-input" value={textProperties[key]} onChange={(e) => dispatch(setTextColor(e.target.value))} />
        case "size":
          return <input className="value width-input" type="number" min="0" max="200" value={textProperties[key]} onChange={(e) => dispatch(setTextSize(e.target.value))} />
        case "align":
          return <select value={textProperties[key]} onChange={(e) => dispatch(setTextAlign(e.target.value))} className="value width-input">
            <option value="left-top">left-top</option>
            <option value="top">top</option>
            <option value="right-top">right-top</option>
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
            <option value="left-bottom">left-bottom</option>
            <option value="bottom">bottom</option>
            <option value="right-bottom">right-bottom</option>
          </select>
        default:
          return <span></span>
      }
    }
    
    function getInfoLayout(key: string) {
        return <div className="property-item" key={key}>
            <p className="title">{getTitle(key)}:</p>
            {getValueLayout(key)}
        </div>
    }

    return <div className="properties-list">
    {textProperties.type !== "none" 
    && Object.keys(textProperties).map((k: string) => getInfoLayout(k))}
</div>
}

export default PropertiesTextList