export default async (data: any) => {
    const _delay = Math.random() * 4000
    await setTimeout(() => {
        return data
    }, _delay);
    return data
}