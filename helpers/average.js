/* eslint-disable linebreak-style */
const average = (notes) => {
  if (notes.length > 0) {
    return Math.floor(10 * notes.reduce((acc, curr) => acc + curr, 0) / notes.length) / 10;
  }

  return null;
};
export default average;
