import React, {Component} from 'react';
import {Navbar,
        Nav,
        NavItem,
        Grid,
        Row,Col} from 'react-bootstrap'
export default class Header extends Component{
    
    render(){
        return (
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
            </Navbar.Header>                
            <Navbar.Collapse>
            <Grid>
                <Row className="show-grid">
                <Col xs={6} md={3}>
                <Nav><NavItem>Link1</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link2</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link3</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link4</NavItem></Nav>
                </Col>              
                </Row>
                <Row className="show-grid">
                <Col xs={6} md={3}>
                <Nav><NavItem>Link1</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link2</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link3</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link4</NavItem></Nav>
                </Col>              
                </Row>
                <Row className="show-grid">
                <Col xs={6} md={3}>
                <Nav><NavItem>Link1</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link2</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link3</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link4</NavItem></Nav>
                </Col>              
                </Row>
                <Row className="show-grid">
                <Col xs={6} md={3}>
                <Nav><NavItem>Link1</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link2</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link3</NavItem></Nav>
                </Col>
                <Col xs={6} md={3}>
                <Nav><NavItem>Link4</NavItem></Nav>
                </Col>              
                </Row>
            </Grid>
            </Navbar.Collapse>
        </Navbar>
        );
    }

}