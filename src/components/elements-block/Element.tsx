import { BackgroundTypes } from "../../types";

const Element = ({element}: any) => {
    function getLayout() {
        switch (element.type) {
            case BackgroundTypes.TRIANGLE: return <svg className={"element element-" + element.type} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220"><path stroke="#a6b1d1" strokeMiterlimit={10} strokeWidth={8} fill="none" d="M112.6,7.44l93.33,190.13A8.83,8.83,0,0,1,198,210.29H11.34a8.83,8.83,0,0,1-7.93-12.72L96.74,7.44A8.83,8.83,0,0,1,112.6,7.44Z"/></svg>
            case BackgroundTypes.CIRCLE:
            case BackgroundTypes.SQUARE:
            case BackgroundTypes.SQUIRCLE: return <div className={"element element-" + element.type}></div>
            default: return <div></div>
        }
    }
    return <div className="element-wrapper">{getLayout()}</div>
}

export default Element