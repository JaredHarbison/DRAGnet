import React from 'react';
import CreateTrivium from './CreateTrivium'
import QueenTrivia from './QueenTrivia'

const QueenShow = ({queen}) => {

    return queen ? (
        <div className="ui fluid card">
            <div className="content">
                <div className="ui fluid card">
                    <div className="content">
                        <img  src={queen.image}
                              className="ui left floated small image"/>
                        <div  className="header"><h1>{queen.drag_name}</h1></div>
                        <div  className="meta"><h5>({queen.real_name})</h5></div>
                        <div  className="meta"><h3>Social Media | {""}
                              <a href={queen.social_media} target="_blank"><i class="instagram icon"></i></a></h3></div>
                    </div>
                </div>
                <QueenTrivia queen={queen}/>
                <CreateTrivium queen={queen}/>
            </div>
        </div>
  ) : (<p>loading...</p>)
}
export default QueenShow;
