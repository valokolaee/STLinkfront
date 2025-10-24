import { numString } from "mrv-utils"

export const safeFixed = (value: numString,to:number) => parseFloat((value || 0.00).toString()).toFixed(to)
