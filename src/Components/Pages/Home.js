import * as React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
const Home()=>{
const navigate=useNavigate();
const handleBlog=()=>{
    navigate('/Blog')
}
const handleLayout=()=>{
    navigate('/Layout')
}
const handleContact=()=>{
    navigate("/Contact")
}


 return (
    <div>
    <Button color="secondary">Secondary</Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button>
    </div>
  );
 }
export default Home;