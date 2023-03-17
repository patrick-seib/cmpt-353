import axios from "axios";

function callServer() {
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/get-posts`).then((response) => {
      console.log(response.data);
    });
}
const Posts = () =>{
    return (
      <div>
        This is a sample component
        {callServer()}
      </div>
    );
  }

export default Posts;