import {React, useState} from 'react';
import "../../App.css";
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { ListOutlined } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from '@mui/material';
import menu from '../navigationComp/Navigation.js';
import { Home, Translate, Info } from '@mui/icons-material';

const Header = () => {
    const [open, SetDrawer] = useState(false);
    // ============= || THIS FUNCTION OPEN A SIDE MENU BAR IN MOBILE VIEW || ===============
    const SideBarOPEN = () =>{
        SetDrawer(!open);
    }
    const navigate = useNavigate("/");
    return (
        <>
            <div className='header_wrapper'>
                
                    <img src={Logo} alt="loading..." />
                    <div className='navigation'>
                        {menu.map((information) => {
                            return <p key={information.id} onClick={() => navigate(information.link)}> {information.title} </p>
                        })}
                    </div>
                    <text style={{ textAlign: 'center' }}> Language Translator </text>
                    <div className='navicon'><ListOutlined 
                    onClick={()=> SideBarOPEN()}/>
                        <Drawer open={open} onClose={()=> SideBarOPEN()} >
                            <List style={{width:'200px', padding:'0.5rem'}}>
                                {
                                    menu.map((info)=> {
                                        return (
                                            <>
                                                <ListItem button onClick={()=> navigate(info.link) }>
                                                    <ListItemText primary = {info.title} />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                            </>
                                        );
                                    })
                                }
                            </List>
                        </Drawer>
                    </div>
            </div>
        </>
    );
}
export default Header;