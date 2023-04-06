import axios from "axios";
  
 const URL="http://localhost:3002/users"

// api for add user for ===>add user page
 export const addUser= async(data)=>{
    try{
      return await  axios.post(URL,data)
    } catch(error){
    console.log("Error while uploading the data" , error.message )
    }

}

// api for display all the data in all users page
export const getData=async()=>{
  try{
    return await  axios.get(URL)
  } catch(error){
  console.log("Error while get the data" , error.message )
  }
}


// edit user page=> data get api for initialdata showing >
export const getUser=async(data)=>{
  try{
    return await  axios.get(`${URL}/${data}`)
  } catch(error){
  console.log("Error while get the data" , error.message )
  }
}

// put api for user update
export const editUser=async(data,id)=>{
  try{
    return await  axios.put(`${URL}/${id}`,data)
  } catch(error){
  console.log("Error while get the data" , error.message )
  }
}


// Api for delete

export const deleteUser=async(id)=>{
  try{
    return await  axios.delete(`${URL}/${id}`)
  } catch(error){
  console.log("Error while get the data" , error.message )
  }
}