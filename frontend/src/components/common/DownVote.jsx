import React, { Component } from 'react';

class DownVote extends Component {
  state = {
    count: 0
  }

  downVote = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <button className="ui basic mini icon button"
                onClick={this.downVote}>
                <i className="thumbs down outline icon">{this.state.count}</i>
        </button>
      </div>
    )
  }


}



export default DownVote
