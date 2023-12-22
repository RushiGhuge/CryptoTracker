import './App.css'
import Header from './Componants/Common/Header/'
import Home from './Pages/Home'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Dashbord from './Pages/Dashboard'
import Compare from './Pages/ Compare'
import CoinPage from './Pages/CoinPage'
import WatchList from './Pages/WatchList'


function App() {

  return (
    <>
      <HashRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashbord' element={<Dashbord />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/watchList' element={<WatchList />} />
          <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
