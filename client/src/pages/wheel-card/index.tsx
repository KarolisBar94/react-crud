import {
    Stack,
    Box,
    Typography,
    Button,
  } from '@mui/material';
  import Img from 'components/ui/img';
  import React from 'react';
  import * as Styled from './styled';
  
  type WheelCardProps = WheelModel;
  
  const WheelCard: React.FC<WheelCardProps> = ({
    id,
    brand,
    style,
    images,
    price,
    rating,
  }) => (
    <Stack sx={{ boxShadow: 5 }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.0', width: 1 }} />
      <Styled.ContentWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ float: 'right', textAlign: 'right' }}>
            <Box sx={{ fontSize: '1.3rem', color: 'grey.700', fontWeight: 600 }}>Unit.{price}€</Box>
            <Styled.Rating>{rating}</Styled.Rating>
          </Box>
  
          <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{brand}</Typography>
          <Typography component="h3" sx={{ color: 'grey.600', fontSize: '1.0rem' }}>{style}</Typography>
        </Box>
  
        <Styled.ButtonContainer>
          <Button color="success" variant="outlined">🖤</Button>
          <Button color="primary" variant="contained">View details</Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
  
  export default WheelCard;