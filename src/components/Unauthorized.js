import React from 'react';
import "./Unauthorized.css"
import { Button } from '@mui/joy';
import { useHistory, useNavigate } from 'react-router-dom';

export default function Unauthorized() {
const navigate = useNavigate();
  return (
<div className="unauthorized-container">
<div class="w3-display-middle">
  <h1 class="w3-jumbo w3-animate-top w3-center">Access Denied</h1>
  <hr class="w3-border-white w3-animate-left" style={{margin:"auto", width:"50%"}}/>
  <h3 class="w3-center w3-animate-right">You dont have permission to view this site.</h3>
  <h3 class="w3-center w3-animate-zoom">🚫🚫🚫🚫</h3>
  <h6 class="w3-center w3-animate-zoom"><strong>Error Code</strong>: 403 forbidden</h6>
  <Button  onClick={()=>{navigate("/signin")}} style={{marginTop:"30px" , width:"200px"}}> Login </Button>
</div>  
</div>
)
}
