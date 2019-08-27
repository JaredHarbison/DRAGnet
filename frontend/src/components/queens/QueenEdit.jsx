import React, { Component } from 'react'
import { connect } from 'react-redux';
import CreateTrivium from '../trivia/CreateTrivium'
import QueenTrivia from '../trivia/QueenTrivia'
import { updateQueen } from '../../actions/queenActions'



class QueenEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id, 
            real_name: props.real_name,
            date_of_birth: props.date_of_birth,
            hometown: props.hometown,
            current_city: props.current_city,
            ethnicity: props.ethnicity, 
            twitter: props.twitter, 
            facebook: props.facebook, 
            instagram: props.instagram, 
            youtube: props.youtube, 
            imdb: props.imdb, 
            website: props.wikipedia, 
            wikipedia: props.wikipedia,
        };
    }
    handleRealNameChange = event => {
          this.setState({ real_name: event.target.value });
    };
    handleDateOfBirthChange = event => {
          this.setState({ date_of_birth: event.target.value });
    };
    handleHometownChange = event => {
          this.setState({ hometown: event.target.value });
    };
    handleCurrentCityChange = event => {
          this.setState({ current_city: event.target.value });
    };
    handleEthnicityChange = event => {
          this.setState({ ethnicity: event.target.value });
    };
    handleTwitterChange = event => {
          this.setState({ twitter: event.target.value });
    };
    handleFacebookChange = event => {
          this.setState({ facebook: event.target.value });
    };
    handleIMDBChange = event => {
          this.setState({ imdb: event.target.value });
    };
    handleYouTubeChange = event => {
          this.setState({ youtube: event.target.value });
    };
    handleWebsiteChange = event => {
          this.setState({ website: event.target.value });
    };
    handleWikipediaChange = event => {
          this.setState({ wikipedia: event.target.value });
    };
    handleInstagramChange = event => {
          this.setState({ instagram: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.updateQueen(this.state);
        this.setState()
    }

    render() {
        return this.props.queen ? (
            <div className="ui fluid card">
                <div className="content">
                    <form className="ui form"
                          onSubmit={event => this.handleSubmit(event)}>
                        <div className="ui fluid card" key={this.props.queen.id}>
                            <div className="content">
                                <div className="ui stackable three column grid">
                                    <div className="stretched row">
                                        <div className="column">
                                            <div className="ui segment">
                                                <img src={this.props.queen.primary_image}
                                                     alt={this.props.queen.drag_name}
                                                         className="ui fluid image"/>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="ui segment">
                                                <div className="header"><span><h1>
                                                    {this.props.queen.drag_name}{"  "}</h1></span>
                                                </div>
                                                <div className="ui divider"></div>
                                                <div className="meta">
                                                    <span>Real Name: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta"
                                                               onChange={event =>
                                                                    this.handleRealNameChange(event)}
                                                               value={this.props.real_name}
                                                               type="text"
                                                               placeholder={this.props.queen.real_name ||
                                                                          "add missing info here" }/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>Date of Birth: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta"
                                                               onChange={event =>
                                                                    this.handleDateOfBirthChange(event)}
                                                               value={this.props.date_of_birth}
                                                               type="text"
                                                               placeholder={new Date(
                                                                          this.props.queen.date_of_birth)
                                                                          .toLocaleDateString('en-US',
                                                                          { weekday: 'short', year: 'numeric',
                                                                          month: 'short', day: 'numeric' }) ||
                                                                          "add missing info here" }/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>Ethnicity: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta"
                                                               onChange={event =>
                                                                    this.handleEthnicityChange(event)}
                                                               value={this.props.ethnicity}
                                                               type="text"
                                                               placeholder={this.props.ethnicity ||
                                                                          "add missing info here"}/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>Hometown: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta"
                                                               onChange={event =>
                                                                    this.handleHometownChange(event)}
                                                               value={this.props.hometown}
                                                               type="text"
                                                               placeholder={this.props.queen.hometown ||
                                                                          "add missing info here" }/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>Current City: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta"
                                                               onChange={event =>
                                                                    this.handleCurrentCityChange(event)}
                                                               value={this.props.current_city}
                                                               type="text"
                                                               placeholder={this.props.queen.current_city ||
                                                                              "add missing info here" }/>                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="ui segment">
                                            <div className="header"><h1>
                                                <a  href={this.props.queen.instagram}
                                                    rel="noopener noreferrer"
                                                    target="_blank">
                                                <i className="instagram icon"></i></a>
                                                <a  href={this.props.queen.facebook}
                                                    rel="noopener noreferrer"
                                                    target="_blank">
                                                <i className="facebook icon"></i></a>
                                                <a  href={this.props.queen.twitter}
                                                    rel="noopener noreferrer"
                                                    target="_blank">
                                                <i className="twitter icon"></i></a>
                                                <a href={this.props.queen.youtube}
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                <i className="youtube icon"></i></a>
                                                <a href={this.props.queen.website}
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                <i className="home icon"></i></a>
                                                <a href={this.props.queen.imdb}
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                <i className="imdb icon"></i></a>
                                                <a href={this.props.queen.wikipedia}
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                <i className="wikipedia w icon"></i></a></h1></div>
                                                <div className="ui divider"></div>
                                                <div className="meta">
                                                    <span>Instagram: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta" 
                                                               onChange={event => 
                                                                    this.handleInstagramChange(event)}
                                                               type="text"
                                                               placeholder={this.props.queen.instagram || 
                                                                        "add missing info here"}/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>Twitter: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta" 
                                                               onChange={event => 
                                                                    this.handleTwitterChange(event)}
                                                               type="text"
                                                               placeholder={this.props.queen.twitter || 
                                                                        "add missing info here"}/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>Facebook: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta" 
                                                               onChange={event => 
                                                                    this.handleFacebookChange(event)}
                                                               type="text"
                                                              placeholder={this.props.queen.facebook || 
                                                                        "add missing info here"}/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>YouTube: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta" 
                                                               onChange={event => 
                                                                    this.handleYouTubeChange(event)}
                                                               type="text"
                                                               placeholder={this.props.queen.youtube || 
                                                                        "add missing info here"}/>
                                                   </div>
                                                </div>
                                                <div className="meta">
                                                    <span>Website: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta" 
                                                               onChange={event => 
                                                                    this.handleWebsiteChange(event)}
                                                               type="text"
                                                               placeholder={this.props.queen.website || 
                                                                    "add missing info here"}/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>IMDB: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta" 
                                                               onChange={event => 
                                                                    this.handleIMDBChange(event)}
                                                               type="text"
                                                               placeholder={this.props.queen.imdb || 
                                                                    "add missing info here"}/>
                                                    </div>
                                                </div>
                                                <div className="meta">
                                                    <span>Wikipedia: </span>
                                                    <div className="ui transparent input">
                                                        <input className="meta" 
                                                               onChange={event => 
                                                                    this.handleWikipediaChange(event)}
                                                               type="text"
                                                               placeholder={this.props.queen.wikipedia || 
                                                                    "add missing info here"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><br></br>
                                <button className="ui fluid mini icon button"
                                        type="submit">
                                        <i aria-hidden="true" 
                                           className="save outline icon">
                                        </i> Save Any Changes
                                </button> 
                            </div>  
                        </div>
                    </form>
                    <QueenTrivia queen={this.props.queen}/>
                    <CreateTrivium queen={this.props.queen}/>
                </div>
            </div>
      ) : (<p>loading...</p>)
    }
  }
  
function mapStateToProps(state, routerProps) {
    return { id: routerProps.match.params.queenID };
};
  
const mapDispatchToProps = { updateQueen };

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(QueenEdit);