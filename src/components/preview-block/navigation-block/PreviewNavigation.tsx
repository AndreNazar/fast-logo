import { useRef } from "react";
import Button from "./Button"

const PreviewNavigation = ({setMainColor, setSelectedMaket}: any) => {
    
  const refField: any = useRef()

  const globalColors:string[] = [
    "#000000",
    "#ffffff",
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#000000",
    "#ffffff",
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
  ]

  const downloadFile = () => {
    const link = document.createElement("a")
    link.setAttribute("href", `data:image/svg+xml;utf8,${encodeURIComponent(refField.outerHTML)}`)
    link.setAttribute("download", "logo.svg")
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const generateLogo = () => {
    const type = Math.floor(Math.random() * 2)
    let generatePoints:number[] = []

    switch (type) {
      case 0:
        for (let i = 0; i < 12; i++) generatePoints.push(Math.random() * (220 - 0 + 1) + 0)
      break;
      case 1:
        for (let i = 0; i < 8; i++) generatePoints.push(Math.random() * (220 - 0 + 1) + 0)
      break;
      default:break;
    }

    setSelectedMaket({type, generatePoints})
    setMainColor(globalColors[Math.floor(Math.random() * (globalColors.length - 0 + 1) + 0)])
  }

  const updatePalette = () => {
    setMainColor(globalColors[Math.floor(Math.random() * (globalColors.length - 0 + 1) + 0)])
  }

  return (
    <div className="preview-navigation">
      <Button title="" onClick={() => downloadFile()} className="download-button button" typeIcon={1} />
      <Button title="Сгенерировать" onClick={() => generateLogo()} className="generate-button button" typeIcon={2} />
      <Button title="" onClick={() => updatePalette()} className="palette-button button" typeIcon={3} />
    </div>
  )
}

export default PreviewNavigation
