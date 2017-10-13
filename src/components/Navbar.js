import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const _Navbar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Movie Collection</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to='/popular'>
        <NavItem eventKey={1} href="#">Popular Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/upcoming'>
        <NavItem eventKey={2} href="#">Upcoming Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/now_playing'>
        <NavItem eventKey={3} href="#">Now Playing Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/top_rated'>
        <NavItem eventKey={4} href="#">Top Rated Movies</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default _Navbar;
