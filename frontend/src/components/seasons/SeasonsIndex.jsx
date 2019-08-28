import React from 'react';
import { Link } from 'react-router-dom';

const SeasonsIndex = ({ rpdrSeasons }) => {
    const renderSeasons = rpdrSeasons.map(season =>
        <div className="ui fluid cards" key={season.id}>
            <div className="ui fluid card">
                <div className="content">
                    <div className="header">
                        <Link key={season.id} to={`/seasons/${season.id}`}>
                            {season.season_name}
                        </Link>
                    </div>
                    <div className="content">
                        {season.queens.map(queen=>
                            <div className="content">
                                <img src={queen.primary_image} className="ui avatar image"/>
                                <span>{queen.id}{queen.drag_name}</span>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            {renderSeasons}
        </div>
    )
}

export default SeasonsIndex;
