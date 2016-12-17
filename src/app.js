import React, { Component } from 'react';
import "./app.css";

const getOutput = (name, prefix, code = "", description) => {
  const output = JSON.stringify({
    [name]: {
      prefix,
      body: code.split("\n"),
      description,
    }
  }, null, 2);

  return output.substr(1, output.length - 2).trim();
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      prefix: "",
      code: "",
      description: "",
    }
  }
  render() {
    const { name, prefix, code, description } = this.state;
    return (
      <div className="fill wrap">
        <div className="fill column">
          <div className="item">
            <label>Name:</label>
            <input 
              className="fill input"
              type="text" 
              value={name} 
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="item">
            <label>Prefix(command):</label>
            <input 
              className="fill input"
              type="text" 
              value={prefix} 
              onChange={(e) => this.setState({ prefix: e.target.value })}
            />
          </div>
          <div className="item">
            <label>Description:</label>
            <input
              className="fill input"
              type="text" 
              value={description} 
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="item fill column">
            <label>Code:</label>
            <textarea
              className="fill"
              value={code} 
              onChange={(e) => this.setState({ code: e.target.value })}
            />
          </div>

        </div>
        <div className="fill column code">
          <textarea 
            className="fill" 
            value={getOutput(name, prefix, code, description)} 
          />
        </div>
      </div>
    )
  }
}

export default App;