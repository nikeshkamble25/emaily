import React, { Component } from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import _ from 'lodash'
import * as actions from '../../../actions'
import { withRouter } from 'react-router'
import M from 'materialize-css'

class SurveyReview extends Component {
    renderReview() {
        return _.map(formFields, ({ label, name }) => {
            return <div key={name}>
                <div><label>{label}</label></div>
                <div>{this.props.formValues[name]}</div>
            </div>
        })
    }

    showSurveyError() {
        if (this.props.surveyError) {
            M.toast({ html: 'To add survey you must have more that 4 credits! Please add credit', classes: "red" })
        }
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col s12 m1">
                </div>
                <div className="col s12 m10 card">
                    <div>
                        <div className="row">
                            <div className="col s12 m1">

                            </div>
                            <div className="col s12 m10">
                                <h4>Please Confirm Your Entries!</h4>
                                {this.showSurveyError()}
                                {this.renderReview()}
                                <br></br>
                                <button className="red btn-flat left white-text" onClick={this.props.onCancel}>
                                    Back<i className="material-icons right">cancel</i>
                                </button>
                                <button type="submit"
                                    onClick={() => {
                                        if (this.props.auth.credits < 5) {
                                            M.toast({ html: 'To add survey you must have more that 4 credits! Please add credit', classes: "red" })
                                            return;
                                        }
                                        this.props.submitSurvey(this.props.formValues, this.props.history)
                                    }}
                                    className="green btn-flat right white-text">
                                    Send Survey<i className="material-icons right">send</i>
                                </button>
                            </div>
                            <div className="col s12 m1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

function mapStateToProp(state) {
    return {
        formValues: state.form.surveyForm.values,
        surveyError: state.surveys.error,
        auth: state.auth
    };
}

export default connect(mapStateToProp, actions)(withRouter(SurveyReview));