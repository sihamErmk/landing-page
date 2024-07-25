import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../index.css'

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="nav-title">
        <button className="next" onClick={() => navigate('/')} >next-video</button>
        <h2>Documentation</h2>
      </div>
      <nav>
        <ul>
          <li className='sideBar-title'>Introduction</li>
          <li className='sideBar-title'>Setup<span className='sub-bar-title'>
          <a className='link1' 
           onClick={() => {
            const section = document.getElementById('automatic-setup');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          >Automatic Setup</a>
          <a className='link1'onClick={() => {
            const section = document.getElementById('remote-storage');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Remote storage and optimization</a>
          <a className='link1'> Manual Setup</a>
          
          </span>
         
          </li>
          <li className='sideBar-title'>Usage
          <span className='sub-bar-title'>
          <a className='link1'>Local videos (Demo)</a>
          <a className='link1'>Remote videos</a>
          <a className='link1'>Custom poster and blurDataURL</a>
          <a className='link1'>Slotted poster image element (Demo)</a>
          <a className='link1'>Custom Player (Demo)</a>
          </span>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
