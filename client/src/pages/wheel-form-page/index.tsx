import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  Button,
  Rating,
} from '@mui/material';
import ImagesField from './images-field';
import * as Styled from './styled';

const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const brand = formData.get('brand');
  const style = formData.get('style');
  const price = formData.get('price');
  const rating = formData.get('rating');
  const images = formData.getAll('images');
  
  if (brand === null || brand instanceof File || brand.length < 1) throw new Error('incorrect Brand');
  if (style === null || style instanceof File || style.length < 1) throw new Error('incorrect Style');
  if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
  if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  return {
    brand,
    style,
    images: images as string[],
    price: `${Number(price).toFixed(2)}€`,
    rating: Number(rating),
  };
};

type WheelFormPageProps = {
  mode?: 'create' | 'edit'
};

const WheelFormPage: React.FC<WheelFormPageProps> = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      console.log(values);
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>New Wheel</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="Brand" fullWidth variant="filled" name="brand" required />
          <TextField label="Style" fullWidth variant="filled" name="style" required />
          <ImagesField />

          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
          />
          <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="rating" />
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Create
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default WheelFormPage;
