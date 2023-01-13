import styled from "styled-components";


export const HeaderContainer = styled.div`
width: 100%;
height: 68px;
position: sticky;
top: 0;
z-index: oo;
background-color: black;
`;

export const HeaderWrapper = styled.div`
margin: auto;
width; 100%;
max-width: 1300px;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const IconLogo = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: 'Righteous', cursive;
font-size: 2.0rem;
color: #01A9DB;
`;

export const Menu = styled.ul`
height: 100%;
paddig: 0.5rem 1.5rem;
display: flex;
font-size: 1.2rem;
font-family: 'Righteous', cursive;
font-weight:400;


}
`;
export const MenuItem = styled.li`
height: 100%;
paddig: 0.5rem 1.5rem;
display: flex;
font-size: 1.2rem;
font-family: 'Righteous', cursive;
font-weight:400;


&:hover{
    background-color: white;
    border-bottom: 0.3rem solid black;
    transition: 0.4s ease-in;
    
}
`;

export const MenuItemLink = styled.a`
text-decoration: none;
color: #01A9DB;
display: flex,

`