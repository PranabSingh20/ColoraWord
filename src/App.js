import React, {useState, useEffect} from 'react';
import {Palette} from 'react-palette';
import './App.css';
import axios from "axios";

//  const [results,setResults] = useState([{src:"https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=45ARGbzy", width: 4, height: 3}, {src: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=45ARGbzy", width:3, height:4}, {src:"https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=45ARGbzy", width:4, height:3},{src:"https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=45ARGbzy", width:4, height:4}, {src:"https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-mobileMasterAt3x.jpg", width:3, height:4}, {src:"https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-mobileMasterAt3x.jpg", width:3, height:4}, {src:"https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-mobileMasterAt3x.jpg", width:3, height:4}, {src: "https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-mobileMasterAt3x.jpg", width:4, height:4}]);
function App() {
  const [search,setSearch] = useState();
  //const [results,setResults] = useState([{src:"https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=45ARGbzy", width: 4, height: 3}, {src: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=45ARGbzy", width:3, height:4}, {src:"https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=45ARGbzy", width:4, height:3},{src:"https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=45ARGbzy", width:4, height:4}, {src:"https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-mobileMasterAt3x.jpg", width:3, height:4}, {src:"https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-mobileMasterAt3x.jpg", width:3, height:4}, {src:"https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-mobileMasterAt3x.jpg", width:3, height:4}, {src: "https://static01.nyt.com/images/2021/02/07/fashion/NEW-BLUE-1/NEW-BLUE-1-mobileMasterAt3x.jpg", width:4, height:4}]);
  const [results,setResults] = useState([]);
  useEffect(() => {
    if(!search) return;
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/customsearch/v1?key=AIzaSyD-a0mfpzuwzjSsps00cRJkPPZrB8512Qo&cx=d0eace92943d84996&`, {
        params: {
          q: search,
          searchType: "image",
          fileType:"png,jpg",
        },
      })
      .then(res => {
        setResults(res.data.items);
      })
  }, [search])
  return (
    <div className="App">
      <div className="title">
        <h1>Color A Word</h1>
      </div>
      <div className="search-container">
        <input className="searchBox"type='text' placeholder='Enter the word' onChange={e=>{setSearch(e.target.value)}}></input>
      </div>
      <div className="main-container">
        {results.map((img, idx)=>{    
          return (<div className="image-container" key={idx}>
            <Palette src={img.link}>
            {({data}) => (
              <div className="image" style={{height:Math.floor(Math.random() * 200) + 150, backgroundColor:data.vibrant}}>
              <div className="textbox">{data.vibrant}</div>
              </div>
            )}</Palette>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
