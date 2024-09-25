import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {IconButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Structure from './Structure';
import Voucher from './Voucher';
import Submission from './Submission';
import Schedule from './Schedule';
import Result from './Result';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Menu as MenuIcon} from '@mui/icons-material';


const drawerWidth = 240;

function Sidebar() {
    const navigate = useNavigate();
    const [currentView, setCurrentView] = useState('studentList'); 
    const [mobileOpen, setMobileOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]); 
    const [admissions, setAdmissions] = useState([]); 
    const [syllabi, setSyllabi] = useState([]); 
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [studentBirth, setStudentBirth] = useState('');
    const [studentGender, setStudentGender] = useState('');
    const [studentQualification, setStudentQualification] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherSubject, setTeacherSubject] = useState('');
    const [subjectName, setSubjectName] = useState(''); 
    const [syllabusFile, setSyllabusFile] = useState(null); 
    const [openStudents, setOpenStudents] = useState(false);
    const [openTeachers, setOpenTeachers] = useState(false);
    const [openSubjects, setOpenSubjects] = useState(false); 
    const [openSyllabus, setOpenSyllabus] = useState(false);
    const [openSchool, setOpenSchool] = useState(false);
    const [openAdmission, setOpenAdmission] = useState(false);
    const [openFee, setOpenFee] = useState(false); 
    const [openExam, setOpenExam] = useState(false);
    const [openClass, setOpenClass] = useState(false); 
  
 
    const [groupname, setGroupName] = useState(''); 

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const drawerWidth = 240;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleStudentsClick = () => {
        setOpenStudents(!openStudents);
    };

    const handleTeachersClick = () => {
        setOpenTeachers(!openTeachers);
    };

    const handleSubjectsClick = () => {
        setOpenSubjects(!openSubjects);
    };

    const handleSyllabusClick = () => {
        setOpenSyllabus(!openSyllabus);
    };


    const handleSchoolClick= () => {
        setOpenSchool(!openSchool);
    };

    const handleClassClick= () => {
        setOpenClass(!openClass);
    };

    const handleAdmissionClick= () => {
        setOpenAdmission(!openAdmission);
    };

    const handleFeeClick= () => {
        setOpenFee(!openFee);
    };

    const handleExamClick= () => {
        setOpenExam(!openExam);
    };

   
    const handleRegisterStudent = () => {
        const newStudent = {
            id:  Date.now(), // Unique ID
            name: studentName,
            email: studentEmail,
            class: studentClass,
        };
        const students = JSON.parse(localStorage.getItem('students')) || [];
        const updatedStudents=([...students, newStudent]);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
        setStudents(updatedStudents);



        setStudentName('');
        setStudentEmail('');
        setStudentClass('');
        setCurrentView('studentList'); 
    };
    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        setStudents(storedStudents);
    }, []);

   
    const handleRegisterTeacher = () => {
        const newTeacher = {
            id:  Date.now(), // Unique ID
            name: teacherName,
            email: teacherEmail,
            subject: teacherSubject,
        };

         // Get existing teachers from localStorage
    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];

    // Add the new teacher to the list
    const updatedTeachers = [...teachers, newTeacher];

    // Save the updated list back to localStorage
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));

    // Update the state to reflect the new list
    setTeachers(updatedTeachers);
       
        setTeacherName('');
        setTeacherEmail('');
        setTeacherSubject('');
        setCurrentView('teacherList');
    };
    useEffect(() => {
        const storedTeachers = JSON.parse(localStorage.getItem('teachers')) || [];
        setTeachers(storedTeachers);
    }, []);

   
    const handleRegisterSubject = () => {
        const newSubject = {
            id: Date.now(), // Unique ID
            name: subjectName,
            class: studentClass,
            group: groupname,
        };
    
        // Get existing subjects from localStorage
        const subjects = JSON.parse(localStorage.getItem('subjects')) || [];
    
        // Add the new subject to the list
        const updatedSubjects = [...subjects, newSubject];
    
        // Save the updated list back to localStorage
        localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    
        // Update the state to reflect the new list
        setSubjects(updatedSubjects);
    
        // Clear the input fields
        setSubjectName('');
        setStudentClass('');
        setGroupName('');
    
        // Change the view to the subject list
        setCurrentView('subjectList');
    };
    useEffect(() => {
        const storedSubjects = JSON.parse(localStorage.getItem('subjects')) || [];
        setSubjects(storedSubjects);
    }, []);


   

    const handleAdmission = () => {
        const newAdmission = {
            id: Date.now(), // Unique ID
            name: studentName,
            email: studentEmail,
            class: studentClass,
            number: studentNumber,
            gender: studentGender,
        };
    
        // Get existing admissions from localStorage
        const admissions = JSON.parse(localStorage.getItem('admissions')) || [];
    
        // Add the new admission to the list
        const updatedAdmissions = [...admissions, newAdmission];
    
        // Save the updated list to localStorage
        localStorage.setItem('admissions', JSON.stringify(updatedAdmissions));
    
        // Update the state to reflect the new list
        setAdmissions(updatedAdmissions);
    
        // Clear the input fields
        setStudentName('');
        setStudentEmail('');
        setStudentClass('');
        setStudentNumber('');
        setStudentGender('');
    
        // Switch the view to admission list
        setCurrentView('admissionList');
    };
    
    // Fetch admissions from localStorage and update state when component mounts
    useEffect(() => {
        const storedAdmissions = JSON.parse(localStorage.getItem('admissions')) || [];
        setAdmissions(storedAdmissions);
    }, []);
       

   
    const handleRegisterSyllabus = () => {
       
        if (!syllabusFile) {
            alert("Please upload a file.");
            return;
        }
    
        // Create a new syllabus object
        const newSyllabus = {
            id: Date.now(), // Unique ID
            subjectName: subjectName,
            class: studentClass,
            file: URL.createObjectURL(syllabusFile), // URL for the uploaded file
        };
    
        // Get existing syllabi from localStorage
        const syllabi = JSON.parse(localStorage.getItem('syllabi')) || [];
    
        // Add the new syllabus to the list
        const updatedSyllabi = [...syllabi, newSyllabus];
    
        // Save the updated list to localStorage
        localStorage.setItem('syllabi', JSON.stringify(updatedSyllabi));
    
        // Update the state to reflect the new list
        setSyllabi(updatedSyllabi);
    
        // Clear the input fields
        setSubjectName('');
        setStudentClass('');
        setSyllabusFile(null);
    
        // Change the view to the syllabus list
        setCurrentView('syllabusList');
    };
    
    // Fetch syllabi from localStorage and update state when component mounts
    useEffect(() => {
        const storedSyllabi = JSON.parse(localStorage.getItem('syllabi')) || [];
        setSyllabi(storedSyllabi);
    }, []);

   
   
    const handleDeleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

   
    const handleDeleteTeacher = (id) => {
        setTeachers(teachers.filter(teacher => teacher.id !== id));
    };

    
    const handleDeleteSubject = (id) => {
        setSubjects(subjects.filter(subject => subject.id !== id));
    };

    
    const handleDeleteSyllabus = (id) => {
        setSyllabi(syllabi.filter(syllabus => syllabus.id !== id));
    };


    const handleDeleteAdmission = (id) => {
        setAdmissions(admissions.filter(admissions => admissions.id !== id));
    };

    const drawer = (
        <List>
            <ListItem button onClick={handleStudentsClick}>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
                {openStudents ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openStudents} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button onClick={() => setCurrentView('studentRegistration')} sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Student Registration" />
                    </ListItem>
                    <ListItem button onClick={() => setCurrentView('studentList')} sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Student List" />
                    </ListItem>
                </List>
            </Collapse>
            {/* Additional items like Teachers, Subjects, etc. go here in the same structure */}
            <ListItem button onClick={handleTeachersClick}>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
                {openTeachers ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openTeachers} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button onClick={() => setCurrentView('teacherRegistration')} sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Teacher Registration" />
                    </ListItem>
                    <ListItem button onClick={() => setCurrentView('teacherList')} sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Teacher List" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={handleSubjectsClick}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Subjects" />
                        {openSubjects ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openSubjects} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button  onClick={() => setCurrentView('subjectRegistration')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Subject Registration" />
                            </ListItem>
                            <ListItem button onClick={() => setCurrentView('subjectList')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Subject List" />
                            </ListItem>
                        </List>
                    </Collapse>

                   
                    <ListItem button onClick={handleSyllabusClick}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Syllabus" />
                        {openSyllabus ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openSyllabus} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button onClick={() => setCurrentView('syllabusRegistration')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Syllabus Registration" />
                            </ListItem>
                            <ListItem button onClick={() => setCurrentView('syllabusList')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Syllabus List" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleSchoolClick}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="School" />
                        {openSchool ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openSchool} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button onClick={() => setCurrentView('studentRegistration')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Student Registration" />
                            </ListItem>
                            <ListItem button onClick={() => setCurrentView('teacherRegistration')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Teacher Registration" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleAdmissionClick}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Class" />
                        {openAdmission ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openAdmission} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button onClick={() => setCurrentView('admissionForm')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Class Form" />
                            </ListItem>
                            <ListItem button onClick={() => setCurrentView('admissionList')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Class List" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleFeeClick}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fee" />
                        {openFee ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openFee} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button onClick={() => setCurrentView('feeStructure')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Fee Structure" />
                            </ListItem>
                            <ListItem button onClick={() => setCurrentView('feeVoucher')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Fee Voucher" />
                            </ListItem>
                            <ListItem button onClick={() => setCurrentView('feeSubmission')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Fee Submission" />
                            </ListItem>
                        </List>
                    </Collapse>

                    


                    <ListItem button onClick={handleExamClick}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Exam" />
                        {openExam ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openExam} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button onClick={() => setCurrentView('examSchedule')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Exam Schedule" />
                            </ListItem>
                            <ListItem button onClick={() => setCurrentView('examResult')} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Exam Result" />
                            </ListItem>
                            
                        </List>
                    </Collapse>


                    </List>
           
        
        
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex' }}>
            {isMobile ? (
                <React.Fragment>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </React.Fragment>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            top: '66px', // Adjust this if needed
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            )}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {/* Content goes here */}
            </Box>
        </Box>




            


            

            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>

            {currentView === 'examSchedule' && (
                    <Box  style={{border:"2px solid lightblue", padding:"50px"}}>
                        <Schedule/>
                    </Box>
                )}

            {currentView === 'examResult' && (
                    <Box  style={{border:"2px solid lightblue", padding:"50px"}}>
                        <Result/>
                    </Box>
                )}    


            {currentView === 'feeStructure' && (
                    <Box  style={{border:"2px solid lightblue", padding:"50px"}}>
                        <Structure/>
                    </Box>
                )}

            {currentView === 'feeVoucher' && (
                    <Box  style={{border:"2px solid lightblue", padding:"50px"}}>
                        <Voucher/>
                    </Box>
                )}    


            {currentView === 'feeSubmission' && (
                    <Box  style={{border:"2px solid lightblue", padding:"50px"}}>
                        <Submission/>
                    </Box>
                )}       







            {currentView === 'admissionForm' && (
                    <Box  style={{border:"2px solid lightblue", padding:"50px"}}>
                        <h2>Admission Form</h2>
                        <TextField
                            label="Name"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            value={studentEmail}
                            onChange={(e) => setStudentEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Phone Number"
                            value={studentNumber}
                            onChange={(e) => setStudentNumber(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Date of Birth"
                            value={studentBirth}
                            onChange={(e) => setStudentBirth(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Qualiication"
                            value={studentQualification}
                            onChange={(e) => setStudentQualification(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Gender"
                            placeholder="Male/Female"
                            value={studentGender}
                            onChange={(e) => setStudentGender(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        
                        
                        <Button variant="contained" color="primary" onClick={handleAdmission}>
                            Add Student
                        </Button>
                    </Box>
                )}
                {currentView === 'admissionList' && (
                    <Box sx={{ overflowX: 'auto', margin: '20px' }}>
                        <h2>Admission List</h2>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Number</TableCell>
                                        <TableCell>Gender</TableCell>


                                       
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {admissions.map(admissions => (
                                        <TableRow key={admissions.id}>
                                            <TableCell>{admissions.id}</TableCell>
                                            <TableCell>{admissions.name}</TableCell>
                                            <TableCell>{admissions.email}</TableCell>
                                            <TableCell>{admissions.number}</TableCell>
                                            <TableCell>{admissions.gender}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => handleDeleteAdmission(admissions.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
              
                

                 {currentView === 'studentRegistration' && (
                    <Box  style={{border:"2px solid lightblue", padding:"50px"}}>
                        <h2>Student Registration</h2>
                        <TextField
                            label="Full Name"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            value={studentEmail}
                            onChange={(e) => setStudentEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Class"
                            value={studentClass}
                            onChange={(e) => setStudentClass(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Gender"
                            placeholder="Male/Female"
                            fullWidth
                            margin="normal"
                        />
                        

                        <Button variant="contained" color="primary" onClick={handleRegisterStudent}>
                            Register Student
                        </Button>
                    </Box>
                )}
                {currentView === 'studentList' && (
                    <Box sx={{ overflowX: 'auto', margin: '20px' }}>
                        <h2>Student List</h2>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Class</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {students.map(student => (
                                        <TableRow key={student.id}>
                                            <TableCell>{student.id}</TableCell>
                                            <TableCell>{student.name}</TableCell>
                                            <TableCell>{student.email}</TableCell>
                                            <TableCell>{student.class}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => handleDeleteStudent(student.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}

                {currentView === 'teacherRegistration' && (
                    <Box  style={{border:"2px solid lightblue", padding:"50px"}}>
                        <h2>Teacher Registration</h2>
                        <TextField
                            label="Full Name"
                            value={teacherName}
                            onChange={(e) => setTeacherName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            value={teacherEmail}
                            onChange={(e) => setTeacherEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Subject"
                            value={teacherSubject}
                            onChange={(e) => setTeacherSubject(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Gender"
                           placeholder=':"Male/Female'
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={handleRegisterTeacher}>
                            Register Teacher
                        </Button>
                    </Box>
                )}
                {currentView === 'teacherList' && (
                    <Box sx={{ overflowX: 'auto', margin: '20px' }}>
                        <h2>Teacher List</h2>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Subject</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {teachers.map(teacher => (
                                        <TableRow key={teacher.id}>
                                            <TableCell>{teacher.id}</TableCell>
                                            <TableCell>{teacher.name}</TableCell>
                                            <TableCell>{teacher.email}</TableCell>
                                            <TableCell>{teacher.subject}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => handleDeleteTeacher(teacher.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
                {currentView === 'subjectRegistration' && (
                    <Box style={{border:"2px solid lightblue", padding:"50px"}}>
                        <h2>Subject Registration</h2>
                        <TextField
                            label="Subject Name"
                            value={subjectName}
                            onChange={(e) => setSubjectName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Class"
                            value={studentClass}
                            onChange={(e) => setStudentClass(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Group"
                            value={groupname}
                            placeholder='General Science/Pre-Engineering'
                            onChange={(e) => setGroupName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={handleRegisterSubject}>
                            Register Subject
                        </Button>
                    </Box>
                )}
                {currentView === 'subjectList' && (
                    <Box sx={{ overflowX: 'auto', margin: '20px' }}>
                        <h2>Subject List</h2>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Subject Name</TableCell>
                                        <TableCell>Class</TableCell>
                                        <TableCell>Group</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {subjects.map(subject => (
                                        <TableRow key={subject.id}>
                                            <TableCell>{subject.id}</TableCell>
                                            <TableCell>{subject.name}</TableCell>
                                            <TableCell>{subject.class}</TableCell>
                                            <TableCell>{subject.group}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => handleDeleteSubject(subject.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
                {currentView === 'syllabusRegistration' && (
                    <Box>
                        <h2>Syllabus Registration</h2>
                        <TextField
                            label="Subject Name"
                            value={subjectName}
                            onChange={(e) => setSubjectName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Class"
                            value={studentClass}
                            onChange={(e) => setStudentClass(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <input
                        style={{width:"200px", backgroundColor:"green",color:"white", height:"30px", border:"2px solid black"}}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => setSyllabusFile(e.target.files[0])}
                        />
                        <br/><br/>
                        <Button variant="contained" color="primary" onClick={handleRegisterSyllabus}>
                            Register Syllabus
                        </Button>
                    </Box>
                )}
                {currentView === 'syllabusList' && (
                    <Box sx={{ overflowX: 'auto', margin: '20px' }}>
                        <h2>Syllabus List</h2>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Subject Name</TableCell>
                                    <TableCell>Class</TableCell>
                                    <TableCell>File</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {syllabi.map(syllabus => (
                                    <TableRow key={syllabus.id}>
                                        <TableCell>{syllabus.id}</TableCell>
                                        <TableCell>{syllabus.subjectName}</TableCell>
                                        <TableCell>{syllabus.class}</TableCell>
                                        <TableCell>
                                            <a href={syllabus.file} download>{syllabus.file ? 'Download' : 'No file'}</a>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => handleDeleteSyllabus(syllabus.id)}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                )}

                
                {currentView === 'teacherRegisteration' && (
                    <Box >
                        <h2>Teacher Registration</h2>
                        <TextField
                            label="Name"
                            value={teacherName}
                            onChange={(e) => setTeacherName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            value={teacherEmail}
                            onChange={(e) => setTeacherEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Subject"
                            value={teacherSubject}
                            onChange={(e) => setTeacherSubject(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={handleRegisterTeacher}>
                            Register Teacher
                        </Button>
                    </Box>
                )}



                

                
            </Box>
        </Box>
    );
}

export default Sidebar;



