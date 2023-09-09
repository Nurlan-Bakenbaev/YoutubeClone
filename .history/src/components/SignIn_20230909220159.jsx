import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./helpers/firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState();

  const handleSignUp = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setLogin(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        setLogin(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
    setLogin(null);
    localStorage.removeItem("user");
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLogin(storedUser);
    }
  }, []);

  if (login) {
    return (
      <div className="text-white flex gap-3 items-center">
        <Link to={'/mychannel'}>
          <div className="uppercase  rounded-full w-8 h-8  bg-purple-500 flex items-center justify-center">
            {login.email.slice(0, 1)}
          </div>
        </Link>
        <div className=" gap-3 flex items-center ">
         <span>{login.email}</span> 
          <button
            onClick={handleSignOut}
            className="w-full py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff6e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    );
  } else
    return (
      <div className=" bg-none py-2 px-4 sm:px-6 lg:px-8">
        <div className="">
          <form>
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
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSignUp}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff6e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span>Login</span>
                </button>
                <button
                  onClick={handleSignIn}
                  className="group relative w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff6e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span>SignUp</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignIn;
