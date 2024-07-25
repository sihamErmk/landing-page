import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <div className="h-screen">
        <div className='img-container'>
          <img src="https://dropsearn.fra1.digitaloceanspaces.com/static/drops_foundation/img/icons/ico_drops_en.jpg" className="logo-img" alt="Logo" />
          <img src="https://dropsearn.fra1.digitaloceanspaces.com/static/drops_foundation/img/icons/ico_drops_en.jpg" className="logo-img" alt="Logo" />
        </div>
        <div className='text-container'>
          <h1 className="title">Ajoutez une vidéo haute performance à votre application Next.js</h1>
          <p className='paragraph'>
            <span>next-video</span> résout les problèmes difficiles liés à l’intégration, au stockage, à la diffusion en continu et à la personnalisation de la vidéo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
