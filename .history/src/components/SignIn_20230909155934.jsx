import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./helpers/firebase";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin,setIsLogin]= useState(false)
  const handleSignIn = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setIsLogin(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
if(islogin ===true){
    return (
       <div>
        <AccountCircleIcon/>{user.email}
       </div>
    )
}else
  return (
    <box className=" bg-none py-2 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div></div>
        <form onSubmit={handleSignIn}>
          <div className="rounded-md  flex flex-row gap-2">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-nonefocus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff6e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </box>
  );
};

export default SignIn;
