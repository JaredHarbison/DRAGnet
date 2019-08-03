import React from 'react';
import { Link } from 'react-router-dom';

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const QueenIndexCards = ({ filteredQueens }) => {
    const renderQueens = filteredQueens.map(queen =>
        <div className="ui fluid cards" key={queen.id}>
            <div className="ui fluid card">
                <div className="content">
                    <Link key={queen.id} to={`/queens/${queen.id}`}>
                        <img  src={queen.primary_image}
                              alt={queen.drag_name}
                              verticalalign="middle"
                              className="ui small left floated rounded image"/>
                    </Link>
                    <div className="header">{queen.drag_name}
                                            {" of "}{queen.current_city 
                                                || "(info needed)" }
                    </div>
                    <span className="header"></span><div className="header">
                                <a  href={queen.instagram}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="instagram icon"></i></a>
                                <a  href={queen.facebook}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="facebook icon"></i></a>
                                <a  href={queen.twitter}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="twitter icon"></i></a>
                                <a  href={queen.youtube}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="youtube icon"></i></a>
                                <a  href={queen.site}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="home icon"></i></a>
                                <a  href={queen.imdb}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="imdb icon"></i></a>
                                <a  href={queen.instagram}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="wikipedia w icon"></i></a></div>
                    <div className="meta">  {"(seasons and placement are coming soon)"}
                    </div>
                    <div className="meta">  {"born as "} {queen.real_name}
                                            {" in "}{queen.hometown 
                                                || "(info needed)" } 
                                            {" on "}{new Date(queen.date_of_birth)
                                                .toLocaleDateString('en-US', DATE_OPTIONS)} 
                    </div>
                    <div className="meta">  {"(age and ethnicity are coming soon)"} 
                    </div>
                </div>
                    <div className="ui right floated mini buttons">
                        <button className="ui button">Bio </button>
                        <button className="ui button">Stats</button>
                        <button className="ui button">Trivia</button>
                        <button className="ui button">Quotes</button>
                        <button className="ui button">Appearances</button>
                    </div>
            </div>
        </div>
  );
  return (
      <div>
          {renderQueens}
      </div>
  );
};

export default QueenIndexCards;

//<UpVote/>
//<div className="meta"> hometown - {queen.hometown || "(info needed)" } </div>
//<div className="meta"> current city - {queen.current_city || "(info needed)" } </div>
