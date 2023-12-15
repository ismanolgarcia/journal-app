import { TurnedIn, TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { authSlice } from '../../store/auth/authSlice';
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWith }) => {
  const { displayName } = useSelector((state) => state.authSlice);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero', 'Febrero', 'Marzo', ' Abril', 'Mayo'].map(
            (text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText primary={'lorem asdas asdas dknasdasdnkd'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};
