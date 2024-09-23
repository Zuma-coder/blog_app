import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPen,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      navigate("/");
    });
  };

  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} />
              ホーム
            </Link>
          </li>
          <li>
            <Link to="/create_note">
              <FontAwesomeIcon icon={faPen} />
              記事を投稿
            </Link>
          </li>
          <li>
            {!isAuth ? (
              <Link to="/login">
                <FontAwesomeIcon icon={faRightToBracket} />
                ログイン
              </Link>
            ) : (
              <Link to="/" onClick={logout}>
                <FontAwesomeIcon icon={faRightToBracket} />
                ログアウト
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
