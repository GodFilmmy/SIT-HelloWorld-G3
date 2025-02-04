
import { use, useState } from 'react';
import './App.css'
import HomePage from './HomePage/HomePage';
import ReservationForm from './ReservationForm/ReservationForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <ReservationForm/>
    </>
  ); 
}

export default App
