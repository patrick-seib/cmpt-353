import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [post, setPost] = useState({
    topic: "",
    data: "",
  });
  
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:${process.env.REACT_APP_SERVER_PORT}/test", post);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Post</h1>
      <input
        type="text"
        placeholder="topic"
        name="topic"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="data"
        name="data"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">Go home</Link>
    </div>
  );
};

export default Create;