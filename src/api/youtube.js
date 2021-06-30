import axios  from 'axios';


const KEY ="AIzaSyBLyUMxyL67eiyGOfYGQ45ndp1YHgjKbzc"
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});