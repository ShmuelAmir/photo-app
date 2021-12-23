const KEY = "AIzaSyCtHHv1TEIlus2fYwOR_ZdB4P3y-MnEm4o";
const CX = "2baf5dc630067a92c&cx=2baf5dc630067a92c";

export const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${CX}&searchType=image&imgSize=medium&q=`

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

/**
 * generate a random date in the last years
 * @returns string represet the date
 */
export const generateRandomStringDate = () => {
    let day = Math.random() * 29;
    let month = Math.random() * 11;
    let year = Math.random() * (2021 - 2000) + 2000;

    return new Date(year, month, day).toString();
}
