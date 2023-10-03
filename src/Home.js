import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import "./styles/index.css"
import { Link as LinkR } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        StopFire
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Home Inspection',
    subheader: 'Most popular',
    price: '250',
    description: [
      '•5 to 30 foot boundary inspection',
      '•Defensible space inspection',
      '•30 to 100 foot boundry inspection',
      '•roof, attic, and gutter inspection',
      '•Written Report and Insurance lowering Certification',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
];
const zipcodes = [92082,92061,92026,92059,92027,92060,92030,92033,92046,92069,92025,92003,92079,92084,92096,92070,
  92078,92029,92085,92083,92081,92065,92198,92088,92057,92127,92056,92064,92010,92009,92589,92593,92128,92086,92592,
  92068,92013,92536,92591,92199,92067,92028,92008,92074,92091,92024,92011,92590,92058,92129,92018,92054,92049,92051,
  92052,92007,92023,92014,92075,92131,92564,92563,92066,92130,92040,92562,92126,92055,92539,92596,92544,92071,92121,
  92145,92072,92021,92595,92584,92122,92124,92543,92037,91916,92119,91903,92022,92020,92123,92120,92545,92117,91942,
  92111,92672,92038,92039,92092,92093,92586,92019,92182,92546,91943,91944,92587,91941,92530,92108,92531
]

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const theme = createTheme({
  pallette: {
    background: {
      transparent: "transparent"
    }
  }
})

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const origin = 'http://127.0.0.1:5000'
export default function Home() {

  // fetch("http://127.0.0.1:5000/home")
  // .then((response) => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then((data) => {
  //   // Handle a successful response from the backend
  //   console.log('Response from server:', data);
  // })
  // .catch((error) => {
  //   // Handle errors
  //   console.error('Fetch error:', error);
  // });
function checkzipcodes(e){
    let zipcode = e
    console.log(zipcode)
    if(zipcode == ""){
      setAvailibility("Or")
      console.log(availability)
      return false
    }
    for(let i = 0; i<zipcodes.length; i++) {
      console.log("looping")
        if( zipcode == zipcodes[i]){
          setAvailibility("Availabile In Your Area")
          console.log(availability)
          return true
        }
    }
    setAvailibility("No Service Avalilable")
}
const [availability, setAvailibility] = useState("Or")



  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <div className="backdrop" >

          

      
      {/* Hero unit */}
      <div className="container">
        
        <h1
          component="h1"
          variant="h2"
          align="center"
          className="pheader"
          color="white"
          gutterBottom
        >
          Schedule an Appointment
        </h1>
        <h2 align="center" color="white" className="subheader">
          Protect your Home, family, and your legacy with Firesafe
        </h2>
        <p className='above-address'>Check availability</p>
      </div>
      {/* End hero unit */}

  
        <Box sx={{
            margin: "auto",
            alignItems: "center",
            width:"45%", 
            padding:"10px"
        }}>
          <form>
            <input type="text" id="ip2" placeholder="Zip Code" textAlign="center" onChange={(e) => checkzipcodes(e.target.value)}/>
          </form>
          <p className='home-or'>{availability}</p>
        
        <a href="/contact" style={{textDecoration:"none", width:"45%", margin:"auto", display:"flex"}}>
        
        <button type="button" className="home-button">Contact Now</button>
 
        </a>
        </Box>
        </div>
        <div className="underpageinfo">
          <img className="infoimg" src="https://www.cityofalbany.net/images/stories/fire/wildfire/firedefensible-web.jpg"/>
          <div className="infotextcontainer" style={{textAlign:"center"}}>
          <h2 className="infotext">Defensible Space</h2>
          <p className="infotext">• Making minor adjustments to your home can result in a remarkable 40% reduction in wildfire risk. 
          When you combine structural and vegetation enhancements, this risk can be further decreased by an impressive 75%.</p>
          <p className="infotext">
           Moreover, 
          the potential losses averted in such cases can be significantly larger, up to five times greater, compared to properties in highly 
          flammable areas. <br/>Our team of experts specializes in conducting comprehensive risk assessments to ensure that your property complies with the stringent standards set by CALFire and the NFPA. Your safety is our top priority.</p>
          </div>
        </div>
        <div className="underpageinfo">
          
          <div className="infotextcontainer" style={{textAlign:"center"}}>
          <h2 className="infotext">Insurance Coverage</h2>
          <p className="infotext">• Is your residence situated in an area where insurance providers are declining coverage or 
          imposing substantially higher premiums? Our team can supply you with a comprehensive report assessing the wildfire 
          resilience of your property.</p>
          <p className="infotext"> Should we uncover any areas that can be enhanced for safety, we will inform you accordingly.
           After implementing the necessary measures, we can update our report and supply you with a digital copy, which you can 
           share with your agent, broker, or insurance company for your peace of mind.
          </p>
          </div>
          <img className="infoimg" src='https://media.istockphoto.com/id/1053025324/photo/construction-concept-foreman-officer-inspector-defect-about-engineer-architect-work-home.jpg?s=612x612&w=0&k=20&c=GFNr9IEffcpz2-iip2Ox9czEYFplPy_dSmPOqL4An9w='/>
        </div>
        

      {/* Product Box */}
      

      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          
            <Grid item xs={6} sm={3} key="Team">
              <Typography variant="h6" color="text.primary" gutterBottom>
                Company
              </Typography>
              <ul>
                
                  <li key="ITEM">
                    <Link href="https://www.fire.ca.gov/" variant="subtitle1" color="text.secondary">
                      About us
                    </Link>
                  </li>
                  <li key="ITEM">
                    <Link href="https://www.fire.ca.gov/" variant="subtitle1" color="text.secondary">
                      How we started
                    </Link>
                  </li>
                  <li key="ITEM">
                    <Link href="https://www.fire.ca.gov/" variant="subtitle1" color="text.secondary">
                      Our mission
                    </Link>
                  </li>
                
              </ul>
            </Grid>
            <Grid item xs={6} sm={3} key="Team">
              <Typography variant="h6" color="text.primary" gutterBottom>
                Services
              </Typography>
              <ul>
                
                  <li key="ITEM">
                    <Link href="/contact" variant="subtitle1" color="text.secondary">
                       Inspections
                    </Link>
                  </li>
                  <li key="ITEM">
                    <Link href="https://www.fire.ca.gov/" variant="subtitle1" color="text.secondary">
                      Brush Clearing
                    </Link>
                  </li>
                  <li key="ITEM">
                    <Link href="/contact" variant="subtitle1" color="text.secondary">
                      Home Hardening
                    </Link>
                  </li>
                  <li key="ITEM">
                    <Link href="/contact" variant="subtitle1" color="text.secondary">
                      Insurance Discounts
                    </Link>
                  </li>
                
              </ul>
            </Grid>
            <Grid item xs={6} sm={3} key="Team">
              <Typography variant="h6" color="text.primary" gutterBottom>
                More Info
              </Typography>
              <ul>
                
                  <li key="ITEM">
                    <Link href="/contact" variant="subtitle1" color="text.secondary">
                      Contact Us
                    </Link>
                  </li>
                  <li key="ITEM">
                    <Link href="https://www.fire.ca.gov/" variant="subtitle1" color="text.secondary">
                      Fire Saftey information
                    </Link>
                  </li>
                  <li key="ITEM">
                    <Link href="/contact" variant="subtitle1" color="text.secondary">
                      Comaplints
                    </Link>
                  </li>
                
              </ul>
            </Grid>

          
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    
      {/* End footer */}
    </ThemeProvider>
  );
}

