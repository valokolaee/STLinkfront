import { numString } from "mrv-utils"

export const safeFixed = (value?: numString, to?: number) => safeFloat(value).toFixed(to || 2)
export const safeFloat = (value?: numString) => parseFloat((value || 0.00).toString())
export const safeInt = (value?: numString) => parseInt((value || 0).toString()) 
