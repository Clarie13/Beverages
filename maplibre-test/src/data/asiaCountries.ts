export type AsiaCountry = {
  name: string
  code: string // ISO 3166-1 alpha-2 (lowercase)
  center: [number, number]
  zoom: number
}

export const asiaCountries: AsiaCountry[] = [
  // 🟩 Central Asia
  { name: "Kazakhstan", code: "kz", center: [66.9237, 48.0196], zoom: 4 },
  { name: "Kyrgyzstan", code: "kg", center: [74.7661, 41.2044], zoom: 6 },
  { name: "Tajikistan", code: "tj", center: [71.2761, 38.861], zoom: 6 },
  { name: "Turkmenistan", code: "tm", center: [59.5563, 38.9697], zoom: 5 },
  { name: "Uzbekistan", code: "uz", center: [64.5853, 41.3775], zoom: 5 },

  // 🟨 South Asia
  { name: "Afghanistan", code: "af", center: [67.7099, 33.9391], zoom: 5 },
  { name: "Bangladesh", code: "bd", center: [90.3563, 23.685], zoom: 6 },
  { name: "Bhutan", code: "bt", center: [90.4336, 27.5142], zoom: 7 },
  { name: "India", code: "in", center: [78.9629, 20.5937], zoom: 4 },
  { name: "Maldives", code: "mv", center: [73.2207, 3.2028], zoom: 7 },
  { name: "Nepal", code: "np", center: [84.124, 28.3949], zoom: 6 },
  { name: "Pakistan", code: "pk", center: [69.3451, 30.3753], zoom: 5 },
  { name: "Sri Lanka", code: "lk", center: [80.7718, 7.8731], zoom: 7 },

  // 🟥 East Asia
  { name: "China", code: "cn", center: [104.1954, 35.8617], zoom: 4 },
  { name: "Japan", code: "jp", center: [138.2529, 36.2048], zoom: 5 },
  { name: "Mongolia", code: "mn", center: [103.8467, 46.8625], zoom: 4 },
  { name: "North Korea", code: "kp", center: [127.5101, 40.3399], zoom: 6 },
  { name: "South Korea", code: "kr", center: [127.7669, 35.9078], zoom: 6 },
  { name: "Taiwan", code: "tw", center: [120.9605, 23.6978], zoom: 6 },

  // 🟦 Southeast Asia
  { name: "Brunei", code: "bn", center: [114.7277, 4.5353], zoom: 7 },
  { name: "Cambodia", code: "kh", center: [104.991, 12.5657], zoom: 6 },
  { name: "Indonesia", code: "id", center: [113.9213, -0.7893], zoom: 4 },
  { name: "Laos", code: "la", center: [102.4955, 19.8563], zoom: 6 },
  { name: "Malaysia", code: "my", center: [101.9758, 4.2105], zoom: 6 },
  { name: "Myanmar", code: "mm", center: [95.956, 21.9162], zoom: 5 },
  { name: "Philippines", code: "ph", center: [121.774, 12.8797], zoom: 5 },
  { name: "Singapore", code: "sg", center: [103.8198, 1.3521], zoom: 9 },
  { name: "Thailand", code: "th", center: [100.9925, 15.87], zoom: 5 },
  { name: "Timor-Leste", code: "tl", center: [125.7275, -8.8742], zoom: 7 },
  { name: "Vietnam", code: "vn", center: [108.2772, 14.0583], zoom: 5 },

  // 🟧 West Asia
  { name: "Armenia", code: "am", center: [45.0382, 40.0691], zoom: 6 },
  { name: "Azerbaijan", code: "az", center: [47.5769, 40.1431], zoom: 6 },
  { name: "Bahrain", code: "bh", center: [50.5577, 26.0667], zoom: 8 },
  { name: "Cyprus", code: "cy", center: [33.4299, 35.1264], zoom: 7 },
  { name: "Georgia", code: "ge", center: [43.3569, 42.3154], zoom: 6 },
  { name: "Iran", code: "ir", center: [53.688, 32.4279], zoom: 5 },
  { name: "Iraq", code: "iq", center: [43.6793, 33.2232], zoom: 5 },
  { name: "Israel", code: "il", center: [34.8516, 31.0461], zoom: 6 },
  { name: "Jordan", code: "jo", center: [36.2384, 30.5852], zoom: 6 },
  { name: "Kuwait", code: "kw", center: [47.4818, 29.3117], zoom: 7 },
  { name: "Lebanon", code: "lb", center: [35.8623, 33.8547], zoom: 7 },
  { name: "Oman", code: "om", center: [55.9233, 21.5126], zoom: 5 },
  { name: "Qatar", code: "qa", center: [51.1839, 25.3548], zoom: 7 },
  { name: "Saudi Arabia", code: "sa", center: [45.0792, 23.8859], zoom: 5 },
  { name: "Syria", code: "sy", center: [38.9968, 34.8021], zoom: 5 },
  { name: "Turkey", code: "tr", center: [35.2433, 38.9637], zoom: 5 },
  { name: "United Arab Emirates", code: "ae", center: [53.8478, 23.4241], zoom: 6 },
  { name: "Yemen", code: "ye", center: [48.5164, 15.5527], zoom: 5 },
]
