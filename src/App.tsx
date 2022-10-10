import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Contact } from "./pages/Contact"
import { Design } from "./pages/Design"
import { Editing } from "./pages/Editing"
import { Error } from "./pages/Error"
import { FAQ } from "./pages/FAQ"
import { Home } from "./pages/Home"
import { Music } from "./pages/Music"
import { Programming } from "./pages/Programming"
import { Socials } from "./pages/Socials"
import { Translation } from "./pages/Translation"
import { Voice } from "./pages/Voice"

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/music" element={<Music />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/design" element={<Design />} />
        <Route path="/editing" element={<Editing />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/code" element={<Programming />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
