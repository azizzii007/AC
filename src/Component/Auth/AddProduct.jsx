
import axios from 'axios';
import React, { useState } from 'react'
import { create } from '../../Redux/CrudSlice';
import { useDispatch } from 'react-redux';

export default function Addproduct() {

    const [error, setError] = useState({})
    const[image,setImage]=useState()
    const [user, setUser] = useState({
        title: "",
        description: "",
        
    })
const dispatch=useDispatch();
    const handelChange = (event) => {
        // console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        if (name === "title") {
            if (value.length == 0) {
                setError({ ...error, title: "@Title is Required" });
                setUser({ ...user, title: "" });
            } else {
                setError({ ...error, title: "" });
                setUser({ ...user, title: value });
            }
        }
       
        if (name === "description") {
            if (value.length === 0) {
                setError({ ...error, description: "@Description name required" });
                setUser({ ...user, description: "" });
            } else {
                setError({ ...error, description: "" });
                setUser({ ...user, description: value });
            }
        }
       
        
       
    }
    const sendData = (e) => {
        e.preventDefault();
        // setError()
        let formData= new FormData();
        formData.append("title",user.title);
        formData.append("description",user.description);
        formData.append("image",image);
        dispatch(create(formData));


       



    }

    return (

        <>
            <div id="container">
                <h1 id="form-title">AddProduct</h1>
                <form onSubmit={sendData}>
                    <div id="main-user-info">
                        <div id="user-input-box">
                            <label for="title">Title</label>
                            <input type="text"
                                name="title"
                                placeholder="Enter Title"
                                value={user.first_name} onChange={handelChange} />
                        </div>

                        <div id="user-input-box">
                            <label for="email">Description</label>
                            <input type="description"
                                name="description"
                                placeholder="Enter Description"
                                value={user.description}
                                onChange={handelChange} />
                        </div>
                        <label>Img</label>
            <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />
          
                              
                         </div>

                    <div id="form-submit-btn">
                    <button type="submit" class="btn btn-primary" onClick={sendData}>
          Submit
        </button>
                    </div>
                </form>
            </div>
        </>
    )
}