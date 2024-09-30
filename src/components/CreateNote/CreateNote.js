import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./CreateNote.css";

const CreateNote = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await addDoc(collection(db, "posts"), {
      text: text,
      description: description,
      user: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="create-note-container">
          <h1>新しい記事</h1>
          <div className="input-area">
            <span>タイトル</span>
            <input
              type="text"
              id="title"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="input-area">
            <span>内容</span>
            <textarea
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button onClick={submit}>登録</button>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
