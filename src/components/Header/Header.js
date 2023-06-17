import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/bag_logo.png';
import './Header.css';
const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav>
            <div className='nav-bar'>
                <img onClick={() => navigate('/')} src={logo} alt="" height={300} />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    {
                        user ?
                            <button onClick={handleSignOut} className='sign-out-btn'>Sign Out</button>
                            :
                            <Link to="/SignIn">Sign in</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;