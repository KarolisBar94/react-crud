import {
    Stack,
    Box,
    Typography,
    Button,
    IconButton,
  } from '@mui/material';
  import Img from 'components/ui/img';
  import routes from 'navigation/routes';
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import * as Styled from './styled';
  import HighlightOffIcon from '@mui/icons-material/HighlightOff';
  import UpdateIcon from '@mui/icons-material/Update';
  
  
  type WheelCardProps = WheelModel & {
    onDelete: VoidFunction,
  };
  
  const WheelCard: React.FC<WheelCardProps> = ({
    id,
    brand,
    style,
    images,
    price,
    rating,
    onDelete,
  }) => {
    const navigate = useNavigate();

    return (
    <Stack sx={{ boxShadow: 5, borderRadius: 2, overflow: 'hidden', position: 'relative'}}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.02', width: 1 }} />
      <Styled.AdminUpdate>
        <IconButton  color="warning" size="large" onClick={() => navigate(routes.WheelUpdatePage.createLink(id))}>
          <UpdateIcon/>
        </IconButton>
        </Styled.AdminUpdate>
        <Styled.AdminActions>
        <IconButton  color="error" size="small" onClick={onDelete}>
          <HighlightOffIcon/>
        </IconButton>
        </Styled.AdminActions>
      
      <Styled.ContentWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ float: 'right', textAlign: 'right' }}>
            <Box sx={{ fontSize: '1.3rem', color: 'grey.800', fontWeight: 600 }}>Unit.{price}€</Box>
            <Styled.Rating>{rating}</Styled.Rating>
          </Box>
  
          <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{brand}</Typography>
          <Typography component="h3" sx={{ color: 'grey.600', fontSize: '1.0rem' }}>{style}</Typography>
        </Box>
  
        <Styled.ButtonContainer>
          <Button color="success" variant="text">❤️</Button>
          <Button 
          size="small"
          color="primary" 
          variant="contained"
          sx={{ borderRadius: 0 }}
          onClick={() => navigate(routes.WheelPage.createLink(id))}
          >
            Show More
            </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
  };
  
  export default WheelCard;