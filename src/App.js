import React, { Component, Fragment } from "react";
import { Greeter } from "./Greeter";
import { UserList } from "./UserList";
import { UserMessages } from "./UserMessages";
import { MessageForm } from "./MessageForm";
import { LoginForm } from "./LoginForm";

import "./styles.css";

class App extends Component {
  state = {};

  componentWillMount() {
    this.props.client.stateChanges.subscribe(x => this.setState({ data: x }));
  }

  render() {
    return (
      <div className="app">
        {/*JSON.stringify(this.state.data)*/}
        {!this.state.data.chat.isAuthenticated && (
          <LoginForm onLogin={name => this.props.client.tryLogin(name)} />
        )}
        {/*<Greeter name={this.state.name} />*/}
        {this.state.data.chat.isAuthenticated && (
          <div className="chat-content">
            <UserList users={this.state.data.chat.users} />
            <UserMessages messages={this.state.data.chat.messages} />
            <MessageForm
              onSendText={text => this.props.client.sendText(text)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
