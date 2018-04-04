import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         element: ''
    //     };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.clearStudentFields = this.clearStudentFields.bind(this);
    // }

    // ES6 lets us replace constructor with:
    state = {
        element: ''
    }
    // and changging these to arrow functions:

    handleChange = (event) => {
        this.setState({
            element: event.target.value
        });
    }

    // Called when the submit button is pressed
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            element: event.target.value
        });

        this.props.dispatch({ type: 'ADD_ELEMENT', payload: this.state.element })
        console.log(this.state);
        this.clearStudentFields();
    }

    // How odd, it doesn't throw that error about an input being (un)controllable if we have this:
    clearStudentFields() {
        this.setState({
            element: ''
        });
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.element} name="element"/>
            <p>
            <input type="submit" value="Submit the element boss"/>
            </p>
        </form>
        );
    }
}

// currying:
export default connect()(Form);
