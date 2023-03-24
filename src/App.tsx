// Styles
import './global.css'
import styles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Header } from './components/Header'

// Pages
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
