import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#161616', borderBottom: '1px solid white'}}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Netflix
                </Typography>
                <Box sx={{ position: 'relative', borderRadius: 1, backgroundColor: 'rgba(255, 255, 255, 0.15)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' }, ml: { xs: 0, sm: 1 }, width: { xs: '100%', sm: 'auto' } }}>
                    <Box sx={{ padding: '0 2px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SearchIcon />
                    </Box>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            color: 'inherit',
                            '& .MuiInputBase-input': {
                                padding: '8px 8px 8px 0',
                                paddingLeft: `calc(1em + 32px)`,     
                                transition: (theme) => theme.transitions.create('width'),
                                width: { xs: '100%', md: '20ch' }
                            },
                        }}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Button color="inherit">Login/Sign Up</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;