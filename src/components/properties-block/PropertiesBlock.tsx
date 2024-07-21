import { useSelector } from "react-redux"
import "./properties-block.scss"
import PropertiesBackgroundList from "./background-properties/PropertiesBackgroundList"
import PropertiesTextList from "./text-properties/PropertiesTextList"

function PropertiesBlock() {
  const currentTab = useSelector((s: any) => s.main.currentTab)
    return <div className="properties-block-container">
      {currentTab === 0 && <PropertiesBackgroundList />}
      {currentTab === 1 && <PropertiesTextList />}
    </div>
  }
  
  export default PropertiesBlock
  