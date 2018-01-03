import React, {Component} from 'react';
import {Navbar,Nav, NavItem} from 'react-bootstrap'
export default class Header extends Component{
    
    render(){
        return (
            <div>
                <Navbar inverse collapseOnSelect>                
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem>
                            Search
                            </NavItem>
                            <NavItem >
                            Sign In
                            </NavItem>                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            
        );
    }

}