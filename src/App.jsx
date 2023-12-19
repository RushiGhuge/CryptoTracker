import './App.css'
import Header from './Componants/Common/Header/'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashbord from './Pages/Dashboard'
import Compare from './Pages/ Compare'
import CoinPage from './Pages/CoinPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashbord' element={<Dashbord/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='/coin/:id' element={<CoinPage/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
