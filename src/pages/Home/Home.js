import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from 'react';
import './Home.css';
import ConfettiOnClick from '../../components/Eggs/ConfettiClick';

export default function Home(){

  return(
    //home container starts
    <section className='Home'>
      <section className="indexFlexBox" id="containerIndex">
  <section className="indexContent">
    <h2 className="firstname">Oskar</h2>
    <h1 className="lastname"><ConfettiOnClick/></h1>
    <h3 className="NET">.NET System developer</h3>
    <h3 className="edugrade">Edugrade education 2022-2024</h3>
  </section>
  </section>
    </section>
    //container ends

  );
};
//ReactDOM.render(AboutMe, document.getElementById('aboutme'));

