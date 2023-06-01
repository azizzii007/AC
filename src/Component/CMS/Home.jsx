import React,{useEffect, useState} from 'react'
import '../CMS/Home.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Login, reset_redirectTo } from '../../Redux/AuthSlice';



export default function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(reset_redirectTo(null))
  },[reset_redirectTo])
  // const [error,setError]= useState({});
  // const [user,setUser]= useState({email:"",password:""});
  // const [dispatch,useDispatch]= useState({});



  // const validation = ()=>{
  //   const error={};

  //   if (!user.email){error.email= "email is requireed"}
  //     else if (
  //      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.
  //      test(user.email)
  //   )
  //   if(!user.password){error.password = "enter a valid password"}


  //   return (error)
  //     };

  //   const postUserData =(e)=>{
  //     let name = e.target.name;
  //     let value= e.target.value;

  //     if (name==='email'){
  //       if(value.length == 0){
  //         setError({...error,email:"email is required"});
  //         setUser({...user,email:""});

  //       }else{
  //         setError({...error,email:""});
  //         setUser({...user,email:value});
  //       }
  //     }if (value === 'password'){
  //       if(value.length == 0){
  //         setError({...error,password:"password is required"});
  //         setUser({...user,password:""});
  //       }
  //       else{
  //         setError({...error,password:""});
  //         setUser({...user,passsword:value});
  //       }
  //     }
  //   }
     

  //    const sendData = async (e)=> {
  //     e.preventDefault()
  //     setError(validation())
      
  //     let formData = new FormData();
  //     formData.append("email",user.email);
  //     formData.append("password",user.password);

  //     dispatch(Login(formData));
  //    }  






  return (
    <>
      <div className='home-page'>
      <h1 className='text'>GARMENTS EXPO</h1>
    </div>
    {/* <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name="email"
    value={user.email}
    onChange={(e)=>postUserData(e)}
    />
    
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
    name="password"
    value={user.password}
    onChange={(e)=>postUserData(e)}
    />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={sendData}>
               Login
           </button>
  </form> */}
    </>
    
  )
}
