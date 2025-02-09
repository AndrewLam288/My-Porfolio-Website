export const getImageUrl = (path) => {
  console.log("Image URL in production:", `/assets/${path}`);
  return `/assets/${path}`;
};