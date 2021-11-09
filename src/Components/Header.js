import React from 'react'

export default function Header({data}) {

   const {name,occupation,city,description} = data ? data : "";

    return (
        <header id="home">
         <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
           <ul id="nav" className="nav">
              <li className="current"><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
               <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Works</a></li>
              <li><a href="#contact">Contact</a></li>
           </ul>
        </nav>
  
        <div className="row banner">
           <div className="banner-text">
              <h1>I'm {name}.</h1>
              <h3>I'm a {city} based <span>{occupation}</span>, {description}.</h3>
              <hr />
           </div>
        </div>
  
     </header>
    );
}
