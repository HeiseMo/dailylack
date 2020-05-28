import React, { Component } from "react";
import Feed from './Feed'
import axios from 'axios'
// import { Link } from "react-router-dom";

export default class Main extends Component {
  state = {
    message: "Write your post...",
    messages: []
  }

  componentDidMount = () => {
    this.getData();

    //console.log("componenet did mount", this.state.specialization);
  };

  getData = () => {
    axios
      .get("http://localhost:5000/api/messages")
      .then((response) => {
        let boom = response.data
        console.log(boom);
        this.setState({
          messages: boom,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/messages", {
        message: this.state.message,
        owner: this.props.user
      })
      .then(() => {
        this.setState({
          message: ""
        });
        // update state in Projects by executing getData()
        this.props.history.push("/messages");
        //this.props.getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="homeContainer">
        <div className="flowOverlay">
          <div className="flowOptions">
            <div className="option">
              <p>Newest Posts</p> 
            </div>
            <div className="option">
              <p>Most Popular</p>
            </div>
          </div>
          <div className="feedTheFeed">
            <form onSubmit={this.handleSubmit} id="usrform"> 
            <textarea                 
            value={this.state.message}
            onChange={this.handleChange} 
            className="sendText" 
            type="text"
            id="message"
            name="message"
            form="usrform"></textarea>
                        <div>
              <select className="post-select" type="text">
                  <option disabled value="Any">Hours</option>
                  <option value="60">1 Minute</option>
                  <option value="21600">6 Hours</option>
                  <option value="43200">12 Hours</option>
                  <option value="86400">24 Hours</option> 
              </select>
              <input type="submit" className="post-btn" value="Post"/>
            </div>
            </form>
          </div>
          <div className="flowFeed">
            <Feed messages={this.state.messages}/>
          </div>
        </div>
      </div>
    );
  }
}