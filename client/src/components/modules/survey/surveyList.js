import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from '../../../actions'

class SurveyList extends Component {

    constructor(){
        super();
        this.deleteSurvey=this.deleteSurvey.bind(this);
    }
    deleteSurvey(surveyId){
        this.props.deleteSurvey(surveyId);
    }

    renderSurvey() {
        if (this.props.surveyList <= 0) {
            return (<h4 style={{ textAlign: "center" }}>No Survey Configured!</h4>)
        }
        return (
            _.map(this.props.surveyList.reverse(), survey => {
                return <li key={survey._id} className="collection-item avatar">
                    <i className="material-icons blue circle">folder</i>
                    <a className="btn-floating right top waves-effect waves-light red" ><i onClick={()=>{
                        this.deleteSurvey(survey._id);
                    }} className="material-icons">delete</i></a>
                    <span className="title"><b>{survey.title}</b></span>
                    <p>
                        <label><b>Subject: </b>{survey.subject}</label>
                    </p>
                    <label ><b>Sent On:</b> {new Date(survey.dateSent).toLocaleDateString()} </label>
                    <div className="row">
                        <div className="col s12 m4"> <label ><b>Total Email Sent: </b>{survey.totalRecipients} </label></div>
                        <div className="col s1 m1">
                            <div className="z-depth-1 green"  data-position="bottom" data-tooltip="Number of responses for YES!">&nbsp;</div>
                        </div>
                        <div className="col s1 m1">{survey.yes}  </div>
                        <div className="col s1 m1">
                            <p className="z-depth-1 red"  data-position="bottom" data-tooltip="Number of responses for NO!">&nbsp;</p>
                        </div> <div className="col s1 m1">{survey.no} </div>
                    </div>
                </li >;
            })
        );
    }
    render() {
        return (<ul className="collection">
            {this.renderSurvey()}
        </ul>
        );
    };
}

function mapStateToProp({ surveys }) {
    return (
        {
            surveyList: surveys
        }
    )
}

export default connect(mapStateToProp, actions)(SurveyList);