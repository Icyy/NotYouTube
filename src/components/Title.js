import React from "react";
import '../index.css';
class Title extends React.Component{
    render(){
        return(
            <div className="title-n-tn">
                <img src={this.props.url} alt='thumbail' />
                
                    
                    <p className="title">{this.props.title}</p><br/>
               
            </div>
        );
    }
}

export default Title;