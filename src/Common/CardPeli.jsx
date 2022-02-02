import React, { useState, useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const CardPeli = () => {
  const [pelis, setPelis] = useState([]);
  const [favorito, setFavorito] = useState(true);

  function handleOverview(pelisArray) {
    Swal.fire({
      title: `${pelisArray.overview}`,
    });
  }

  useEffect(() => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=fc707b8b5314976d690dbe67fbe2defe"
    ).then(function (response) {
      const peliculas = response.data.results.map(
        (pelisArray, indice) =>
          (pelisArray = (
            <div className="col card-group mt-2 p-4 container" key={indice}>
              <div
                className=" card mb-3 mx-auto h-100 ms-4"
              
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <div className="card bg-dark text-white">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        pelisArray.poster_path
                      }
                      className="card-img"
                      alt="" style={{height:"400px"}}
                    />
                    <div className="card-img-overlay">
                      <div className="d-flex justify-content-end">
                        <button
                          className="boton"
                          onClick={() => setFavorito(!favorito)}
                        >
                          <div className="bgFav text-white">
                            {favorito ? (
                              <i className="far fa-heart"></i>
                            ) : (
                              <i className="fas fa-heart"></i>
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <p className="card-text m-1">{pelisArray.vote_average}⭐️</p>
                  </div>
                    <h5 className="card-title text-center m-3">
                      {pelisArray.title}
                    </h5>
                  <p className="text-center">Fecha de estreno: {pelisArray.release_date}</p>
                  </div>
                <button
                  className="btn btn-dark"
                  onClick={() => handleOverview(pelisArray)}
                  >
                  Ver Más
                </button>
              </div>
            </div>
          ))
      );
      setPelis(peliculas);
    });
  }, []);

  console.log(setFavorito);

  return (
    <div className="row">
      <h3 className="text-center mx-auto p-2 text-white">
        Peliculas Populares
      </h3>
      <div className="container">
        <div className="row">{pelis}</div>
      </div>
    </div>
  );
};
export default CardPeli;
