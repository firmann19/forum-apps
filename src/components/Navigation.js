import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Container, Navbar } from 'react-bootstrap';
import Logo from '../assets/forumApp.png';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <section className="navigation">
      <Navbar bg="light border" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="rounded-4"
              src={Logo}
              height="40"
              width="40"
              alt="First slide"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Threads</Nav.Link>
              <Nav.Link href="/leaderboards">Leaderboards</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <img
                  className="rounded-5"
                  height="40"
                  width="40"
                  src={avatar}
                  alt={id}
                  title={name}
                />
              </Nav.Link>
              <Nav.Link>
                <button
                  className="border-0 bg-transparent mt-2"
                  type="button"
                  onClick={signOut}
                >
                  Sign out
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
