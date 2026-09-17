import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { TheCube } from './pages/TheCube'
import { HowWeWork } from './pages/HowWeWork'
import { OurWork } from './pages/OurWork'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FacePage } from './pages/FacePage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="the-cube" element={<TheCube />} />
          <Route path="how-we-work" element={<HowWeWork />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="face/:slug" element={<FacePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
