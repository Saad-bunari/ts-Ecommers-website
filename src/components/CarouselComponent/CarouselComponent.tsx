import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import { fetchCategories } from "../../features/categories/categoriesSlice";
import type { RootState, AppDispatch } from "../../app/store";


import productStyles from "./CarouselProducts.module.scss";
import categoryStyles from "./CarouselCategories.module.scss";

interface CarouselProps {
  variant: "products" | "categories";
}

const CarouselComponent: React.FC<CarouselProps> = ({ variant }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, error } =
    useSelector((state: RootState) =>
      variant === "products" ? state.products : state.categories
    ) || { items: [], loading: false, error: null };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (variant === "products") {
      dispatch(fetchProducts());
    } else {
      dispatch(fetchCategories());
    }
  }, [dispatch, variant]);

  const handleDragConstraints = (el: HTMLDivElement | null) => {
    if (el) {
      setWidth(el.scrollWidth - el.offsetWidth);
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  const styles = variant === "products" ? productStyles : categoryStyles;

  return (
    <Container className={styles.carouselSection}>
      <motion.div
        ref={handleDragConstraints}
        className={styles.carouselWrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.carouselInner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {items.map((item) => (
            <motion.div className={styles.card} key={item.id}>
              <div className={styles.circleWrapper}>
                <img src={item.img} alt={item.title} />
              </div>
              <h6 className={styles.itemTitle}>
                {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
              </h6>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default CarouselComponent;
