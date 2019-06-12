import React, { Component } from 'react';
import './App.css';
import { Input } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      resultValue: '',
    };
  }

  handleOnChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleEnterPressed = () => {
    const { userInput } = this.state;

    const newValue = userInput.split(' ').join('_').split('\"').join('');
    this.setState({ resultValue: newValue });
  };

  render() {
    const { TextArea } = Input;
    return (
      <div className="main">
        <div className="content">
          <p className="content-header">
            Replace the spaces with underscore and remove the quotes in your text.
          </p>
          <div className="content-body">
            <div className="form">
              <TextArea
                placeholder="Paste your line and press Enter..."
                autosize={{ minRows: 2, maxRows: 6 }}
                onChange={this.handleOnChange}
                onPressEnter={this.handleEnterPressed}
              />
            </div>
            <div className="form">
              <TextArea
                value={this.state.resultValue}
                autosize={{ minRows: 2, maxRows: 6 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
