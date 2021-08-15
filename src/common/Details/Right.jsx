import React from 'react';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ImageListItem from '@material-ui/core/ImageListItem';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ImageList from '@material-ui/core/ImageList';
import { useParams } from 'react-router-dom';
import { findMovieByid } from './../moviesData';
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    width: 500,
  },
  star: {
    display: "flex",
    flexDirection: "column",
  },
  emptyStar: {
    color: "black",
  },
}));

export default function Right() {
  const classes = useStyles();
  const id = useParams().id;
  const movies = findMovieByid(id);
  return (
    <div>
      <Typography>
        <div><strong>Rate this movie: </strong>
          <div className={classes.star}>
            <Rating
              name="rating"
              defaultValue={0}
              emptyIcon={
                <StarBorderIcon fontSize="inherit" className={classes.emptyStar} />
              }
            />
          </div>
        </div>
        <div style={{ marginTop: "16px", marginBottom: "16px" }}><strong>Artists:</strong></div>
        <div className={classes.root}>
          <ImageList className={classes.imageList}>
            <ImageListItem cols={2} style={{ height: 'auto' }}>
            </ImageListItem>
            {movies.artists.map((item) => (
              <ImageListItem key={item.profile_url}>
                <img src={item.profile_url} alt={item.title} />
                <ImageListItemBar
                  title={item.first_name + " " + item.last_name}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Typography>
    </div>


  );
};





