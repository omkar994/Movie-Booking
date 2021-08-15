import React from 'react';
import { useParams } from 'react-router-dom';
import { findMovieByid } from '../moviesData';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Link from '@material-ui/core/Link';
import YouTube from 'react-youtube';

export default function Middle() {
    const id = useParams().id;
    const movies = findMovieByid(id);
    const opts = {
        playerVars: {
          
          autoplay: 1
        }
      };
    return (
        <div>
<Typography>
<h2>{movies.title}</h2>
<div><strong>Genres:</strong> {movies.genres.join( ', ')}</div>
<div><strong>Duration:</strong> {movies.duration}</div>
<div><strong>Release Date:</strong> {moment(movies.release_date).format("ddd ll")}</div>
<div><strong>Rating:</strong> {movies.critics_rating}</div>
<div style={{marginTop:"16px"}}><strong>Plot:</strong><Link href ={movies.wiki_url} target= "_blank">(Wiki Link)</Link>{movies.storyline} </div>
<div style={{marginTop:"16px"}}><strong>Trailer:</strong>
    <YouTube opts={opts} videoId={movies.trailer_url.split("v=")[1]} />
    </div>
</Typography>
             

        </div>


    );
};