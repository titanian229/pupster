import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                Pupster
            </Navbar.Brand>
            <Nav defaultActiveKey="/home" activeKey={props.location.pathname}>
                {/* <Nav.Brand>
                    Pupster
                </Nav.Brand> */}
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/discover">Discover</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/search">Search</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Browse">Browse</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
