import React from "react";

class Thumbnail extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.url} alt='thumbnail'/>
            </div>
        )
    }
}


export default Thumbnail;