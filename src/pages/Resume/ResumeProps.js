import {useState, useEffect} from 'react'
import Loading from "./Loading"
import PropsR from "./PropsR"
import 'bootstrap/dist/css/bootstrap.css';

export default function Resume() {

  const [items, setItems] = useState([])
  const [isloaded, setIsLoaded] =  useState(false)
  const [error, setError] = useState(null)
  // Change this to any username whose repositories you want to get

  useEffect(() => {
    setTimeout(()=>{
      const fetchRepos = async () => {
        const res = await fetch('../JsonData/TestProps.json')
        const data = await res.json()
        setIsLoaded(true)
        setItems(data)
        console.log(data)
      }
      fetchRepos()
    },3000)

  }, [])

  if(error){
    return <div>Error: {error.message}</div>
  }
  else if(!isloaded){
    return <Loading/>
  }
  else{
    return ( 
      <div className='py-4'>

          <div className='container'>
            {items.map((item)=> (
              <PropsR key={item.id} {...item} />
            ))}
            </div>
      </div>
    )
  }
 }
// {...item} för att fungera med props och kunna hämta data i andra componenter 