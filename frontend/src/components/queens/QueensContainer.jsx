import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QueenSearch from './QueenSearch';
import QueenShow from './QueenShow';

const QueensContainer = ({ match, dragQueens, rpdrSeasons }) => (
    <div className="ui fluid container">
        <Switch>
            <Route exact path={match.url}
                   render={routerProps => {
                       return <QueenSearch dragQueens={dragQueens}/>}}/>
            <Route exact path={`${match.url}/:queenID`}
                   render={routerProps => {
                       return <QueenShow {...routerProps}
                            rpdrSeasons={rpdrSeasons}
                            queen={dragQueens.find(q => q.id == routerProps.match.params.queenID)}/>}}/>
        </Switch>
    </div>
)

export default QueensContainer;
