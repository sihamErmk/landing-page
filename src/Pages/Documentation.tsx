// src/Pages/Documentation.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Introduction from './Introduction';
import Setup from './Setup';
import Usage from './Usage';
import '../index.css';

const Documentation: React.FC = () => {
    return (
      <div className="documentation">
        <Sidebar />
        <div className="main-content">
          <Introduction />
          <Setup />
          <Usage />
        </div>
      </div>
    );
  };
  
  export default Documentation;