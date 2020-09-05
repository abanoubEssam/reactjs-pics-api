import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import classes from './app.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';
class App extends Component {
    state = {
        imgs: []
    }
    onSearchSubmit = async (term: any) => {
       const response = await unsplash.get("search/photos", {
            params: {
                query: term
            },
        })

        this.setState({imgs: response.data.results})

    }
    render() {
        console.log("STATE" , this.state.imgs)
        return (
            <div className={`ui container ${classes.app}`}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                found: {this.state.imgs.length} images
                <ImageList images={this.state.imgs}/>
            </div>
        )
    }
}


export default App