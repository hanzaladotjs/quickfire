
import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/ThemeContext'
import Body from './components/Body'



function App() {

const {theme} = useContext(ThemeContext)


  return (
    <div className= {theme ? 'text-black font-semibold text-3xl bg-white min-h-screen font-proj' :  'text-emerald-400 font-proj font-semibold text-3xl bg-black min-h-screen' }>
      <Navbar/>
      <Body/>
    </div>
  )
}

export default App
