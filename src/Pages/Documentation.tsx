import React from 'react';
import Sidebar from '../components/Sidebar';
import Introduction from './Introduction';
import Setup from './Setup';
import Usage from './Usage';
import '../index.css';
import Footer from '../components/Footer';

const Documentation: React.FC = () => {
    return (
      <div className='background-docs'>
        <div className="documentation">
          <Sidebar />
          <div className="main-content">
            <Introduction />
            <Setup />
            <Usage />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Documentation;
