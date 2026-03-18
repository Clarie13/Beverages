import { useState } from "react"
import { asiaCountries } from "../data/asiaCountries"
import type { AsiaCountry } from "../data/asiaCountries"

type SidebarProps = {
  selectedCountry: string | null
  onSelectCountry: (country: AsiaCountry) => void
}

export default function Sidebar({
  selectedCountry,
  onSelectCountry,
}: SidebarProps) {
  const [search, setSearch] = useState("")

  // Filter countries by search text
  const filteredCountries = asiaCountries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div
      style={{
        width: "280px",
        backgroundColor: "#f8fafc",
        borderRight: "1px solid #e2e8f0",
        padding: "12px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title */}
      <h3
        style={{
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: 600,
          color: "#0f172a",
        }}
      >
        Asian Countries
      </h3>

      {/* 🔍 Search box */}
      <input
        type="text"
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px 10px",
          marginBottom: "12px",
          borderRadius: "8px",
          border: "1px solid #cbd5f5",
          fontSize: "14px",
          outline: "none",
        }}
      />

      {/* Country list */}
      <div style={{ overflowY: "auto" }}>
        {filteredCountries.map((country) => {
          const isSelected = selectedCountry === country.name

          return (
            <div
              key={country.name}
              onClick={() => onSelectCountry(country)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                marginBottom: "6px",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: isSelected ? "#6366f1" : "transparent",
                color: isSelected ? "white" : "#0f172a",
                fontWeight: isSelected ? 600 : 400,
                transition: "background-color 0.2s ease",
              }}
            >
              {/* 🇺🇳 Flag */}
              <img
                src={`https://flagcdn.com/w20/${country.code}.png`}
                srcSet={`https://flagcdn.com/w40/${country.code}.png 2x`}
                width={20}
                height={15}
                alt={country.name}
                style={{
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />

              {/* Country name */}
              <span>{country.name}</span>
            </div>
          )
        })}

        {/* No results */}
        {filteredCountries.length === 0 && (
          <div
            style={{
              padding: "12px",
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            No countries found
          </div>
        )}
      </div>
    </div>
  )
}
