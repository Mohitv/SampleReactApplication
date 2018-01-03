import React, { Component } from 'react'
import {
  Glyphicon,
  Navbar,
  Nav,
  Row,
  Col,
  Grid,
  NavDropdown,
  NavItem as NItem,
  MenuItem as MItem } from 'react-bootstrap'
import { LinkContainer,Link } from 'react-router-bootstrap'
import {base_path} from './constants'
import {connect} from 'react-redux'


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

class FirstLevNav extends Component {
  renderFirstLevelNav (){
    return this.props.firstLevelNav.data.nav.map(firstLevelNav=>{
      return(<NavItem to={base_path+firstLevelNav.url}>
        {firstLevelNav.title}
      </NavItem>)
    })
  }
  render(){
    return(
      <Grid>
        <Row>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">
                 {this.props.firstLevelNav.title}
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                {this.renderFirstLevelNav()}
              </Nav>
            </Navbar.Collapse>
           
          </Navbar>
        </Row>
      </Grid>
    )        
  }
}

export default FirstLevNav
