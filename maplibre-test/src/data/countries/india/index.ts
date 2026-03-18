import beverages from "./beverages"
import regions from "./region"
import map from "./map"
import { states } from "./states"

const india = {
  code: "in",
  name: "India",
  continent: "Asia",
  flag: "in",

  states,        // ✅ ADD THIS
  beverages,
  regions,
  map,
}

export default india