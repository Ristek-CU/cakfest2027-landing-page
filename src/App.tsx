import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PillarDetailPage from './pages/pillars/[slug]';

export const App: React.FC = () => {
  return (
    <BrowserRouter>

      {/* Main Dynamic Routing View */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pillars/:slug" element={<PillarDetailPage />} />
        {/* Wildcard redirect back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
