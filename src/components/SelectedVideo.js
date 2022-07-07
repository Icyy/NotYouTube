import React from "react";


class SelectedVideo extends React.Component{
    render(){

        if(!this.props.video)
        {
            return(
                <div>
                   <p>Loading...</p> 
                </div>
            );
        }

        return(
            <div className="selectedVideo">
                <p>{this.props.video.snippet.title}</p>

            </div>
        );
    }
}

export default SelectedVideo;