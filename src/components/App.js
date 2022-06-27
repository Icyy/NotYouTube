
import React from 'react';
import youtube from './APIs/youtube';
import SearchBar from './SearchBar';
import Title from './Title';


class App extends React.Component {
  state = {data:{}, items:[]}
onTermSubmit = async (term) =>{
  const res = await youtube.get('search/',{
      params:
      {
        q:term
      }

    });
    this.setState({data:res.data})
    this.setState({items:res.data.items})
    
    this.setState({title:this.state.data.items.map((dat, index)=>{
      return(dat.snippet.title);
   
    })});
    this.setState({url:this.state.data.items.map((dat, index)=>{
      return(dat.snippet.thumbnails.default.url);
   
    })});
    console.log(this.state.url);
}
  render(){
  return (
    <div className="App">
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      {this.state.items.map((item,index)=>{
        return <Title title={item.snippet.title} url={item.snippet.thumbnails.default.url}/>
      })}

      
     
    </div>
  );
  }
}

export default App;
