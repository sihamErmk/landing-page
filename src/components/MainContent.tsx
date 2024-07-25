// src/components/MainContent.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Introduction from '../Pages/Introduction';
import Setup from '../Pages/Setup';
import Usage from '../Pages/Usage';
import '../index.css'

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="introduction" element={<Introduction />} />
        <Route path="setup" element={<Setup />} />
        <Route path="usage" element={<Usage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
