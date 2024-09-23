import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const login = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <>
      <Navbar />
      <p>ログインして始める</p>
      <button onClick={login}>ログイン</button>
    </>
  );
};

export default Login;
