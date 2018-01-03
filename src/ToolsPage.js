import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Panel,Grid,Row,Col } from 'react-bootstrap'

import { Events, Statistics, Settings } from './ToolsPages'

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import {base_path} from './constants'
import NavbarLevel2 from './NavbarLevel2';

const Tools = ({children}) => (
  <div>
    <BreadcrumbsItem glyph='cog' to={base_path+'/Developer Resources/tools'}>
      <b> Tools</b>
    </BreadcrumbsItem>
    <Grid>
      <Row>
        <Col xs={4} md={2}><NavbarLevel2/></Col>
        <Col xs={6} md={4}>
          <Switch>
            <Route exact path={`${base_path}/Developer Resources/tools/events`} component={Events} />
            <Route exact path={`${base_path}/Developer Resources/tools/statistics`} component={Statistics} />
            <Route exact path={`${base_path}/Developer Resources/tools/settings`} component={Settings} />
            <Route render={()=><b>Choose tool from menu</b>}/>
          </Switch>
        </Col>
      </Row>
    </Grid>  
        
     
  
  </div>
)

export default Tools
