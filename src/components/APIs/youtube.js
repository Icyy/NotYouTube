import axios from "axios";

const KEY = 'AIzaSyBhTw3YcFoAykNrQUg1Im-tjd0vCFLwCuQ';

export default axios.create(
    {
        baseURL:"https://www.googleapis.com/youtube/v3",
        params:{
            part:'snippet',
            maxResults:5,
            key:KEY
        }
        
    }
)