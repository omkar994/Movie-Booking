import React, { useState } from 'react';
import Header from '../../common/header/Header';
import Form from './Form';
import './Home.css';
import UpcomingMovies from './UpcomingMovies';
import ReleasedMovies from './ReleasedMovies';
import moviesData from '../../common/moviesData';



function Home() {
    const [filteredMovies, setFilteredMovies] = useState(moviesData);
    const [moviename, setMovieName] = React.useState("");
    const [genre, setGenre] = React.useState([]);
    const [artist, setArtist] = React.useState([]);

    const handleMovieChange = (event) => {
        setMovieName(event.target.value);
    };

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleArtistChange = (event) => {
        setArtist(event.target.value);
    };

    function getFilteredByMovieName(moviesData, moviename) {
        if (!moviename) {
            return moviesData;
        }
        return moviesData.filter(
            (item) => item.title.toLowerCase() === moviename.toLowerCase()
        )
    };
    const getFilteredOnGenre = (movies) => {
        if (genre.length === 0) {
          return movies;
        }
    
        return movies.filter((movie) => {
          for (let i = 0; i < movie.genres.length; i++) {
            if (genre.includes(movie.genres[i])) {
              return true;
            }
          }
          return false;
        });
      };

      const getFilteredOnArtists = (movies) => {
        if (artist.length === 0) {
          return movies;
        }
    
        return movies.filter((movie) => {
          let movieArtists = movie.artists.map(
            (artist) => artist.first_name + "" + artist.last_name
          );
          for (let i = 0; i < movieArtists.length; i++) {
            if (artist.includes(movieArtists[i])) {
              return true;
            }
          }
          return false;
        });
      };
      const handleFilter = () => {
        const filterOnMovieName = getFilteredByMovieName(moviesData, moviename);
        const filteredOnGenre = getFilteredOnGenre(filterOnMovieName);
        const filteredOnArtist = getFilteredOnArtists(filteredOnGenre);
        setFilteredMovies(filteredOnArtist);
      };


        return (
            <div>
                <Header />
                <span className="heading">Upcomming Movies</span>
                <UpcomingMovies /><br />
                <div className="flex-container">
                    <div className="left">
                        <ReleasedMovies />
                    </div>
                    <div className="right">
                        <Form
                            moviename={moviename}
                            genre={genre}
                            artist={artist}
                            handleMovieChange={handleMovieChange}
                            handleArtistChange={handleArtistChange}
                            handleGenreChange={handleGenreChange}
                            handleFilter={handleFilter}
                        />
                    </div>
                </div>
            </div>
        )



    }

    export default Home;