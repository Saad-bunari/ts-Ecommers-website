import axios from "axios";

export const fetchCategoriesAPI = async () => {
  const res = await axios.get("https://fakestoreapi.com/products/categories");

  return res.data.map((item: string, index: number) => ({
    id: index + 1,
    title: item,
    img: "/images/category.png", 
  }));
};
