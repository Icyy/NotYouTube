
import React from 'react';
import youtube from './APIs/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import SelectedVideo from './SelectedVideo';

class App extends React.Component {
  state = {data:{}, items:[], selected:null}
onTermSubmit = async (term) =>{
  const res = await youtube.get('search/',{
      params:
      {
        q:term
      }

    });
    this.setState({data:res.data})
    this.setState({items:res.data.items})
    
   
}

selectedVideo = (video)=>{
  console.log("video title : ",video.snippet.title)
  this.setState({selected:video})
}

  render(){
  return (
    <div className="App">
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      
      <VideoList videos={this.state.items} selectedVideo={this.selectedVideo}/>
      <SelectedVideo video={this.state.selected}/>

      
     
    </div>
  );
  }
}

export default App;
