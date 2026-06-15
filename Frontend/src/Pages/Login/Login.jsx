import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";


const Login = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


 const formHandle = async (e) => {
  e.preventDefault();

  const data = {
    name: name,
    email: email,
    password: password
  };

  try {
    // 1. withCredentials: true yahan zaroori hai
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/authhandle`, data, {
      withCredentials: true 
    });

    console.log("Success:", response.data);

    // 2. Yahan redirect handle karein
    if (response.data.data.redirect === "/register") {
      window.location.href = "/register"; 
    } else {
      window.location.href = "/discover";
    }

  } catch (err) {
    console.error("Error details:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Something went wrong");
  }
};

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/auth/google`;
  };

  const containerStyle = {
    // height: "90.4vh",
    minHeight: "90.4vh",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#030303",
  };

  const loginBoxStyle = {
    height: "430px",
    width: "400px",
    display: "flex",
    backgroundColor: "#e7e7e7",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid #fcaaa8", // Border color
    borderRadius: "10px",
    boxShadow: "10px 10px 10px #444444",
    zIndex: "999",
    flexwrap: "wrap",
  };

  const titleStyle = {
    fontSize: "50px",
    fontFamily: "Oswald, sans-serif", // Font family
    color: "#000000", // Text color
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyle = {
    backgroundColor: "#000000", // Button background color
    color: "#fff", // Button text color
    fontFamily: "Montserrat",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const hoverButtonStyle = {
    backgroundColor: "#fff", // Button background color on hover
    color: "#000000", // Button text color on hover
    fontFamily: "Montserrat",
    border: "1px solid black",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.5s ease-in-out", // Transition effect
  };

  const imageStyle = {
    position: "absolute",
    left: "10px", // Position the above image to the left
    top: "80px", // Add some space from the top
    width: "400px",
    marginBottom: "20px", // Add margin bottom to create space between image and login box
  };

  const imageBelowStyle = {
    position: "absolute",
    right: "10px", // Position the below image to the right
    bottom: "50px", // Add some space from the bottom
    width: "400px",
    marginBottom: "20px", // Add margin bottom to create space between image and login box
  };

  return (
    <div style={containerStyle}>
      <img src={"/assets/images/1.png"} alt="Above Image" style={imageStyle} />
      <div style={loginBoxStyle}>
        <h1 style={titleStyle}> LOGIN</h1>
        <form onSubmit={formHandle}>
          {/* <input 
          required
          value={username}
          onChange={(e)=>{
            setusername(e.target.value)
          }}
          type="text" className="form-control mb-3" placeholder="Enter your Username" /> */}
          <input 
          required
          value={name}
          onChange={(e)=>{
            setname(e.target.value)
          }}
          type="text" className="form-control mb-3" placeholder="Enter your name" />
          <input
            value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
          required
          type="email" className="form-control mb-3" placeholder="Email" />

          <input
          
            value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
          type="password" className="form-control mb-3" placeholder="Password" required />
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div style={buttonContainerStyle}>
          <Button
            style={isHovered ? hoverButtonStyle : buttonStyle} // Apply style based on hover state
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            onClick={handleGoogleLogin}
          >
            <FaGoogle /> Login with Google
          </Button>
        </div>
      </div>
      <img src={"/assets/images/2.png"} alt="Below Image" style={imageBelowStyle} />
    </div>
  );
};

export default Login;
