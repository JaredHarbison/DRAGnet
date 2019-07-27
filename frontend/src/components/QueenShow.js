import React from 'react';
import CreateTrivium from './CreateTrivium'
import QueenTrivia from './QueenTrivia'

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const QueenShow = ({queen}) => {
    return queen ? (
        <div className="ui fluid card">
            <div className="content">
                <div className="ui fluid card">
                    <div className="content">
                        <img src={queen.primary_image}
                             alt={queen.drag_name}
                             className="ui left floated small image"/>
                        <div className="header"><span>{queen.drag_name}{"  "}</span>
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
                                <i className="twitter icon"></i></a></div>
                        <div className="meta">
                            <span>Real Name: </span>
                            <span contenteditable="true"> {queen.real_name ||
                                                  "add missing info here" }</span></div>
                        <div className="meta">
                            <span>Date of Birth: </span>
                            <span contenteditable="true"> {new Date(queen.date_of_birth)
                                                  .toLocaleDateString('en-US', DATE_OPTIONS) ||
                                                  "add missing info here" }</span></div>
                        <div className="meta">
                            <span>Hometown: </span>
                            <span contenteditable="true"> {queen.hometown ||
                                                  "add missing info here" }</span></div>
                        <div className="meta">
                            <span>Current City: </span>
                            <span contenteditable="true"> {queen.current_city ||
                                                  "add missing info here" }</span></div>
                    </div>
                </div>
                <QueenTrivia queen={queen}/>
                <CreateTrivium queen={queen}/>
            </div>
        </div>
  ) : (<p>loading...</p>)
}
export default QueenShow;
