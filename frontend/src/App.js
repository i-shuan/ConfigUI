import './App.css';
import React from 'react';
import { HashRouter, Routes } from 'react-router-dom';
import { rawMenuItems } from './config/routesConfig';
import Layouts from './Layouts/Layouts';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layouts routes={rawMenuItems}>
          <Routes>
            {/* <Route path="/" element={<HomePage menuItems={routes} />} />
            <Route path="/XmlEditor" element={<XmlEditor />} />
            <Route path="/SecsSignalsTable" element={<SecsSignalsTable />} />
            <Route path="/FileManagerPage" element={<FileManagerPage />} /> */}
          </Routes>
        </Layouts>
      </HashRouter>
    </div>
  );
}

export default App;
