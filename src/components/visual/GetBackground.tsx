import { BackgroundTypes } from "../../types"

interface Ibp {
  type: string
  fill: string
  stroke: string
  strokeWidth: number
}

const GetBackground = ({ bp }: { bp: Ibp }) => {
  const OutputFigure = () => {
    switch (bp.type) {
      case BackgroundTypes.CIRCLE:
        return <circle fill={bp.fill} stroke={bp.stroke} strokeWidth={bp.strokeWidth} cx={75 - bp.strokeWidth / 2} cy={75 - bp.strokeWidth / 2} r={75 - bp.strokeWidth / 2} />
      case BackgroundTypes.SQUARE:
        return <rect fill={bp.fill} stroke={bp.stroke} strokeWidth={bp.strokeWidth} x={0} y={0} width={150} height={150} />
      case BackgroundTypes.SQUIRCLE:
        return <rect fill={bp.fill} stroke={bp.stroke} strokeWidth={bp.strokeWidth} x={0} y={0} width={150} height={150} rx={Math.sqrt(150)} ry={Math.sqrt(150)} />
      case BackgroundTypes.TRIANGLE:
        return <path fill={bp.fill} stroke={bp.stroke} strokeWidth={bp.strokeWidth} d="M76.17,2l69.45,138.92a3.53,3.53,0,0,1-3.16,5.12H3.54a3.53,3.53,0,0,1-3.16-5.12L69.83,2A3.55,3.55,0,0,1,76.17,2Z" />
      default:
        return <div></div>
    }
  }

  return (
    <svg className={"element visual-background"} xmlns="http://www.w3.org/2000/svg" viewBox={
        "-" + (bp.strokeWidth/2) + 
        " -" + (bp.strokeWidth/2) + 
        " " + (+bp.strokeWidth + 150) + 
        " " + (+bp.strokeWidth + 150)}>
      <OutputFigure />
    </svg>
  )
}

export default GetBackground
