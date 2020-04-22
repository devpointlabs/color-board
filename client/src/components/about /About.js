import React from "react";
import { TopHeader, AboutSite, AboutDevs, Photo, SamsProfile, NicksProfile, TonisProfile, MaxProfile, Card, CardText, CardImage, } from "./AboutStyle";
import Person from "./Person.png";
import Sam from "./Sam.png";
import Nick from "./Nick.png";
import Toni from "./Toni.png";
import Max from "./Max.jpeg"
import MainImage from "./MainImage.png"

const About =() => (
<>  
  <TopHeader >
   About: ColorBoard
  </TopHeader>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  
  <AboutSite>
    
    <p><h3>About The Site</h3>
    <Photo src={ MainImage }/>
    <br></br>
    <h5 style={{ color: '#D80179' }} >The Backend</h5>
    This site was built from the ground up. We used Ruby on Rails for the backend server side language and React for the front end. Using Ruby on Rails provided us with a structural framework for all of the code we wrote to get to the end goal. 
    We began by working out the core functional elements of the site first. We built our models on the back end specifically to handle users, color boards, and colors. We made associations so that the users had many boards and the boards had many colors. This was to ensure that our data flow would work within SQL's parent to child relationship. This proved to be a challenge to find the right balance so that each bit of information was associated and would carry data to and from the client side to the backend along with the backend into our data server. 
    <br></br>
    <br></br>
    <h5 style={{ color: '#D80179' }} >The Front End</h5>
      Once we figured out our associations for our models, we worked on getting all of the controllers set up to route all of the logical components of the website. This included all of the components for users to be able to log in and out, create a profile, be able to create, delete, and update a color board, add colors to their color board and also edit, create, and update any of the colors on their boards. While this was challenging we were able to utilize a tool called Axios to pull all of the controller code to route our CRUD actions in an efficient way on the front end. To build out the client side of the website, we primarily utilized React. This was crucial in being able to make our website function in a fast, efficient and intelligent way. React worked perfectly for what this site required. React allows you to pass information/state down and wrap certain functions and components around other components. We used board providers which did the heavy lifting of all of our CRUD actions and routed that back and forth from the server side to the client side. Once the providers were complete we needed to pass this information into each element of the web page. Creating new color boards, deleting boards, updating boards, and then adding new colors was all done by wrapping our providers code around each different element of each individual page and function. What React also allowed us to do is use a smart routing system using the Virtual DOM. This made it easy to use the component based aspect of React to make site navigation and UI painless and easy for the user. 
      <br></br>
      <br></br>
      <h5 style={{ color: '#D80179' }} >Deployment </h5>
      Once all of the heavy lifting of using Javascript within React to pass our state into the site where we needed it. Then we just needed to style our website. Each developer took part in making the website work with css and also making it look elegant. Writing CSS is not easy but writing CSS into your web application while using React takes a careful eye. Working through these challenges and overcoming them is in the end what pushes each developer into becoming better at coding. This website was definitely a challenge but utilizing the amazing resources that Devpoint provided and their amazing instructors was what helped each developer learn and grow to new heights. The approach that they taught from the beginning is to become problem solvers and approach each problem as an opportunity to learn. This ColorBoard project has been a great opportunity to overcome challenges and work out and practice on our coding weak points. Ruby on Rails was the perfect choice for this project because it allowed us to launch a full stack web application in a short amount of time but also provided the structure and capability needed to support it. React for the fronted used the most popular, and highest quality Javasript library out there. Bringing the back end and front end into symbiotic relationship that proved perfect for creating the perfect ColorBoard! We launched our site into production using Heroku.
   
    </p>
  </AboutSite>
 
  <AboutDevs>
  <h3>About the Developers</h3>
  
    <Card>
      <CardImage src={ Nick } />
      <CardText>
      <h5 style={{color: '#66CCCC'}} >Nick Semerand (Favorite Color: Teal)</h5> 
      <br></br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <br></br>
    <br></br>
    <img height="15px"src="https://pngimg.com/uploads/github/github_PNG20.png"></img> <a href="https://github.com/nicksemerad">Nick's Git Hub</a><br></br>
    <br></br>
    <img height="15px" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"></img><a href="https://www.linkedin.com/in/nicholassemerad/">Nick's Linked In</a>
      </CardText>
    </Card>
    <Card>
      <CardImage src={ Toni } />
      <CardText>
      <h5 style={{color:'green'}}>Toni Galata (Favorite Color:Green)</h5> 
    <br></br>
    Toni Galata is your typical old Millennial with a love for technology, video games, and the internet in general. Her favorite things are: Harry Potter, tattoos, social justice, early-aughts emo music, drinks from Fiiz, bright colors and playing Diablo 3 with her husband. Toni is currently studying web development at Dev Point Labs, and looks forward to using code to solve all the world's problems, one bug at a time.
   
    <br></br>
    <br></br>
    <img height="15px"src="https://pngimg.com/uploads/github/github_PNG20.png"></img><a href="https://github.com/ToniGCRM">Toni's Git Hub</a><br></br>
    <br></br>
    <img height="15px" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"></img><a href="https://www.linkedin.com/in/toni-galata/">Toni's Linked In</a>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      </CardText>
      </Card>

    <Card>
      <CardImage src={ Max } />
      <CardText>
      <h5 style={{color:'#66CCCC '}}> Max Behling (Favorite Color: #66CCCC )</h5> Max is currently a full time web developer for an awesome tech company Doxy.me. They provide HIPPA compliant video conferencing software to thousands of professionals. Max claims Oregon as his home state but moved to Salt Lake city, Utah within the last year for his job. Max drinks copius amounts of coffee and writes a lot of code as the result! 
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <img height="15px"src="https://pngimg.com/uploads/github/github_PNG20.png"></img><a href="https://github.com/maxbehling">Max's Git Hub</a><br></br>
    <br></br>
    <img height="15px" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"></img><a href="https://www.linkedin.com/in/max-behling-614a8113a">Max's Linked In</a>
    <br></br>
    <br></br>
      </CardText>
      </Card>
    
      <Card>
      <CardImage src={ Sam } />
      <CardText>
    <h5 style={{color:'pink'}}>Samuel William Julkunen(Favorite Color: Green)</h5>
    <br></br>Sam grew up in the mountains of Heber City, Utah. He has had a multitude of different jobs and expereince. He has lived overseas in China and also in Hawaii. He has been a bobsled driver and also spent the last four years as a stock broker with Fidelity investments. Sam hopes to bring a diverse personal and professional experience into his new endeavors within the wide world of coding and technology. He is currently in the process of launching a new company Susi Media which will serve as an Search Engine Optimization company. You will find him in the mountains fishing, swimming, or hiking on the weekends or on the tennis court. 
    <br></br>
    <br></br>
    <img height="15px"src="https://pngimg.com/uploads/github/github_PNG20.png"></img><a href="https://github.com/swjulkunen"> Sam's Git Hub</a><br></br>
    <br></br>
    <img height="15px" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"></img><a href="https://www.linkedin.com/in/samueljulkunen/">Sam's Linked In</a>
    <br></br>
    <br></br>
    </CardText>
      </Card>
    </AboutDevs>

 </>
);


export default About;