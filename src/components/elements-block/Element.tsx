import { useDispatch, useSelector } from "react-redux";
import { BackgroundTypes, TextTypes } from "../../types";
import { selectElement } from "../../redux/mainReducer";
import { CirclePath, SquarePath, SquirclePath, TrianglePath } from "../preview-block/backgrounds";
import { OutputText } from "../preview-block/texts";

const Element = ({element}: any) => {
    const dispatch = useDispatch()

    const textProperties = useSelector((s: any) => s.main.textProperties)
    
    function getLayout() {
        switch (element.type) {
          case BackgroundTypes.TRIANGLE:
            return <TrianglePath />
          case BackgroundTypes.CIRCLE:
            return <CirclePath />
          case BackgroundTypes.SQUARE:
            return <SquarePath />
          case BackgroundTypes.SQUIRCLE:
            return <SquirclePath />
          case TextTypes.ADVENT:
          case TextTypes.BADSCRIPT:
          case TextTypes.CAVEAT:
          case TextTypes.COMFORTAA:
          case TextTypes.COMFORTERBRUSH:
          case TextTypes.DIDACTGOTHIC:
          case TextTypes.FLOWCIRCULAR:
          case TextTypes.GREATVIBES:
          case TextTypes.IBMPLEXSERIF:
          case TextTypes.KABLAMMO:
          case TextTypes.KELLYSLAB:
          case TextTypes.LOBSTER:
          case TextTypes.MONTSERRAT:
          case TextTypes.MURECHO:
          case TextTypes.PACIFICO:
          case TextTypes.PLAY:
          case TextTypes.REGGAEONE:
          case TextTypes.RUBIKBROKENFAX:
          case TextTypes.RUBIKGLITCH:
          case TextTypes.RUBIKGLITCHPOP:
          case TextTypes.RUBIKMONOONE:
          case TextTypes.RUBIKSCRIBBLE:
          case TextTypes.RUSLANDISPLAY:
          case TextTypes.RUSSOONE:
          case TextTypes.STALINISTONE:
          case TextTypes.STICK:
          case TextTypes.TINY5:
          case TextTypes.TRAINONE:
          case TextTypes.NONE:
            return (<OutputText text={textProperties.text} type={element.type} color={textProperties.color} size={textProperties.size}/>)

          default:
            return <div></div>
        }
    }

    return <div className="element-wrapper" onClick={() => dispatch(selectElement(element))}>
        <svg className={"element element-" + element.type} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
            {getLayout()}
        </svg>
    </div>
}

export default Element