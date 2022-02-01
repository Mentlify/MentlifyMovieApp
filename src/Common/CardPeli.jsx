import React,{useState, useEffect} from "react";
import Axios from 'axios';

const CardPeli = () => {

  const [pelis, setPelis] = useState([]) 

  useEffect(()=>{
    Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=fc707b8b5314976d690dbe67fbe2defe")
    .then(function(response) {
          const peliculas = response.data.results.map((pelisArray,indice) => pelisArray =
          <div className="col">
          <div className=" card mb-3 mx-auto" key = {indice} style={{width: '18rem'}}>
            <div className="card-body">
            <img src={'https://image.tmdb.org/t/p/w500' + pelisArray.poster_path} className="card-img" alt=""/>
              <div className="d-flex justify-content-evenly">
              <h5 className="card-title text-center">{pelisArray.title}</h5>
              <p className="card-text">{pelisArray.vote_average}⭐️</p>  
              </div>
                {/* {pelisArray.overview} */}
                <p>Fecha de estreno: {pelisArray.release_date}</p>
                </div>
              <button className="btn btn-dark">Ver Pelicula</button>
            </div>
          </div>)
        setPelis(peliculas)
      })
    },[])
return (
  <div className="row">
    <h3 className="text-center mx-auto p-2 text-white">Peliculas Populares</h3>
    <div className="container">
      <div className="row">
    {pelis}
      </div>
    </div>
  </div>
);
}
export default CardPeli;
