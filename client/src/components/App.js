import React, { Component } from 'react';
import Header from './master/header';
import Footer from './master/footer';
import Main from './master/main';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
   
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchSurveys();
    }
    render() {
        return (<BrowserRouter>
            <div>
                <div className="container-fluid">
                    <div className="Site">
                        <Header />
                        <Main />
                        <Footer />
                    </div>
                </div>
            </div>
        </BrowserRouter>
        )
    }
}
export default connect(null, actions)(App);