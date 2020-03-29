import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import LandingPage from '../modules/landingpage'
import Dashboard from '../modules/dashboard'
import SurveyNew from '../modules/survey/surveynew'

class Main extends Component {
    render() {
        return (<main className="Site-content blue-grey lighten-5">
           
                <div className="container-fluid">
                    <div className="row">
                        <div className="col l12 s12">

                            <Route path="/" exact component={LandingPage}></Route>
                            <Route path="/surveys" exact component={Dashboard}></Route>
                            <Route path="/surveys/new" exact component={SurveyNew}></Route>

                        </div>
                    </div>
                </div>
        </main>);
    }
}

export default Main;