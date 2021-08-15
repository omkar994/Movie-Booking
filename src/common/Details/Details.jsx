// import './../../common/Header/Header.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import './Details.css';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink } from 'react-router-dom';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Grid from '@material-ui/core/Grid';
import  '../header/Header';
import Header from '../header/Header';



function Details() {

    return (
        <div>
            <div>
                <Header />
                <div style={{
                    position: "absolute",
                    left: "80.5%",
                    top: "8.4px",
                }}>
                    <Link to="/bookshow"><Button variant="contained" color="primary" >BOOK SHOW</Button></Link>
                </div>
            </div>
            <div className="btn">
                <NavLink to="/" activeStyle={{ textDecoration: "none", color: "black", }}>
                    <Grid container>
                        <Grid ><ChevronLeftIcon /></Grid>
                        <Grid style={{ marginTop: "1px" }} ><Typography>Back to Home</Typography></Grid>
                    </Grid>
                </NavLink>
            </div>
            <div className="details">
                <div className="left1">
                    <Left />

                </div>
                <div className="middle" ><Middle /></div>
                <div className="right1"> <Right /> </div>
            </div>
        </div>
    );
}
export default Details;
