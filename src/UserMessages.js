import React from "react";

export class UserMessages extends React.Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map(user => <li>{user.text}</li>)}
      </ul>
    );
  }
}
