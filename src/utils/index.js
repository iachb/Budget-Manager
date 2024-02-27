export const generateId = () => {
  const random = Math.random().toString(36);
  const date = Date.now().toString(36);
  return random + date;
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return newDate.toLocaleDateString("es-ES", options);
};
