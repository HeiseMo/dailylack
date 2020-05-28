import React, { Component } from "react";
import Feed from './Feed'
// import { Link } from "react-router-dom";

export default class Main extends Component {
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
            <form id="usrform"> 
            <textarea className="sendText" form="usrform"></textarea>
            </form>
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
          </div>
          <div className="flowFeed">
            <Feed/>
          </div>
        </div>
      </div>
    );
  }
}