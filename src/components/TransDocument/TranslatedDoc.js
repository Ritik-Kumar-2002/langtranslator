// Event.target.files;

import { Typography, Box, Grid, MenuItem, Select, Button } from '@mui/material';
import React, { useState } from 'react';
import './translateddoc.css';
import countries from '../countries';

const TranslatedDoc = () => {
    const [FromLanugage, SetFromLanugage] = useState("en-GB");
    const [ToLanugage, SetToLanugage] = useState("hi-IN");
    const countryList = [];
    for (const country_code in countries) {
        countryList.push({ country: countries[country_code], countryCode: country_code });
    }

    const showFile = (event) =>{
        event.preventDefault();
        window.alert("fun call 1");
        const reader = new FileReader();
        reader.onload = (event) =>{
            let text = event.target.result;
            console.log('text is ', text);
            window.alert(text);
        }

        reader.readAsText(event.target.files[0])
        
    }

    return (
        <>
            <Box className="docu-box">
                <Typography variant="h4" fontFamily={"Yeseva One"} textAlign="center"> Translate Document </Typography>
                <Grid container item lg={8} md={8} sm={8} xs={8} className="docu-wrap" style={{ margin: 'auto' }}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <Select className="select-field" label="Language" value={FromLanugage} onChange={(event) =>
                            SetFromLanugage(event.target.value)}>
                            {countryList.map((obj) => {
                                return <MenuItem value={obj.countryCode} key={obj.countryCode}>{obj.country}</MenuItem>
                            })}
                        </Select>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <Select className="select-field" label="Language" value={ToLanugage} onChange={(event) =>
                            SetToLanugage(event.target.value)}>
                            {countryList.map((obj) => {
                                return <MenuItem value={obj.countryCode} key={obj.countryCode}>{obj.country}</MenuItem>
                            })}
                        </Select>
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={10} style={{height:'100%', border:'1px solid black'}}> 
                        <Button variant='contained'  component="label" fullWidth>
                            Upload Button
                            <input hidden accept="/" multiple type="file" onChange={(event)=> showFile(event) }/>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default TranslatedDoc;