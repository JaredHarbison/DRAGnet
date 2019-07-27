import React, { Component } from 'react'
import { connect } from 'react-redux';
import CreateTrivium from './CreateTrivium'
import QueenTrivia from './QueenTrivia'
import { updateQueen } from '../actions/queenActions'



class QueenShow extends Component {
  render() {
        return this.props.queen ? (
            <div className="ui fluid card">
                <div className="content">
                    <div className="ui fluid card">
                        <div className="content">
                            <img src={this.props.queen.primary_image}
                                 alt={this.props.queen.drag_name}
                                 className="ui left floated small image"/>
                            <div className="header"><span><h1>{this.props.queen.drag_name}{"  "}</h1></span></div>
                                <span className="meta"> Social Media:  </span>
                                <a  href={ this.props.queen.instagram }
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="instagram icon"></i></a>
                                <a  href={ this.props.queen.facebook }
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="facebook icon"></i></a>
                                <a  href={ this.props.queen.twitter }
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="twitter icon"></i></a>
                            <form className="ui form">
                                <div className="meta">
                                    <span>Real Name: </span>
                                    <div className="ui transparent input">
                                        <input className="meta" type="text" placeholder={this.props.queen.real_name ||
                                                          "add missing info here" }/></div></div>
                                <div className="meta">
                                    <span>Date of Birth: </span>
                                    <div className="ui transparent input">
                                        <input className="meta" type="text" placeholder={new Date(this.props.queen.date_of_birth)
                                                          .toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) ||
                                                          "add missing info here" }/></div></div>
                                <div className="meta">
                                    <span>Hometown: </span>
                                    <div className="ui transparent input">
                                        <input className="meta" type="text" placeholder={this.props.queen.hometown ||
                                                          "add missing info here" }/></div></div>
                                <div className="meta">
                                    <span>Current City: </span>
                                    <div className="ui transparent input">
                                        <input className="meta" type="text" placeholder={this.props.queen.current_city ||
                                                          "add missing info here" }/></div></div>
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
//<i class="edit outline icon"></i>
//<i aria-hidden="true" className="edit outline icon"></i>
//import React from 'react'
//<div class="ui transparent input"><input type="text" placeholder="Search..." /></div>
//<form className="ui form"
//      onSubmit={event => this.handleSubmit(event)}>
//      <div className="transparent field">
//        <input  type="content" className="ui fluid icon input"
//                onChange={event => this.handleChange(event)}
//                value={this.state.text}
//                placeholder="type here to add trivia then..."/>
//        <button type="submit"
//                className="ui fluid button">click to submit</button>
//      </div>
//</form>



const mapDispatchToProps = { updateQueen };

export default connect (
    null,
    mapDispatchToProps
)(QueenShow);
