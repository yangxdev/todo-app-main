import React from 'react';

const BackgroundImage = () => {
    return (
      <div
        className="w-full h-screen bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/bg-desktop-light.jpg')`,
        }}
      >
      </div>
    );
  };
  
  export default BackgroundImage;