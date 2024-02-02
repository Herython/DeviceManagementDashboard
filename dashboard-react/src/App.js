// src/App.js
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import RebootSection from './components/RebootSection';
import UpdateSection from './components/UpdateSection';
import UpdateNewSection from './components/UpdateNewSection';
import ChangeServerSection from './components/ChangeServerSection';
import AnalyseMessageSection from './components/AnalyseMessageSection';
import DeviceStateSection from './components/DeviceStateSection';
import './App.css'; 

function App() {
  const [activeSection, setActiveSection] = useState('');

  const renderSection = () => {
    switch (activeSection) {
      case 'RebootSection':
        return <RebootSection />;
      case 'UpdateSection':
        return <UpdateSection />;
      case 'UpdateNewSection':
        return <UpdateNewSection />;
      case 'ChangeServerSection':
        return <ChangeServerSection />;
      case 'AnalyseMessageSection':
        return <AnalyseMessageSection />;
      case 'DeviceStateSection':
        return <DeviceStateSection />;
      default:
        return <div>请选择一个选项</div>;
    }
  };

  return (
    <div>
      <Navigation setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}

export default App;
