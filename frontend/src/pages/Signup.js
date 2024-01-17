import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import '../CSS/Signup.css'
const Signup = () => {
  const [userType,setUserType]= useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(userType,email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
    
        <label htmlFor="userType">User Type:</label>
          <select
             
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            
            >
              <option value="Admin">Admin</option>
              <option value="user">User</option>
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
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup