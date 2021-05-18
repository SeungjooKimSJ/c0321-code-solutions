import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.toggleStatusOn = this.toggleStatusOn.bind(this);
    this.toggleStatusOff = this.toggleStatusOff.bind(this);
  }

  toggleStatusOn() {
    this.setState({ isOn: true });
  }

  toggleStatusOff() {
    this.setState({ isOn: false });
  }

  render() {
    const isOn = this.state.isOn;

    if (isOn) {
      return (
        <div className="container">
          <div className="switch">
            <div className="toggleSwitch" onClick={this.toggleStatusOff}></div>
          </div>
          <div className="onOff">Off</div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="switch on">
            <div className="toggleSwitch right" onClick={this.toggleStatusOn}></div>
          </div>
          <div className="onOff">On</div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
