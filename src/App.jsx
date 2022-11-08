import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import {BrowserRouter, Routes,Route}from 'react-router-dom'
import React,{useState, useContext} from 'react';
import './App.css'

function App() {
  const user = {
    isLogged: true,
    username: 'Facundo'
  }

  const tasks = [
    {
      id: 1,
      title: 'Terminar esta tarea',
      description: 'Finalizar con esto para seguir con proyecto'
    }
  ];

  return (
    <AuthContext.Provider value={{
      user,
      tasks
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App
