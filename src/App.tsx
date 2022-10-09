import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Contact } from "./pages/Contact"
import { Error } from "./pages/Error"
import { FAQ } from "./pages/FAQ"
import { Home } from "./pages/Home"
import { Socials } from "./pages/Socials"

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/music"></Route>
        <Route path="/voice"></Route>
        <Route path="/design"></Route>
        <Route path="/editing"></Route>
        <Route path="/translation"></Route>
        <Route path="/code"></Route>
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
