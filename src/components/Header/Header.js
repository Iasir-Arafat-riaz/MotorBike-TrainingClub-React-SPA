import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push("/home");
  };
  return (
    <div className="text-center">
      <h1 onClick={goToHome} className="company-name ">
        Motorbike Training Club
      </h1>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="text-center"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Navbar.Brand>
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  to="home"
                  className="header-link"
                >
                  Home
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  to="categories"
                  className="header-link"
                >
                  Categories
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                {" "}
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  to="about"
                  className="header-link"
                >
                  About Us
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                {" "}
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  to="trainer"
                  className="header-link"
                >
                  Trainer
                </NavLink>
              </Navbar.Brand>
              <NavDropdown title="More Info" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                    to="./sponsors"
                    className="header-info"
                  >
                    Sponsors
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                    to="forum"
                    className="header-info"
                  >
                    Forum
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                    to="admission"
                    className="header-info"
                  >
                    Admission
                  </NavLink>
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
