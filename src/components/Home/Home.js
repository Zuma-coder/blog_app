import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { db, auth } from "../../firebase";
import "./Home.css";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

const Home = () => {
  const [documents, setDocuments] = useState([]);
  const fetchDocs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));

      const docsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDocuments(docsArray);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    fetchDocs();
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="home-container">
          <h1>記事一覧</h1>

          <div className="item-container">
            {documents.map((doc) => {
              return (
                <div key={doc.user} className="item">
                  <h2>{doc.text}</h2>
                  <p>{doc.description}</p>
                  <div className="info">
                    <span>{doc.user.name}</span>
                    {auth.currentUser?.uid === doc.user.id && (
                      <button onClick={() => deleteItem(doc.id)}>削除</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
