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
  <Navbar.Collapse>
  <Nav pullRight>
  
          <NavItem eventKey={1} to={base_path+'/profile/tools/events'}>
            <Glyphicon glyph="Events" /> Events
          </NavItem>
          <NavItem eventKey={2} to={base_path+'/profile/tools/statistics'}>
            <Glyphicon glyph="Statistics" /> Statistics
          </NavItem>
          <NavItem eventKey={3} to={base_path+'/profile/tools/settings'}>
            <Glyphicon glyph="Settings" /> Settings
          </NavItem>
        </Nav>
  </Navbar.Collapse>
  </Navbar>
)

export default TheNavbar

