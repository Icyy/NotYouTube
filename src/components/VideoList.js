import React from "react";
import '../index.css';
import VideoItem from "./VideoItem";


class VideoList extends React.Component{
    render(){
        return(
            <div className="title-n-tn">
                {this.props.videos?.map((video, index)=>{

                    return (
                    <div className="videoItem" onClick={()=>this.props.selectedVideo(video)}>
                        <VideoItem url={video.snippet.thumbnails.default.url} title={video.snippet.title}/>
                    </div>
                    );
                     

                })}
            </div>    
           
        );
    }
}

export default VideoList;


