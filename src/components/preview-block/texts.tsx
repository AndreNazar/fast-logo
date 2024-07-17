import { IItems } from "../../types";

export const OutputText = (
    {type, text, color, size}: 
    {type: IItems, text: string, color: string, size: number}
    ) => <text textAnchor="middle" x={75} y={100} fill={color} fontSize={size} style={{ fontFamily: `${type}` }} className="element-text">{text}</text>