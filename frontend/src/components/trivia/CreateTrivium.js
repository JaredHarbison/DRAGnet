import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTrivia } from '../../actions/queenActions';

class CreateTrivium extends Component {
    state = {text: '' , trivia: []};

    handleChange = event => {
          this.setState({ text: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTrivia({
          queen: this.props.queen.id,
          trivium:    {
                      queen_id: this.props.queen.id,
                      content: this.state.text}
        });
        this.setState({ text: '' })
    }

    render() {
        return(
            <div className="ui fluid card">
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

function mapStateToProps(state) {
    return { state, trivia: [] };
};

const mapDispatchToProps = { addTrivia };

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CreateTrivium);
