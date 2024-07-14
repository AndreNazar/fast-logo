import { useDispatch, useSelector } from "react-redux"
import "./elements-block.scss"
import { setCurrentTab } from "../../redux/mainReducer"


function Tabs() {
    const tabs = useSelector((s: any) => s.main.tabs)
    const currentTab = useSelector((s: any) => s.main.currentTab)
    const dispatch = useDispatch()
  return <div className="tabs-container">
    {tabs.map((t: string, i:number) => 
    <div 
    key={i}
    className={"tab" + (currentTab === i ? " active" : "")} 
    onClick={() => dispatch(setCurrentTab(i))}>
        {t}
    </div>)}
  </div>
}

export default Tabs
