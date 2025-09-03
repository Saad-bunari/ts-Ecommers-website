import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Mainnavbar.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';


function Mainnavbar(): React.ReactElement {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      className={[styles.nav_main, 'p-0'].join(' ')}


      expand="lg"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand className={[styles.logo,].join('')}>Navbar</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav" className={[styles.navbar_clps,].join(' ')}>
          <Nav className={[styles.nav_clps_child,].join(' ')}>
            <Nav.Link className={[styles.button_dorp, 'p-0'].join(' ')} onClick={handleNavClick}>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span>
                    <i className="fa-solid fa-bars"></i>
                    All Categories
                  </span>

                </Dropdown.Toggle>

                <Dropdown.Menu className={[styles.dopdown_show,].join(' ')}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav.Link>




            <Nav.Link className="p-0" onClick={handleNavClick}>

              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Home <i className="fa-solid fa-angle-down"></i></button>
                <div className={styles.dropdownContent}>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

            </Nav.Link>

            <Nav.Link className="p-0" onClick={handleNavClick}>


              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Shop <i className="fa-solid fa-angle-down"></i></button>
                <div className={styles.dropdownContent}>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>


            </Nav.Link>


            <Nav.Link className="p-0" onClick={handleNavClick}>

              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Pages <i className=" fa-solid fa-angle-down"></i></button>
                <div className={styles.dropdownContent}>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

            </Nav.Link>


            <Nav.Link className="p-0" onClick={handleNavClick}>

              <div className={styles.dropdown}>
                <button className={[styles.dropbtn,].join(' ')}>Bolg<i className="fa-solid fa-angle-down"></i></button>
                <div className={[styles.dropdownContent,].join(' ')}>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

            </Nav.Link>

            <Nav.Link className={[styles.contact, 'p-0'].join(' ')} onClick={handleNavClick}>


              <div>
                Contact Us
              </div>

            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainnavbar;
