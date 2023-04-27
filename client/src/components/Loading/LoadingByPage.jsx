import React, { useState, useEffect } from 'react';

const Loading = ({ component: Component }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        // Aquí podrías mostrar una pantalla de carga o spinner
        <h1>Loading...</h1>
      ) : (
        <Component />
      )}
    </div>
  );
};

export default Loading;