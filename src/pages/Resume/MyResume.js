import React from 'react'
import { useState, useEffect } from 'react'
import '../Resume/MyResume.css'
import Portrait from '../../img/portrait/me-portrait-round.png';
import {ProfileIconBlue ,ContactIcon, EducationIcon, 
Briefcase, WorkerIcon, GlobeIcon, HouseIcon, PhoneWhite,GmailIcon, RefICon, LicenseIcon} from '../../img/icons/index.js'
import { RingLoader } from 'react-spinners';
import { ProgressBar } from 'react-bootstrap';

export default function MyResume(){

  let [color, setColor] = useState("#ffffff");
  const [error, setError] = useState(null)
  const[isloaded, setIsLoaded] = useState(false) //bool
  const[items, setItems] = useState([]) //array of items

  useEffect(()=>{
    setTimeout(()=>{
      // If error Doctype error try to type in ,{headers: {Accept: 'application/json'}} to work local. need to delete on deploy .
       fetch('../JsonData/resume.json')
      .then (res => res.json(console.log(res)))
      .then(
        (result)=>{
          setIsLoaded(true)
          setItems(result)
          console.log(result)
        },
        (error)=>{
          setIsLoaded(true)
          setError(error)
        }
      )
    },3000)

  },[])
  
  if(error){
    return <div className='text-center mt-5 text-light'><h3>Error: {error.message}</h3></div>
  }
  else if(!isloaded){
     return (
     <div className=' mt-5 text-info text-center'><RingLoader className="m-auto" color={color} size={200}/></div>
     )
  }
  else{
    return (
      <div className='cvContainer container-sm mt-5 px-5'>
      <div className='col'>
        <figure className="resumePortrait text-center">
            <img className="img-fluid" src={Portrait} alt="portrait"></img>
            <h1>Oskar Ullsten</h1>
            <p>System developer.Net with Ai competence | Köpmanholmen, Sweden 0730-913046</p>
        </figure>
        <div className="container">
  <div className="row align-items-start">
    <div className="col_left col-sm-4 text-light">
      {/* Details */}
    {
    items && items.details.map(item=>(
            <div key={item.id} className="">
              <h3><img className="LeftIcons" src={ContactIcon} alt='contact_icon'/>{item.heading}</h3>
              <div className='hrLeft rounded'/>
            <ul className=''>
              <p className=''><img className="detailIcon" src={HouseIcon} alt='address_icon'/>{item.address}</p>
              <p className=''><img className="detailIcon" src={PhoneWhite} alt='phone_icon'/>{item.phone}</p>
              <p className=''><img className="detailIcon" src={GmailIcon} alt='email_icon'/>{item.email}</p>
            </ul>
            </div>
          ))
        }
        {/* Details ends */}

          {/*Education heading  */}
        {
        items && items.heading.map(item=>(
          <div key={item.id}>
           <h3><img className="LeftIcons" src={EducationIcon} alt="Education_Icon"/>{item.education}</h3>
           <div className='hrLeft rounded'/>
            </div>
          ))
          }

        {/* Education */}
        {
        items && items.education.map(item=>(
            <div key={item.id} className="">
            <ul>
              <li className='m-0'>{item.date}</li>
              <p className='m-0 text-white'>{item.course}</p>
              <p className=''>{item.school}</p>
            </ul>
              
            </div>
          ))
        }
        {/* Education ends */}

        {/*Language heading  */}
        {
        items && items.heading.map(item=>(
          <div key={item.id}>
           <h3><img className="LeftIcons" src={GlobeIcon} alt="Globe_Icon"/>{item.language}</h3>
           <div className='hrLeft rounded'/>
            </div>
          ))
          }
        {/* Language */}
        {
        items && items.languages.map(item=>(
          
          <div key={item.id} className="w-75 m-auto">
          <div className='bg-warning rounded'>
          <p className='swedish px-2 m-0 rounded text-light'>{item.swedish} </p>
          </div>
          <p>{item.knowledgeSwedish}</p>
          </div>
          ))
        }
        {/* Language ends */}
        {
        items && items.languages.map(item=>(
          
            <div key={item.id} className="w-75 m-auto">
            <div className='bg-warning rounded'>
            <p className='english px-2 m-0 rounded text-light'>{item.english}</p>
            </div>
            <p className=''>{item.knowledgeEnglish}</p>
            </div>
          ))
        }
{/*Reference heading  */}

{
        items && items.heading.map(item=>(
          <div key={item.id}>
           <h3><img className="LeftIcons" src={RefICon} alt="Globe_Icon"/>{item.references}</h3>
           <div className='hrLeft rounded'/>
            </div>
          ))
          }
        {
        items && items.references.map(item=>(
          
            <div key={item.id} className="">
            <ul className='py-1'>
            <li className='m-0'>{item.name}</li>
            <p className='m-0 px-4'>{item.phone}</p>
            <p className='m-0 px-4'>{item.company}</p>
            </ul>
            </div>
          ))
        }
        {/* License starts */}
        <div className=''>
        {
    items && items.licenses.map(item=>(
            <div key={item.id} className="">
              <h3 className='text-center'><img className="LeftIcons" src={LicenseIcon} alt="license_icon"/>{item.heading}</h3>
              <div className='hrLeft rounded w-75'/>
            <ul className=''>
              <li className=''>{item.car}</li>
              <li className=''>{item.snowmobile}</li>
              <li className=''>{item.traverse}</li>
              <li className=''>{item.scaffold}</li>
              <li className=''>{item.fall}</li>
            </ul>
            </div>
          ))
        }
        </div>
      </div>
   {/* column left ends */}
    <div className="col col-sm-8">
      {/* Profile */}
    {
    items && items.profile.map(item=>(
            <div key={item.id}>
              <h3><img src={ProfileIconBlue} className="RightIcons" alt="contact_icon"/>{item.heading}</h3>
              <div className='hrRight rounded'/>
              <ul>
                <li>{item.content}</li>
              </ul>
            </div>
          ))
        }
        {/* profile ends */}

        {
        items && items.heading.map(item=>(
          <div key={item.id}>
           <h3><img className="RightIcons" src={Briefcase} alt="Briefcase_Icon"/>{item.work}</h3>
           <div className='hrRight rounded'/>
            </div>
          ))
          }
        
        {/* Work experience */} 
         {
        items && items.work.map(item=>(
            <div key={item.id} className="row">
              <div className='col'>
                <ul className=''>
                <li className=''><img className="companyIcon" src={WorkerIcon} alt="worker_icon"/>{item.company}</li>
                <p className='text-secondary'>{item.role}</p>
              </ul>
              </div>
              <div className='col col-5'><p>{item.date}</p></div>
            </div>
          ))
        }
        {/* Work ends */}
       <div className='row'>
          {/* Skills */}
        {
        items && items.heading.map(item=>(
          <div key={item.id}>
           <h3><img className="RightIcons" src={Briefcase} alt="Briefcase_Icon"/>{item.skill}</h3>
           <div className='hrRight rounded'/>
            </div>
          ))
          }
    <div className='col'>
      
          {
          items && items.skills.map(item=>(
            <div key={item.id} className=" rounded w-75 m-auto">
            <ul>
              <li className=''>{item.operatingSystem}</li>
              <ProgressBar striped variant="dark" animated now={100}/>
              <li className=''>{item.office}</li>
              <ProgressBar striped variant="dark" animated now={95}/>
              <li className=''>{item.coding}</li>
              <ProgressBar striped variant="dark" animated now={90}/>
              <li className=''>{item.database}</li>
              <ProgressBar striped variant="dark" animated now={90}/>
            </ul>
            </div>
          ))
        }
        
       
        </div>
        <div className='col'>
        {
          items && items.skills.map(item=>(
            <div key={item.id} className="w-75 m-auto">
            <ul>
              <li className=''>{item.cooperation}</li>
              <ProgressBar striped variant="dark" animated now={100}/>
              <li className=''>....</li>
              <ProgressBar striped variant="dark" animated now={75}/>
              <li className=''>....</li>
              <ProgressBar striped variant="dark" animated now={75}/>
              <li className=''>...</li>
            </ul>
            </div>
          ))
        }
          </div>
           {/* Skills ends */}
        </div>
        
        
        </div>
       </div>
        </div>
    </div>
    {/* Column Right ends */}
  </div> 
    )
  }
}
