import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';

const pages = [
  {title: 'Home', link: ''}, 
  {title: 'About', link: 'about'}, 
  {title: 'Contacts', link: 'contacts'}
];

function Navbar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AccountBoxIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            David S.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Box
                sx={{ display: 'block', mr: 2 }}
              >
                <Link
                  key={page.title}
                  to={page.link}
                  style={{color: "white"}}
                >
                  {page.title}
                </Link>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;