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
        <button className="ui mini icon button"
                onClick={this.upVote}>
                likes: {this.state.count}
        </button>
      </div>
    )
  }


}






export default UpVote
