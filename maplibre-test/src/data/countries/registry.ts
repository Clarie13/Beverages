import india from "./india"
import china from "./china"

export type CountryModule = {
  code: string
  name: string
  continent: string
  flag: string

  banner?: string
  states: { name: string; value: number }[]  // ✅ ADD THIS

  beverages: Record<string, string[]>
  regions: string[]
  map: {
    center: [number, number]
    zoom: number
    geoJson?: string
  }
}

export const countryRegistry: Record<string, CountryModule> = {
  in: india,
  cn: china,
}