import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebarlink = styled(Link)`
    text-decoration:none;
    color:#fff;
    font-size: 23px;
    display: flex;
    justify-content:space-between;
    cursor:pointer;
`;
const Sidebarlabel = styled.label`
    margin-left: 20px;
    text-align: center;
`;
const Sidebartext = styled.div`
margin-left: 20px;
display: flex;
align-items: center;
padding:10px;
`;
const Sidebartext1 = styled.div`
margin-right: 40px;
margin-top:20px;
`;
const Sidebartext3 = styled.div`
margin-left: 50px;
display: flex;
align-items: center;
`;
const Dropdownlink = styled(Link)`
padding:10px;
display:flex;
text-decoration:none;
color:#fff;
font-size:18px;
background: #656875;
transition:all 0.15s ease-in-out;
&:hover{
    background: blue;
    cursor: pointer;
}
`;

function Submenu({item}) {

    const[subnav, setSubnav] = useState(false);

    const Showsub = () =>{
        setSubnav(!subnav);
    }
    return (
        <>
        <Sidebarlink to={item.path} onClick={item.subNav && Showsub}>
            <Sidebartext>
                {item.icon}
                <Sidebarlabel>{item.title}</Sidebarlabel>
            </Sidebartext>
            <Sidebartext1>
                {item.subNav && subnav ?
                item.iconOpened : item.iconClosed 
                 }
            </Sidebartext1>
        </Sidebarlink>
        { subnav && 
        item.subNav.map((item,index) =>{
            return (
            <Dropdownlink to={item.path} key={index}>
                <Sidebartext3>
                {item.icon}
                <Sidebarlabel>{item.title}</Sidebarlabel>
                </Sidebartext3>
            </Dropdownlink>
        );
            })}
        </>
    );
};

export default Submenu;
