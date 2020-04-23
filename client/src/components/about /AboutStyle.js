import React from "react";
import styled from "styled-components";
import { MediaBox } from 'react-materialize';

export const Photo = styled.img`
position: relative;
width: 40%;
height: 80%;
`

export const TopHeader = styled.h1`
    background-color: #D80179;
    width: 100%;
    position: relative;
    top: 25px;
    left: 2%;
    padding: 10px;
`
export const AboutSite = styled.body`
margin: 30px;
top: 25%;
padding: 22px;
text-align: center;

`
export const AboutDevs = styled.body`
position: relative;
display: flex;
align-items: start;
justify-content: center;
space-around: 10px;
`
// export const GridLayout = styled.div`
// grid2x2 
//   min-height: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
  
// `
export const ContainerOne = styled.div`
position: relative;
display: flex;
align-items: start;
justify-content: center;

`
export const ContainerTwo= styled.div`
width: 100%
border: 1px solid;
flex: 2;
`
export const ContainerThree = styled.div`
width: 50%
border: 1px solid;
justify-content: start;
flex: 3;

  
  
`

export const SamsProfile = styled.img`


border-radius: 80px;
border-color: black;
  padding: 10px;
  width: 144px;
  height: 150px;
  border-top: 4px solid pink;
`
export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
&:hover {box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);}
text-align: center
;

`
export const CardImage = styled.img`
padding: 10px;
border-radius: 20px 20px 20px 20px;

`
export const CardText = styled.div`
padding: 2px 16px;
`


// export const AboutMain = styled.h2`
// background: linear-gradient(to bottom left, aliceblue, grey);
// font-size: 35px;
// color: white;
// `