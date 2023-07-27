import React from 'react';
import "../../App.css";
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/Home.jpg';
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='homeStyle'>
                <div className='homeStyle1'>
                    <p> Welcome To A Language Translator </p>
                    <button variant='contained' className='button' onClick={() => navigate("/translator")}>Translate</button>
                </div>
                <div className='homeStyle2'>
                    <img src={Image} alt="loading..." width={"100%"} height={"100%"} />
                </div>
            </div>
        </>
    );
}
export default Home;