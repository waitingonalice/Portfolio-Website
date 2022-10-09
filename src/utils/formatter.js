export const toLocalDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString("en-GB", options);
};

export const toLocalYear = () => {
  const date = new Date();
  return date.getFullYear();
};
