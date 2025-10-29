import { numString } from "mrv-utils"

export const safeFixed = (value: numString, to: number) => safeFloat(value).toFixed(to)
export const safeFloat = (value: numString) => parseFloat((value || 0.00).toString()) 
