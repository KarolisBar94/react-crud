import React from 'react';
import ApiService from 'sevices/api-service';

const useWheel = (id: string | undefined) => {
  const [wheel, setWheel] = React.useState<WheelModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedWheel = await ApiService.fetchWheel(id);

        setWheel(fetchedWheel);
      })();
    }
  }, [id]);

  return wheel;
};

export default useWheel;