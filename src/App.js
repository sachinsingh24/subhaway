import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

// Dedicated, uniquely-designed static service pages
import MindPowerPage from './pages/services/MindPowerPage';
import SuperStudentPage from './pages/services/SuperStudentPage';
import CorporatePowerPage from './pages/services/CorporatePowerPage';
import StressFreePage from './pages/services/StressFreePage';
import DmitCounsellingPage from './pages/services/DmitCounsellingPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        <TopBar />
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/mind-power" element={<MindPowerPage />} />
            <Route path="/services/super-student" element={<SuperStudentPage />} />
            <Route path="/services/corporate-power" element={<CorporatePowerPage />} />
            <Route path="/services/stress-free" element={<StressFreePage />} />
            <Route path="/services/dmit-counselling" element={<DmitCounsellingPage />} />
            <Route path="/services/:serviceId" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
