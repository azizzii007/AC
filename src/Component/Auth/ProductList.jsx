import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Details } from '../../Redux/CrudSlice';
// import { DeleteProduct } from '../../Redux/CrudSlice';
import {image} from '../../Redux/Helper';


export default function ProductList() {
  const Dispatch=useDispatch();
  const {data} = useSelector((s)=>s.Crud);
  useEffect(() => {
    Dispatch(Details())
  }, [])
  console.log(data);
  return (
    <>
      {data?.data?.map((user) => {
        return (
          <>
            <div className='container' style={{marginTop:"70px auto",marginBottom:"50px"}}>
              <div className='row'>
                <div className="col-md-4" >
                  <div class="card" style={{textAlign:"center",fontSize:"20px"}}>
                    {/* <img src={} class="card-img-top" alt="..." height="250px" /> */}
                   
                    <div class="card-body">
                       <img
                        height="400px"
                        width="300px"
                        src={
                          user?.image
                            ? image(user?.image)
                            : "error"
                        }
                        alt="No Image"
                      />
                      <div style={{paddingTop:"50px"}}>
                      <h5 class="card-title">{user.title}</h5>
                      <p class="card-text">
                        
                        
                        {user.description}

                      </p>
                      <Link to={`/Edit/${user._id}`} class="btn btn-primary">
                    Edit
                  </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </>
        )
      })}

    </>

  )
}