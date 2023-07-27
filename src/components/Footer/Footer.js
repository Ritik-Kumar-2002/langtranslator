import { Grid } from '@mui/material';
import React from 'react';
import {Facebook, Instagram, LinkedIn, GitHub} from '@mui/icons-material';
import "../../App.css";
const Footer = () =>{
    return(
        <>
            <Grid container item lg={12} sm={12} xs={12} md={12} mt={2} className="FooterStyle">
                <Grid item lg={6} sm={12} xs={12} md={6}>
                    <p className={"TextStyle"}> Made By </p>
                    <p className={"TextStyle"}> Ritik kumar </p>
                    <p className={"TextStyle"}> Deeksha Jain </p>
                    <p className={"TextStyle"}> Contact Us: 123xxxxxxx </p>
                </Grid>
                <Grid item lg={6} sm={12} xs={12} md={6}>
                    <p className={"TextStyle"}> Follow Us </p>
                    <div className={"Icons"}>
                        <a href="https://www.facebook.com/ritik.krish.56" target='_blank'> <Facebook style={{color:'white'}}/></a>
                        <a href='https://www.instagram.com/ritikkhanna__079/' target='_blank' ><Instagram style={{color:'white'}} /></a>
                        <a href='https://www.linkedin.com/in/ritik-kumar-9a610421a/' target='_blank'><LinkedIn style={{color:'white'}}/></a>
                        <a href='https://github.com/Ritik-Kumar-2002' target='_blank'><GitHub style={{color:'white'}}/></a>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
export default Footer;