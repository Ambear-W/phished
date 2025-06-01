import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import Unsubscribe from './unsubscribe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Unsubscribe />
  </StrictMode>,
)

