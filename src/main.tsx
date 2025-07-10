
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContextProvider from './context/ThemeContext.tsx'
import LogicProvider from './context/LogicContext.tsx'

createRoot(document.getElementById('root')!).render(

    <ContextProvider>
        <LogicProvider>
        <App />
        </LogicProvider>
    </ContextProvider>

)
