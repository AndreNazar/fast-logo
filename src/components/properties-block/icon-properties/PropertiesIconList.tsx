import { useDispatch, useSelector } from "react-redux"
import { setIconAlign, setIconColor, setIconSize, setTextAlign, setTextColor, setTextSize, setTextText } from "../../../redux/mainReducer"

const PropertiesIconList = () => {

    const dispatch = useDispatch()
    
    const iconProperties = useSelector((s: any) => s.main.iconProperties)


    function getTitle(key: string) {
        switch (key) {
            case "type": return "Тип"
            case "color": return "Цвет иконки"
            case "size": return "Размер иконки"
            case "align": return "Положение"
            default: return ""
        }
    }

    function getValueLayout(key: string) {
      switch (key) {
        case "type":
          return <p className="value">{iconProperties[key]}</p>
        case "color":
          return <input className="value color-input" value={iconProperties[key]} onChange={(e) => dispatch(setIconColor(e.target.value))} />
        case "size":
          return <input className="value width-input" type="number" min="0" max="200" value={iconProperties[key]} onChange={(e) => dispatch(setIconSize(e.target.value))} />
        case "align":
          return <select value={iconProperties[key]} onChange={(e) => dispatch(setIconAlign(e.target.value))} className="value width-input">
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
    {iconProperties.type !== "none" 
    && Object.keys(iconProperties).map((k: string) => getInfoLayout(k))}
</div>
}

export default PropertiesIconList