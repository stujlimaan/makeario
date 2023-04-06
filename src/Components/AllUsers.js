import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  ButtonGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getData, deleteUser } from "../Service/Api";

function AllUsers() {
  const [Data, SetApiData] = useState([]);

  useEffect(() => {
    getAlldata();
  }, []);

  const getAlldata = async () => {
    let response = await getData();
    console.log(response.data);
    SetApiData(response.data);
  };

  // delete user function
  const deleteUserData = async (id) => {
    // api function call
        await deleteUser(id);
        // call get users api for reciving update data
        getAlldata()
  };

  return (
    <div className="container py-5">
      <Table border="1">
        <TableHead className="bg-dark">
          <TableRow>
            <TableCell className=" text-light fs-4">Id</TableCell>
            <TableCell className=" text-light fs-4">Name</TableCell>
            <TableCell className=" text-light fs-4">Username</TableCell>
            <TableCell className=" text-light fs-4">Email</TableCell>
            <TableCell className=" text-light fs-4">Phone</TableCell>
            <TableCell className=" text-light fs-4">Any Changes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((item, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell className="">
                  <Button
                    variant="contained"
                    className="m-3"
                    color="warning"
                    component={Link}
                    to={`/edit/${item.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteUserData(item.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AllUsers;
