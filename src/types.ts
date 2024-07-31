export type TSelectedMaket = {
    type: number
    generatePoints: number[]
    color: string
    status: "prev" | "new" | "next" | "change_color_prev" | "change_color_new" | "change_color_next"
}