// import './App.css';
// import Loginform from './components/Loginform';
// import Admin from './components/Admin';
// import Signupform from './components/Signupform';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//         <Route path="/Loginform" element={<Loginform/>} />
//         <Route path="/Signupform" element={<Signupform/>}/>
//         <Route path="/Admin" element={<Admin/>}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Footer from "./pages/Homepage/Frontend/Components/Footer"
// pages & components
import Userpage from "./pages/Userpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Admin from "./pages/Adminpage";
import Navbar from "./components/Navbar";


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"   // remaining to do
              element={
                user && user.userType === "Admin" ? (
                  <Admin />
                ) : user && user.userType === "user" ? (
                  <Userpage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            >
              
            </Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
