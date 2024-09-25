import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Correctly import signOut
import { auth } from '../config/firebase';
import SchoolIcon from '@mui/icons-material/School';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Correctly call signOut with auth instance
      console.log('User logged out successfully');
      navigate('/'); // Redirect to the login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
    
    <nav style={navbarStyle}>
        
      <h1 style={headingStyle}> <SchoolIcon/>Learning Management System</h1>
      <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
    </nav>
    </>
  );
}

// Inline CSS styles
const navbarStyle = {
  posi2tion:"fixed",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
};

const headingStyle = {
    
  margin: 0,
  fontSize: '1.5rem',
  
};

const logoutButtonStyle = {
  padding: '10px 20px',
  backgroundColor: "black",
  color: "white",
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',

};

export default Navbar;