import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import CreateQuote from '../quotes/CreateQuote';
import QueenQuotes from '../quotes/QueenQuotes';


const QuotesModal = ({queen}) => (
    <Modal trigger={<Button size="tiny">{queen.quotes.length} Quotes</Button>} closeIcon>
        <Modal.Content>
        <img  src={queen.primary_image}
               alt={queen.drag_name}
               verticalalign="middle"
               className="ui small right floated rounded image"/>
            <CreateQuote queen={queen}/>
            <QueenQuotes queen={queen}/>
        </Modal.Content>
    </Modal>)


export default QuotesModal