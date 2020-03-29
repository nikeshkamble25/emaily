import React, { Component } from 'react'
class LandingPage extends Component {
  render() {
    return <div style={{ textAlign: 'center' }}>
      <div className="row">
        <div className="col s12 m12">
          <div className="card-panel white">
            <h3>One stop solution for survey!</h3>
            <div className="card-content">
              Collect feedback from users
            </div>
            <div className="card-image">
              <img src="landing-page.jpg" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default LandingPage;