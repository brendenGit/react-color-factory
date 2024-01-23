import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import NewColorForm from './components/NewColorForm/NewColorForm';
import Color from './components/Color/Color';
import ColorList from './components/ColorList/ColorList';

import './App.css';

function App() {
  const INITIAL_COLORS = [
    { name: 'red', value: '#FF0000' },
    { name: 'green', value: '#00FF00' },
    { name: 'blue', value: '#0000ff' }
  ]
  const [colors, setColors] = useState(INITIAL_COLORS)

  const addColor = (color) => {
    setColors(oldColors => ([...oldColors, color]))
  }

  const getColor = (name) => {
    return colors.find((color) => color.name === name);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
          <Route path="/colors/:name" element={<Color getColor={getColor} />} />
          <Route path="/colors/" element={<ColorList colors={colors} />} />
          <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App