import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = ['Home', 'Products', 'About us', "cart", "login"];
// const pages = [{name:"Home", path:"http://localhost:3000/home"}]

function ResponsiveAppBar() {
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [uu,setUu] = React.useState();
  React.useEffect(() => {
    const user = localStorage.getItem("id");
    setUu(user);
  }, []);
  const Logout =()=>{
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    window.location.reload();

  }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#19857b',
      },
    },
  });
  const styles = { button: { margin: 15,}, appBarBackground:{ background : '#2E3B55' }};
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static"  >
          <Container maxWidth="xl">
            <Toolbar disableGutters >
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Labbesni
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Labbesni
              </Typography>
              <Box style={styles.button} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
                <Button >
                  <Link style={{ color: "white"}} href="/Home">Home</Link>
                </Button>
                <Button>
                  <Link style={{ color: "white"}} href="/Products">Products</Link>
                </Button>

                <Button>
                  <Link style={{ color: "white"}} href="/Aboutus">AboutUs</Link>
                </Button>

              </Box>
              

                {(uu)?
                <Box  sx={{ flexGrow: 0 }}>
                <Button variant="contained" color="secondary" endIcon={<AddShoppingCartIcon />}>

                  <Link href="/Cart">cart </Link>
                </Button>
                {" "}
                
                <Tooltip title="Logout">

                  <Button variant="contained" endIcon={<LogoutIcon />}
                  onClick={()=>{Logout()}}>
                    <Link href="/"> Logout</Link>
                  </Button>
                  
                </Tooltip> 
                </Box>:
                <Box  sx={{ flexGrow: 0 }}>
                <Tooltip title="Logout">

                  <Button variant="contained" endIcon={<LogoutIcon />}>
                    <Link href="/Login"> Login</Link>
                  </Button>
                  
                </Tooltip>
                </Box>}
              
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Stack>

  );
}
export default ResponsiveAppBar;