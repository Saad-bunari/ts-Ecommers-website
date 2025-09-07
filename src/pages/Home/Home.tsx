import styles from "./Home.module.scss";
import TwoSlideCarousel from "../../components/TwoSlideCarousel/TwoSlideCarousel";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import Banner from "../../components/Banner/Banner";
import { Container ,Row ,Col  } from "react-bootstrap";
import RandomProducts from "../../components/RandomProducts/RandomProducts";

import Footer from "../../components/Footer/Footer";
import TwoRowLoopCarousel from "../../components/TwoRowLoopCarousel/TwoRowLoopCarousel";



function Home() {
  return (
    <div>
      <TwoSlideCarousel />
      <CarouselComponent variant="products" />
      <Banner />
     


     






<div className={styles.FeaturedProducts}> 

<TwoRowLoopCarousel title="Featured Products" rows={2} cardsPerRow={5} />

</div>

<div className={styles.NewArrival}>


<Container>
  <Row>

<Col md={3}  className={[styles.color, "p-0" ].join(' ')}>

<Container fluid className={styles.Table }>
  <Row className="g-3">



<Col md={12} >

<div className={styles.Banner_5}>
<img src="/public/images/baner.jpg  
" alt="baner-5" />

</div>


</Col>



<Col md={12}>

<Container fluid>
  
  <Row>

<Col md={12}>

<RandomProducts/>

</Col>


  </Row>

</Container>


</Col>
  </Row>
</Container>



</Col>



  
  <Col md={9} className={[ "p-0"].join(' ')}>  


<Container fluid className={styles.TwoCarisoulCombine}>
  <Row>
<Col md={12}>

<TwoRowLoopCarousel
  title={
    <>
      New Arrival <span className={styles.BestSeller}>Best Seller</span>
    </>
  }
      rows={3}
      cardsPerRow={2}
      classes={{
        imgWrap: styles.myImgWrap,
        root: styles.myRoot,
        body: styles.myBody,
        addToCardOptn: styles.myAddToCardOptn,
      }}
    />

</Col>
<Col md={12}>

<TwoRowLoopCarousel
  title="Our PRoducts"
  
  
      rows={1}
      cardsPerRow={3}
      classes={{
        root: styles.myRoot,
        body: styles.myBody,
        addToCardOptn: styles.myAddToCardOptn,
      }}
    />

</Col>
  </Row>
</Container>

  
</Col>

  </Row>
</Container>






</div>


<Footer />





    </div>
  );
}

export default Home;
