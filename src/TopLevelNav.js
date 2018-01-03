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
import {withRouter} from 'react-router-dom'
import {base_path} from './constants'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {getTopLevelNavDetails} from './actions/index'

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

class TopLevelNav extends Component{
  renderTopLevelNav (){
    return this.props.topLevelNavs.map(topLevelNav=>{
      return(<NavItem to={base_path + topLevelNav.url} eventKey={topLevelNav.index}>
        {topLevelNav.title}
      </NavItem>)
    })
  } 

  render(){
    return(
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">
                  Halo
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight bsStyle="pills">
                {this.renderTopLevelNav()}
              </Nav>
            </Navbar.Collapse>              
          </Navbar>
       
    )        
  }
}

function mapStateToProps(state){
  return{
    topLevelNavs:state.topLevelNavs
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTopLevelNavDetails},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TopLevelNav)
