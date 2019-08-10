import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

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
                {queen.drag_name || "(info needed)"}{" currently lives in "}
                {queen.current_city || "(info needed)"}{".  "}
            </p>
            <p>
                {queen.seasons.map (season => season.season_name+"  ")} 
            </p>
            <p>{queen.seasons.find(1).season_name}
                {"She was born as "} 
                {queen.real_name || "(info needed)"}</p><p>{" in "} 
                {queen.hometown || "(info needed)"}{" on "}
                {new Date(queen.date_of_birth)
                .toLocaleDateString('en-US', DATE_OPTIONS)}{".  "}
            </p>
        </div>
    </Modal.Content>
  </Modal>
)

export default BiographyModal
