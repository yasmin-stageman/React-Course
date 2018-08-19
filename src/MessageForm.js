import React from "react";

export class MessageForm extends React.Component {
  state = {};

  render() {
    return (
      // on form submit, retrieve name from state data
      <form
        onSubmit={event => {
          this.props.onSendText(this.state.text);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="enter your message..."
          value={this.state.text}
          onInput={event => this.setState({ text: event.currentTarget.value })}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
