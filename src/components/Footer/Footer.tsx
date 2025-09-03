
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.topFeatures}>
        <Container>
          <Row className="text-center">
            <Col xs={12} md={3} className={styles.featureBox}>
              <h6><i className="fas fa-shipping-fast me-2"></i> Free Delivery</h6>
              <p>On Orders Of $200+</p>
            </Col>
            <Col xs={12} md={3} className={styles.featureBox}>
              <h6><i className="fas fa-hand-holding-usd me-2"></i> Cash On Delivery</h6>
              <p>COD Available</p>
            </Col>
            <Col xs={12} md={3} className={styles.featureBox}>
              <h6><i className="fas fa-gift me-2"></i> Free Gift Box</h6>
              <p>Buy A Gift</p>
            </Col>
            <Col xs={12} md={3} className={styles.featureBox}>
              <h6><i className="fas fa-headset me-2"></i> Free Support 24/7</h6>
              <p>Online 24hrs A Day</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.newsletter}>
        <Container className="text-center">
          <p>
            Trade Alert - Delivering the latest product trends and industry news
            straight to your inbox.
          </p>
          <Form className={styles.newsForm}>
            <Form.Control
              type="email"
              placeholder="Your Email Address"
              className="me-2"
            />
            <Button variant="warning">Subscribe</Button>
          </Form>
        </Container>
      </div>

      
      <div className={styles.mainFooter}>
        <Container>
          <Row>
           
            <Col xs={12} md={3} className="mb-4">
              <h5>Contact Us</h5>
              <p>
                <i className="fas fa-map-marker-alt me-2"></i> The Barn, Ullenhall, England
              </p>
              <p>
                <i className="fas fa-phone me-2"></i> +123.456.789
              </p>
              <p>
                <i className="fas fa-envelope me-2"></i> demo@example.com
              </p>
              <div className={styles.socials}>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-google-plus-g"></i></a>
              </div>
            </Col>

           
            <Col xs={6} md={3} className="mb-4">
              <h5>Products</h5>
              <ul className={styles.links}>
                <li>Prices Drop</li>
                <li>New Products</li>
                <li>Stores</li>
                <li>Best Sales</li>
                <li>My Account</li>
              </ul>
            </Col>

            
            <Col xs={6} md={3} className="mb-4">
              <h5>Our Company</h5>
              <ul className={styles.links}>
                <li>Legal Notice</li>
                <li>Terms Of Use</li>
                <li>About Us</li>
                <li>Secure Payment</li>
                <li>Delivery</li>
              </ul>
            </Col>

        
            <Col xs={12} md={3} className="mb-4">
              <h5>Your Account</h5>
              <ul className={styles.links}>
                <li>Addresses</li>
                <li>Credit Slips</li>
                <li>Orders</li>
                <li>Personal Info</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      
      <div className={styles.bottomBar}>
        <Container className="text-center">
          <p>
            © {new Date().getFullYear()} YourStore. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
