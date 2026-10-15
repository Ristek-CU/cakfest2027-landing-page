import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PillarDetailPage from './pages/pillars/[slug]';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Main Dynamic Routing View */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pillars/:slug" element={<PillarDetailPage />} />
        {/* Wildcard redirect back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
