import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import * as actions from '../../../actions'
import { connect } from "react-redux";


class PayCredit extends Component {
    handleToken(token) {
        this.props.handleToken(token);
    }
    render() {
        return (
            <StripeCheckout
                amount={50000}
                currency="INR"
                token={token => this.handleToken(token)}
                description="Rs 500 for 5 email credits"
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}
export default connect(null, actions)(PayCredit);