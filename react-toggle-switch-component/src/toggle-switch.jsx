import React from 'react';

const isOn = true;

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.ToggleStatus = this.ToggleStatus.bind(this);
  }

  ToggleStatus() {
    this.setState({ isOn: true });
  }

  render() {
    const isOn = this.state.isOn;

    if (isOn) {
      return (
        <div className="container">
          <div className="switch">
            <button className="toggle-On" onClick={this.ToggleStatus}></button>
          </div>
          <div className="onOff">On</div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="switch">
            <button className="toggle-On" onClick={this.ToggleStatus}></button>
          </div>
          <div className="onOff">Off</div>
        </div>
      );
    }
  }

  isOn = !isOn;
}

export default ToggleSwitch;
