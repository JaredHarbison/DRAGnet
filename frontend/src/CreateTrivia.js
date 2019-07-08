import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTrivia } from './actions/queenActions';

class CreateTrivia extends Component {
    state = {text: '' };

    handleChange = event => {
          this.setState({ text: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTrivia({
          trivium:    {
                      queen_id: this.props.queen.id,
                      content: this.state.text}
        });
        this.setState({ text: '' })
    }

    render() {
        return(
            <div>
                <form className="ui form"
                      onSubmit={event => this.handleSubmit(event)}>
                      <div className="transparent field">
                        <input  type="content" className="ui fluid icon input"
                                onChange={event => this.handleChange(event)}
                                value={this.state.text}
                                placeholder="type here to add trivia then..."/>
                        <button type="submit"
                                className="ui fluid button">click to submit</button>
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
