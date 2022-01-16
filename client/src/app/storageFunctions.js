/**
 * Convert array to string and store it in local storage
 * @param {*} tag The key
 * @param {*} array The array to store
 */
export const setArrayToStorage = (tag, array) => {
    localStorage.setItem(tag, JSON.stringify(array));
}

/**
 * Get string from local storage and convert it to array
 * @param {*} tag The key
 * @returns Array of items
 */
export const getArrayFromStorage = (tag) => {
    return JSON.parse(localStorage.getItem(tag)) || [];
}

/**
 * Add item to array that store in local storage
 * @param {*} tag The key of the array
 * @param {*} item The item to add
 */
export const addToTagAraay = (tag, item) => {
    const array = getArrayFromStorage(tag);

    if (array.indexOf(item) === -1){
        array.push(item);
        setArrayToStorage(tag, array);
    }
}

/**
 * Remove item from array that store in local storage
 * @param {*} tag The key of the array
 * @param {*} item The item to remove
 */
export const removeFromTagAraay = (tag, item) => {
    const array = getArrayFromStorage(tag);
    array.splice(array.indexOf(item), 1);
    setArrayToStorage(tag, array);
}
