import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'sevices/api-service';

const HomePage = () => {
  const [wheels, setWheels] = React.useState<WheelModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedWheels = await ApiService.fetchWheels();
      setWheels(fetchedWheels);
    })();
  }, []);

  return (
    <Box>
      <Box component="pre">
        {JSON.stringify(wheels, null, 4)}
      </Box>
    </Box>
  );
};

export default HomePage;
