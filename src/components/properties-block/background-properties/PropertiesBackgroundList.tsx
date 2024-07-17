import { useDispatch, useSelector } from "react-redux"
import { setBackgroundColor, setBorderColor, setBorderWidth } from "../../../redux/mainReducer"
import { BackgroundTypes } from "../../../types"

const PropertiesBackgroundList = () => {

    const dispatch = useDispatch()

    const backgroundProperties = useSelector((s: any) => s.main.backgroundProperties)

    function getTitle(key: string) {
        switch (key) {
            case "type": return "Тип"
            case "backgroundColor": return "Цвет фона"
            case "borderColor": return "Цвет границы"
            case "borderWidth": return "Размер границы"
            default: return ""
        }
    }

    function getType(key: BackgroundTypes) {
        switch (key) {
            case BackgroundTypes.CIRCLE: return "Круг"
            case BackgroundTypes.SQUARE: return "Квадрат"
            case BackgroundTypes.SQUIRCLE: return "Круглый квадрат"
            case BackgroundTypes.TRIANGLE: return "Треугольник"
            default: return key
        }
    }

    function getValueLayout(key: string) {
      switch (key) {
        case "type":
          return <p className="value">{getType(backgroundProperties[key])}</p>
        case "backgroundColor":
          return <input className="value color-input" value={backgroundProperties[key]} onChange={(e) => dispatch(setBackgroundColor(e.target.value))} />
        case "borderColor":
          return <input className="value color-input" value={backgroundProperties[key]} onChange={(e) => dispatch(setBorderColor(e.target.value))} />
        case "borderWidth":
          return <input className="value width-input" type="number" min="0" max="50" value={backgroundProperties[key]} onChange={(e) => dispatch(setBorderWidth(e.target.value))} />
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
        {backgroundProperties.type !== "none" 
        && Object.keys(backgroundProperties).map((k: string) => getInfoLayout(k))}
    </div>
}

export default PropertiesBackgroundList