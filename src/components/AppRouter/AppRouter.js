import React from 'react'
import { NavBar } from '..';
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom";
import {Home, AboutMe, MyResume, Portfolio, Photos, ContactUs} from '../../pages'
import NotFound from '../../pages/NotFound/NotFound.js'
import {SecretModalEgg, SecretConfettiEgg} from '../Eggs'
export default function AppRouter (){
  return (
        <HashRouter>
          <NavBar/>
          <Routes>
              <Route index element ={<Home/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/aboutme' element={<AboutMe/>}></Route>
              <Route path='/myresume' element={<MyResume/>}></Route>
              <Route path='/portfolio' element={<Portfolio/>}></Route>
              <Route path='/photos' element={<Photos/>}></Route>
              <Route path='/contactus' element={<ContactUs/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
          </Routes>
          <SecretModalEgg/>
          <SecretConfettiEgg/>
          </HashRouter>
          
  );
};

