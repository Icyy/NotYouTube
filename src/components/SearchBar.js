import React from "react";



class SearchBar extends React.Component{
    state = {term:''}
    onInputChange = (e) =>{
        this.setState({term: e.target.value})

    }

    onInputSubmit = (e) =>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
       


    }

    render(){
        return(
            <div className="search-bar">
                <form onSubmit={this.onInputSubmit}>
                <input placeholder="Search" type="text" value={this.state.term} onChange={(event)=>this.onInputChange(event)}/>  
                <button type="submit" onSubmit={this.onInputSubmit}>Search</button>      
                </form>
            </div>
        );
    }
}


export default SearchBar;