import beverages from "./beverages"
import regions from "./region"
import map from "./map"
import { states } from "./states"

const china = {
  code: "cn",
  name: "China",
  continent: "Asia",
  flag: "cn",

  states,       // ✅ same structure
  beverages,
  regions,
  map,
}

export default china