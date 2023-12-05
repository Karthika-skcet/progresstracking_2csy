import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Layout from "../Pages/Layout";
const Navigate=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
         <Route path='/Signup' element={<Signup/>}/>
         <Route path="/blogs" element={<Blog/>}/>
     <Route path="contact" element={<Contact/>}/>
         <Route path="Login" element={<Layout/>}/>
         <Route path="Home" element={<Home/>}/>
        </Routes>
        
        
        
        <
        </BrowserRouter>
    )
}