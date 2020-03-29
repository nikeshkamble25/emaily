import React, { Component } from 'react'


class SurveyTitle extends Component {
    render() {
        const { label, validation, input, meta: { touched, error } } = this.props;
        validation.E = touched && error;
        return <div>
            <label>{label}</label>
            <input {...input} className={touched && error ? "invalid" : ""} />
            {touched && error}
        </div>
    };
}
export default SurveyTitle;