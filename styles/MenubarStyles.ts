import styled from 'styled-components'


export const MenuDiv = styled.div<{isMenuOpen:boolean}>`
   background-image: url(/assets/menu-papaya.png), url(/assets/papaya-text.png), url(/assets/papaya-text-2.png);
   background-repeat: no-repeat, no-repeat, no-repeat;
   background-size: 300px, 150px, 150px;
   background-position: left top, center right, left bottom;
   top:${(props) => props.isMenuOpen ? "0":"-150vh"};
   left: 0;
   background-color: #131313;
   overflow: hidden;
   height: 100vh;
   width: 100%;
   position: absolute;
   transition: all ease-in-out .5s;
`