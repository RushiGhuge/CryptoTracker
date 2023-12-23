import './App.css'
import Header from './Componants/Common/Header/'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from './Pages/Home'
import Loder from './Componants/Loder/Loder'
import Footer from './Componants/Common/Footer'
const Dashbord = lazy(() => import('./Pages/Dashboard/index'));
const Compare = lazy(() => import('./Pages/ Compare/index'))
const CoinPage = lazy(() => import('./Pages/CoinPage/index'))
const WatchList = lazy(() => import('./Pages/WatchList/index'))

function App() {


  return (
    <Suspense fallback={<Loder />}>
      <HashRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashbord' element={<Dashbord />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/watchList' element={<WatchList />} />
          <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>

        <Footer />

      </HashRouter>
    </Suspense>
  )
}

export default App
