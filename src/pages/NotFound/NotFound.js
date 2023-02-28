import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './NotFound.css'

export default function NotFound() {
return (
  <section className='container'>
<section className="notfound">
    <h1>Oops! You seem to be lost.</h1>
    <p>Here are some helpful links:</p>
     <Link to='/' className='lank'>Home</Link>
    <Link to='/aboutme' className='lank'>AboutMe</Link>
    <Link to='/contact' className='lank'>Contact</Link>
</section>
</section>
);
};