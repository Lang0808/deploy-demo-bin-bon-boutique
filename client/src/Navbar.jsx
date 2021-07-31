import React, {Suspense} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/NavLink";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavigationBar extends React.Component{
    render(){
        return (
            <Navbar expand="lg" bg="info"  fluid>
                <Container> 
                    <Navbar.Brand to ="/">BinBonBoutique</Navbar.Brand>
                    <Navbar.Toggle aria-controls="collapse-navbar"/>
                    <Navbar.Collapse id="collapse-navbar">
                        <Nav className="me-auto">
                            <NavLink href = "/">Trang chu</NavLink>
                            <NavDropdown title="Do nam" class="Dropdown">
                                <NavDropdown.Header>Chon do tuoi: </NavDropdown.Header>
                                <NavDropdown.Item>0-3</NavDropdown.Item>
                                <NavDropdown.Item>3-6</NavDropdown.Item>
                                <NavDropdown.Item>6-12</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Do nu" class="Dropdown">
                                <NavDropdown.Header>Chon do tuoi: </NavDropdown.Header>
                                <NavDropdown.Item>0-3</NavDropdown.Item>
                                <NavDropdown.Item>3-6</NavDropdown.Item>
                                <NavDropdown.Item>6-12</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink href="/All/1">Tat ca</NavLink>
                        </Nav>
                    </Navbar.Collapse>     
                </Container>
            </Navbar>
            
        
        )
    }
}

export default NavigationBar;