import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './surveyform'
import SurveyReview from './surveyreview'

class SurveyNew extends Component {
    state = { showFormReview: false }

    renderContent() {
        if (this.state.showFormReview == false) {
            return <SurveyForm
                onSurveySubmit={() => {
                    this.setState({ showFormReview: true })
                }}></SurveyForm>;
        }
        return <SurveyReview
            onCancel={() => {
                this.setState({ showFormReview: false })
            }}
        ></SurveyReview>;
    }

    render() {
        return this.renderContent();
    };
}
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);