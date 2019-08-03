import React, { Component } from 'react';

class UpVote extends Component {
  state = {
    count: 0
  }

  upVote = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <button className="ui basic mini icon button"
                onClick={this.upVote}>
                <i className="thumbs up outline icon">{this.state.count}</i>
        </button>
      </div>
    )
  }


}


//<i class="thumbs up outline icon"></i>



export default UpVote
