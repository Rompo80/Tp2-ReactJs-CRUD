import React,{ useState, useEffect } from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MovieList from './components/MovieList';
import Layout from './components/Layout';
import AddMovie from './components/AddMovie';
import Button from './components/Button';
import About from './components/About';



function App() {

  const [movieList, setMovies] = useState([]);

  useEffect(()=> {
    const getMovies = async () => {
    const moviesFromServer = await fetchMovies()
    setMovies(moviesFromServer)
    }
    getMovies()
    }, [])

  /** Fetch tout les données  **/
  const fetchMovies = async () => {
    const res = await fetch('http://localhost:5000/movieList', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })
    const data = await res.json()
    return data
  }
     
  /**Ajouter le film */
  const addMovie = async (movie) => {
    const response = await fetch("http://localhost:5000/movieList", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify(movie),
    });
    const data = await response.json();
    setMovies([...movieList, data]);
  };
     
  /**Supprimer un film */
  const deleteMovie = async (id) => {
    const response = await fetch(`http://localhost:5000/movieList/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      const updatedMovieList = movieList.filter((movie) => movie.id !== id);
      setMovies(updatedMovieList);
    }
  };
      
  /**Modifier un film */
  const editMovie = async (id, newName, newDescription, newType) => {
    const movieToUpdate = movieList.find((movie) => movie.id === id);
    if (!movieToUpdate) {
      return;
    }
    const updatedMovie = { ...movieToUpdate, name: newName, description: newDescription, type: newType };
    const response = await fetch(`http://localhost:5000/movieList/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify(updatedMovie),
    });
    if (response.status === 200) {
      const updatedMovieList = movieList.map((movie) =>
        movie.id === id ? updatedMovie : movie
      );
      setMovies(updatedMovieList);
    }
  };
      
     
  /*.....Fonctions pour chercher les données 
  à partir l'objet local movieList....*/

  // const addMovie = (movie) => {
  //   setMovies([...movieList, { id: movieList.length + 1, ...movie }]);
  // };


  
  // const deleteMovie = (id) => {
  //   setMovies(movieList.filter((movie) => movie.id !== id))
  // };

  // const editMovie = (id, newName, newDescription, newType) => {
  //   setMovies(
  //     movieList.map((movie) =>
  //       movie.id === id
  //         ? { ...movie, name: newName, description: newDescription, type: newType }
  //         : movie
  //     )
  //   );
  // };

 /**Ici on utilise le hook useState pour declarer le nouveau 
  * var showAddMovie et on l'initialise à bool false */

  const [showAddMovie, setShowAddMovie] = useState(false);


  /**Ici on utilise le toggle pour changer le valeur du showAddMovie, 
   * ainsi permettre au addMovie composant d'apparaitre ou disparaitre 
   */
  const toggleAddMovie = () => {
    setShowAddMovie(!showAddMovie);
  };

  /**Les variables pour composant "Button" ils sont 
   * dependant du valeur de "showAddMovie"
   *  */

  const btnColor = showAddMovie ? "btn-danger" : "btn-dark";
  const btnText = showAddMovie ? "Close" : "Add Movie";

  return (
    <BrowserRouter>
    <Layout />
    <Routes>
      <Route path="/movies" element={
        <>
          <div className="d-flex justify-content-center mt-5">
            <Button
              onClick={toggleAddMovie}
              text={btnText}
              color={btnColor}
            />
          </div>
          <div className="container mx-auto mt-5" style={{ maxWidth: 700 }}>
            {showAddMovie && <AddMovie onAdd={addMovie} />}
            {movieList.length > 0 ? (
              <MovieList movieList={movieList} onDelete={deleteMovie} onEdit={editMovie} />
            ) : (
              <h2>No movies available!</h2>
            )}
          </div>
        </>
      } />
      <Route path='/' element={<About/>}/>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
    
    







