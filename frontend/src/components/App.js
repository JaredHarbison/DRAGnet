import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';
import NavBar from './NavBar'
import QueensPage from './QueensPage'
import * as actions from '../actions/queenActions.js'

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
                       render={routerProps => <QueensPage {...routerProps}
                       dragQueens={this.props.dragQueens} />} />
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
