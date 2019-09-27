import React from 'react';
import { Link } from 'react-router-dom';

const SeasonsIndex = ({ rpdrSeasons }) => {
    const renderSeasons = rpdrSeasons.map(season =>
        <div className="ui fluid cards" key={season.id}>
            <div className="ui fluid card">
                <div className="content">
                    <table className="ui celled collapsing very basic table">
                        <thead className="">
                            <tr className="">
                                <th rowSpan="2" className="">  </th>
                                <th rowSpan="2" className="">
                        <Link key={season.id} to={`/seasons/${season.id}`}>
                            {season.season_name} Queens
                        </Link>
                                </th>
                                <th colSpan={season.episodes.length} className="">Episodes</th>
                            </tr>
                            <tr className="">
                                {season.episodes.map(episode =>
                                    <th className="">{episode.episode_code}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="">
                            {season.queens.map(queen =>
                            <tr className="">
                                <td className="">
                                    <h4 class="ui image header">
                                        <div className="ui fade reveal">
                                            <div className="ui visible content">
                                                <img src={queen.primary_image} className="ui small avatar image" />
                                            </div>
                                            <div className="ui hidden content">
                                                {queen.id}
                                            </div>
                                        </div>
                                    </h4>
                                </td>
                                <td>
                                    <span>{queen.drag_name}</span>
                                </td>
                            </tr>)}
                            </tbody>
                    </table>
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

{/*

*/}

{/*<tbody className="">
{season.queens.map(queen =>
<tr className="">
    <td className="">
        <h4 class="ui image header">
            <div className="ui fade reveal">
                <div className="ui visible content">
                    <img src={queen.primary_image} className="ui small avatar image" />
                </div>
                <div className="ui hidden content">
                    {queen.id}
                </div>
            </div>
        </h4>
    </td>
    <td>
        <span>{queen.drag_name}</span>
    </td>
</tr>)}
</tbody>*/}