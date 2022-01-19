const API_URL = process.env.REACT_APP_API_URL;

/**
 * get the images from the api
 * @param {*} searchTerm The term to search
 * @returns images in json format
 */
export const getImagesByTerm = async (searchTerm) => {
    const response = await fetch(`${API_URL}?q=${searchTerm}`);
    const responseJson = await response.json();

    return responseJson;
}

/**
 * get an image for download 
 * @param {*} url The link to the image
 */
export const getDataFromURL = (url) => new Promise((resolve) => {
    fetch(url)
        .then(response => response.blob())
        .then(data => { resolve(data) })
        .catch(err => { console.error(err) });
});
