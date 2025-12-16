
export const shadowX = " bg-gradient-to-b from-black via-gray-800 to-black   "
export const shadowY = " bg-gradient-to-r from-black via-gray-800 to-black   "


export const card = 'm-2 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-black text-white shadow-lg hover:shadow-xl hover:border-cyan-500  transition-all duration-300 cursor-pointer'


export const cardAndSelected = (isSelected: boolean) => `${card} ${isSelected ? "border-solid border-4 border-blue-500" : ""}`



export const formContainer = "flex flex-col items-center justify-center w-full h-screen  "



export const inputText = cardAndSelected(true)
export const inputText0 = "   px-4  py-3     " + cardAndSelected(true) + ' rounded-none text-center b'
const className = 'bg-transparent'
