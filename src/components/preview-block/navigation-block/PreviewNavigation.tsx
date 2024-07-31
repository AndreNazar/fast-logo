import Button from "./Button"
import "./preview-navigation.scss"

const PreviewNavigation = ({selectedMaket, setSelectedMaket, refField, prevMaket, setPrevMaket}: any) => {
    
  const globalColors:string[] = [
    "#9c93e5",
    "#c28617",
    "#eb9196",
    "#221831",
    "#161515",
    "#db643e",
    "#20725f",
    "#f69f32",
    "#ce9fe4",
    "#98c8bd",
    "#e0e244",
    "#5a6525",
    "#d3b868",
    "#5168ab",
    "#423227",
    "#294a6c",
    "#6f2ad5",
    "#3d293f",
    "#747b7c",
    "#3b2c41",
    "#00a18e",
    "#555555",
    "#8c6469",
    "#b2ad72",
    "#ad9856",
    "#bf8280",
    "#5d8870",
    "#912425",
    "#cc7138",
    "#a42c65",
    "#0a2c78",
    "#ed4e92",
    "#9e6fa2",
    "#363636",
    "#26077a",
    "#2838a3",
    "#2a60c9",
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
    const type = Math.floor(Math.random() * 5)
    //const type = 4
    let generatePoints:number[] = []

    switch (type) {
      case 0:
        for (let i = 0; i < 12; i++) generatePoints.push(Math.random() * (220 - 0 + 1) + 0)
      break;
      case 1:
        for (let i = 0; i < 8; i++) generatePoints.push(Math.random() * (220 - 0 + 1) + 0)
      break;
      case 2:
        for (let i = 0; i < 15; i++) generatePoints.push(Math.random() * (250 - 0 + 1) + 0)
        break;
      case 3:
        for (let i = 0; i < 15; i++) generatePoints.push(Math.random() * (300 - 0 + 1) + 0)
      break;
      case 4:
        for (let i = 0; i < 17; i++) generatePoints.push(Math.random() * (250 - 0 + 1) + 0)
      break;
      default:break;
    }

    setPrevMaket({...selectedMaket, status: "prev"})
    setSelectedMaket({
      type, 
      generatePoints, 
      color: globalColors[Math.floor(Math.random() * (globalColors.length - 0 + 1) + 0)],
      status: "new"
    })
  }

  const updatePalette = () => {
    const getStatus = () => {
      if(selectedMaket.status === "new" || selectedMaket.status === "change_color_new") return "change_color_new"
      else if(selectedMaket.status === "next" || selectedMaket.status === "change_color_next") return "change_color_next"
      else if(selectedMaket.status === "prev" || selectedMaket.status === "change_color_prev") return "change_color_prev"
    }
    setSelectedMaket({
      ...selectedMaket,
      color: globalColors[Math.floor(Math.random() * (globalColors.length - 0 + 1) + 0)],
      status: getStatus()
    })
  }

  const prevLogoHandler = () => {
    if(prevMaket.type !== -1){
      if(prevMaket.status === "new" || prevMaket.status === "change_color_new" || prevMaket.status === "change_color_next") 
        setSelectedMaket({...prevMaket, status: "next"})
      else if (prevMaket.status === "change_color_prev") setSelectedMaket({...prevMaket, status: "prev"})
      else setSelectedMaket(prevMaket)
      setPrevMaket(selectedMaket)
    }
  }

  return (
    <div className="preview-navigation">
      <Button title="" onClick={() => prevLogoHandler()} className={"back-button button" + (selectedMaket.status === "prev" ? " rotate-button" : "")} typeIcon={4} />
      <Button title="Сгенерировать" onClick={() => generateLogo()} className="generate-button button" typeIcon={2} />
      <Button title="" onClick={() => downloadFile()} className="download-button button" typeIcon={1} />
      <Button title="" onClick={() => updatePalette()} className="palette-button button" typeIcon={3} />
    </div>
  )
}

export default PreviewNavigation
