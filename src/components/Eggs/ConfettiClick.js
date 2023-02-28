import React, {useEffect, useState} from 'react'
import ReactConfetti from 'react-confetti'
import './Eggs.css'

const ConfettiOnClick = () => {
    const [windowDimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight});
    const [Btn, setBtn] = useState(false)
    const detectSize = ()=>{
      setDimension({width: window.innerWidth, height: window.innerHeight});
    }

    useEffect(()=>{
      window.addEventListener('resize', detectSize)
      return()=>{
        window.removeEventListener('resize', detectSize)
      }
    },[windowDimension]);

  return (
   <div className='mt-2'>
    <button className="eggContainer m-0 p-0 rounded" onClick={()=> setBtn(!Btn)}>Ullsten</button>
   {Btn &&  <ReactConfetti
    width={windowDimension.width-50}
    height={windowDimension.height}
    tweenDuration={1000}
    
 
    />}
   </div>
   
  );
};

export default ConfettiOnClick