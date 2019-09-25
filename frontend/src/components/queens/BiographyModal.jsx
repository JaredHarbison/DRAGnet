import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

import { arrayToSentence } from '../../actions/index'

const DATE_OPTIONS = { weekday: 'short', 
                       year: 'numeric', 
                       month: 'short', 
                       day: 'numeric' };

const BiographyModal = ({queen}) => (
  <Modal trigger={<Button size="tiny">Biography</Button>} closeIcon>
    <Modal.Content>
         <img  src={queen.primary_image}
               alt={queen.drag_name}
               verticalalign="middle"
               className="ui small right floated rounded image"/>
        <div className="content">

            <p>
                {"She is "}{(queen.ethnicity) || "(info needed)"}
                {" and born as "} 
                {queen.real_name || "(info needed)"}
                {" in " } 
                {queen.hometown || "(info needed)"}
                {" on "}
                {new Date(queen.date_of_birth)
                .toLocaleDateString('en-US', DATE_OPTIONS)}{".  "}
            </p>
        </div>
    </Modal.Content>
  </Modal>
)

export default BiographyModal

//<p>
//{queen.drag_name || "(info needed)"}
//{" of "}
//{arrayToSentence(queen.seasons.map (season => season.season_name))
//|| "(info needed)"}
//{" currently lives in "}
//{queen.current_city || "(info needed)"}
//{".  "}
//</p>