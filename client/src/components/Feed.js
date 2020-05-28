import React, { Component } from "react";
// import { Link } from "react-router-dom";

const Messages = (props) => {
  return (
    <>
      {props.messages> 0}

      {props.messages.map((singleMessage) => {
          return (
            <>
            <div className="feed-box">
              <div className="feed-box-left">
                <img src="https://education.fsu.edu/wp-content/uploads/2016/09/staff-avatar-man.png" alt="avatar" />
              </div>
              <div className="feed-box-right">
          <p>{singleMessage.message}</p>
              </div>
            </div>
                </>
          );
        })}
    </>
  );
};

export default Messages;
