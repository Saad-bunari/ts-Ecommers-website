import React, { useEffect, useRef } from "react";
import { Card, Spinner, Container, Button } from "react-bootstrap";
import { motion, useMotionValue, animate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import { fetchProducts } from "../../features/products/productsSlice";
import styles from "./TwoRowLoopCarousel.module.scss";

//hooks 
import useIsDesktop from "../../hooks/useIsDesktop";

interface ClassesProp {
  root?: string;
  header?: string;
  divider?: string;
  heading?: string;
  controls?: string;
  btn?: string;
  viewport?: string;
  inner?: string;
  row?: string;
  card?: string;
  addToCardOptn?: string;
  body?: string;
  imgWrap?: string;
  title?: string;
  price?: string;
  content?: string;
}

interface TwoRowLoopCarouselProps {
  title?: React.ReactNode;
  rows?: number;
  cardsPerRow?: number;
  classes?: ClassesProp;   // 🔹 custom classes
}

const TwoRowLoopCarousel: React.FC<TwoRowLoopCarouselProps> = ({ 
  title, 
  rows = 2,
  cardsPerRow = 4,
  classes = {}          // default empty object
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items = [], loading } = useSelector((s: RootState) => s.products);

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);


  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!items.length) dispatch(fetchProducts());
  }, [dispatch, items.length]);

  useEffect(() => {
    if (!containerRef.current) return;
    const calcAndSet = () => {
      const totalWidth = containerRef.current!.scrollWidth / 4;
      x.set(-totalWidth);
    };
    calcAndSet();
    window.addEventListener("resize", calcAndSet);
    const unsub = x.on("change", (latest) => {
      if (!containerRef.current) return;
      const totalWidth = containerRef.current.scrollWidth / 4;
      if (latest <= -totalWidth * 3) x.set(-totalWidth);
      if (latest >= 0) x.set(-totalWidth * 2);
    });
    return () => {
      unsub();
      window.removeEventListener("resize", calcAndSet);
    };
  }, [x, items.length]);

  const handleMove = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.scrollWidth / (items.length * 4);
    const moveBy = cardWidth * 2;
    const current = x.get();
    animate(x, dir === "left" ? current + moveBy : current - moveBy, {
      type: "spring",
      stiffness: 200,
      damping: 30,
    });
  };

  if (loading) return <div className={styles.loading}><Spinner animation="border" /></div>;
  if (!items.length) return <div className={styles.noItems}>No products found</div>;

  const loopedItems = [...items, ...items, ...items, ...items];
  const distributedRows: any[][] = Array.from({ length: rows }, () => []);
  loopedItems.forEach((it, idx) => {
    distributedRows[idx % rows].push(it);
  });

  return (
    <Container className={`${styles.root} ${classes.root || ""}`}>
      <div className={`${styles.header} ${classes.header || ""}`}>
        {title && <h3 className={`${styles.heading} ${classes.heading || ""}`}>{title}</h3>}
        <div className={`${styles.divider} ${classes.divider || ""}`}></div>
        <div className={`${styles.controls} ${classes.controls || ""}`}>
          <button className={`${styles.btn} ${classes.btn || ""}`} onClick={() => handleMove("left")}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className={`${styles.btn} ${classes.btn || ""}`} onClick={() => handleMove("right")}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>

      <motion.div className={`${styles.viewport} ${classes.viewport || ""}`}>
        <motion.div
          ref={containerRef}
          className={`${styles.innerTwoRows} ${classes.inner || ""}`}
          drag="x"
          style={{ x, cursor: "grab" }}
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.05}
        >
          {distributedRows.map((row, rowIndex) => (
            <div key={rowIndex} className={`${styles.row} ${classes.row || ""}`}>
              {row.map((it, idx) => (
                <Card
                  key={`${it.id}-r${rowIndex}-${idx}`}
                  className={`${styles.card} ${classes.card || ""}`}
                  
                  style={isDesktop ? { flex: `0 0 calc(${100 / cardsPerRow}% - 10px)` } : {}}
                >
                  <div className={`${styles.AddTocardOptn} ${classes.addToCardOptn || ""}`}>
                    <Button>Add To Cart</Button>
                  </div>
                  <Card.Body className={`${styles.body} ${classes.body || ""}`}>
                    <div className={`${styles.imgWrap} ${classes.imgWrap || ""}`}>
                      <Card.Img src={it.img} alt={it.title} />
                    </div>

                    <div className={`${styles.content} ${classes.content || ""}`}>
                      <Card.Title className={`${styles.title} ${classes.title || ""}`}>
                        {it.title}
                      </Card.Title>
                      {it.price && (
                        <div className={`${styles.price} ${classes.price || ""}`}>
                          ${it.price}
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default TwoRowLoopCarousel;
