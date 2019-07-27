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
                        <div className="meta"><h3>Real Name: {queen.real_name || "('click to add' is coming soon)" }</h3></div>
                        <div className="meta"><h3>Date of Birth: {new Date(queen.date_of_birth).toLocaleDateString('en-US', DATE_OPTIONS) || "(click to add coming soon)" }</h3></div>
                        <div className="meta"><h3>Hometown: {queen.hometown || "('click to add' is coming soon)" }</h3></div>
                        <div className="meta"><h3>Current City: {queen.current_city || "('click to add' is coming soon)" }</h3></div>

                    </div>
                </div>
                <QueenTrivia queen={queen}/>
                <CreateTrivium queen={queen}/>
            </div>
        </div>
  ) : (<p>loading...</p>)
}
export default QueenShow;
//{(new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}
//Unhandled Rejection (RangeError): Invalid time value
//{new Intl.DateTimeFormat('en-US').format(queen.date_of_birth)}
//(new Intl.DateTimeFormat('en-US').format(date));
//<div className="meta"><h5>({queen.real_name})</h5></div>
//<div>{ do { if (x) <div />; } }</div>
