import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51LGG4vLyxH1DD6TeaoiIUeWo7Ubme7EyeZ8fNq4OZLyaUK0HSwo3DzcDNSm1RMz0okvHNAFHMyor9xCEtthb3rnI00qoDHOa7v'
    const onToken = token => { 
    console.log(token); 
    alert('Payment Successful'); }

    return (
        <StripeCheckout 
        label="Pay Now"
        name="Chad Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton