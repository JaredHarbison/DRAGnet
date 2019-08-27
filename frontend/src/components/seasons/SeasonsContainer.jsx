import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SeasonEdit from './SeasonEdit';
import SeasonsIndex from './SeasonsIndex';

const SeasonsContainer = ({ match, dragQueens, rpdrSeasons }) => (
    <div className="ui fluid container">
        <Switch>
            <Route exact path={match.url}
                   render={routerProps => {
                       return <SeasonsIndex {...routerProps} rpdrSeasons={rpdrSeasons}/>}}/>
            <Route exact path={`${match.url}/:seasonID`}
                   render={routerProps => {
                       return <SeasonEdit {...routerProps}
                            rpdrSeasons={rpdrSeasons}
                            dragQueens={dragQueens}
                            season={rpdrSeasons.find(s => s.id == routerProps.match.params.seasonID)}/>}}/>
        </Switch>
    </div>
)

export default SeasonsContainer;
