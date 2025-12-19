export const ArrayFromNum = (number: number, startNumber = 0) => {
    const newArray = [...Array(number).keys()];
    return startNumber === 0
        ?
        newArray
        :
        newArray.map((num) => num + startNumber);
};