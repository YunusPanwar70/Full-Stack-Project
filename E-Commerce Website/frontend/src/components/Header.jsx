import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';
function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a to="/" class="navbar-brand" href="#">Ecommerce</a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a to="/" class="nav-link" href="#">Home</a>
                            </li>

                            <li class="nav-item">
                                <a to="/category" class="nav-link" href="#">category</a>
                            </li>

                            <li class="nav-item">
                                <a to="/register" class="nav-link" href="#">Register</a>
                            </li>

                            <li class="nav-item">
                                <a to="/login" class="nav-link" href="#">Login</a>
                            </li>

                            <li class="nav-item">
                                <a to="/cart" class="nav-link" href="#">Cart (0)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;