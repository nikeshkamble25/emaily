import { jquery } from 'jquery'
import React, { Component } from 'react'
import {
    reduxForm,
    Field

} from 'redux-form'
import { Link } from 'react-router-dom'
import surveyField from './surveyfields/surveyField'
import _ from 'lodash'
import validateEmails from '../../../utils/validateEmails'
import M from 'materialize-css'
import formField from './formFields'

let errors = {};

class SurveyForm extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    renderField() {
        return _.map(formField, ({ name, label, validation }) => {
            return <Field
                type="text"
                key={name}
                name={name}
                label={label}
                validation={validation}
                component={surveyField} />
        });
    }


    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col s12 m12">
                    <form onSubmit={
                        this.props.handleSubmit(this.props.onSurveySubmit)
                    }>
                        {this.renderField()}
                        <Link type="submit" to="/surveys" className="red btn-flat left white-text">
                            Cancel<i className="material-icons right">cancel</i>
                        </Link>
                        <button type="submit" className="teal btn-flat right white-text">
                            Submit<i className="material-icons right">done</i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    };
};
function validateForm(values, p) {
    errors = {}
    errors.recipients = validateEmails(values.recipients);
    formField.forEach(({ name, label }) => {
        if (!values[name]) {
            errors[name] = "You must provide " + label + "!";

        }
    });
    return errors;
}


export default reduxForm({
    validate: validateForm,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);