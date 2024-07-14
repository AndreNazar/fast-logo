export enum BackgroundTypes {
    CIRCLE = "circle",
    SQUARE = "square",
    TRIANGLE = "triangle",
    SQUIRCLE = "squircle",
    NONE = "none"
}

export enum TextTypes {
    ARIAL = "Arial",
    NONE = "none"
}

export enum IconTypes {
    SEARCH = "Search",
    NONE = "none"
}


export type TBackgroundType = BackgroundTypes.CIRCLE | BackgroundTypes.SQUARE | BackgroundTypes.TRIANGLE | BackgroundTypes.SQUIRCLE | BackgroundTypes.NONE
export type TTextType = TextTypes.ARIAL | TextTypes.NONE
export type TIconType = IconTypes.SEARCH | IconTypes.NONE
export type TAligns = "left" | "center" | "right" | "top" | "bottom"


export interface IItems {
    name: string
    type: TBackgroundType | TIconType | TTextType
}


export interface IBackgroundProperties {
    type: TBackgroundType,
    backgroundColor: string,
    borderColor: string,
    borderWidth: number,
}

export interface ITextProperties {
    type: TTextType,
    color: string,
    size: number,
    align: TAligns,
}

export interface IIconProperties {
    type: TIconType,
    color: string,
    size: number,
    align: TAligns,
}