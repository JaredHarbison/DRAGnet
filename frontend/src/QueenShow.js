import React from 'react';
import CreateTrivium from './CreateTrivium'
import QueenTrivia from './QueenTrivia'

const QueenShow = ({queen}) => {
    return queen ? (
        <div className="ui fluid card">
            <div className="content">
                <div className="ui fluid card">
                    <div className="content">
                        <img src={queen.primary_image}
                             alt={queen.drag_name}
                             className="ui left floated small image"/>
                        <div className="header"><h1>{queen.drag_name}</h1></div>
                        <div className="meta"><h3>Social Media | {""}
                                <a  href={queen.instagram}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="instagram icon"></i>
                                </a> | {""}
                                <a  href={queen.facebook}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="facebook icon"></i>
                                </a> | {""}
                                <a  href={queen.twitter}
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="twitter icon"></i>
                                </a></h3></div>
                        <div className="meta"><h3>Real Name: {queen.real_name}</h3></div>
                        <div className="meta"><h3>Date of Birth: {queen.date_of_birth}</h3></div>
                        <div className="meta"><h3>Hometown: {queen.hometown}</h3></div>
                        <div className="meta"><h3>Current City: {queen.current_city}</h3></div>

                    </div>
                </div>
                <QueenTrivia queen={queen}/>
                <CreateTrivium queen={queen}/>
            </div>
        </div>
  ) : (<p>loading...</p>)
}
export default QueenShow;

//<div className="meta"><h5>({queen.real_name})</h5></div>
//<div>{ do { if (x) <div />; } }</div>
