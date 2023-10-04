import React from "react";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer(){
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
      
    return(

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
                  <Link href="/aboutus" variant="subtitle1" color="text.secondary">
                    About us
                  </Link>
                </li>
                <li key="ITEM">
                  <Link href="/aboutus" variant="subtitle1" color="text.secondary">
                    How we started
                  </Link>
                </li>
                <li key="ITEM">
                  <Link href="/aboutus" variant="subtitle1" color="text.secondary">
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
                  <Link href="/services" variant="subtitle1" color="text.secondary">
                     Inspections
                  </Link>
                </li>
                <li key="ITEM">
                  <Link href="/services" variant="subtitle1" color="text.secondary">
                    Brush Clearing
                  </Link>
                </li>
                <li key="ITEM">
                  <Link href="/services" variant="subtitle1" color="text.secondary">
                    Home Hardening
                  </Link>
                </li>
                <li key="ITEM">
                  <Link href="/services" variant="subtitle1" color="text.secondary">
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
    );
}