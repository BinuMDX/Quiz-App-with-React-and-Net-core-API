import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Card, CardContent, CardHeader, Container, FormControlLabel, FormGroup, Switch } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { useState } from "react";
import './App.css';
import Login from './components/Login';

// Define theme settings
const light = {
   palette: {
     mode: "light",
   },
 };
 
 const dark = {
   palette: {
     mode: "dark",
   },
 };
 
 const App = () => {
   // The light theme is used by default
   const [isDarkTheme, setIsDarkTheme] = useState(false);
 
   // This function is triggered when the Switch component is toggled
   const changeTheme = () => {
     setIsDarkTheme(!isDarkTheme);
   };
 
   return (
     <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
       <CssBaseline />
       <Container>
         <div className="App">
           <Box component="div" p={5}></Box>
           <Card>
             <CardHeader
               action={
                 <FormGroup>
                   <FormControlLabel
                     control={
                       <Switch checked={isDarkTheme} onChange={changeTheme} />
                     }
                     label="Dark Theme"
                   />
                 </FormGroup>
               }
             />
             <CardContent>
           <Login />
             </CardContent>
           </Card>
         </div>
       </Container>
     </ThemeProvider>
   );
 };
 
 export default App;
 