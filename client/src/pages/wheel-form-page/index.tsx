import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  Button,
  Rating,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import useWheel from 'hooks/useWeel';
import routes from 'navigation/routes';
import ImagesField from './images-field';
import * as Styled from './styled';
import { btnColorMap,  btnMap, titleMap } from './data';
import { formatValues } from './helpers';
import ApiService from 'sevices/api-service';

type WheelFormPageProps = {
  mode?: 'create' | 'update'
};

const WheelFormPage: React.FC<WheelFormPageProps> = ({ mode = 'create'}) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const navigate = useNavigate();

  const { id } = useParams();
  const wheel = useWheel(id);

  const postWheelData = async (wheelData: Omit<WheelModel, 'id'>) => {
    try {
      await ApiService.createWheel(wheelData);
      navigate(routes.HomePage);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateWheelData = async (wheelId: string, wheelData: Omit<WheelModel, 'id'>) => {
    try {
      await ApiService.updateWheel(wheelId, wheelData);
      navigate(routes.HomePage);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      if (mode === 'create') {
      console.log('Sukurimas')
      console.log(values);
      } else {
        console.log('Atnaujinimas, id:', id);
        console.log(values);
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  if (mode === 'update' && wheel === undefined) return null;

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>{titleMap[mode]}</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="Brand" fullWidth variant="filled" name="brand" required  defaultValue={wheel?.brand}/>
          <TextField label="Style" fullWidth variant="filled" name="style" required  defaultValue={wheel?.style}/>
          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
            defaultValue={wheel?.price}
          />
          <ImagesField defaultImages={wheel?.images}/>
          <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="rating" />
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color={btnColorMap[mode]}
              variant="contained"
              size="large"
            >
              {btnMap[mode]}
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default WheelFormPage;
