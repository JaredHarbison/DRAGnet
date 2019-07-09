import React from 'react';
import CreateTrivium from './CreateTrivium'
import QueenTrivia from './QueenTrivia'

const QueenShow = ({queen}) => {

    return queen ? (
        <div className="ui fluid card">
            <div className="content">
                <div className="ui fluid card">
                    <div className="content">
                        <img  src="https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/0/01/BenDeLaCremeAS3.jpg/revision/latest/scale-to-width-down/350?cb=20171021045348"
                              className="ui left floated small image"/>
                        <div  className="header"><h1>{queen.drag_name}</h1></div>
                        <div  className="meta"><h3>à la {queen.real_name}</h3></div>
                    </div>
                </div>
                <QueenTrivia queen={queen}/>
                <CreateTrivium queen={queen}/>
            </div>
        </div>
  ) : (<p>loading...</p>)
}
export default QueenShow;
