import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTrivia } from './actions/queenActions';

class CreateTrivia extends Component {
    state = {content: '' };

    handleChange = event => {
          this.setState({ content: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTrivia({
          trivium: [{content: this.state.content, queen_id: "1"}]
        });
        this.setState({content: '' })
    }

    render() {
        return(
            <div>
                <form className="ui form"
                      onSubmit={event => this.handleSubmit(event)}>
                      <div className="transparent field">
                        <input  type="content" className="ui fluid icon input"
                                onChange={event => this.handleChange(event)}
                                value={this.state.content}
                                placeholder="     ... type here to..."/>
                        <button type="submit" className="ui fluid button">...add trivia</button>
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