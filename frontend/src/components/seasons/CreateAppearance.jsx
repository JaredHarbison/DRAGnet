import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAppearance } from '../../actions/index';

class CreateAppearance extends Component {
    state = {text: '' , appearances: []};

    handleChange = event => {
          this.setState({ text: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addAppearance({
          season_id: this.props.season.id,
          //appearance:   {
                      queen_id: this.state.text,
          //              }
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
                                placeholder="type here to add an appearance then..."/>
                        <button type="submit"
                                className="ui fluid button">click to submit</button>
                      </div>
                </form>
            </div>
          );
      }
};

function mapStateToProps(state) {
    return { state, appearances: [] };
};

const mapDispatchToProps = { addAppearance };

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CreateAppearance);
