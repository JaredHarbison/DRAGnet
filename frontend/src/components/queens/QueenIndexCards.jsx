import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import QuotesModal from './QuotesModal';
import TriviaModal from './TriviaModal';
import { arrayToSentence } from '../../actions/index'
import BiographyModal from './BiographyModal';

const QueenIndexCards = ({ filteredQueens }) => {
    const renderQueens = filteredQueens.map(queen =>
        <div className="ui fluid cards" key={queen.id}>
            <div className="ui fluid card">
                <div className="content">
                    <img  src={queen.primary_image}
                          alt={queen.drag_name}
                          verticalalign="middle"
                          className= 
                          "ui small left floated rounded image"/>
                    <div className="header">
                        {queen.drag_name}
                    </div>
                    <div className="ui divider"></div>

                    <div className="ui divider"></div>
                    <span className="header"></span>
                        <div className="header">
                            <a  href={queen.instagram}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="instagram icon"></i>
                            </a>
                            <a  href={queen.facebook}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="facebook icon"></i>
                            </a>
                            <a  href={queen.twitter}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="twitter icon"></i>
                            </a>
                            <a  href={queen.youtube}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="youtube icon"></i>
                            </a>
                            <a  href={queen.website}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="home icon"></i>
                            </a>
                            <a  href={queen.imdb}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="imdb icon"></i>
                            </a>
                            <a  href={queen.wikipedia}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="wikipedia w icon"></i>
                            </a>
                        </div>
                        <div className="ui divider"></div>
                    <BiographyModal queen={queen}/>
                    <TriviaModal queen={queen}/>
                    <QuotesModal queen={queen}/>
                    <Link key={queen.id} 
                          to={`/queens/${queen.id}`}>
                        <Button size="tiny">Edit Info</Button>
                    </Link>
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
//<div className="header">
//{ 
//arrayToSentence(queen.seasons
//    .map (season =>
//season.season_name)) 
//}
//</div>