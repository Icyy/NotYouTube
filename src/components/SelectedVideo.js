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

        const vidSrc = "https://www.youtube.com/embed/"
        
        return(
            <div className="selectedVideo">
                {/* <img src={this.props.video.snippet.thumbnails.default.url} /> */}
                <iframe width="1000" height="550"
                    src={vidSrc+this.props.video.id.videoId}>
                </iframe>
                                  
                <p>{}</p>

            </div>
        );
    }
}

export default SelectedVideo;