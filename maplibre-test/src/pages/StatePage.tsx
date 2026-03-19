import { useParams, useNavigate } from "react-router-dom"
import beveragesByState from "../data/countries/india/beverages"

export default function StatePage() {
  const { countryCode, stateName } = useParams<{
    countryCode: string
    stateName: string
  }>()

  const navigate = useNavigate()

  if (!countryCode || !stateName) {
    return <div className="p-6">Invalid route</div>
  }

  // 🔹 Get beverages for this state
  const beverages = beveragesByState[stateName] || []

  return (
    <div className="p-8 max-w-4xl mx-auto">

      {/* 🔙 Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
      >
        ← Back
      </button>

      {/* 🏷️ Title */}
      <h1 className="text-3xl font-bold capitalize">
        {stateName.replace("-", " ")}
      </h1>

      {/* 🍹 Beverage List */}
      <h2 className="mt-6 text-xl font-semibold">Beverages</h2>

      {beverages.length === 0 ? (
        <p className="mt-2 text-gray-500">No beverages found</p>
      ) : (
        <ul className="mt-4 list-disc list-inside space-y-2">
          {beverages.map((drink, index) => (
            <li key={index}>{drink}</li>
          ))}
        </ul>
      )}
    </div>
  )
}