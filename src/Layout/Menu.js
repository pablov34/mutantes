import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar,  Nav} from 'react-bootstrap';

function Menu({data}){
    return(
        <Navbar collapseOnSelect bg="light" expand="lg" style={{marginBottom:'10px'}}>
        <Navbar.Brand as={Link} to={`/`} href="#home"><i class="fa fa-fw fa-home"></i>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {data ? data.map((opcion,index)=><Nav.Link as={Link} key={index} to={opcion.path}>{opcion.label}</Nav.Link>) : "Loading..."}
            </Nav>
        </Navbar.Collapse>
        </Navbar>

            
    )
}

export default Menu