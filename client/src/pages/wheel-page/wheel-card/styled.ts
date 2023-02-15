import { Stack, styled } from '@mui/material';

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1, 2),
  width: '100%',
  alignItems: 'center',
}));