import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import moviesData from '../../common/moviesData';
import moment from 'moment';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function ReleasedMovies() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <ImageList rowHeight={350} cols={4} className={useStyles.imageList}>

                    {moviesData.map((item) => (
                        <ImageListItem key={item.poster_url}>
                            <Link to={`/details/${item.id}`}>
                                <img src={item.poster_url} alt={item.title} style={{ width: "100%" }} />
                            </Link>
                            <ImageListItemBar
                                title={item.title}
                                subtitle={<span>Release Date: {moment(item.release_date).format("ddd ll")}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            );

        </>
    );

}