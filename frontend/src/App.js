import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Home from "./Pages/Homepage/Home.js";
import About from "./Pages/AboutUs/page.js";
import Contact from "./Pages/ContactUs/contact.js";
import Reviews from "./Pages/ReviewsPage/Reviews.js";
import Services from "./Pages/Services/services.js";
import Profile from "./Pages/Profile/Profile.js";
import Terms from "./Pages/Terms&Condition/page.js";
import Login from "./Pages/Login.js";
import Page from "./Pages/page.js";
import Signup from "./Pages/Signup.js";
import { useAuthContext } from "./hooks/useAuthContext.js";
import Admin from "./Pages/Adminpage.js";


export default function App(){
  const { user } = useAuthContext();


  return(
    
   <div  className="App">
  
    
      
      
      <BrowserRouter>
  
      <Routes>
       <Route path="/" element={<Page/>}>
        {(user && user.userType==="Admin")?(<Route index element={<Admin/>}/>):<Route index element={<Home/>}/>} 
       
       <Route path="home" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="reviews" element={<Reviews/>}/>
       <Route path="services" element={<Services/>}/>
       <Route path="profile" element={<Profile/>}/>
      
       <Route path="signup" element={<Signup/>}/>
       <Route path="terms&condition" element={<Terms/>}/>
       </Route>
       <Route path="login" element={<Login/>}/>
    </Routes>
    
    
    
    </BrowserRouter>
    
    </div>
    
      
   
    
      


    

  )
}