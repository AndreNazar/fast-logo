import "./elements-block.scss"
import ElementsList from "./ElementsList"
import Tabs from "./Tabs"

function ElementsBlock() {
  return <div className="elements-block-container">
    <Tabs />
    <ElementsList />
  </div>
}

export default ElementsBlock
