import { useCallback, useRef} from "react";
import { useSelector } from "react-redux"
import { BackgroundTypes, IBackgroundProperties, IconTypes, IIconProperties, ITextProperties, TextTypes } from "../../types";
import GetBackground from "../visual/GetBackground";
import GetText from "../visual/GetText";
import GetIcon from "../visual/GetIcon";

const SVGUpdater = ({setRefField}: any) => {
     
  const backgroundProperties:IBackgroundProperties = useSelector((s: any) => s.main.backgroundProperties)
  const textProperties: ITextProperties = useSelector((s: any) => s.main.textProperties)
  const iconProperties: IIconProperties = useSelector((s: any) => s.main.iconProperties)

  const drawBackground = useCallback(() =>{
    const bp = {
      type: backgroundProperties.type,
      fill: backgroundProperties.backgroundColor, 
      stroke: backgroundProperties.borderColor, 
      strokeWidth: backgroundProperties.borderWidth
    }
    
    return <GetBackground bp={bp}/>
  }, [backgroundProperties])

  
  const drawText = useCallback(() =>{
   
    const tp = {
      type: textProperties.type,
      text: textProperties.text,
      color: textProperties.color,
      size: textProperties.size,
      align: textProperties.align,
    }

   return <GetText tp={tp} />
 }, [textProperties])
  

 const drawIcon = useCallback(() =>{
  
  const ip = {
    type: iconProperties.type,
    fill: iconProperties.color,
    size: iconProperties.size,
    align: iconProperties.align,
  }

  return <GetIcon ip={ip} />
}, [iconProperties])

    return <div ref={setRefField}>
      <svg className="preview-field" xmlns="http://www.w3.org/2000/svg" width={215} height={215} viewBox="0 0 150 150" >
      {drawBackground()}{drawIcon()}{drawText()}
    </svg>
    </div>
}

export default SVGUpdater