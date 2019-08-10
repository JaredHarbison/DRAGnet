import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addQuote } from '../../actions/quoteActions';
import initialState from '../../reducers/initialState';

class CreateQuote extends Component {
    state = initialState;

    handleChange = event => {
          this.setState({ text: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addQuote({
          queen: this.props.queen.id,
          quote:    {
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
                                placeholder="type here to add quote then..."/>
                        <button type="submit"
                                className="ui fluid button">click to submit</button>
                      </div>
                </form>
            </div>
          );
      }
};

function mapStateToProps(state) {
    return { state, quotes: [] };
};

const mapDispatchToProps = { addQuote };

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CreateQuote);
