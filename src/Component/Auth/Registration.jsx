import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { register } from '../../Redux/AuthSlice';
export default function App() {
  const dispatch=useDispatch();
 const[image,setImage]=useState()
 const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  // const [img, setimg] = useState("");
  const [error, setError] = useState({});

  console.log(error,"error")
  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.first_name = "First Name is Required";
    }
    if (!user.last_name) {
      error.last_name = "Last Name is Required";
    }
   

    if (!user.email) {
      error.email = "Email is Required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.email
      )
    )
      if (!user.password) {
        error.password = "Password  is Required";
      }

    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "First Name is Required" });
        setUser({ ...user, first_name: "" });
      } else {
        setError({ ...error,first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "Name is Required" });
        setUser({ ...user, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "@Email is Required" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "@School name is Required" });
        setUser({ ...user, password: "" });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }
  };

const SubmitInfo= (e)=>{
  e.preventDefault();
  let formData= new FormData();
  formData.append("first_name",user.first_name);
  formData.append("last_name",user.last_name);
  formData.append("email",user.email);
  formData.append("password",user.password);
  formData.append("image",image);
  dispatch(register(formData));};


  // try {
  //   const response = await axios.post(
  //     "https://wtsacademy.dedicateddevelopers.us/api/user/signup",
  //     formData
  //   );
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }
  
  // const sendData = async (e) => {
  //   e.preventDefault();
  //   const data = { name: user.name, mobile: user.mobile,email:user.email,password:user.password };
  //   try {
  //     const response = await fetch('https://wtsacademy.dedicateddevelopers.us/api/user/signup', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  return <>
  
  <div className='container'>
    <div className='row'>
    <div className='col-lg-4' style={{ backgroundColor: "#E5F1F5" }}>
      <h2> GARMENTS EXPO &</h2>
      <h3>CARNIVAL 2023</h3>
     
      

    </div>
    <div className='col-lg-8' style={{ backgroundColor: "#E5F4F5" }}>
    <form>
        <div  className='regd'>
            <label for="exampleInputEmail1">first Name</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="first_name"
              value={user.first_name}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.first_name}{" "}
            </span>
          </div>

          
          <div>
            <label for="exampleInputEmail1">Last Name</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="last_name"
              value={user.last_name}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.last_name}{" "}
            </span>
          </div>

          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={user.email}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.email}{" "}
            </span>
          </div>

          <div>
            <label>Password</label>
            <input
              class="form-control"
              name="password"
              value={user.password}
              onChange={(e) => postUserData(e)}
            />
             <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.password}{" "}
            </span>
          </div>

          <div>
            <label>Img</label>
            <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />
             {/* <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.password}{" "}
            </span> */}
          </div>
        
    
        <button type="submit" class="btn btn-primary" onClick={SubmitInfo}>
          Submit
        </button>
      </form>

    </div>
    </div>
  

  </div>
 
  
  
  
  </>
   
 
};