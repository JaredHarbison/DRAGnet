import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QueenSearch from './QueenSearch';
import QueenShow from './QueenShow';

const QueensPage = ({ match, dragQueens, filteredQueens }) => (
    <div>
        <Switch>
            <Route exact path={match.url}
                   render={() => (<h3>Please select a queen from the list...</h3>)} />
            <Route exact path={`${match.url}/:queenID`}
                   render={routerProps => {
                       return <QueenShow {...routerProps}
                            queen={dragQueens.find(q => q.id == routerProps.match.params.queenID)}/>}}/>
        </Switch>
        <QueenSearch dragQueens={dragQueens} />

    </div>
)

export default QueensPage;
