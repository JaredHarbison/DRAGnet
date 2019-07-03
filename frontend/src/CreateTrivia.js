import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTrivia } from './actions/queenActions';

class CreateTrivia extends Component {
    state = { text: '' };

    handleChange = event => {
          this.setState({ text: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTrivia({
          ...this.props.queen,
          trivia: [...this.props.queen.trivia, this.state.text]
        });
        this.setState({ text: '' })
    }

    render() {
        return(
            <div>
                <form className="ui form"
                      onSubmit={event => this.handleSubmit(event)}>
                      <div className="field">
                        <label>create trivia:</label>
                        <input
                            type="text"
                            onChange={event => this.handleChange(event)}
                            value={this.state.text}/>
                        <button type="submit" className="ui button">Submit</button>
                        </div>
                </form>
            </div>
          );
      }
};

const mapDispatchToProps = dispatch => {
    return {
        addTrivia: queen => dispatch(addTrivia(queen))
    };
};

export default connect (
    null,
    mapDispatchToProps
)(CreateTrivia);
