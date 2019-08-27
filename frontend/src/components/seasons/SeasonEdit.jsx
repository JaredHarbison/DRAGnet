import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateSeason } from '../../actions/index'
import CreateAppearance from './CreateAppearance'



class SeasonEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id, 
            season_name: props.season_name, 
            queen_id: props.queen_id,
        };
    }
    handleQueenIdChange = event => {
          this.setState({ queen_id: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateSeason(this.state);
        this.setState()
    }

    render() {
        return this.props.season ? (
            <div className="ui fluid card">
                {this.props.season.queens.map(queen=>
                            <div className="content">
                                <img src={queen.primary_image} className="ui avatar image"/>
                                <span>{queen.drag_name}</span>
                            </div>)}
            <CreateAppearance season={this.props.season}/>
            </div>
      ) : (<p>loading...</p>)
    }
  }
  
function mapStateToProps(state, routerProps) {
    return { id: routerProps.match.params.seasonID };
};
  
const mapDispatchToProps = { updateSeason };

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(SeasonEdit);