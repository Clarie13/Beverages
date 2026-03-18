import { useEffect, useRef } from "react"
import maplibregl from "maplibre-gl"
import type { AsiaCountry } from "../data/asiaCountries"
import { useNavigate } from "react-router-dom"

type Props = {
  selectedCountry: AsiaCountry | null
}

export default function MapView({ selectedCountry }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const flagMarkerRef = useRef<maplibregl.Marker | null>(null)
  const navigate = useNavigate()

  // 🗺️ Initialize map (runs once)
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    mapRef.current = new maplibregl.Map({
      container: containerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [78.9629, 20.5937],
      zoom: 4,
    })
  }, [])

  // 🇮🇳 Show flag when a country is selected
  useEffect(() => {
    if (!selectedCountry || !mapRef.current) return

    const map = mapRef.current

    // Fly to selected country
    map.flyTo({
      center: selectedCountry.center,
      zoom: selectedCountry.zoom,
      speed: 1.2,
    })

    // Remove previous flag
    if (flagMarkerRef.current) {
      flagMarkerRef.current.remove()
      flagMarkerRef.current = null
    }

    // Create flag image
    const flagImg = document.createElement("img")
    flagImg.src = `https://flagcdn.com/w40/${selectedCountry.code}.png`
    flagImg.alt = selectedCountry.name
    flagImg.title = selectedCountry.name

    flagImg.style.width = "32px"
    flagImg.style.height = "24px"
    flagImg.style.borderRadius = "4px"
    flagImg.style.backgroundColor = "white"
    flagImg.style.padding = "2px"
    flagImg.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)"
    flagImg.style.cursor = "pointer"

    // ✅ CORRECT & GENERIC navigation
    flagImg.onclick = () => {
      navigate(`/country/${selectedCountry.code}`)
    }

    // Add marker to map
    flagMarkerRef.current = new maplibregl.Marker({
      element: flagImg,
      anchor: "bottom",
      offset: [0, -10],
    })
      .setLngLat(selectedCountry.center)
      .addTo(map)
  }, [selectedCountry, navigate])

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  )
}
