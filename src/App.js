import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Grid,Row,Col } from 'react-bootstrap'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { BreadcrumbsWithIcon, BreadcrumbsSimple } from './AppBreadcrumbs';
import TopLevelNav from './TopLevelNav'
import MainPage from './MainPage'
import ProfilePage from './ProfilePage'
import {base_path} from './constants'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  renderBreadcrumb(){
    console.log(window.location.pathname)
    if (window.location.pathname != '/')
    {
      console.log('Render breadcumb')      
      return <BreadcrumbsSimple/>
    }
  }
  render() {
    return (
      <div>
       <Header/>
        <BreadcrumbsItem glyph='home' to='{base_path}'>
            Home Page
        </BreadcrumbsItem>
        <Row>
          <TopLevelNav/>
          {this.renderBreadcrumb()}
        </Row>        
        <Grid>
            <Route exact path={`${base_path}`} component={MainPage} />
            <Route path={`${base_path}:id`} component={ProfilePage} />       
        </Grid>
        <Footer/>    
      </div>
    );
  }
}

export default App;
