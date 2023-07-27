import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Translator from '../Translator/translator';
import { Box, Grid } from '@mui/material';
import TranslatedDoc from '../TransDocument/TranslatedDoc';
import ErrorPage from '../ErrorPage/ErrorPage';
import './navigation.css';


const NavigationComp  = () =>{
    const navigate= useNavigate();
    return(
        <>
            <Box>
                <Grid container item lg={8} md={8} sm={8} xs={8} className= "navStyle" style={{margin:'auto'}}>
                    <Grid item lg={6} md={6} sm={6} xs={6} onClick={()=> navigate("/")}
                    className="childNav"> Text
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} onClick={()=> navigate("/translateddoc")}
                    className="childNav"> Document
                    </Grid>
                </Grid>
            </Box>
             <Box>
                <Link to="/" />
                <Link to="/translateddoc" />
                <Routes>
                    <Route exact path="/" element={<Translator />} />
                    <Route path="/translateddoc" element={<TranslatedDoc />} />
                    <Route path="*" element = {<ErrorPage />} />
                </Routes>
            </Box>
        </>
    );
}
export default NavigationComp;