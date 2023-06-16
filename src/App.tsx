// import { useState } from 'react'
// import './styles/App.scss'
import { Routes, Route } from "react-router-dom";
import LoginPage from "components/LoginPage/LoginPage";
// import LoginPage from 'components/LoginPage/LoginPage'
import Dashboard from "components/Dashboard/Dashboard";
// import Dashboard from 'src/components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
