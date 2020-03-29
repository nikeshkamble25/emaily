import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import M, { Toast } from "materialize-css"
import SurveyList from "./survey/surveyList"
import * as actions from '../../actions'

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSurveys();
  }
  render() {
    return <div>
      <div className="col s12 m12 l3">
        <div className="card">
          <div className="card-image">
            <img src={this.props.auth ? this.props.auth.displayPicture : ''} style={{ width: "100%" }} />
            <span className="card-title">{this.props.auth ? this.props.auth.displayName : ''}</span>
          </div>
          <div className="card-content">
            <div className="collection">
              <a href="#!" className="collection-item">{this.props.auth ? this.props.auth.displayName : ''}</a>
              <a href="#!" className="collection-item">{this.props.auth ? this.props.auth.email : ''}</a>
            </div>

          </div>
        </div>
      </div>

      <div className="col s12 m12 l4">
        <div className="card horizontal">
          <div className="card-image">
            <i style={{ fontSize: "132pt" }} className="material-icons">track_changes</i>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span style={{ fontSize: "35pt" }} href="#!" className="collection-item">{this.props.auth ? this.props.auth.credits : ''}</span>Survey(s) Remaining
            </div>
            <div className="card-action">
              <Link to="/surveys/new">Add Survey</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m12 l5">
        <div className="card">
          <SurveyList></SurveyList>
        </div>
      </div>
      <div className="fixed-action-btn">
        <a onClick={this.props.fetchSurveys} className="btn-floating btn-large teal darken-4">
          <i className="large material-icons">
            refresh
          </i>
        </a>
      </div>
    </div>
  }
}

function mapToStateProps({ auth }) {
  return { auth };
}

export default connect(mapToStateProps, actions)(Dashboard);