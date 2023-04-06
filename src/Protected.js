import React,{useEffect} from 'react'
import{useNavigate}  from 'react-router-dom'

 
 function Protected( props) {

    let Cmp=props.cmp
    

    const navigate=useNavigate();

    useEffect(()=>{
        if(! localStorage.getItem('User-data')){
           navigate('/register')
         }
         
        else if(localStorage.getItem('User-data')){
           navigate('/addproduct')
         }

    },[])
   return (
     <div>
       <Cmp/>
     </div>
   )
 }
 
 export default Protected
 
