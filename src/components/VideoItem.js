import React from "react";


class VideoItem extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.url} alt='thumbail' />
                
                    
                <p className="title">{this.props.title}</p><br/>
            </div>
        )
    }
}


export default VideoItem;