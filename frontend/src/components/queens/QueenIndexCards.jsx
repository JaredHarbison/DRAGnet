import React from 'react';
import { Link } from 'react-router-dom';

import TriviaModal from './TriviaModal';
import BiographyModal from './BiographyModal';

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
                    <div className="header">{queen.drag_name}{" of Season X"}</div>
                    <div className="ui divider"></div>
                    <span className="header"></span>
                        <div className="header">
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
                            <div className="ui divider"></div>
                    <BiographyModal queen={queen}/>
                    <TriviaModal queen={queen}/>
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
