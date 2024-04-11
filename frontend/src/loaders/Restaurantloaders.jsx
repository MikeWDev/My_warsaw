export const mealLoader = async () => {
  const res = await fetch("http://localhost:4000/our-menu");
  return res.json();
};
