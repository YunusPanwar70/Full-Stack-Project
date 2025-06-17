import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
function Header() {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        });
        localStorage.removeItem('auth');
        toast.success('Logout successfuly');
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">🛒 Ecommerce</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category" className="nav-link">Category</Link>
                            </li>
                            {
                                !auth.user ? (
                                    <>
                                        <li className="nav-item">
                                            <Link to="/register" className="nav-link">Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link">Login</Link>
                                        </li>
                                    </>) : (
                                    // DropDown
                                    <>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {auth?.user?.name}
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <li><Link to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} class="dropdown-item" href="#">Dashboard</Link></li>
                                                <li><Link onClick={handleLogout} to="/login" className="dropdown-item">Logout</Link></li>
                                            </ul>
                                        </li>
                                    </>)

                            }
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">Cart (0)</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;