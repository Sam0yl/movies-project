import { Component } from "react";

export default class Search extends Component {
    state = {
        search: '',
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    }

    render() {
        return (
            <div className="col s12">
                <div className="input-field">
                    <input 
                        placeholder="search"
                        type="search" 
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => (this.setState({search: e.target.value}))}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
                </div>
            </div>
        ) 
    }
}