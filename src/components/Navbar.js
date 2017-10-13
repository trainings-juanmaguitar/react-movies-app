import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import SearchForm from './SearchForm'

import './Navbar.css'

const _Navbar = () => (
  <Navbar>
    <Navbar.Header>
      <LinkContainer to='/'>
        <Navbar.Brand className="title-app">
          MovieFinder
        </Navbar.Brand>
      </LinkContainer>
    </Navbar.Header>
    <Nav>
      <LinkContainer to='/popular'>
        <NavItem eventKey={1}>Popular Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/upcoming'>
        <NavItem eventKey={2}>Upcoming Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/now_playing'>
        <NavItem eventKey={3}>Now Playing Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/top_rated'>
        <NavItem eventKey={4}>Top Rated Movies</NavItem>
      </LinkContainer>
    </Nav>
    <Navbar.Form pullLeft>
      <SearchForm />
    </Navbar.Form>
  </Navbar>
)

export default _Navbar;
