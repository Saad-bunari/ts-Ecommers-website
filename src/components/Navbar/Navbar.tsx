import { useState } from "react";

import styles from "./navbar.module.scss"; 
import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SignInModal from "../SignInModal/SignInModal";
import SearchBar from "../SearchBar/SearchBar";
import Mainnavbar from "../Mainnavbar/Mainnavbar";



function Navbar() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div>
      <section className={styles["topbar-main-sec"]}>
        <Container className={styles["topbar"]}>
          <Row>
            <Col md={6} className={styles["topbar-child-1"]}>
              <Nav className="">
                <Nav.Link>Free Shipping on Orders $50+</Nav.Link>
                <Nav.Link>Call us : +123.456.789</Nav.Link>
                <Nav.Link>email :<span>demo@example.com</span></Nav.Link>
              </Nav>
            </Col>

            <Col md={6} className={styles["topbar-child-2"]}>
              <Nav className="">
                <Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      My Account 
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles["sign-in-dropdown"]}>
                      <Dropdown.Item>My Account</Dropdown.Item>
                      <Dropdown.Item>Checkout</Dropdown.Item>
                      <Dropdown.Item onClick={() => setShowSignIn(true)}>
                        Sign In
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>

                <Nav.Link>
                  <CurrencySelector />
                </Nav.Link>

                <Nav.Link>
                  <LanguageSelector />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles["center-main-sec"]}>
        
        <Container className={styles["center-navbar"]}>
          <Row className={styles.nav_sec_meadia}>
       
       <Col md={2} className={[styles.logo_meadia, 'p-0'].join(' ')}>
       
        <div className={styles["logo"]}>

            <img src="/images/logo.png" alt="logo" />


       </div>

       </Col>
       <Col md={8} className={[styles.sernhbarMeada,  'p-0' ].join(' ')}>
       
              <div className={styles["serch-bar"]}>

        <SearchBar />

       </div>
       
       </Col>
       <Col md={2} className={[styles.card_iocn_meada, 'p-0'].join(' ')}>
       
              <div className={styles["card"]}>

           <i className="fa-solid fa-cart-shopping"></i>

       </div>
       
       </Col>
            


          </Row>
        </Container>

      </section>

      <section className={styles["Navbar-main-sec"]}>


    <Mainnavbar />

      </section>

      <SignInModal show={showSignIn} onHide={() => setShowSignIn(false)} />
    </div>
  );
}

export default Navbar;
