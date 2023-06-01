import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/AuthSlice';
import '../Auth/Login.css';
import { useEffect } from 'react';
export default function Login() {
    const navigate=useNavigate();
    
    
    const [error, setError] = useState({})
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const dispatch = useDispatch()
    const {redirectTo} = useSelector((state) => state.contents);
    const validation = () => {
        const regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const error = {};
        if (!user.email) {

            error.email = ("Please enter the password")
        }
        else if (!regx.test(user.email)) {
            error.email = ("enter a valid email")
        }
        if (!user.password) {


            error.password = ("please enter the password")
        }

        return error
    }




    const handelChange = (event) => {
        // console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        if (name === "email") {
            if (value.length == 0) {
                setError({ ...error, email: "@Email is Required" });
                setUser({ ...user, email: "" });
            } else {
                setError({ ...error, email: "" });
                setUser({ ...user, email: value });
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" });
                setUser({ ...user, password: "" });
            } else {
                setError({ ...error, password: "" });
                setUser({ ...user, password: value });
            }
        }

    }
    const sendData = async (event) => {
        event.preventDefault()//prevents reload
        setError(validation())

        // let formData= new FormData();
        // formData.append("email",user.email);
        // formData.append("password",user.password);
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("password", user.password);

        dispatch(login(formData))

    }

    const RedirectUser = () => {
        let token = localStorage.getItem("token");
        let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    
        if (token !== null && token !== undefined && token !== "") {
            // window.location.pathname = getPathname;
            isInLoginPage && navigate("/");
        }
    };

    useEffect(()=>{
        RedirectUser()
    },[redirectTo])
    
    return (
        <>


            <div class="hero">
                <div class="contanier">



                    <div class="sign">
                        <h3>Login Here</h3>

                        <form onSubmit={sendData}>
                            <div>
                                <label for="exampleInputEmail1">Email address</label>
                                <input
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                   
                                    onChange={handelChange}
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
                                 
                                    onChange={handelChange}
                                />
                                <span style={{ color: "red", marginLeft: "24px" }}>
                                    {" "}
                                    {error.password}{" "}
                                </span>
                            </div>

                            <button type="submit" class="btn btn-primary" >
                                Login
                            </button>

                            <p class="Sign-with">Sign in With</p>



                            <p class="account">Don't Have an Account?</p>
                            <p class="sign-up"><Link to="/Registration">Sign up</Link> here</p>
                        </form>
                    </div>

                </div>
            </div>











        </>
    )

}
