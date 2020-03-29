import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from '../../actions'
import { Link, Redirect } from "react-router-dom"
import PayCredit from '../modules/payment/paycredit'
import { withRouter } from 'react-router'

class Header extends Component {
    
    constructor(props) {
        super(props)
        this.logOutUser = this.logOutUser.bind(this)
    }
    logOutUser() {
        this.props.logOut();
        this.props.history.push('/')
    }

    updateRoute() {
        switch (this.props.auth) {
            case false:
                return <Redirect to="/"></Redirect>;
            default:
                return typeof(this.props.auth)==='object'? <Redirect to="/surveys"></Redirect>:'';

        }
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still Deciding';
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return [
                    <li key="0" className="valign-wrapper">
                        <img width="60px" className="circle responsive-img valign-wrapper" src={this.props.auth.displayPicture} />
                    </li>,
                    <li key="1" ><a >Welcome {this.props.auth.displayName}!</a> </li>,
                    <li key="8"><a href='/'>Dashboard</a></li>,
                    <li key="4"><a href='#'>Credits: {this.props.auth.credits}</a></li>,
                    <li key="5" style={{ 'paddingLeft': '20px' }}><PayCredit></PayCredit></li>,
                    <li key="7"><a onClick={this.logOutUser}>Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="nav-wrapper teal darken-1">
                        <Link to={this.props.auth ? '/surveys' : '/'}
                            className="brand-logo">Emaily
                        </Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    {this.renderContent()}
                </ul>
                {this.updateRoute()}
            </header>
        );
    }
}

function mapToStateProps({ auth }) {
    return { auth };
}

export default connect(mapToStateProps, actions)(withRouter(Header));