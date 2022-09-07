import React from "react";
import './checkout.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const CheckoutPage = ({cartItems, total, user}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block"> 
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className="total">TOTAL: ${total}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 12/34 - CVC: (any three digit number) (four digit number for American express card)
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(CheckoutPage)