'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import { currentUser } from '@/data/mock-data';

const drawerWidth = 260;

const navItems = [
  { label: 'Dashboard', href: '/mui', icon: DashboardIcon },
  { label: 'Jobs', href: '/mui/jobs', icon: WorkIcon, badge: 'Check-In' },
  { label: 'Employees', href: '/mui/employees', icon: PeopleIcon, badge: 'Check-In' },
  { label: 'Procedures', href: '/mui/procedures', icon: DescriptionIcon },
  { label: 'Forms', href: '/mui/forms', icon: AssignmentIcon },
  { label: 'Reports', href: '/mui/reports', icon: AssessmentIcon },
];

export function MuiSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isActive = (href: string) => {
    if (href === '/mui') return pathname === '/mui';
    return pathname.startsWith(href);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${open ? drawerWidth : 72}px)` },
          ml: { sm: `${open ? drawerWidth : 72}px` },
          bgcolor: 'white',
          color: 'text.primary',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" fontWeight={700} color="text.primary">
              vSupervisor Demo
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            powered by <em>v</em>Supervisor
          </Typography>

          <IconButton onClick={handleMenuOpen} size="small">
            <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36 }}>
              {currentUser.name.split(' ').map(n => n[0]).join('')}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem disabled>
              <Typography variant="body2">{currentUser.name}</Typography>
            </MenuItem>
            <Divider />
            <MenuItem component={Link} href="/login">
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 72,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 72,
            boxSizing: 'border-box',
            bgcolor: 'secondary.main',
            color: 'white',
            transition: 'width 0.2s ease-in-out',
            overflowX: 'hidden',
          },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: open ? 'space-between' : 'center',
            px: open ? 2 : 0,
          }}
        >
          {open && (
            <Typography variant="h6" fontWeight={700}>
              <em>v</em>Supervisor
            </Typography>
          )}
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <List sx={{ pt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding sx={{ display: 'block', mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  mx: 1,
                  borderRadius: 1,
                  bgcolor: isActive(item.href) ? 'primary.main' : 'transparent',
                  '&:hover': {
                    bgcolor: isActive(item.href) ? 'primary.main' : 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  <item.icon />
                </ListItemIcon>
                {open && (
                  <>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                    {item.badge && (
                      <Chip
                        label={item.badge}
                        size="small"
                        sx={{
                          bgcolor: 'warning.main',
                          color: 'white',
                          fontSize: '0.65rem',
                          height: 20,
                        }}
                      />
                    )}
                  </>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${open ? drawerWidth : 72}px)` },
          bgcolor: 'background.default',
          minHeight: '100vh',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
