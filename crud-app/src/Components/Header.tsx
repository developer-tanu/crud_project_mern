import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
   
    <React.Fragment>

    <header>
       
      <Navbar

        bg="primary"

        variant="light"

        expand="lg"

        // collapsOnSelect

      >

        <Container>

          <Nav>

            <LinkContainer to="/">

              <Nav.Link>

                <i className="fas fa-home fa-mb"></i> Home

              </Nav.Link>

            </LinkContainer>

          </Nav>

          <Navbar.Brand>CRUD APPLICATION</Navbar.Brand>

          <Nav>

            <LinkContainer to="/adduser">

              <Nav.Link>

              <i className="fas fa-user-plus"></i> Add User

              </Nav.Link>

            </LinkContainer>

          </Nav>

        </Container>

      </Navbar>

    </header>

  </React.Fragment>




  );
};

export default Header;
