import React from 'react';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  addCounter = () => {
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  reduceCounter = () => {
    let counter = this.state.counter - 1;
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <div className="text-title">Contact Us Page</div>
        <p>{`Counter : ${this.state.counter}`}</p>
        <button onClick={this.reduceCounter}>-</button>
        <button onClick={this.addCounter}>+</button>
      </div>
    );
  }
}

export default ContactUs;
