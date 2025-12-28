import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TeaProvider } from './ContextAPI/TeaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TeaProvider>
      <App />
    </TeaProvider>
  </StrictMode>,
)
