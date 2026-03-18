export type Beverage = {
  id: string
  name: string
  category: "Hot" | "Cold" | "Fermented" | "Alcoholic"
  regions: string[]
  description: string
}

const beverages: Beverage[] = [
  {
    id: "masala-chai",
    name: "Masala Chai",
    category: "Hot",
    regions: ["North India", "West India"],
    description: "Black tea brewed with aromatic spices and milk.",
  },
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    category: "Hot",
    regions: ["South India"],
    description: "Strong coffee brewed using a traditional metal filter.",
  },
  {
    id: "lassi",
    name: "Lassi",
    category: "Cold",
    regions: ["North India"],
    description: "A yogurt-based drink, sweet or salted.",
  },
  {
    id: "sol-kadhi",
    name: "Sol Kadhi",
    category: "Cold",
    regions: ["West India"],
    description: "A pink drink made from kokum and coconut milk.",
  },
  {
    id: "handia",
    name: "Handia",
    category: "Fermented",
    regions: ["East India", "Central India"],
    description: "Traditional rice beer brewed by tribal communities.",
  },
]

export default beverages
