import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { routes } from './config/routesConfigs';
import Layouts from './Layouts/Layouts';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layouts routes={routes}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layouts>
      </HashRouter>
    </div>
  );
}

export default App;
