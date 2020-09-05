import React, { Component } from 'react';






class SearchBar extends Component<{ onSubmit: any }, {}> {
    state = {
        term: ''
    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ term: event.target.value })
    }
    onFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input type="text" value={this.state.term} onChange={this.handleInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar as any