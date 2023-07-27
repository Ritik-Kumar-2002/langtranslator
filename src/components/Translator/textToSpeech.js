
var speech = new SpeechSynthesisUtterance();

// if("speechSyntesis" in window){
//     console.log("hurray speech recognition is supported ");
// }else {
//     console.log("speech recognition is not supported ");
//     alert("sorry, your browser doesn't supported ");
// }
alert("speech to text connected ! ");

const textToSpeech = () =>{
    const text = document.getElementById("text").value;
    if(text.trim() != ""){
        speech.text = text;
        speech.rate = 1;
        speech.pitch = 10;
        speech.lang = "gu-IN";
        speechSynthesis.speak(speech);
    }else{
        alert("please enter a text ");
    }
}