import ElementsBlock from "./components/elements-block/ElementsBlock"
import PreviewBlock from "./components/preview-block/PreviewBlock"
import PropertiesBlock from "./components/properties-block/PropertiesBlock"

function App() {

  return (
    <>
      <div className="main-container">
        <ElementsBlock />
        <div className="main-screen">
          <PreviewBlock />
          <PropertiesBlock />
        </div>
      </div>
    </>
  )
}

export default App
