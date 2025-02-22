import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChampionsList from './mp2.tsx'

createRoot(document.getElementById('root')!).render(
  <ChampionsList></ChampionsList>
)
