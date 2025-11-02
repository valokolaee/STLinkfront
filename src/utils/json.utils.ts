export const getObjectFromJsonArray = (array: any[], index?: 0) => {
    if (!Array.isArray(array)) return {}

    if (array?.length > 0) {
        return array[0]
    } else {
        return {}
    }
}
export const JsonArrayIntoNumberArray = (array: any[], prop: string) => {
    if (!Array.isArray(array)) return []
    var arr: number[] = []
    array.forEach(element => {
        arr.push(element[prop])
    });
    return arr
}