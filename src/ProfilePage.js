import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import FirstLevelNav from './FirstLevelNav';
import {base_path} from './constants'
import ToolsPage from './ToolsPage'
import {connect} from 'react-redux'
import {getTopLevelNavDetails} from './actions/index'

const NavItem = ({to,...props}) => (
  <LinkContainer to={to||base_path}>
    <NItem {...props}></NItem>
  </LinkContainer>
)

class Profile extends Component {
  
  componentWillMount(){
      console.log(this.props.match.params.id)
      this.props.getTopLevelNavDetails(this.props.match.params.id)    

  }
  
  renderApplicationList(){
    return this.props.resources.data.applications.map(application=>{
      return(<NavItem  to={`${base_path}${application.url}`}>
        {application.title}
      </NavItem>)
    })

  }
  render(){
    if (!this.props.resources)
    {
      return <div>Loading...</div>
    }
    console.log(this.props.resources)
    return(
    <div>
      <BreadcrumbsItem glyph='user' to={base_path+'Developer Resources'}>
        {this.props.resources.title}
      </BreadcrumbsItem>
      <FirstLevelNav firstLevelNav= {this.props.resources} />        
      <Switch>
        <Route path={`${base_path}/Developer Resources/tools`} component={ToolsPage} />
        <Route render={()=>this.renderApplicationList()}/>            
      </Switch>
    </div>
    )
  }
}

function mapStateToProps(state){
    return {resources:state.topLevelResources}
}

export default connect(mapStateToProps,{getTopLevelNavDetails})(Profile);


