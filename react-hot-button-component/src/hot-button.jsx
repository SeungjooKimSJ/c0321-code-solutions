import React from 'react';
// import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let currentClick = this.state.clicks;
    currentClick++;
    this.setState({
      clicks: currentClick
    });
  }

  render() {
    const currentClick = this.state.clicks;

    if (currentClick <= 3) {
      return (
        <button className="btn-purple" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (currentClick <= 6) {
      return (
        <button className="btn-lavender" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (currentClick <= 9) {
      return (
        <button className="btn-coral" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (currentClick <= 12) {
      return (
        <button className="btn-apricot" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (currentClick <= 15) {
      return (
        <button className="btn-yellow" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (currentClick <= 18) {
      return (
        <button className="btn-white" onClick={this.handleClick}>Hot Button</button>
      );
    }
  }

}

export default HotButton;
