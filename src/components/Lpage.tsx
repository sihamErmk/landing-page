import React, { useEffect } from 'react';
import '../index.css'; // Ensure correct path to your CSS file

const useMouseMoveBackgroundEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const centerX = windowWidth / 2;
      const centerY = windowHeight / 2;
      const maxMovementX = 100;
      const maxMovementY = 50;

      const deltaX = Math.min(Math.max(clientX - centerX, -maxMovementX), maxMovementX);
      const deltaY = Math.min(Math.max(clientY - centerY, -maxMovementY), maxMovementY);

      const x = 50 + (deltaX / windowWidth) * 50;
      const y = 50 + (deltaY / windowHeight) * 50;

      document.body.style.background = `radial-gradient(ellipse at ${x}% ${y}%, #92225c, #2b021a, black)`;
    };

    const handleMouseLeave = () => {
      document.body.style.background = 'radial-gradient(ellipse at center, #92225c, #2b021a, black)';
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); 
};

const Lpage = () => {
  const squares = Array.from({ length: 50000 });
useMouseMoveBackgroundEffect();
  return (
    <div className="h-screen">
      <div className='img-container'>
        <img src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_1280.png" className="logo-img" alt="Logo 1" />
        <img src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293_1280.png" className="logo-img" alt="Logo 2" />
      </div>
      <h1 className="title">THE TITLE GOES HERE</h1>
      <div className="bg-container grid gap-0 w-full h-full" style={{ backgroundSize: '20px 20px' }}>
        {squares.map((_, index) => (
          <div key={index} className="background border border-black transition-colors duration-300"></div>
        ))}
      </div>
    </div>
  );
};

export default Lpage;
