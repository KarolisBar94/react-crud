import React from 'react';
import { Box, Container } from '@mui/material';
import ApiService from 'sevices/api-service';
import WheelCard from './wheel-list';
import * as Styled from './styled';
import Header from './header'


const HomePage = () => {
  const [wheels, setWheels] = React.useState<WheelModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedWheels = await ApiService.fetchWheels();
      setWheels(fetchedWheels);
    })();
  }, []);

  return (
    <Container>
      <Header/>
    <Styled.WheelCardGrid>
      {wheels.map((wheel) => <WheelCard key={wheel.id} { ...wheel} />)}
    </Styled.WheelCardGrid>
    </Container>
  );
};

export default HomePage;
