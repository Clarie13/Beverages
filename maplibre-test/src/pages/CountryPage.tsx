import { useParams, useNavigate } from "react-router-dom"
import { countryRegistry } from "../data/countries/registry"
import { ResponsiveContainer, Treemap } from "recharts"

export default function CountryPage() {
  const { code } = useParams<{ code: string }>()
  const navigate = useNavigate()

  const country = code ? countryRegistry[code] ?? null : null

  const handleStateClick = (stateName: string) => {
    const slug = stateName.toLowerCase().replace(/\s+/g, "-")
    navigate(`/country/${code}/state/${slug}`)
  }

  if (!country) {
    return <div className="p-6 text-red-500">Country not found</div>
  }

  return (
    <div className="min-h-screen bg-sky-50">

      {/* 🔝 HEADER */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">

          {/* 🔙 Back Button */}
          <button
            onClick={() => navigate("/")}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium"
          >
            ← Back
          </button>

          {/* 🇮🇳 Flag + Country Name */}
          <div className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/w40/${country.flag}.png`}
              alt={country.name}
              className="rounded"
            />
            <h1 className="text-2xl font-bold capitalize">
              {country.name}
            </h1>
          </div>

        </div>
      </div>

      {/* 📦 CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* 🟦 STATES TITLE */}
        <h2 className="text-xl font-semibold text-gray-700">
          States
        </h2>

        {/* 🟦 TREEMAP */}
        <div className="mt-4 w-full h-[500px] bg-white rounded-xl shadow-sm border p-2">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={country.states || []}
              dataKey="value"
              stroke="#ffffff"
              aspectRatio={4 / 3}
              isAnimationActive={false} // ✅ animation removed
              content={({ x, y, width, height, name }: any) => (
                <g
                  onClick={() => handleStateClick(name)}
                  style={{ cursor: "pointer" }}
                >
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill="#3b82f6"
                  />

                  {width > 40 && height > 25 && (
                    <text
                      x={x + width / 2}
                      y={y + height / 2}
                      textAnchor="middle"
                      fill="white"
                      fontSize={12}
                    >
                      {name}
                    </text>
                  )}
                </g>
              )}
            />
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}