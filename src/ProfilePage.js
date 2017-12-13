import React, { Component } from 'react'

import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import NavbarLevel2 from './NavbarLevel2';
import {base_path} from './constants'


const Profile = ({children}) => (
  <div>
    <BreadcrumbsItem glyph='user' to={base_path+'/profile'}>
      Profile
    </BreadcrumbsItem>

    <h1>Profile</h1>
    <NavbarLevel2/>
  </div>
)

export default Profile

