import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography, IconButton } from "@mui/material";

const NavBar = () => {
  const navItems = [{name: 'Home', link:'/dashboard'}, {name:'About', link:'/about'},{name:'Contact', link:'/contact'}];
  const navigate = useNavigate();
  return (
    <AppBar component="nav">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate("/")}>
            <img src="/logo-hackathon.png" alt="Logo" style={{ width: '4rem', height: '4rem' }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CodeBusters
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }} onClick={()=>{navigate(`${item.link}`)}}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    
  );
}

export default NavBar;