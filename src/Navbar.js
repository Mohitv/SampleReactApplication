import React, { Component } from 'react'
import {
  Glyphicon,
  Navbar,
  Nav,
  NavDropdown,
  NavItem as NItem,
  MenuItem as MItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import {base_path} from './constants'


const NavItem = ({to,...props}) => (
  <LinkContainer to={to||base_path}>
    <NItem {...props}></NItem>
  </LinkContainer>
)


const MenuItem = ({to,...props}) => (
  <LinkContainer to={to||base_path}>
    <MItem {...props}></MItem>
  </LinkContainer>
)


const TheNavbar = ({children}) => (
  <Navbar inverse collapseOnSelect>

    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
          Halo
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>

        <NavItem eventKey={1} to={base_path}>
          <Glyphicon glyph="home" /> Home
        </NavItem>
        <NavItem eventKey={2} to={base_path+'/profile'}>
          <Glyphicon glyph="user" /> Profile
        </NavItem>
        
      </Nav>

    </Navbar.Collapse>
  </Navbar>
)

export default TheNavbar

