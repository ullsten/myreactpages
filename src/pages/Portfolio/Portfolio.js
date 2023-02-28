import {useState, useEffect} from 'react'
import Loading from "./Loading"
import Profile from './Profile'
import 'bootstrap/dist/css/bootstrap.css';
import './Portfolio.css'

export default function GetGitRepos() {

  const [items, setItems] = useState([])
  const [isloaded, setIsLoaded] =  useState(false)
  const [error, setError] = useState(null)
  // Change this to any username whose repositories you want to get
  const [users, setUsers] = useState("Ullsten")

  useEffect(() => {
    setTimeout(()=>{
      const fetchRepos = async () => {
        const res = await fetch(
          ` https://api.github.com/users/${users}/repos?page=1&per_page=20&sort=updated`
        )
        const data = await res.json()
        setIsLoaded(true)
        setItems(data)
        console.log(data)
      }
      fetchRepos()
    },3000)

  }, [users])

  if(error){
    return <div>Error: {error.message}</div>
  }
  else if(!isloaded){
    return <Loading/>
  }
  else{
    return ( 
      <div className='container mt-5'>
        <section className=''>
            
          <h1 className='text-light text-center'>
            {/* Viewing {users}´s repositories */}
            Some projects I did at school
          </h1>
  
          <div className='row row-cols-1 gy-3 m-5 row-cols-md-2 row-cols-lg-3' id="rad">
            {items.map((item)=> (
              <Profile key={item.id} {...item} />
            ))}
            </div>
        </section>
      </div>
    )
  }
 }
// {...item} för att fungera med props och kunna hämta data i andra componenter 