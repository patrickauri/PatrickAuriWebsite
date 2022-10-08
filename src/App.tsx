import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Error } from "./pages/Error"
import { Home } from "./pages/Home"

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
        <Route path="/contact"></Route>
        <Route path="/socials"></Route>
        <Route path="/faq"></Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
