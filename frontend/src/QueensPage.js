import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QueenIndex from './QueenIndex';
import QueenShow from './QueenShow';

const QueensPage = ({ match, dragQueens }) => (
    <div>
        <Switch>
            <Route exact path={match.url}
                   render={() => (<h3>Please select a queen from the list.</h3>)} />
            <Route exact path={`${match.url}/:queenID`}
                   render={routerProps => {
                       return <QueenShow {...routerProps}
                            queen={dragQueens.find(q => q.id == routerProps.match.params.queenID)}/>}}/>
        </Switch>
        <QueenIndex dragQueens={dragQueens} />
    </div>
)

export default QueensPage;
