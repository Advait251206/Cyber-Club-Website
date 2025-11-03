import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

// --- IMPORT THE NEW RESOURCE PAGES ---
import LearningResources from './pages/LearningResources'
import ToolsPlatforms from './pages/ToolsPlatforms'
import PracticeCTFs from './pages/PracticeCTFs'
import ReadingResearch from './pages/ReadingResearch'
import CareerRoadmaps from './pages/CareerRoadmaps'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'events', element: <Events /> },
      { path: 'team', element: <Team /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      
      { path: 'resources/learning', element: <LearningResources /> },
      { path: 'resources/tools', element: <ToolsPlatforms /> },
      { path: 'resources/practice', element: <PracticeCTFs /> },
      { path: 'resources/reading', element: <ReadingResearch /> },
      { path: 'resources/roadmaps', element: <CareerRoadmaps /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)