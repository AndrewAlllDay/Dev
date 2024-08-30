import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/Hero'
import Cards from './components/cards'
import Sponsors from './components/sponsors'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Cards />
    <Sponsors />
  </StrictMode>,
)
