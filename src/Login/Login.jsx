import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import img1 from '../assets/formimage.png';
import img2 from '../assets/img2.jpg';
import { doc, getDoc } from 'firebase/firestore';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const getData = await getDoc(doc(db, "users", userCredential.user.uid));
  
      localStorage.setItem("userId", userCredential.user.uid);
      localStorage.setItem("userData", JSON.stringify(getData.data()));
  
      navigate("/dashboard");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div style={outerContainerStyle}>
      <div style={leftContainerStyle}>
        <img style={logoStyle} src={img2} alt="Logo" />
        <h2>Welcome To Learning <br />Management System</h2>
        <img style={formImageStyle} src={img1} alt="Form Illustration" />
      </div>

      <div style={containerStyle}>
        <form style={formStyle} onSubmit={handleLogin}>
          <h2 style={headerStyle}>Login</h2>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email:</label>
            <input
              style={inputStyle}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password:</label>
            <input
              style={inputStyle}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a onClick={() => navigate("/")} href="#" style={linkStyle}>Don't have an account?</a><br /><br />
          <button style={buttonStyle} type="submit">Login</button>
          {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

// Responsive styles
const outerContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginTop: '50px',
  padding: '20px',
};

const leftContainerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  flex: '1 1 300px', // Responsive flex basis for smaller screens
};

const logoStyle = {
  height: '80px',
  width: 'auto',
  marginBottom: '20px',
};

const formImageStyle = {
  height: 'auto',
  width: '100%',
  maxWidth: '400px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 1 300px', // Responsive flex basis for smaller screens
  padding: '20px',
};

const formStyle = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '500px',
  marginBottom: '20px',
};

const headerStyle = {
  marginBottom: '1rem',
  fontSize: '1.5rem',
  textAlign: 'center',
};

const inputGroupStyle = {
  marginBottom: '1rem',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  cursor: 'pointer',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  marginTop: '1rem',
  textAlign: 'center',
};

// Media Queries for responsiveness
const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
  outerContainerStyle.flexDirection = 'column'; // Stack vertically on smaller screens
  containerStyle.width = '100%'; // Full width for the form container
  containerStyle.padding = '10px';
  leftContainerStyle.marginBottom = '40px'; // Increase margin for better spacing
}

export default Login;
