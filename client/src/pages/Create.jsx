import axios from 'axios';
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
        await axios.post("http://localhost:${process.env.REACT_APP_SERVER_PORT}/add-post", post);
        navigate("/create");
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
          placeholder="Topic"
          name="topic"
          onChange={handleChange}
        />
        <textarea
          rows={5}
          type="text"
          placeholder="Data"
          name="data"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
        {error && "Something went wrong!"}
        <Link to="/posts">See all posts</Link>
      </div>
    );
};


export default Create;