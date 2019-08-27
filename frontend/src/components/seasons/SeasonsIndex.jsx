import React from 'react';

const SeasonsIndex = ({ rpdrSeasons }) => {
    const renderSeasons = rpdrSeasons.map(season =>
        <div className="ui fluid cards" key={season.id}>
            <div className="ui fluid card">
                <div className="content">
                    <div className="header">
                        {season.season_name}
                    </div>
                    <div className="content">
                        {season.queens.map(queen=>
                            <div className="content">
                                <img src={queen.primary_image} className="ui avatar image"/>
                                <span>{queen.drag_name}</span>
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
