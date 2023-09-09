import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./helpers/firebase";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login,setLogin]= <Usestate></Usestate>
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="h-[450px] max-w-[100%]  flex items-center justify-center bg-black py-2 px-4 sm:px-6 lg:px-8">
      <div className="min-w-[320px]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#ff6e40]">
            Sign In
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
          <div className="rounded-md  flex flex-col gap-5">
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
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff6e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
