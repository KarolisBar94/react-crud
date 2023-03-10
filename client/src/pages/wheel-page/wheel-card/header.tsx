import React from 'react';
import { Typography } from '@mui/material';

type HeaderProps = {
  children: React.ReactNode,
};

const Header: React.FC<HeaderProps> = ({ children }) => (
  <Typography
    mt={3}
    color="dark"
    variant="h4"
    component="h1"
    textAlign="center"
    gutterBottom
  >
    {children}
  </Typography>
);

export default Header;