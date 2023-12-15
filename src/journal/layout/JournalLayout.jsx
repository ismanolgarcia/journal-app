import { Box, Toolbar } from '@mui/material';
import { Navbar, SideBar } from '../components/';

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWith={drawerWith} />
      <SideBar drawerWith={drawerWith} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar></Toolbar>
        {children}
      </Box>
    </Box>
  );
};
