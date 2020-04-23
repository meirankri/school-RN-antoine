const getMention = (array, id) => {
  const findId = array.find((s) => s.id === id);
  if (typeof findId === 'object') return findId.mention;
  return 'Aucune';
};
export default getMention;
