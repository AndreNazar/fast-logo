import { useCallback} from "react";
import { useSelector } from "react-redux"
import { BackgroundTypes, TextTypes } from "../../types";
import { CirclePath, SquarePath, SquirclePath, TrianglePath } from "./backgrounds";
import { OutputText } from "./texts";

const SVGUpdater = () => {
     
  const backgroundProperties = useSelector((s: any) => s.main.backgroundProperties)
  const textPtoperties = useSelector((s: any) => s.main.textProperties)

  const drawBackground = useCallback(() =>{
    
    if(backgroundProperties.type === BackgroundTypes.CIRCLE) return <CirclePath />
    else if(backgroundProperties.type === BackgroundTypes.SQUARE) return <SquarePath />
    else if(backgroundProperties.type === BackgroundTypes.SQUIRCLE) return <SquirclePath />
    else if(backgroundProperties.type === BackgroundTypes.TRIANGLE) return <TrianglePath />
    return <path className="preview-none"></path>
  }, [backgroundProperties])

  const drawText = useCallback(() =>{
   
   if(textPtoperties.type !== TextTypes.NONE) return <OutputText text={textPtoperties.text} type={textPtoperties.type} color={textPtoperties.color} size={textPtoperties.size} />
   return <text className="preview-none"></text>
 }, [textPtoperties])


    return <div className="preview-field">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">{drawBackground()}{drawText()}</svg>
    </div>
}

export default SVGUpdater