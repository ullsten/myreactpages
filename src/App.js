import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { React, useState, useEffect } from 'react';
import {Footer, AppRouter} from './components';
import SecretPic from './img/backgrounds/smoke-2234175.jpg'
import VideoBg from './TestFolder/VideoBg';

export default function App() {
  
  return (
      <section className='m-3'>
       <AppRouter/>
      <Footer/>
    </section>



  );
};

