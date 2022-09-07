import React from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import SignInAndSignUpPage from '../../pages/signin-and-signup-page/signin-and-signup-page.component'

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.conponent";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";


const Header = ({ currentUser, hidden }) => (
    <div>
        <div className="header">
                <Link className="logo-container" to='/'>
                    <Logo className="logo" />
                </Link>
            <div className="options">
                    <Link className="option" to='/shop'>SHOP</Link>
                    <Link className="option" to='/contact'>CONTACT</Link>
                    {
                    currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT </div>) 
                    : (<Link className="option" to='/signin'>SIGN IN</Link>)
                    }
                    <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
        <Routes> 
            <Route exact path='/signin' element={currentUser ? (<Navigate to ='/' />) : (<SignInAndSignUpPage />)} />
        </Routes>
        </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);