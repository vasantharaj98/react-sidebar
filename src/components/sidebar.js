import React,{useState} from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Submenu from './Submenu';
import { SidebarData } from './Sidebardata';

const Nav = styled.div`
        height: 80px;
        background: #15171c;
    `;
const Navlink = styled(Link)`
        line-height: 80px;
        font-size: 30px;
        margin-left: 50px;
`;
const Sidenav = styled.div`
        position: absolute;
        top: 0;
        left:${({sidebar})=>(sidebar ? '0':'-400px')};
        width: 350px;
        height: 100vh;
        background: #15171c;
        transition: 0.5s;
`;


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () =>{
        setSidebar(!sidebar);
    }
    return (
        
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <Navlink to='#'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Navlink>
        </Nav>
        <Sidenav sidebar={sidebar}>
            <Navlink to='#'>
                <FaIcons.FaTimes onClick={showSidebar}/>
            </Navlink>
            <div style={{color: '#fff'}}>
                {SidebarData.map((item, index) => {
                    return <Submenu item={item} key={index} />;
                })}
            </div>
        </Sidenav> 

        </IconContext.Provider>
        </>
        
    )
}

export default Sidebar;
