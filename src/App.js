import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Registration from './Component/Auth/Registration';
import Login from './Component/Auth/Login';
import Home from './Component/CMS/Home';
import Footer from './Sharemodule/Footer/Footer';
import Header from './Sharemodule/Header/Header';
import Edit from '../src/Component/Auth/Edit'
import AddProduct from './Component/Auth/AddProduct';
import ProductList from './Component/Auth/ProductList';

function App() {
  function PrivateRoute({ children }) {
    console.log(children, "children");
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    // useEffect(() => {
    //   localStorage.setItem("pathname", location?.pathname);
    // }, [location]);

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {alert("Please go for login either you can't access product list")}
        
   
      </>
    

    );
  }

 const PublicRouteNames = [
    {
      path: "/Registration",
      Component: <Registration />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
   


  ];

  const PrivateRouteNames = [
   
    {
      path: "/AddProduct",
      Component: <AddProduct />,
    },
    {
      path: "/Display",
      Component: <ProductList />,
    },
    {
      path: "/Edit/:id",
      Component: <Edit />,
    },
    {
      path: "/update/:id",
      Component: <Edit />,
    },

 
    
  ];
  return (
    
    <div className="App">
      <Suspense fallback={<h2>Loading.....</h2>}>
    <Router>
        <Header />
        <Routes>
          {PublicRouteNames?.map((route, index) => {
            return (
              <Route
                // key={index + 1}
                exact
                path={route.path}
                element={route.Component}
              />
            );
          })}

          {/*************  protected routes ********************/}

          {PrivateRouteNames?.map((route, index) => {
            return (
              <Route
                // key={index + 2}
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
              />
            );
          })}
        </Routes>
        <Footer />
      </Router>

    </Suspense>
      
    </div>
  );
}

export default App;
