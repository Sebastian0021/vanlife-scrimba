import { BrowserRouter, Routes, Route, json } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Vans } from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './pages/Host/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import { useState, useEffect } from 'react'
import { getDataFromStorage, saveDataToStorage } from './utils/localStorage'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanInfo from './pages/Host/HostVanInfo'
import jsonData from './data/data.json'

export default function App () {
  // const [vans, setVans] = useState(null)

  // const storageData = getDataFromStorage('vansArray')

  // useEffect(() => {
  //   if (!storageData) {
  //     fetch('/api/vans')
  //       .then(res => res.json())
  //       .then(data => setVans(data))
  //       .finally(() => {
  //         if (vans.vans.length !== 0) saveDataToStorage('vansArray', vans.vans)
  //       })
  //   } else {
  //     setVans(storageData)
  //   }
  // }, [])
  saveDataToStorage('vansArray', jsonData)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
