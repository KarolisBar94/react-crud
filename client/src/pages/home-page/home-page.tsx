import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'sevices/api-service';
import WheelCard from './wheel-list';
import * as Styled from './styled'

const HomePage = () => {
  const [wheels, setWheels] = React.useState<WheelModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedWheels = await ApiService.fetchWheels();
      setWheels(fetchedWheels);
    })();
  }, []);

  return (
    <Styled.WheelCardGrid>
      {wheels.map((wheel) => <WheelCard key={wheel.id} { ...wheel} />)}
    </Styled.WheelCardGrid>
  );
};

export default HomePage;
