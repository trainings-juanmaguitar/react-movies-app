import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon, NavDropdown, Dropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import SearchForm from './SearchForm'

import './Navbar.css'

const _Navbar = ({ addSearch, onAuth, onLogout, user }) => {
  let loginBlock
  
  if (user && Object.keys(user).length) {
    loginBlock = (
      <NavDropdown title={`Logged as ${user.email}`} id="basic-nav-dropdown" >
        <LinkContainer to='/profile'>
          <MenuItem>
            <i className='fa fa-user' /> Profile
          </MenuItem>  
        </LinkContainer>
        <MenuItem eventKey="login" onSelect={ onLogout }>
          <i className='fa fa-sign-out' /> Logout
        </MenuItem>  
      </NavDropdown>
    )
  } else {
    loginBlock = (
      <NavItem onSelect={ onAuth }  eventKey="logout" >
        <i className='fa fa-google' /> Login con Google
      </NavItem>
    )  
  }
    
  return (
    <Navbar className="Navbar" fixedTop>
      <Navbar.Header>
        <LinkContainer to='/'>
          <Navbar.Brand className="Navbar__app-title">MovieFinder</Navbar.Brand>
        </LinkContainer>
      </Navbar.Header>
      <Navbar.Form className="Navbar__search-form" pullLeft>
          <SearchForm addSearch={ addSearch } />
      </Navbar.Form>
      <Nav pullRight>
        <NavDropdown title="Categories" id="basic-nav-dropdown" >
          <LinkContainer to='/popular'>
            <MenuItem><Glyphicon glyph="flash" /> Popular Movies</MenuItem>
          </LinkContainer>
          <LinkContainer to='/upcoming'>
            <MenuItem><Glyphicon glyph="film" /> Upcoming Movies</MenuItem>
          </LinkContainer>
          <LinkContainer to='/now_playing'>
            <MenuItem><Glyphicon glyph="expand" /> Now Playing Movies</MenuItem>
          </LinkContainer>
          <LinkContainer to='/top_rated'>
            <MenuItem><Glyphicon glyph="thumbs-up" /> Top Rated Movies</MenuItem>
          </LinkContainer>
        </NavDropdown>
        { loginBlock }
      </Nav>
    </Navbar>
  )
}

export default _Navbar;
