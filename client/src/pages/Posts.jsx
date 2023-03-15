import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         const res = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/get-posts`);
//         setBooks(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   console.log(books);

 // return (
    // <div>
    //   <h1>Posts</h1>
    //   <div className="posts">
    //     {posts.map((post) => (
    //       <div key={post.id} className="book">
    //         <h2>{post.topic}</h2>
    //         <p>{post.data}</p>
    //         <p>{post.id}</p>
    //       </div>
    //     ))}
    //   </div>

    //   <button className="create">
    //     <Link to="/create" style={{ color: "inherit", textDecoration: "none" }}>
    //       Add new post
    //     </Link>
    //   </button>
    //   <button className="home">
    //     <Link to="/home">
    //         Go back home
    //     </Link>
    //   </button>
    // </div>
 // )
}

export default Posts;