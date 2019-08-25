import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import CreateQuote from '../quotes/CreateQuote';
import QueenQuotes from '../quotes/QueenQuotes';




const QuotesModal = ({queen}) => (
    <Modal trigger={<Button size="tiny">{queen.quotes.length} Quotes</Button>} closeIcon>
        <Modal.Content>
            <div className="ui grid">
                <div className="ten wide column">
                    <TwitterTimelineEmbed 
                        sourceType="timeline"
                        url={queen.twitter}
                        theme="dark"
                        noFooter 
                        options={{height: 425}}
                    />
                </div>
                <div className="six wide column">
                    <img  src={queen.primary_image}
                    alt={queen.drag_name}
                    verticalalign="middle"
                    className="ui fluid image"/>
                </div>
            </div>
            <CreateQuote queen={queen}/>
            <QueenQuotes queen={queen}/>
        </Modal.Content>
    </Modal>)


export default QuotesModal