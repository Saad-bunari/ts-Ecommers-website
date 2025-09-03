import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { fetchProducts } from "../../features/products/productsSlice";
import { Spinner } from "react-bootstrap";
import styles from "./RandomProducts.module.scss";

const RandomProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="text-center"><Spinner animation="border" /></div>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className={styles.randomProducts}>
      <h5 className={styles.sectionTitle}>Random Products</h5>
      <ul className={styles.productList}>
        {items.slice(0, 5).map((item) => (
          <li className={styles.productItem} key={item.id}>
<div className={styles.imageWrapper}>
  <img src={item.img} alt={item.title} className={styles.primary} />
  {item.hoverImg && (
    <img src={item.hoverImg} alt={`${item.title} hover`} className={styles.secondary} />
  )}
</div>

  <div className={styles.info}>
    <h6 className={styles.title}>{item.title}</h6>
    <div className={styles.priceWrapper}>
      <span className={styles.newPrice}>${Number(item.price).toFixed(2)}</span>
      <span className={styles.oldPrice}>${(Number(item.price) + 3).toFixed(2)}</span>
    </div>
  </div>
</li>

        ))}
      </ul>
    </div>
  );
};

export default RandomProducts;
