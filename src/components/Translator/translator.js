import React, { useState } from "react";
import { Grid, Typography, Select, MenuItem, Box, Button, Tooltip, Alert, AlertTitle, Collapse } from "@mui/material";
import { VolumeDown, VolumeUp, ContentCopy, ContentPaste, Mic, MicOff, StarOutlineSharp, Terminal, Translate } from "@mui/icons-material";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import "./translator.css";
import "../../App.css";
import countries from '../countries.js';
var speech = new SpeechSynthesisUtterance();

const Translator = () => {

    // copy field data state 
    const [copytext, setCopyText] = useState(""); 
    var TextField1 = document.getElementById("1");
    var TextField2 = document.getElementById("2");
    
    // ================ || TEXT TO SPEECH CONVERT || =================

    const textToSpeech = () => {
        const text = document.getElementById("2").value;
        // console.log("translated to "+ ToLanugage);
        if (text.trim() != "") {
            speech.text = text;
            speech.rate = 1;
            speech.pitch = 10;
            speech.lang = "en-US";
            speechSynthesis.speak(speech);
        } else {
            alert("please enter a text ");
        }
    }

    // ============= || FROM LANGUAGE SELECT || =============

    const [FromLanugage, SetFromLanugage] = useState("en-GB");
    const [ToLanugage, SetToLanugage] = useState("hi-IN");

    // ============= || DATA SELECT || ==================

    const [TranslatedFrom, SetTranslatedFrom] = useState("");
    const [TranslatedTo, SetTranslatedTo] = useState("");
    const [MikeSwitch, SetMike] = useState(false);
    const countryList = [];
    for (const country_code in countries) {
        countryList.push({ country: countries[country_code], countryCode: country_code });
    }
   
    const getData = () => {
       
        // TextField1.innerHTML += transcript;
        
        fetch(`https://api.mymemory.translated.net/get?q=${TranslatedFrom.length == 0 ? transcript : TranslatedFrom}&langpair=${FromLanugage}|${ToLanugage}`).then((res) => {
            let response = res.json();
            return response;
        }).then((result) => {

            TextField2.value = result.responseData.translatedText
        });

    }

    // ============== || LISTENING YOUR VOICE AND STOPPING || ================

    const startListening = () => {
        console.log("listening has been started ");
        window.alert("your voice is now recording ");
        SetMike(!MikeSwitch);
        SpeechRecognition.startListening({ continuous: true, language: FromLanugage });
        // document.getElementById("1").value = transcript;
    }
    const stopListening = () => {
        window.alert("Your recording is stop Now ");
        SetMike(!MikeSwitch);
        SpeechRecognition.stopListening({ continuous: true });
    }

    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    if (TextField1 != null) {
        TextField1.innerHTML = transcript;
        // SetTranslatedFrom(TextField1.value);
    }

    // =================== || COPY PASTE LOGIC || ===================

    const CopyData = (field) =>{
        console.log('field ',field);
        const target_field = document.getElementById(field+"");
        const data = target_field.value;
        setCopyText(target_field.value);
        console.log(`copy data : ${copytext}`);
        <Collapse open={true}>
        <Alert severity="error">
            <AlertTitle>Success</AlertTitle>
            Copy Data successfully </Alert>
        </Collapse>
    }

    const PasteData = (field) =>{
        const target_field = document.getElementById(field+"");
        console.log("paste function call  ", copytext)
        target_field.value = copytext;
        <Alert severity="success">Paste Data successfully </Alert>

    }
    return (
        <>
            <Grid container item lg={10} md={10} sm={11} xs={11} margin={"auto"} className="translator_Box">
                <Grid item lg={6} md={6} sm={12} xs={12} className="Lang_Box">
                    <Box className="Box-Style">
                        <Typography fontFamily={"Noto Serif"}> Select language </Typography>
                        <Select className='selectfield' label="Language" value={FromLanugage} onChange={(event) =>
                            SetFromLanugage(event.target.value)}>
                            {countryList.map((obj) => {
                                return <MenuItem value={obj.countryCode} key={obj.countryCode}>{obj.country}</MenuItem>
                            })}
                        </Select>
                        {/* {true ? <VolumeUp /> : <VolumeDown />} */}
                        {MikeSwitch ? <Mic onClick={() => stopListening()} /> : <MicOff onClick={() => startListening()} />}
                        <Tooltip title="Copy" placement="top">
                            <ContentCopy onClick={()=> CopyData(1)} />
                        </Tooltip>
                        <Tooltip title="Paste" placement="top">
                            <ContentPaste onClick={()=> PasteData(1)} />
                        </Tooltip>
                    </Box>
                    
                    <textarea className="TextField" id="1" onChange={(event) => {
                        SetTranslatedFrom(event.target.value)
                    }} />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} className="Lang_Box">
                    <Box className="Box-Style">
                        <Typography fontFamily={"Noto Serif"}> Select language </Typography>
                        <Select className='selectfield' label="Language" value={ToLanugage} onChange={(event) =>
                            SetToLanugage(event.target.value)}>
                            {countryList.map((obj) => {
                                return <MenuItem value={obj.countryCode} key={obj.countryCode}>{obj.country}</MenuItem>
                            })}
                        </Select>
                        {true ? <VolumeUp onClick={() => {
                            console.log("click press ")
                            textToSpeech();
                        }} /> : <VolumeDown />}
                        {/* { true ? <Mic onClick={()=> alert("Your Mike has started")}/> : <MicOff />} */}
                        <Tooltip title="Copy" placement="top">
                            <ContentCopy onClick={()=> CopyData(2)}/>
                        </Tooltip>
                        <Tooltip title="Paste" placement="top">
                            <ContentPaste onClick={()=> PasteData(2)}/>
                        </Tooltip>
                    </Box>
                    <textarea className="TextField" id="2" onChange={(event) => SetTranslatedTo(event.target.value)} />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Button variant="contained" fullWidth onClick={getData} 
                    style={{ fontFamily: 'Noto Serif', backgroundImage: 'linear-gradient(rgb(253, 132, 253), rgb(154, 0, 154))', padding:'1rem',fontSize:'1rem'}}> TRANSLATE TEXT </Button>
                </Grid>
            </Grid>
        </>
    );
}
export default Translator;