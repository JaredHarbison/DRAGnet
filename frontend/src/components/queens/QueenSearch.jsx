import React from 'react';
import QueenIndexCards from './QueenIndexCards';

class QueenSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {
        let filteredQueens = this.props.dragQueens.filter(
            (queen) => {
                return queen.drag_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <div className="ui fluid card">
                    <div className="ui fluid icon input">
                        <input type="text"
                            placeholder="... search a drag name here"
                            value={this.state.search}
                            onChange={this.updateSearch.bind(this)} />
                    </div>
                </div>
                <QueenIndexCards filteredQueens={filteredQueens}/>
            </div>
        )
    }
}


export default QueenSearch
