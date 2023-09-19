import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
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
//   {
//     title: 'Free',
//     price: '0',
//     description: [
//       '10 users included',
//       '2 GB of storage',
//       'Help center access',
//       'Email support',
//     ],
//     buttonText: 'Sign up for free',
//     buttonVariant: 'outlined',
//   },
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
//   {
//     title: 'Enterprise',
//     price: '30',
//     description: [
//       '50 users included',
//       '30 GB of storage',
//       'Help center access',
//       'Phone & email support',
//     ],
//     buttonText: 'Contact us',
//     buttonVariant: 'outlined',
//   },
];

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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <div class="backdrop" >
      {/* <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        
        <Toolbar sx={{ flexWrap: 'wrap', bgcolor:"rgba(0,0,0,0)"}}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1}}>
            StopFireUSA
          </Typography>
          <nav>
            <Link
              variant="button"
              underline="none"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              underline="none"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              About Us
            </Link>
            <Link
              variant="button"
              underline="none"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Services
            </Link>
            <Link
              variant="button"
              underline="none"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Become a Partner
            </Link>
          </nav>

        </Toolbar>
      </AppBar> */}

      
      {/* Hero unit */}
      <div class="container">
        <h1
          component="h1"
          variant="h2"
          align="center"
          class="pheader"
          color="white"
          gutterBottom
        >
          Schedule an Appointment
        </h1>
        <h2 align="center" color="white" class="subheader">
          Protect your Home, family, and your legacy with Firesafe
        </h2>
      </div>
      {/* End hero unit */}

  
        <Box sx={{
            margin: "auto",
            alignItems: "center",
            width:"45%", 
            padding:"10px"
        }}>
        <input type="text" id="ip2" placeholder="address" textAlign="center"/>
        <p class="home-or">or</p>
        <LinkR to="/contact" style={{textDecoration:"none"}}>
        <button type="button" class="home-button">Contact</button>
        </LinkR>
        </Box>
        </div>
        <div class="underpageinfo">
          <img class="infoimg" src="https://www.cityofalbany.net/images/stories/fire/wildfire/firedefensible-web.jpg"/>
          <div class="infotextcontainer" style={{textAlign:"center"}}>
          <h2 class="infotext">Defensible Space</h2>
          <p class="infotext">Small changes to your home can reduce wildfire risk by up to 40%, and structural and vegetation improvements 
          combined can lower wildfire risk by up to 75%. Furthermore, losses prevented can be much bigger (e.g. 5 times greater) 
          when compared to a highly flammable environment. <br/><br/>Our team of experts can conduct a risk assessment to ensure your property is 
          held at the highest standard from CALFire and the NFPA.</p>
          </div>
        </div>
        <div class="underpageinfo">
          
          <div class="infotextcontainer" style={{textAlign:"center"}}>
          <h2 class="infotext">Insurance Coverage</h2>
          <p class="infotext">Is your home located in an area where insurance companies are refusing to cover or have increased 
          your rates significantly? Our team can prepare a comprehensive report about how wildfire-resistant your property is. 
          If we identify areas on your property that can be made safer, we will also let you know that and after performing those services, 
          we can revise our report and provide you a digital copy to share with your agent, broker or insurance company.
          </p>
          </div>
          <img class="infoimg" src='https://media.istockphoto.com/id/1053025324/photo/construction-concept-foreman-officer-inspector-defect-about-engineer-architect-work-home.jpg?s=612x612&w=0&k=20&c=GFNr9IEffcpz2-iip2Ox9czEYFplPy_dSmPOqL4An9w='/>
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
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    
      {/* End footer */}
    </ThemeProvider>
  );
}

