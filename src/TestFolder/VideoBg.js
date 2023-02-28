import React from 'react'
import { ReactDOM } from 'react'
import MountainClouds from './Videos/MountainClouds.mp4'
import './test.css'

const VideoBg = () => {
  return (
    <div className='VideoBg'>
      <div className='overlay'></div>
      <video src={MountainClouds} autoPlay loop muted></video>
      <div className='content'>
      <h2 className="firstname">Oskar</h2>
    <h1 className="lastname">Ullsten</h1>
    <h3 className="NET">.NET System developer</h3>
    <h3 className="edugrade">Edugrade education 2022-2024</h3>
      </div>
    </div>
  )
}

export default VideoBg