import React, { useContext, useEffect } from "react";
import { GameContext } from "../../src/context/context";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { signUp, setsignUp } = useContext(GameContext);
  const navigate = useNavigate();
  const formDetails = (e) => {
    const Values = { ...signUp, [e.target.name]: e.target.value };
    // console.log(Values);
    setsignUp(Values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = signUp;

    const saveDetails = async (signUp) => {
      const fetched = await fetch("http://localhost:3001/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUp),
      });
      const res = await fetched.json();
      console.log(res);
    };
    if (username && email && password === confirmPassword) {
      console.log(signUp);
      console.log("clicked");
      saveDetails(signUp);
      navigate("/");
    } else {
      console.log("password dont match");
    }
  };
  //  useEffect(() => {
  //   navigate('/login')
  //  }, [signUp]);
  // // const handleSignUp=()=>{
  // //   navigate('/login')
  // // }
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/4312899.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        backdropFilter: "blur(20px) brightness(0.8)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className="z-10 bg-white bg-opacity-20 shadow-lg rounded-lg px-8 pt-8 pb-10 mb-4 max-w-sm w-full"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="text-2xl font-bold mb-6 text-center text-white">
          Sign Up
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-6">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={signUp.username}
              onChange={formDetails}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 bg-opacity-60 bg-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signUp.email}
              onChange={formDetails}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 bg-opacity-60 bg-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUp.password}
              onChange={formDetails}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 bg-opacity-60 bg-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signUp.confirmPassword}
              onChange={formDetails}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 bg-opacity-60 bg-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
