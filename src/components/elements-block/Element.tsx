import { useDispatch, useSelector } from "react-redux";
import { IconTypes, TextTypes, BackgroundTypes, ITextProperties, IBackgroundProperties, IIconProperties } from "../../types";
import { selectElement } from "../../redux/mainReducer";
import GetBackground from "../visual/GetBackground";
import GetText from "../visual/GetText";
import GetIcon from "../visual/GetIcon";

const Element = ({element}: any) => {
    const dispatch = useDispatch()

    const textProperties: ITextProperties = useSelector((s: any) => s.main.textProperties)
    const backgroundProperties: IBackgroundProperties = useSelector((s: any) => s.main.backgroundProperties)
    const iconProperties: IIconProperties = useSelector((s: any) => s.main.iconProperties)

    function isType(type: typeof BackgroundTypes | typeof IconTypes | typeof TextTypes, value: string) {
      return Object.values(type).includes(value)
    }
    
    function getLayout() {
      const bp = {
        type: element.type,
        fill: backgroundProperties.backgroundColor,
        stroke: backgroundProperties.borderColor,
        strokeWidth: backgroundProperties.borderWidth,
      }
      const tp = {
        type: element.type,
        text: textProperties.text,
        color: textProperties.color,
        size: textProperties.size,
        align: textProperties.align,
      }
      const ip = {
        type: element.type,
        fill: iconProperties.color,
        size: +iconProperties.size + 50,
        align: iconProperties.align,
      }

      if (isType(BackgroundTypes, element.type)) return <GetBackground bp={bp} />
      if (isType(TextTypes, element.type)) return <GetText tp={tp} />
      if (isType(IconTypes, element.type)) return <GetIcon ip={ip} />
      else return <span></span>
    }

    return <div className="element-wrapper" onClick={() => dispatch(selectElement(element))}>
      {getLayout()}
    </div>
}

export default Element