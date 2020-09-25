import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    heading:'This is a States exercise'
  }

  changeHeadingState =() => {
    this.setState({heading:'States is complicated'});
  }
  render() {
    return (
      <>
        <h1> {this.state.heading} </h1>
        <button onClick={this.changeHeadingState}>enter</button>
      </>
    )
  }
}

export default App;
