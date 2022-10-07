import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Home } from "./pages/Home"

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/music"></Route>
          <Route path="/voice"></Route>
          <Route path="/design"></Route>
          <Route path="/editing"></Route>
          <Route path="/translation"></Route>
          <Route path="/code"></Route>
          <Route path="/contact"></Route>
          <Route path="/socials"></Route>
          <Route path="/faq"></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
