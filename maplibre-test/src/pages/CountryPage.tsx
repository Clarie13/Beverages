import { useParams, useNavigate } from "react-router-dom"
import { countryRegistry } from "../data/countries/registry"
import { ResponsiveContainer, Treemap } from "recharts"

export default function CountryPage() {
  const { code } = useParams<{ code: string }>()
  const navigate = useNavigate()

  const country = code ? countryRegistry[code] ?? null : null

  if (!country) {
    return <div className="p-6">Country not found</div>
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">

      {/* 🔙 Back */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
      >
        ← Back
      </button>

      {/* 🇮🇳 Header */}
      <div className="flex items-center gap-4">
        <img
          src={`https://flagcdn.com/w40/${country.flag}.png`}
          alt={country.name}
          className="rounded"
        />
        <h1 className="text-3xl font-serif font-bold">
          {country.name}
        </h1>
      </div>

      {/* 🟦 STATES TREEMAP */}
      <h2 className="mt-10 text-xl font-semibold">States</h2>

      <div className="mt-4 w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={country.states}
            dataKey="value"
            stroke="#ffffff"
            aspectRatio={4 / 3}
            content={({ x, y, width, height, name }: any) => {
              return (
                <g>
                  {/* Block */}
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill="#3b82f6"
                  />

                  {/* Show text only if space is enough */}
                  {width > 40 && height > 25 && (
                    <text
                      x={x + width / 2}
                      y={y + height / 2}
                      textAnchor="middle"
                      fill="white"
                      fontSize={12}
                      fontWeight="normal"
                    >
                      {name}
                    </text>
                  )}
                </g>
              )
            }}
          />
        </ResponsiveContainer>
      </div>

    </div>
  )
}