import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment/min/moment-with-locales'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

moment.locale("fr");

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment(),
      difference: 0
    };
    console.log(moment.locale());
  }

  setStartDate = (date) => {
    this.setState({
      startDate: date
    }, this.displayDiff);
  }

  setEndDate = (date) => {
    this.setState({
      endDate: date
    }, this.displayDiff);
  }

  displayDiff = () => {
    let difference = this.calculateDiffInDays(this.state.endDate, this.state.startDate);
    this.setState({ difference });
  }

  calculateDiffInDays = (d1, d2) => Math.abs(Math.round(moment.duration(d1.diff(d2)).asDays()));


  render() {
    return (
      <div className="App">

        <div className="form">
          <div className="form-group">
            <label htmlFor="">Start date</label>
            <Datepicker
              selected={this.state.startDate}
              placeholderText="Click to select a date"
              className="form-control"
              locale="fr"
              onChange={this.setStartDate} />
          </div>
          <div className="form-group">
            <label htmlFor="">End date</label>
            <Datepicker
              selected={this.state.endDate}
              placeholderText="Click to select a date"
              className="form-control"
              locale="fr"
              onChange={this.setEndDate} />
          </div>
          {/* <button className="btn btn-primary" onClick={this.displayDiff}>Calculate difference in days</button> */}
          <p>
            The difference between the two dates is:
            <span className="text-primary"> {this.state.difference}</span>
          </p>
        </div>

      </div>
    );
  }
}

export default App;
