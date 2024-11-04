import React, { useState } from "react";
import { GlobalProvider } from "../../src/context/context";
import { Board } from "../components/board";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { SignUp } from "../components/SignUp";
import GameRules from "./home";

export const App = () => {
  const [Login, setLoginForm] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              !Login ? (
                <LoginForm
                  formData={formData}
                  setFormData={setFormData}
                  login={Login}
                  setLoginForm={setLoginForm}
                />
              ) : null
            }
          />
          <Route path="/home" element={<GameRules />} />

          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/game" element={<Board/>} */}
          {Login && (
            <Route path="/game" element={<Board formData={formData} />} />
          )}
        </Routes>
      </Router>
    </GlobalProvider>
  );
};
