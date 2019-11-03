import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';
import NavBar from './common/NavBar'
import QueensContainer from './queens/QueensContainer'
import * as actions from '../actions/index'
import SeasonsContainer from './seasons/SeasonsContainer';

import Landing from './common/Landing';

class App extends Component {

    componentDidMount = () => {
        this.props.actions.fetchQueens();
        this.props.actions.fetchSeasons();
        this.props.actions.fetchQuotes();
        this.props.actions.fetchTrivia();
    }

    render() {
        return (
            <div className="App">
                <NavBar dragQueens={this.props.dragQueens}/>
                <Route exact path="/"
                       render={routerProps => <Landing/>} />
                <Route path="/queens"
                       render={routerProps => <QueensContainer {...routerProps}
                       dragQueens={this.props.dragQueens} 
                       rpdrSeasons={this.props.rpdrSeasons}/>} />
                <Route path="/seasons"
                       render={routerProps => <SeasonsContainer {...routerProps}
                       rpdrSeasons={this.props.rpdrSeasons} /> }/>
            </div>
            );
        }
    }

    function mapStateToProps(state) {
        return { dragQueens: state.queens.drag_queens, 
                 rpdrSeasons: state.seasons.rpdr_seasons, 
                 rpdrQuotes: state.quotes.rpdr_quotes, 
                 rpdrTrivia: state.trivia.rpdr_quotes};
    };

    const mapDispatchToProps = dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch)
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(App);
