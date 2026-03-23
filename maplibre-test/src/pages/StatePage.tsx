import { useParams, useNavigate } from "react-router-dom"
import beveragesByState from "../data/countries/india/beverages"
import { countryRegistry } from "../data/countries/registry" // ✅ added

export default function StatePage() {
  const { countryCode, stateName } = useParams<{
    countryCode: string
    stateName: string
  }>()

  const navigate = useNavigate()

  if (!countryCode || !stateName) {
    return <div className="p-6 text-red-500">Invalid route</div>
  }

  const country = countryRegistry[countryCode] // ✅ added

  const beverages = beveragesByState[stateName] || []

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔝 HEADER */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">

          {/* 🔙 Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium"
          >
            ← Back
          </button>

          {/* 🌍 Country Name */}
          <div className="flex items-center gap-4">
            <img
              src={`https://flagcdn.com/w40/${country?.flag}.png`}
              alt={country?.name}
              className="rounded"
            />
          <h1 className="text-2xl font-bold capitalize">
            {country?.name || countryCode} {/* ✅ changed */}
          </h1>
          </div>
        </div>
      </div>

      {/* 📦 CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-8 min-h-screen bg-blue-100">

        {/* 🏷️ State Name */}
        <h2 className="text-3xl font-semibold capitalize text-gray-800">
          {stateName.replace("-", " ")}
        </h2>

        {/* 🍹 Section Title */}
        <h3 className="mt-6 text-xl font-semibold text-gray-700">
          Beverages
        </h3>

        {/* 📋 Beverage List */}
        {beverages.length === 0 ? (
          <p className="mt-3 text-gray-500 italic">
            No beverages found
          </p>
        ) : (
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {beverages.map((drink, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                {drink}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}