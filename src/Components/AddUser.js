import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
} from "@mui/material";

import {addUser} from '../Service/Api'
import { useNavigate } from "react-router-dom";



function AddUser() {
  const navigate=useNavigate()
  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const [value, setValue] = useState(initialValues);

  // console.log(value);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // console.log(value);
  };

 const handleSubmit= async()=>{ 
  console.log("button clicked")
   await addUser(value) 
   navigate( "/all")
 }





  return (
    <div>
      <h1 className="my-3 text-center">Add User</h1>
      <FormGroup className=" container col-6 offset-3 gap-5">
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input name="name" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input name="username" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input name="phone" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={handleSubmit}>Add User</Button>
        </FormControl>
      </FormGroup>
    </div>
  );
}

export default AddUser;
