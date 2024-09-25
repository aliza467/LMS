// import React, { useState } from 'react'

// const StudentRegisteration = ({ Title, buttonText}) => {
//     const [formData, setFormData] = useState({
//       firstName: '',
//       lastName: '',
//       email: '',
//       className: '',
//       gender: ''
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       onSubmit(formData); // Pass data to parent component
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         className: '',
//         gender: ''
//       }); // Reset form
//     };
  
//     return (
//       <>
//         <h1 style={{ textAlign: 'center' }}>Registeration Form</h1>
//         <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//               required
//             />
//           </div>
  
//           <div style={{ marginBottom: '15px' }}>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//               required
//             />
//           </div>
  
//           <div style={{ marginBottom: '15px' }}>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//               required
//             />
//           </div>
  
//           <div style={{ marginBottom: '15px' }}>
//             <label>Class:</label>
//             <input
//               type="text"
//               name="className"
//               value={formData.className}
//               onChange={handleChange}
//               style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//               required
//             />
//           </div>
  
//           <div style={{ marginBottom: '15px' }}>
//             <label>Gender:</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
  
//           <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
//             Register
//           </button>
//         </form>
//       </>
//     );
//   };
  
//   export default StudentRegisteration;
