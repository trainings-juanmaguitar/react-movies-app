import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import SearchForm from './SearchForm'

import './Navbar.css'

const _Navbar = props => (
  <Navbar className="Navbar">
    <Navbar.Header>
      <LinkContainer to='/'>
        <Navbar.Brand className="Navbar__app-title">MovieFinder</Navbar.Brand>
      </LinkContainer>
    </Navbar.Header>
    <Nav>
      <LinkContainer to='/popular'>
        <NavItem><Glyphicon glyph="flash" /> Popular Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/upcoming'>
        <NavItem><Glyphicon glyph="film" /> Upcoming Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/now_playing'>
        <NavItem><Glyphicon glyph="expand" /> Now Playing Movies</NavItem>
      </LinkContainer>
      <LinkContainer to='/top_rated'>
        <NavItem><Glyphicon glyph="thumbs-up" /> Top Rated Movies</NavItem>
      </LinkContainer>
    </Nav>
    <Navbar.Form className="Navbar__search-form" pullRight>
      <SearchForm addSearch={ props.addSearch } />
    </Navbar.Form>
  </Navbar>
)

export default _Navbar;
