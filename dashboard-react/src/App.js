// src/App.js
import React from 'react';
import Navigation from './components/Navigation';
import RebootSection from './components/RebootSection';
import UpdateSection from './components/UpdateSection';
import UpdateNewSection from './components/UpdateNewSection';
import ChangeServerSection from './components/ChangeServerSection';
import AnalyseMessageSection from './components/AnalyseMessageSection';
import DeviceStateSection from './components/DeviceStateSection';
import './App.css'; 

function App() {
  return (
    <div>
      <Navigation />
      <RebootSection />
      <UpdateSection />
      <UpdateNewSection />
      <ChangeServerSection />
      <AnalyseMessageSection />
      <DeviceStateSection />
    </div>
  );
}

export default App;
