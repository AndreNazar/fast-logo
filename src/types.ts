export enum BackgroundTypes {
    CIRCLE = "circle",
    SQUARE = "square",
    TRIANGLE = "triangle",
    SQUIRCLE = "squircle",
    NONE = "none"
}

export enum TextTypes {
    ADVENT = "AdventPro",
    BADSCRIPT = "BadScript",
    CAVEAT = "Caveat",
    COMFORTAA = "Comfortaa",
    COMFORTERBRUSH = "ComforterBrush",
    DIDACTGOTHIC = "DidactGothic",
    FLOWCIRCULAR = "FlowCircular",
    GREATVIBES = "GreatVibes",
    IBMPLEXSERIF = "IBMPlexSerif",
    KABLAMMO = "Kablammo",
    KELLYSLAB = "KellySlab",
    LOBSTER = "Lobster",
    MONTSERRAT = "Montserrat",
    MURECHO = "Murecho",
    PACIFICO = "Pacifico",
    PLAY = "Play",
    REGGAEONE = "ReggaeOne",
    RUBIKBROKENFAX = "RubikBrokenFax",
    RUBIKGLITCH = "RubikGlitch",
    RUBIKGLITCHPOP = "RubikGlitchPop",
    RUBIKMONOONE = "RubikMonoOne",
    RUBIKSCRIBBLE = "RubikScribble",
    RUSLANDISPLAY = "RuslanDisplay",
    RUSSOONE = "RussoOne",
    STALINISTONE = "StalinistOne",
    STICK = "Stick",
    TINY5 = "Tiny5",
    TRAINONE = "TrainOne",
    NONE = "none"
}

export enum IconTypes {
    SEARCH = "Search",
    NONE = "none"
}


export type TBackgroundType = BackgroundTypes.CIRCLE | BackgroundTypes.SQUARE | BackgroundTypes.TRIANGLE | BackgroundTypes.SQUIRCLE | BackgroundTypes.NONE
export type TTextType = 
TextTypes.ADVENT
| TextTypes.BADSCRIPT
| TextTypes.CAVEAT
| TextTypes.COMFORTAA
| TextTypes.COMFORTERBRUSH
| TextTypes.DIDACTGOTHIC
| TextTypes.FLOWCIRCULAR
| TextTypes.GREATVIBES
| TextTypes.IBMPLEXSERIF
| TextTypes.KABLAMMO
| TextTypes.KELLYSLAB
| TextTypes.LOBSTER
| TextTypes.MONTSERRAT
| TextTypes.MURECHO
| TextTypes.PACIFICO
| TextTypes.PLAY
| TextTypes.REGGAEONE
| TextTypes.RUBIKBROKENFAX
| TextTypes.RUBIKGLITCH
| TextTypes.RUBIKGLITCHPOP
| TextTypes.RUBIKMONOONE
| TextTypes.NONE
export type TIconType = IconTypes.SEARCH | IconTypes.NONE
export type TAligns = "left" | "center" | "right" | "top" | "bottom" | "left-top" | "left-bottom" | "right-top" | "right-bottom"    


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
    text: string,
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