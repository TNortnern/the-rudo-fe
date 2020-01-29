export const getWrestlers = payload => {
    console.log('hey')
    return {
        type: "GET_WRESTLERS",
        payload
    }
}