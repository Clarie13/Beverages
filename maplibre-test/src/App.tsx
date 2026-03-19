import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MapView from "./components/MapView"
import CountryPage from "./pages/CountryPage"
import { useState } from "react"
import type { AsiaCountry } from "./data/asiaCountries"
import StatePage from "./pages/StatePage"

export default function App() {
  const [selectedCountry, setSelectedCountry] =
    useState<AsiaCountry | null>(null)

  return (
    <Routes>
      {/* 🏠 HOME PAGE */}
      <Route
        path="/"
        element={
          <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
              <Sidebar
                selectedCountry={selectedCountry?.name ?? null}
                onSelectCountry={setSelectedCountry}
              />
              <div style={{ flex: 1 }}>
                <MapView selectedCountry={selectedCountry} />
              </div>
            </div>
          </div>
        }
      />

      {/* 🌍 COUNTRY PAGE */}
      <Route path="/country/:code" element={<CountryPage />} />

      {/*state page*/}
      <Route 
  path="/country/:countryCode/state/:stateName" 
  element={<StatePage />} 
/>

    </Routes>
  )
}
