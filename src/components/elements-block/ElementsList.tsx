import { useSelector } from "react-redux"
import Element from "./Element"
import { IItems } from "../../types"

const ElementsList = () => {

    const currentTab = useSelector((s: any) => s.main.currentTab)
    const getCurrentElements = () => {
        switch (currentTab) {
            case 0: return useSelector((s: any) => s.main.backgroundItems)
            case 1: return useSelector((s: any) => s.main.textItems)
            case 2: return useSelector((s: any) => s.main.iconItems)
            default: return null
        }
    }

    return <div className="elements-container">
        {getCurrentElements() !== null &&
        getCurrentElements().map((el: IItems, i: number) => <Element key={i} element={el} />)}
    </div> 
}

export default ElementsList