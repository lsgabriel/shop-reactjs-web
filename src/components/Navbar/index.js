import React from "react";
import {Nav} from './styles';

const Navbar = () => {
    return (
        <Nav>
            <nav class="navbar navbar-expand-lg container bg-warning" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">StoreStyle</a>
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
                                <a class="nav-link" href="#">Carrinho</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Conta</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Nav>    
    );
}

export default Navbar;