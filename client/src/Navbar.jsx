import React from 'react'
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
                <Container id="NavbarContainer"> 
                    <Navbar.Brand to ="/">BinBonBoutique</Navbar.Brand>
                    <Navbar.Toggle aria-controls="collapse-navbar"/>  
                    <Navbar.Collapse id="collapse-navbar">
                        <Nav className="me-auto">
                            <NavLink href = "/">Trang chủ</NavLink>
                            <NavDropdown title="Đồ nam" class="Dropdown">
                                <NavDropdown.Header>Chọn độ tuổi </NavDropdown.Header>
                                <NavLink href="All/1?gender=male&age=0-3">0-3</NavLink>
                                <NavLink href="All/1?gender=male&age=3-6">3-6</NavLink>
                                <NavLink href="All/1?gender=male&age=6-9">6-9</NavLink>
                            </NavDropdown>
                            <NavDropdown title="Đồ nữ" class="Dropdown">
                                <NavDropdown.Header>Chọn độ tuổi: </NavDropdown.Header>
                                <NavLink href="All/1?gender=female&age=0-3">0-3</NavLink>
                                <NavLink href="All/1?gender=female&age=3-6">3-6</NavLink>
                                <NavLink href="All/1?gender=female&age=6-9">6-9</NavLink>
                            </NavDropdown>
                            <NavLink href="/All/1">Tất cả</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar;