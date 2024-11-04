import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../src/context/context";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ formData, setFormData, setLoginForm }) => {
  const { FetchedDetails, setFetchedDetails } = useContext(GameContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  // const {} = useContext(GameContext);
  const fetching = async () => {
    const fetches = await fetch("http://localhost:3001/api/data", {
      method: "GET",
    });
    const res = await fetches.json();
    // console.log(res);
    setFetchedDetails(res);
    // return res;
  };

  useEffect(() => {
    if (FetchedDetails.length > 0) {
      const user = FetchedDetails.find(
        (u) =>
          u.username === formData.username && u.password === formData.password
      );
      console.log("clicked");
      if (user) {
        setLoginForm(true);
        console.log("done");
        navigate("/home");
        // navigate("/game");
        setError(false);
      } else {
        setError(true);
      }
    }
  }, [FetchedDetails]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetching();
    // const pass = Number(formData.password);
    //console.log(formData);
  };
  const handleClick = () => {
    console.log(true);
    navigate("/signup");
  };

  // fetching();
  return (
    <>
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
          className="z-10 bg-white bg-opacity-20 shadow-lg rounded-lg px-8 pt-8 pb-10 mb-4 max-w-sm w-full glassmorphism"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="text-2xl font-bold mb-6 text-center text-white">
            Login
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="username"
                placeholder="Enter the username"
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 bg-opacity-60 bg-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-8">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-800 bg-opacity-60 bg-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center mx-2 justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>

              <div className="flex items-center mx-2 justify-center">
                <button
                  onClick={handleClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
            </div>{" "}
            {error && (
              <p className="text-red-600 text-center font-semibold mt-2">
                Please enter the correct password and username
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
