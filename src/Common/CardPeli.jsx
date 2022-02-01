import React,{useState, useEffect} from "react";
import Axios from 'axios';

const CardPeli = () => {

  const [pelis, setPelis] = useState([]) 

  useEffect(()=>{
    Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=fc707b8b5314976d690dbe67fbe2defe")
    .then(function(response) {
      
          const peliculas = response.data.results.map((pelisArray,indice) => pelisArray =
          <div className="d-flex card mb-3 mx-auto" key = {indice} style={{width: '18rem'}}>
            <div className="card-body">
            <img src={'https://image.tmdb.org/t/p/w500' + pelisArray.poster_path} className="card-img" alt=""></img>
              <h5 className="card-title text-center">{pelisArray.title}</h5>
              <p className="card-text">{pelisArray.vote_average}⭐️</p>  
              <button className="btn btn-dark" >Ver Más</button>
            </div>
          </div> )
        console.log(response.data.results)
        setPelis(peliculas)
      
      })
    },[])
return (
  <div className="row">
    <h1 className="text-center mx-auto p-2">PELICULAS POPULARES</h1>
    {pelis}
  </div>
);
}
export default CardPeli;
