import React from 'react';
import { useParams } from 'react-router-dom';
import { findMovieByid } from './../moviesData';

export default function Left() {
    const id = useParams().id;
    const movies = findMovieByid(id);
    return (
        <div>

            <img src={movies.poster_url} alt={movies.title} />

        </div>


    );
};
