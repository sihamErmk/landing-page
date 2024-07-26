
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'

const Footer: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const navigate = useNavigate();

  return (
    <footer className="footer" style={style}>
      <div className="footer-content">
        <div className="section">
          <button 
            className="sec-title" 
            onClick={() => {
              const section = document.getElementById('Home');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            next-video
          </button>
          <div className="section-description">🛠️ by Next.js fans and video nerds</div>
          <div className="avatars">
            <a href="https://github.com/sihamErmk" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/sihamErmk.png" alt="Avatar 1" />
            </a>
            <a href="https://github.com/arlotfi79" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/arlotfi79.png" alt="Avatar 2" />
            </a>
            <a href="https://github.com/OumaimaBoughdad" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/OumaimaBoughdad.png" alt="Avatar 3" />
            </a>
            <a href="https://github.com/sihamErmk" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/sihamErmk.png" alt="Avatar 1" />
            </a>
            <a href="https://github.com/OumaimaBoughdad" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/OumaimaBoughdad.png" alt="Avatar 3" />
            </a>
            <a href="https://github.com/arlotfi79" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/arlotfi79.png" alt="Avatar 2" />
            </a>
          </div>
        </div>
        <div className="section">
          <div className="section-title">DOWNLOAD</div>
          <a className="section-link" href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">Github</a>
          <a className="section-link" href="https://www.npmjs.com/package/your-package" target="_blank" rel="noopener noreferrer">npm</a>
        </div>
        <div className="section">
          <div className="section-title">RESOURCES</div>
          <a className="section-link" href="https://changelog.your-site.com" target="_blank" rel="noopener noreferrer">Changelog</a>
          <a className="section-link" href="https://community.your-site.com" target="_blank" rel="noopener noreferrer">Demuxed Community</a>
          <a className="section-link" href="https://your-site.com/rfc" target="_blank" rel="noopener noreferrer">next/video RFC</a>
          <a className="section-link" href="https://howvideo.works" target="_blank" rel="noopener noreferrer">howvideo.works</a>
        </div>
        <div className="section">
          <div className="section-title">ACKNOWLEDGEMENTS</div>
          <a className="section-link" href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel (Frontend Cloud)</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
