import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import moviesData from '../../common/moviesData';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    flexWrap: 'nowrap',
  },
}));

export default function UpcomingMovies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={250} className={classes.imageList} cols={6}>
        {moviesData.map((item) => (
          <ImageListItem key={item.poster_url}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}

            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
