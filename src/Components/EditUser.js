import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
} from "@mui/material";

import { getUser ,editUser} from "../Service/Api";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
// <==================>
  const navigate = useNavigate();
  const params = useParams();
  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  
  const [value, setValue] = useState(initialValues);
// <========================>


  //  use effect for call the function for receive data
  useEffect(() => {
    updateUser();
  }, []);



// data receive function call (get api call with the help of params)
  const updateUser = async () => {
    let result = await getUser(params.id);
    setValue (result.data);
  };

  // data change an set new data 
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // console.log(value);
  };


  // Edit button data submit (put) api function
  const handleSubmit = async () => {
    console.log("Edit button clicked");
    await editUser(value,params.id);
    navigate("/all");
  };

  return (
    <div>
      <h1 className="my-3 text-center">Edit User</h1>
      <FormGroup className=" container col-6 offset-3 gap-5">
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input name="name" onChange={handleChange} value={value.name}/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input name="username" onChange={handleChange} value={value.username} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={handleChange}  value={value.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input name="phone" onChange={handleChange} value={value.phone} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Edit User
          </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
}

export default EditUser;
