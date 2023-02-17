import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from 'sevices/api-service';
import { Box } from '@mui/material';
import routes from 'navigation/routes';
import WheelCard from './wheel-card/wheel-card';
import useWheel from 'hooks/useWeel';


const WheelPage = () => {
  const { id } = useParams();
  const wheel = useWheel(id);
  if (id === undefined) return <Navigate to={routes.HomePage} />;
     
  return (
    <Box>
      {wheel && <WheelCard {...wheel}/>}
      </Box>
  );
   };

export default WheelPage;