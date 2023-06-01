import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Editproduct, Updateproduct } from '../../Redux/CrudSlice';


export default function Edit() {
    const { data } = useSelector((s) => s.Crud);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(Editproduct(id))
  }, [id]);
  const [image, setImage] = useState("");
  const [user, setUser] = useState({
    title: "",
    description: ""
  });

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      if (value.length === 0) {
        setUser({ ...user, title: "" });
      }
      else {
        setUser({ ...user, title: value });
      }
    }
    if (name === "description") {
      if (value.length === 0) {
        setUser({ ...user, description: "" });
      }
      else {
        setUser({ ...user, description: value });
      }
    }
  }





  console.log("Details", data);
  useEffect(() => {

    if (data !== null) {
      setUser({
        title: data?.title,
        description: data?.description,

      });
    }
  }, [data])


  const SubmitInfo = (e) => {
    e.preventDefault();
    console.log("nill")
    let formData = new FormData();
    formData.append("title", user.title);
    formData.append("description", user.description);
    formData.append("id",id);
    formData.append("image", image);
    dispatch(Updateproduct(formData));
  }
  return (
    <>
      <div>
        <div className='container'>
          <div className='row'>
            <div className="col-md-4" style={{ margin: "40px auto" }} >
              <div class="card" >
              <div className='box'style={{marginTop:"20px"}}>
            <img src="" class="card-img-top" alt="..."style={{repeat:"no-repeat",height:" 100px",width:" 200px"}}/>
            </div>
                <div class="card-body">

                  <div style={{ paddingTop: "50px", textAlign: "center", fontSize: "20px" }}>
                    <form class="container" >
                      <img src="" class="card-img-top" alt="..." height="50px" />
                      <div class="form-group">
                        <div >
                          <label>Title</label>
                          <input type="text"
                            class="form-control"
                            name="title"
                            value={user.title}
                            onChange={(e) => postUserData(e)}
                          />
                        </div>
                        <div>
                          <label>description</label>
                          <textarea
                            class="form-control"
                            name="description"
                            value={user.description}
                            onChange={(e) => postUserData(e)}

                          />

                        </div>
                        <label>Image</label>
                        <input type="file"
                          onChange={(e) => setImage(e.target.files[0])}
                          name="img"
                          accept="image/*"
                          class="form-control" />

                        {image !== "" &&
                          image !== undefined &&
                          image !== null ? (
                          <img
                            height="40px"
                            src={URL.createObjectURL(image)}
                            alt=""
                            className="upload-img"
                          />

                        ) : (
                          <>
                            {data?.image === "" ? (
                              <img
                                height="70px"
                                // src={image}
                                alt=""
                                className="upload-img"
                              />
                            ) : (
                              <img
                                height="60px"
                                src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${data?.image}`}
                                alt=""
                                className="upload-img"
                              />
                            )}
                          </>
                        )}
                        {image === "" && (
                          <p>Drag or drop content here</p>
                        )}


                      </div>

                      <button type="submit" class="btn btn-primary" onClick={SubmitInfo}>
                        UPDATE
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </>
  )
}
