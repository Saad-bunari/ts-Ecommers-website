import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Banner.module.scss"

const Banner: React.FC = () => {
  return (
    <section className=" bg-light">
      <Container className={styles.bannerManinContainer}> 
        <Row className="text-center">

<Col md={5}>

<div className={styles.imagesforbanner}>

<img src="/public/images/baner-4.jpg" alt="" />

</div>

</Col>
<Col md={4}>

<div className={styles.imagesforbanner}>
  
<img src="/public/images/baner-2.jpg" alt="" />
</div>

</Col>
<Col md={3} className={["d-flex", "justify-content-center", "align-items-center"].join(" ")}
>

<Container fluid>
   <Row className={styles.smallbanner}>

<Col md={12} className={styles.towImagesBanner}>
  
  <img src="/public/images/baner-1.jpg" alt="" />

</Col>

<Col md={12} className={styles.towImagesBanner}>
  
  <img src="/public/images/baner-3.jpg" alt="" />

</Col>

   </Row>
</Container>


</Col>


        </Row>
      </Container>
    </section>
  );
};

export default Banner;
