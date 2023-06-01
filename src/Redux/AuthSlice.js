import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Redux/Helper";
// import { toast } from "react-toastify";

const initialState = {
  upload_status: "idle",
  // upload_message: "idle",
  status:"idle",
  login_status:"idle",
  des: [],
  isloggedIn:false,
  redirectTo: null,
};


export const register = createAsyncThunk(
  "user/signup",

  async (formData) => {
    let res = await axiosInstance.post(`user/signup`, formData);

    let resData = res?.data;

    return resData;
  }
);

export const login = createAsyncThunk(
  "user/signin",

  async (formData) => {
    let res = await axiosInstance.post(`user/signin`, formData);

    let resData = res?.data;

    return resData;
  }
);
// export const getHomeData = createAsyncThunk(
//   "allstudent",
//   // "allstudent",

//   async () => {
//     let res = await axiosInstance.get(`/allstudent`);

//     let resData = res?.data;

//     return resData;
//   }
// );

export const LoginSlice = createSlice({
  name: "registration",
  initialState,
    reducers: {
      reset_redirectTo: (state, { payload }) => {
        state.redirectTo = payload;
      
      },
      check_token: (state, { payload }) => {
        let token = localStorage.getItem("token");
        if (token !== null && token !== undefined) {
          state.isloggedIn = true;
        }
      },
      handleLoggedout: (state, { payload }) => {
        localStorage.removeItem("token");
        state.isloggedIn = false;
      },
    },

  extraReducers: (builder) => {
    builder
//       .addCase(getHomeData.pending, (state, payload) => {
//         state.status = "loading";
//       })
//       .addCase(getHomeData.fulfilled, (state, { payload }) => {
//         state.status = "idle";

//         if (payload?.ststus == "success") {
//           state.des = payload?.data;
//         }
//       })
//       .addCase(getHomeData.rejected, (state, payload) => {
//         state.status = "idle";
//       })

      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state,{payload}) => {
        state.status = "idle";
        if (payload?.type === "success") {
          state.isloggedIn=true
          
          localStorage.setItem("token", payload?.token);
          localStorage.setItem("setting", "pst");
          // toast.success(payload?.message, {
          //   type: "success",
          //   hideProgressBar: true,
          //   autoClose: 2500,
          // });
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle";
      })

      

      .addCase(login.pending, (state, action) => {
        state.login_status = "loading";
      })
      .addCase(login.fulfilled, (state,{payload}) => {
    
        if (payload?.status === 200) {
          localStorage.setItem("token", payload?.token);
          state.redirectTo = "/";
          state.Logout = true;
        }
       
        
      })
      .addCase(login.rejected, (state, action) => {
        state.login_status = "idle";
        console.log("kjjhj",state.login_status);
      })
  },
});

export const {reset_redirectTo,check_token, handleLoggedout}= LoginSlice.actions;
