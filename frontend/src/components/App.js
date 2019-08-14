import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';
import NavBar from './common/NavBar'
import QueensContainer from './queens/QueensContainer'
import * as actions from '../actions/queenActions.js'
import SeasonsContainer from './seasons/SeasonsContainer';

class App extends Component {

    componentDidMount = () => {
        this.props.actions.fetchQueens()
    }

    render() {
        return (
            <div className="App">
                <NavBar dragQueens={this.props.dragQueens}/>
                <Route exact path="/"
                       render={() => (<h3>Welcome to DRAGnet!</h3>)} />
                <Route path="/queens"
                       render={routerProps => <QueensContainer {...routerProps}
                       dragQueens={this.props.dragQueens} />} />
                <Route path="/seasons"
                       render={routerProps => <SeasonsContainer {...routerProps}
                       dragQueens={this.props.dragQueens} /> }/>
            </div>
            );
        }
    }

    function mapStateToProps(state) {
        return { dragQueens: state.queens.drag_queens};
    };

    const mapDispatchToProps = dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch)
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(App);
