export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
    // taking a relative path and base url, and parsing us back the url
}