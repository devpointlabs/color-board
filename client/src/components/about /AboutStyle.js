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
top: 75px;
left: 2%;
padding: 10px;

`
export const AboutSite = styled.body`

position: relative;
top: 50%;
padding: 22px;
text-align: center;

`
export const AboutDevs = styled.body`
display: grid;
width: 400px;
height: 400px;
grid-template-columns: 600px 600px;
grid-row: 100px 100px;
grid-column-gap: 10px;
grid-row-gap: 20px;
`
// export const GridLayout = styled.div`
// grid2x2 
//   min-height: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
  
// `
export const NicksProfile = styled.img`

border-radius: 80px;
  padding: 10px;
  width: 140px;
  height: 150px;
  border-top: 4px solid #66CCCC
`
export const TonisProfile = styled.img`

border-radius: 80px;
  padding: 10px;
  width: 140px;
  height: 150px;
  border-top: 4px solid green;
  
`
export const MaxProfile = styled.img`

border-radius: 80px;
  padding: 10px;
  width: 140px;
  height: 150px;
  border-top: 4px solid #66CCCC
  
  
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
`
export const CardImage = styled.img`
width: 100%;
border-radius: 5px 5px 0 0;
`
export const CardText = styled.div`
padding: 2px 16px;
`


// export const AboutMain = styled.h2`
// background: linear-gradient(to bottom left, aliceblue, grey);
// font-size: 35px;
// color: white;
// `