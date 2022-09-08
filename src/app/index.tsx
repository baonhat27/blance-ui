import React from "react"
import { BrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
export function App() {
  return (
    <BrowserRouter basename="/">
      <RootLayout />
    </BrowserRouter>
  )
}
