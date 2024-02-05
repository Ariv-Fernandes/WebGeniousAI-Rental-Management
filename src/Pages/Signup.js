import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import '../CSS/Signup.css'
import Loginlottie from "../lotties/Loginlottie"
import axios from 'axios'

const Signup = (props) => {

  const [userType,setUserType]= useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  
  let [username, setUsername] = useState();
  const [secret, setSecret] = useState();

  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setSecret(newPassword);
  };


  const onSignup = (e) => {
    e.preventDefault();
    username=email.split('@')[0];
    axios
      .post("http://localhost:3001/chat/signup", {
        username,
        secret,
        email,
        
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   await signup(userType,email, password)
  // }

  return (
  <div style={{display:"flex"}}>
      <Loginlottie/>
    <form className="login" onSubmit={onSignup}>
      <h3>Sign Up</h3>
    
        <label htmlFor="userType">User Type:</label>
          <select
             
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={handlePasswordChange}
        value={password} 
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default Signup