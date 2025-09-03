import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TwoSlideCarousel.module.scss";
import { Col ,Container , Row ,Button } from "react-bootstrap";

const slides = [
  {
    id: 1,
    content: (
      <div className={[styles.slideContent, ].join(' ')}       style={{
        backgroundImage: "url('/public/images/slider-1-img-01.jpg')",

      }}>

        <Container>

      <Row>
<Col md={6} className={styles.textBox}>

<h1>Cell Phone <br /> Accessories 2022</h1>
<h4>BETTER BUILD, COMFORT SOUND & CLEARER <br /> CALLS</h4>
<Button className={styles.Shop_button}>Shop Now</Button>

</Col>
      </Row>

        </Container>


     </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={styles.slideContent} 
       style={{
        backgroundImage: "url('/public/images/banner-4.jpg')",

      }}>

                <Container>

      <Row>
<Col md={6} className={styles.textBox}>

<h1>Cell Phone <br /> Accessories 2022</h1>
<h4>BETTER BUILD, COMFORT SOUND & CLEARER <br /> CALLS</h4>
<Button className={styles.Shop_button}>Shop Now</Button>

</Col>
      </Row>

        </Container>
      </div>
    ),
  },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Carousel: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = (page % slides.length + slides.length) % slides.length;

  return (
    <div className={styles.carouselWrapper}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className={styles.slide}
          custom={direction}
          variants={{
            enter: (dir: number) => ({
              x: dir > 0 ? 300 : -300,
              opacity: 0,
            }),
            center: { x: 0, opacity: 1 },
            exit: (dir: number) => ({
              x: dir < 0 ? 300 : -300,
              opacity: 0,
              zIndex: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {slides[index].content}
        </motion.div>
      </AnimatePresence>


      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setPage([i, i > index ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
