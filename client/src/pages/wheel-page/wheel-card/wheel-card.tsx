import React from 'react';
import { Typography, Grid, Card, Stack } from '@mui/material';
import Img from 'components//ui/img';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import * as Styled from './styled';
import Header from './header';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

type WheelCardProps = WheelModel;

const WheelCard: React.FC<WheelCardProps> = ({
  id,
  brand,
  style,
  price,
  images,
}) => (
  <>
    <Header>{`${brand}`}</Header>
    <Grid xs display="flex" justifyContent="center" alignItems="center">

       <Card sx={{maxWidth: 500}}>
        <Swiper pagination={{type: "progressbar",}} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          <SwiperSlide>
            <Img src={images[0]} alt="" sx={{ aspectRatio: '1.15', width: 1 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={images[1]} alt="" sx={{ aspectRatio: '1.15', width: 1 }} />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={images[2]} alt="" sx={{ aspectRatio: '1.15', width: 1 }} />
          </SwiperSlide>
        </Swiper>
        <Styled.ContentWrapper>
        <List
        sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem alignItems='center'>
        <ListItemText primary="Style" secondary={`${style}`}/>
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemText primary="Diameter" secondary="R-19" />
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemText primary="Price" secondary={`${price}€`} />
      </ListItem>
    </List>
          <Typography component="legend">No rating given</Typography>
           <Rating name="no-value" value={null} />
        </Styled.ContentWrapper>
    </Card>
    </Grid>
  </>
);


export default WheelCard;