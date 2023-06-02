import React from "react";
import {Nav} from './styles';

import Logo from '../../assets/logo.png';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Nav>
            <nav class="navbar navbar-expand-lg container bg-primary navbar-dark" >
                <div class="container-fluid">
                    <Link to='/'>
                        <a class="navbar-brand" href="#">
                            <img src={Logo} alt="Logo do Site" />
                        </a>
                    </Link>    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 "></ul>

                        <ul className="navbar-nav">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Procurar" />
                            </form>

                            <li class="nav-item">
                            <Link to='/cart'>
                                <a class="nav-link text-light" href="#">Carrinho</a>
                            </Link>                                
                            </li>

                            <li class="nav-item">
                            <Link to='/login'>
                                <a class="nav-link text-light" href="#">Conta</a>
                            </Link>    
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Nav>    
    );
}

export default Navbar;