import india from "./india"

export type CountryModule = {
  code: string
  name: string
  continent: string
  flag: string

  states: { name: string; value: number }[]  // ✅ ADD THIS

  beverages: any[]
  regions: string[]
  map: {
    center: [number, number]
    zoom: number
    geoJson?: string
  }
}

export const countryRegistry: Record<string, CountryModule> = {
  in: india,
}