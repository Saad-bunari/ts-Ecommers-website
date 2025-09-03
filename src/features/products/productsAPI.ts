import axios from "axios";

export const fetchProductsAPI = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const allProducts = res.data;

  return allProducts.map((item: any) => {
    
    const sameCategory = allProducts.filter(
      (p: any) => p.category === item.category && p.id !== item.id
    );

   
    let hoverImg;
    if (sameCategory.length > 0) {
      const randomProduct =
        sameCategory[Math.floor(Math.random() * sameCategory.length)];
      hoverImg = randomProduct.image;
    } else {
      hoverImg = item.image; 
    }

    return {
      id: item.id,
      title: item.title,
      img: item.image,
      hoverImg, 
      price: item.price,
      category: item.category,
    };
  });
};
