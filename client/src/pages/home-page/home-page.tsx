import React from 'react';
import { Box, Container } from '@mui/material';
import ApiService from 'sevices/api-service';
import WheelCard from './wheel-list';
import * as Styled from './styled';
import AdmHeader from './wheel-list/adm-header';
import Header from './wheel-list/header';

const HomePage = () => {
  const [wheels, setWheels] = React.useState<WheelModel[]>([]);

  const onDelete = async (id: string) => {
    await ApiService.deleteWheel(id);
    const fetchedWheels = await ApiService.fetchWheels();
    setWheels(fetchedWheels);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedWheels = await ApiService.fetchWheels();
      setWheels(fetchedWheels);
    })();
  }, []);

  return (
    <Container>
      <AdmHeader />
      <Header/>
    <Styled.WheelCardGrid>
      {wheels.map((wheel) => <WheelCard key={wheel.id}
      { ...wheel} 
      onDelete={() => onDelete(wheel.id)}/>)}
    </Styled.WheelCardGrid>
    </Container>
  );
};

export default HomePage;
