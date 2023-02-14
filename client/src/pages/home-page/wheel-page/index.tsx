import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from 'sevices/api-service';
import routes from 'navigation/routes';
import { Box } from '@mui/material';

const WheelPage = () => {
  const { id } = useParams();

  const [wheel, setWheel] = React.useState<WheelModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedWheel = await ApiService.fetchWheel(id);

        setWheel(fetchedWheel);
      })();
    }
  }, [id]);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(wheel, null, 4)}
    </Box>
  );
};

export default WheelPage;