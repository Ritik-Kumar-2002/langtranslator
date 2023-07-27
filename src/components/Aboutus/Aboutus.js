
import { Grid, Button, List, ListItemText } from '@mui/material';
import "../../App.css"
import Image from '../../assets/About.avif'
const Aboutus = () => {
    return (
        <>
            <div margin={"auto"} className='AboutUs_wrap'>
                
                    <div className='AboutUs_wrap1'>
                        <img src={Image} alt='loading...' width={"100%"} height={"100%"} />
                    </div>

                    <div className='AboutUs_wrap2'>
                        <h1>What Is Translator</h1>
                        <p>A Translator is a professional who specializes in converting written or spoken material from one language to another while maintaining the original meaning, format, and tone. They play a crucial role in facilitating communication and understanding between different language speakers.</p>
                        <h1> What does a Translator do? </h1>
                        <p>A Translator reads and comprehends given material, researches industry-specific terminology, and uses specialized dictionaries and translation tools to convert text and audio recordings from one language to one or more others. They ensure that the translated content accurately conveys the original meaning and tone. Translators also proofread and edit their work, collaborate with team members and clients, and stay updated on new translation tools and practices.</p>
                        {/* <Button variant='contained' style={{ backgroundColor: 'violet' }} > Read More </Button> */}
                    </div>
            </div>
        </>
    );
}
export default Aboutus;