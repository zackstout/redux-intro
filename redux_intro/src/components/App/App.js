import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Allo gov.
        </p>
        <p>
          {/* Dispatches an action, which is an object: */}
          <button onClick={() => this.props.dispatch({ type: 'BUTTON_ONE'})}>Button one</button>
        </p>
        <p>
          <button onClick={() => this.props.dispatch({ type: 'BUTTON_TWO'})}>Button two</button>
        </p>
        <Form />

        <br/>
        <pre> {JSON.stringify(this.props.reduxState)} </pre>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

// currying:
export default connect(mapReduxStateToProps)(App);
