import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import logo from '../../images/logo.png';



const Header = () => {
    return(
        <div>

            <Container fluid id= "modified-container" >
                <div className = "logo" >
                    <Image src = {logo} className="img-responsive" />
                </div>
            </Container>
            <div className="dropdown-divider" />

        </div>
    );

}


export default Header
