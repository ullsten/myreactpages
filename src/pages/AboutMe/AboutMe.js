import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../../css/style.css'
import './AboutMe.css';
import portrait from "../../img/portrait/brollop171212_web-48.jpg";

export default function AboutMe(){

  return(
    
    //about me container starts
    <section className='AboutMe' id='AboutMe'>
      <header className="aboutHeader">
    <h1>I´m <span>Oskar Ullsten</span></h1>

  </header>

  <main className="aboutMain">
    <figure className="myPicture">
    <img src={portrait} alt="portrait of me" className='mePortrait'></img>
    </figure>
    <section className="meInfo">
        <h3>Introduction</h3>
        <p>I am married and have two children. I´m studying to become a system developer.</p>
        <h3>What are my hobbies?</h3>
        <p> I like to be out in nature, especially with my family. I also like to watch a movie sometimes.</p>
        <p>In between I strenght train and run to keep my health in check.</p>
        <p>Of course there will be time at the computer and programming too!</p>
        <h3>Where do I live</h3>
        <p>I am living in Köpmanholmen, Sweden.</p>
      </section>
    </main>
    
    </section>
    //container ends
    
  );
};
