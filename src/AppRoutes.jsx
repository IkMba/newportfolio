import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProjectsPage from './pages/Projects'

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      />
      <Route
        path="/projects"
        element={
            <ProjectsPage />
        }
      />
    </Routes>

  )
}
