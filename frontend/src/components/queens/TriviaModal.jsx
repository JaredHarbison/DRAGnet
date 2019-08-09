import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import CreateTrivium from '../trivia/CreateTrivium';
import QueenTrivia from '../trivia/QueenTrivia';


const TriviaModal = ({queen}) => (
    <Modal trigger={<Button size="tiny">Trivia</Button>} closeIcon>
        <Modal.Content>
        <img  src={queen.primary_image}
               alt={queen.drag_name}
               verticalalign="middle"
               className="ui small right floated rounded image"/>
            <CreateTrivium queen={queen}/>
            <QueenTrivia queen={queen}/>
        </Modal.Content>
    </Modal>)


export default TriviaModal