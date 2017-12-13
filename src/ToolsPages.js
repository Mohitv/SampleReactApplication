import React, { Component } from 'react'

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import NavbarLevel2 from './NavbarLevel2';
import {base_path} from './constants'

const tools_path = base_path+'/profile/tools'

export const Events = ({children}) => (
  <div>
    <BreadcrumbsItem glyph='calendar' to={tools_path+'/events'}>
      Events
    </BreadcrumbsItem>
    <h2>Events tool Page</h2>
    <NavbarLevel2/>
  </div>
)

export const Statistics = ({children}) => (
  <div>
    <BreadcrumbsItem glyph='signal' to={tools_path+'/statistics'}>
      Statistics
    </BreadcrumbsItem>
    <h2>Statistics tool Page</h2>
    <NavbarLevel2/>
  </div>
)

export const Settings = ({children}) => (
  <div>
    <BreadcrumbsItem glyph='wrench' to={tools_path+'/settings'}>
      Settings
    </BreadcrumbsItem>
    <h2>Settings tool Page</h2>
    <NavbarLevel2/>
  </div>
)

