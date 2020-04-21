import React from "react";
import { TopHeader, AboutSite, AboutDevs, Photo, SamsProfile, NicksProfile, TonisProfile, MaxProfile } from "./AboutStyle";
import Person from "./Person.png";
import Sam from "./Sam.png";
import Nick from "./Nick.png";
import Toni from "./Toni.png";
import Max from "./Max.jpeg"

const About =() => (
<>  
  <TopHeader >
   About: Color Board
  </TopHeader>
  <AboutSite>
    <p><h2>About The Site</h2>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
   
    </p>
  </AboutSite>
 
  <AboutDevs>
  <h3>About the Developers</h3>
    <NicksProfile src={ Nick } / >
    <h5 >Nick Semerand</h5> 
      <br></br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <br></br>
    <br></br>
    <a href="https://github.com/ToniGCRM">Nick's Git Hub</a><br></br>
    <br></br>
    <a href="https://www.linkedin.com/in/toni-galata/">Nick's Linked In</a>
    <br></br>
    <br></br>
    <h5>Toni Galata </h5> 
    <TonisProfile  src={ Toni}/> 
    <br></br>
    Toni Galata is your typical old Millennial with a love for technology, video games, and the internet in general. Her favorite things are: Harry Potter, tattoos, social justice, early-aughts emo music, drinks from Fiiz, bright colors and playing Diablo 3 with her husband. Toni is currently studying web development at Dev Point Labs, and looks forward to using code to solve all the world's problems, one bug at a time.
    <br></br>
    <br></br>
    <a href="https://github.com/ToniGCRM">Toni's Git Hub</a><br></br>
    <br></br>
    <a href="https://www.linkedin.com/in/toni-galata/">Toni's Linked In</a>
    <br></br>
    <br></br>
    <MaxProfile src={ Max }/> 
    <h5 > Max Behling </h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    <br></br>
    <br></br>
    <a href="https://github.com/ToniGCRM">Max's Git Hub</a><br></br>
    <br></br>
    <a href="https://www.linkedin.com/in/toni-galata/">Max's Linked In</a>
    <br></br>
    <br></br>
    <h5>Samuel William Julkunen</h5>
    <SamsProfile src={ Sam } alt="Sam"/>
    <br></br>Sam grew up in the mountains of Heber, Utah. He has a wide variety of jobs 
    <br></br>
    <br></br>
    <a href="https://github.com/swjulkunen">Sam's Git Hub</a><br></br>
    <br></br>
    <a href="https://www.linkedin.com">Sam's Linked In</a>
    <br></br>
    <br></br>
    </AboutDevs>

 </>
);


export default About;