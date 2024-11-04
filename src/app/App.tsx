
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from 'pages/home';

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}