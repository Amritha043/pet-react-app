import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddPet from './components/AddPet'
import SearchPet from './components/SearchPet'
import DeletePet from './components/DeletePet'
import ViewPet from './components/ViewPet'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/"element={<AddPet/>}/>
      <Route path="/search"element={<SearchPet/>}/>
      <Route path="/delete"element={<DeletePet/>}/>
      <Route path="/view"element={<ViewPet/>}/>
     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
