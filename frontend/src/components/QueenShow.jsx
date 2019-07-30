import React, { Component } from 'react'
import { connect } from 'react-redux';
import CreateTrivium from './CreateTrivium'
import QueenTrivia from './QueenTrivia'
import { updateQueen } from '../actions/queenActions'



class QueenShow extends Component {
    constructor() {
        super();
        this.state = {
            real_name: '',
            date_of_birth: '',
            hometown: '',
            current_city: '',
        };
    }
    handleRealNameChange = event => {
          this.setState({ real_name: event.target.value });
    };
    handleDateOfBirthChange = event => {
          this.setState({ date_of_birth: event.target.value });
    };
    handleHometownChange = event => {
          this.setState({ hometown: event.target.value });
    };
    handleCurrentCityChange = event => {
          this.setState({ current_city: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        this.props.updateQueen(this.state);
        this.setState({
          queen_id: this.props.queen.id,
          queen:
                {id: this.props.queen.id,
                real_name: this.state.real_name,
                date_of_birth: this.state.date_of_birth,
                hometown: this.state.hometown,
                current_city: this.state.current_city}

        })
    }

    render() {
        return this.props.queen ? (
            <div className="ui fluid card">
                <div className="content">
                    <div className="ui fluid card">
                        <div className="content">
                            <img src={this.props.queen.primary_image}
                                 alt={this.props.queen.drag_name}
                                 className="ui left floated small image"/>
                            <div className="header">
                                <span><h1>{this.props.queen.drag_name}{"  "}</h1></span></div>
                                <span className="meta"> Social Media:  </span>
                                    <a  href={this.props.queen.instagram}
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <i className="instagram icon"></i></a>
                                    <a  href={this.props.queen.facebook}
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <i className="facebook icon"></i></a>
                                    <a  href={this.props.queen.twitter}
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <i className="twitter icon"></i></a>
                            <form className="ui form"
                                  onSubmit={event => this.handleSubmit(event)}>
                                <div className="meta">
                                    <span>Real Name: </span>
                                    <div className="ui transparent input">
                                        <input className="meta"
                                               onChange={event =>
                                                    this.handleRealNameChange(event)}
                                               value={this.state.real_name}
                                               type="text"
                                               placeholder={this.props.queen.real_name ||
                                                          "add missing info here" }/></div></div>
                                <div className="meta">
                                    <span>Date of Birth: </span>
                                    <div className="ui transparent input">
                                        <input className="meta"
                                               onChange={event =>
                                                    this.handleDateOfBirthChange(event)}
                                               value={this.state.date_of_birth}
                                               type="text"
                                               placeholder={new Date(this.props.queen.date_of_birth)
                                                          .toLocaleDateString('en-US',
                                                          { weekday: 'short', year: 'numeric',
                                                          month: 'short', day: 'numeric' }) ||
                                                          "add missing info here" }/></div></div>
                                <div className="meta">
                                    <span>Hometown: </span>
                                    <div className="ui transparent input">
                                        <input className="meta"
                                               onChange={event =>
                                                    this.handleHometownChange(event)}
                                               value={this.state.hometown}
                                               type="text"
                                               placeholder={this.props.queen.hometown ||
                                                          "add missing info here" }/></div></div>
                                <div className="meta">
                                    <span>Current City: </span>
                                    <div className="ui transparent input">
                                        <input className="meta"
                                               onChange={event =>
                                                    this.handleCurrentCityChange(event)}
                                               value={this.state.current_city}
                                               type="text"
                                               placeholder={this.props.queen.current_city ||
                                                          "add missing info here" }/></div></div>

                                        <button type="submit"
                                                className="ui basic fluid button">
                                                    click to submit any changes</button>
                            </form>
                        </div>
                    </div>
                    <QueenTrivia queen={this.props.queen}/>
                    <CreateTrivium queen={this.props.queen}/>
                </div>
            </div>
      ) : (<p>loading...</p>)
    }
  }
const mapDispatchToProps = { updateQueen };

export default connect (
    null,
    mapDispatchToProps
)(QueenShow);
