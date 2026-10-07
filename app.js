const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const TIMES = [
  "10:30 AM – 11:30 AM",
  "11:30 AM – 12:30 PM",
  "01:00 PM – 02:00 PM",
  "02:00 PM – 03:00 PM",
  "03:10 PM – 05:10 PM"
];

const BATCHES = {
  "Computer Engineering": ["CP1", "CP2", "CP3"],
  "Electrical Engineering": ["E1", "E2"],
  "Civil Engineering": ["C1", "C2", "C3"],
  "Mechanical Engineering": ["M1", "M2", "M3"]
};

// ========================================================
// CAMPUS BUILDINGS METADATA (8 TOTAL BUILDINGS)
// Sequence from Entry Gate:
// 1: Administration Block (Left side, 1st) [Floors: Ground & 1st]
// 2: Central Library (Left side, 2nd) [Floors: Ground & 1st]
// 3: College Canteen & Student Amenities / Sports (Left side, 3rd) [Floors: Ground & 1st]
// 4: Electrical Engineering Department (Straight ahead, right of canteen) [Floors: Ground & 1st]
// 5: Mechanical Engineering Department (Right side, ahead of Electrical) [Floors: Ground & 1st]
// 6: College Workshop Building (Right side, ahead of Mechanical) [Floor: SINGLE FLOOR ONLY!]
// 7: Civil Engineering Department (Ahead of workshop on loop) [Floors: Ground & 1st]
// 8: Computer Engineering Department (Ahead of civil on loop) [Floors: Ground & 1st]
// ========================================================

const CAMPUS_BUILDINGS = {
  1: {
    id: 1,
    series: "1000",
    name: "Building 1: Administration Block",
    shortName: "Admin Block",
    icon: "🏛️",
    type: "admin",
    hasIndoorMaps: false,
    floors: [0, 1],
    roadX: 102, roadY: 602,
    desc: "Principal Chamber, Administrative Office, Exam Cell & Student Section (Ground & 1st Floor)"
  },
  2: {
    id: 2,
    series: "2000",
    name: "Building 2: Central Library",
    shortName: "Central Library",
    icon: "📚",
    type: "library",
    hasIndoorMaps: false,
    floors: [0, 1],
    roadX: 150, roadY: 471,
    desc: "Issue Counter, Reading Hall, Digital Library & Reference Wing (Ground & 1st Floor)"
  },
  3: {
    id: 3,
    series: "3000",
    name: "Building 3: College Canteen & Student Amenities",
    shortName: "Canteen & Club",
    icon: "🍴",
    type: "canteen",
    hasIndoorMaps: false,
    floors: [0, 1],
    roadX: 120, roadY: 301,
    desc: "Dining Pavilion, Cafeteria, Music Club & Indoor Sports (Ground & 1st Floor)"
  },
  4: {
    id: 4,
    series: "4000",
    name: "Building 4: Electrical Engineering Department",
    shortName: "Electrical Engg",
    icon: "⚡",
    type: "electrical",
    hasIndoorMaps: true,
    floors: [0, 1],
    roadX: 132, roadY: 111,
    desc: "Series 4000 (Ground Floor) & 4100 (First Floor) • High Voltage, Machines & Power Labs"
  },
  5: {
    id: 5,
    series: "5000",
    name: "Building 5: Mechanical Engineering Department",
    shortName: "Mechanical Engg",
    icon: "⚙️",
    type: "mechanical",
    hasIndoorMaps: true,
    floors: [0, 1],
    roadX: 344, roadY: 228,
    desc: "Series 5000 (Ground Floor) & 5100 (First Floor) • CAD/CAM, RAC, Dynamics & Thermal Labs"
  },
  6: {
    id: 6,
    series: "6000",
    name: "Building 6: College Workshop",
    shortName: "Workshop (1 Floor)",
    icon: "🔧",
    type: "workshop",
    hasIndoorMaps: false,
    floors: [0], // STRICTLY SINGLE FLOOR ONLY!
    roadX: 577, roadY: 359,
    desc: "Single Floor Only • Machine, Welding, Fitting, Carpentry & Foundry Shops"
  },
  7: {
    id: 7,
    series: "7000",
    name: "Building 7: Civil Engineering Department",
    shortName: "Civil Engg",
    icon: "🏗️",
    type: "civil",
    hasIndoorMaps: true,
    floors: [0, 1],
    roadX: 498, roadY: 478,
    desc: "Series 7000 (Ground Floor) & 7100 (First Floor) • Concrete, Soil Mechanics, Surveying & Fluid Labs"
  },
  8: {
    id: 8,
    series: "8000",
    name: "Building 8: Computer Engineering Department",
    shortName: "Computer Engg",
    icon: "💻",
    type: "computer",
    hasIndoorMaps: true,
    floors: [0, 1],
    roadX: 337, roadY: 667,
    desc: "Series 8000 (Ground Floor) & 8100 (First Floor) • Software Labs, Server Room & Dept Office"
  }
};

const GECP_ROOMS = {
  // Building 1: Administration Block (Series 1000 & 1100)
  "1001": { id: "1001", bldg: 1, floor: 0, floorName: "Ground Floor", name: "Principal Office & Chamber", file: "maps/gecp-aerial-3d.webp", mapName: "Building 1: Administration Block", x: 102, y: 602 },
  "1002": { id: "1002", bldg: 1, floor: 0, floorName: "Ground Floor", name: "Administrative Office & Accounts", file: "maps/gecp-aerial-3d.webp", mapName: "Building 1: Administration Block", x: 102, y: 602 },
  "1003": { id: "1003", bldg: 1, floor: 0, floorName: "Ground Floor", name: "Student Section & Fee Counter", file: "maps/gecp-aerial-3d.webp", mapName: "Building 1: Administration Block", x: 102, y: 602 },
  "1101": { id: "1101", bldg: 1, floor: 1, floorName: "First Floor", name: "Examination Cell & Control Room", file: "maps/gecp-aerial-3d.webp", mapName: "Building 1: Administration Block", x: 102, y: 602 },
  "1102": { id: "1102", bldg: 1, floor: 1, floorName: "First Floor", name: "Conference & Syndicate Hall", file: "maps/gecp-aerial-3d.webp", mapName: "Building 1: Administration Block", x: 102, y: 602 },

  // Building 2: Central Library (Series 2000 & 2100)
  "2001": { id: "2001", bldg: 2, floor: 0, floorName: "Ground Floor", name: "Book Circulation & Issue Counter", file: "maps/gecp-aerial-3d.webp", mapName: "Building 2: Central Library", x: 150, y: 471 },
  "2002": { id: "2002", bldg: 2, floor: 0, floorName: "Ground Floor", name: "Main Reading Hall & Periodicals", file: "maps/gecp-aerial-3d.webp", mapName: "Building 2: Central Library", x: 150, y: 471 },
  "2101": { id: "2101", bldg: 2, floor: 1, floorName: "First Floor", name: "Digital Library & e-Resource Lab", file: "maps/gecp-aerial-3d.webp", mapName: "Building 2: Central Library", x: 150, y: 471 },
  "2102": { id: "2102", bldg: 2, floor: 1, floorName: "First Floor", name: "Reference Section & Research Cubicles", file: "maps/gecp-aerial-3d.webp", mapName: "Building 2: Central Library", x: 150, y: 471 },

  // Building 3: College Canteen & Student Amenities (Series 3000 & 3100)
  "3001": { id: "3001", bldg: 3, floor: 0, floorName: "Ground Floor", name: "College Canteen & Dining Pavilion", file: "maps/gecp-aerial-3d.webp", mapName: "Building 3: College Canteen", x: 120, y: 301 },
  "3002": { id: "3002", bldg: 3, floor: 0, floorName: "Ground Floor", name: "Student Refreshment & Cafeteria", file: "maps/gecp-aerial-3d.webp", mapName: "Building 3: College Canteen", x: 120, y: 301 },
  "3101": { id: "3101", bldg: 3, floor: 1, floorName: "First Floor", name: "Music Club & Cultural Activities Hall", file: "maps/gecp-aerial-3d.webp", mapName: "Building 3: Student Amenities", x: 120, y: 301 },
  "3102": { id: "3102", bldg: 3, floor: 1, floorName: "First Floor", name: "Indoor Sports & Gymnasium", file: "maps/gecp-aerial-3d.webp", mapName: "Building 3: Student Amenities", x: 120, y: 301 },

  // Building 4: Electrical Engineering (Series 4000 & 4100)
  "4001": { id: "4001", bldg: 4, floor: 0, floorName: "Ground Floor", name: "H.O.D. Cabin", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 520, y: 890 },
  "4002": { id: "4002", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Maintenance Room", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 570, y: 890 },
  "4003": { id: "4003", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Department Office", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 630, y: 890 },
  "4004": { id: "4004", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Faculty Room", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 610, y: 770 },
  "4005": { id: "4005", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Drawing Room", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 700, y: 770 },
  "4006": { id: "4006", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Class Room", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 700, y: 650 },
  "4007": { id: "4007", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Class Room", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 590, y: 650 },
  "4008": { id: "4008", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Common Services / Toilet", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 560, y: 480 },
  "4009": { id: "4009", bldg: 4, floor: 0, floorName: "Ground Floor", name: "High Voltage Engg Lab", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 480, y: 240 },
  "4010": { id: "4010", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Basic Electrical Engg Lab & Workshop", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 320, y: 250 },
  "4011": { id: "4011", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Electrical Machine Laboratory", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 200, y: 680 },
  "4012": { id: "4012", bldg: 4, floor: 0, floorName: "Ground Floor", name: "Seminar Hall", file: "maps/floor-4-0.webp", mapName: "Building 4: Electrical Engg (Ground Floor)", x: 290, y: 860 },
  "4101": { id: "4101", bldg: 4, floor: 1, floorName: "First Floor", name: "Faculty Room", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 510, y: 890 },
  "4102": { id: "4102", bldg: 4, floor: 1, floorName: "First Floor", name: "Store", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 560, y: 890 },
  "4103": { id: "4103", bldg: 4, floor: 1, floorName: "First Floor", name: "Department Library", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 620, y: 890 },
  "4104": { id: "4104", bldg: 4, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 590, y: 770 },
  "4105": { id: "4105", bldg: 4, floor: 1, floorName: "First Floor", name: "Tutorial Room", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 660, y: 770 },
  "4106": { id: "4106", bldg: 4, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 730, y: 770 },
  "4107": { id: "4107", bldg: 4, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 710, y: 650 },
  "4108": { id: "4108", bldg: 4, floor: 1, floorName: "First Floor", name: "Tutorial Room", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 650, y: 650 },
  "4109": { id: "4109", bldg: 4, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 580, y: 650 },
  "4110": { id: "4110", bldg: 4, floor: 1, floorName: "First Floor", name: "Common Services / Toilet", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 540, y: 480 },
  "4111": { id: "4111", bldg: 4, floor: 1, floorName: "First Floor", name: "Microprocessor & Project Lab", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 480, y: 240 },
  "4112": { id: "4112", bldg: 4, floor: 1, floorName: "First Floor", name: "Network & Control Lab", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 330, y: 250 },
  "4113": { id: "4113", bldg: 4, floor: 1, floorName: "First Floor", name: "Basic Electronics & Power Electronics Lab", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 200, y: 680 },
  "4114": { id: "4114", bldg: 4, floor: 1, floorName: "First Floor", name: "Computer Laboratory", file: "maps/floor-4-1.webp", mapName: "Building 4: Electrical Engg (First Floor)", x: 310, y: 420 },

  // Building 5: Mechanical Engineering (Series 5000 & 5100)
  "5001": { id: "5001", bldg: 5, floor: 0, floorName: "Ground Floor", name: "H.O.D. Cabin", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 520, y: 890 },
  "5002": { id: "5002", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Store Room", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 560, y: 890 },
  "5003": { id: "5003", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Green Room / Office", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 620, y: 890 },
  "5004": { id: "5004", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Faculty Room", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 590, y: 770 },
  "5005": { id: "5005", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Tutorial Room", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 670, y: 770 },
  "5006": { id: "5006", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Class Room", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 680, y: 640 },
  "5007": { id: "5007", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Class Room", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 580, y: 640 },
  "5008": { id: "5008", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Common Services / Toilet", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 550, y: 480 },
  "5009": { id: "5009", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Fluid Mechanics & Fluid Power Lab", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 480, y: 240 },
  "5010": { id: "5010", bldg: 5, floor: 0, floorName: "Ground Floor", name: "RAC & Heat Transfer Lab", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 340, y: 260 },
  "5011": { id: "5011", bldg: 5, floor: 0, floorName: "Ground Floor", name: "IC / Auto Laboratory", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 220, y: 680 },
  "5012": { id: "5012", bldg: 5, floor: 0, floorName: "Ground Floor", name: "Seminar Hall", file: "maps/floor-5-0.webp", mapName: "Building 5: Mechanical Engg (Ground Floor)", x: 300, y: 870 },
  "5101": { id: "5101", bldg: 5, floor: 1, floorName: "First Floor", name: "Faculty Room", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 510, y: 890 },
  "5102": { id: "5102", bldg: 5, floor: 1, floorName: "First Floor", name: "Store / Class", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 550, y: 890 },
  "5103": { id: "5103", bldg: 5, floor: 1, floorName: "First Floor", name: "Design Engineering Laboratory", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 610, y: 890 },
  "5104": { id: "5104", bldg: 5, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 580, y: 770 },
  "5105": { id: "5105", bldg: 5, floor: 1, floorName: "First Floor", name: "Tutorial Room", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 650, y: 770 },
  "5106": { id: "5106", bldg: 5, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 720, y: 770 },
  "5107": { id: "5107", bldg: 5, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 700, y: 650 },
  "5108": { id: "5108", bldg: 5, floor: 1, floorName: "First Floor", name: "Tutorial Room", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 640, y: 650 },
  "5109": { id: "5109", bldg: 5, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 570, y: 650 },
  "5110": { id: "5110", bldg: 5, floor: 1, floorName: "First Floor", name: "Common Services / Toilet", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 540, y: 480 },
  "5111": { id: "5111", bldg: 5, floor: 1, floorName: "First Floor", name: "Drawing Hall", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 480, y: 240 },
  "5112": { id: "5112", bldg: 5, floor: 1, floorName: "First Floor", name: "Basic Mechanical Engg Lab", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 340, y: 250 },
  "5113": { id: "5113", bldg: 5, floor: 1, floorName: "First Floor", name: "Kinematics & Dynamics Lab", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 210, y: 680 },
  "5114": { id: "5114", bldg: 5, floor: 1, floorName: "First Floor", name: "Computer Laboratory", file: "maps/floor-5-1.webp", mapName: "Building 5: Mechanical Engg (First Floor)", x: 320, y: 420 },

  // Building 6: College Workshop (Series 6000 - SINGLE FLOOR ONLY!)
  "6001": { id: "6001", bldg: 6, floor: 0, floorName: "Ground Floor", name: "Machine Shop (Lathe, Milling & Shaper)", file: "maps/gecp-aerial-3d.webp", mapName: "Building 6: College Workshop (Single Floor)", x: 577, y: 359 },
  "6002": { id: "6002", bldg: 6, floor: 0, floorName: "Ground Floor", name: "Welding & Fitting Shop", file: "maps/gecp-aerial-3d.webp", mapName: "Building 6: College Workshop (Single Floor)", x: 577, y: 359 },
  "6003": { id: "6003", bldg: 6, floor: 0, floorName: "Ground Floor", name: "Carpentry & Pattern Making Shop", file: "maps/gecp-aerial-3d.webp", mapName: "Building 6: College Workshop (Single Floor)", x: 577, y: 359 },
  "6004": { id: "6004", bldg: 6, floor: 0, floorName: "Ground Floor", name: "Smithy & Foundry Workshop", file: "maps/gecp-aerial-3d.webp", mapName: "Building 6: College Workshop (Single Floor)", x: 577, y: 359 },

  // Building 7: Civil Engineering (Series 7000 & 7100)
  "7001": { id: "7001", bldg: 7, floor: 0, floorName: "Ground Floor", name: "H.O.D. Cabin", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 520, y: 890 },
  "7002": { id: "7002", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Maintenance Store", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 560, y: 890 },
  "7003": { id: "7003", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Department Office", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 620, y: 890 },
  "7004": { id: "7004", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Faculty Room", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 590, y: 770 },
  "7005": { id: "7005", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Tutorial Room", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 670, y: 770 },
  "7006": { id: "7006", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Class Room", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 680, y: 640 },
  "7007": { id: "7007", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Class Room", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 580, y: 640 },
  "7008": { id: "7008", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Common Services / Toilet", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 550, y: 480 },
  "7009": { id: "7009", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Concrete Technology Lab", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 480, y: 240 },
  "7010": { id: "7010", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Transportation & Soil Mechanics Lab", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 340, y: 260 },
  "7011": { id: "7011", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Fluid Mechanics & Hydraulics Lab", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 220, y: 680 },
  "7012": { id: "7012", bldg: 7, floor: 0, floorName: "Ground Floor", name: "Seminar Hall", file: "maps/floor-7-0.webp", mapName: "Building 7: Civil Engg (Ground Floor)", x: 300, y: 870 },
  "7101": { id: "7101", bldg: 7, floor: 1, floorName: "First Floor", name: "Faculty Room", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 510, y: 890 },
  "7102": { id: "7102", bldg: 7, floor: 1, floorName: "First Floor", name: "Store", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 550, y: 890 },
  "7103": { id: "7103", bldg: 7, floor: 1, floorName: "First Floor", name: "Department Library", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 610, y: 890 },
  "7104": { id: "7104", bldg: 7, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 580, y: 770 },
  "7105": { id: "7105", bldg: 7, floor: 1, floorName: "First Floor", name: "Tutorial Room", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 650, y: 770 },
  "7106": { id: "7106", bldg: 7, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 720, y: 770 },
  "7107": { id: "7107", bldg: 7, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 700, y: 650 },
  "7108": { id: "7108", bldg: 7, floor: 1, floorName: "First Floor", name: "Tutorial Room", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 640, y: 650 },
  "7109": { id: "7109", bldg: 7, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 570, y: 650 },
  "7110": { id: "7110", bldg: 7, floor: 1, floorName: "First Floor", name: "Common Services / Toilet", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 540, y: 480 },
  "7111": { id: "7111", bldg: 7, floor: 1, floorName: "First Floor", name: "Drawing Hall", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 480, y: 240 },
  "7112": { id: "7112", bldg: 7, floor: 1, floorName: "First Floor", name: "Mechanics of Solids Lab", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 340, y: 250 },
  "7113": { id: "7113", bldg: 7, floor: 1, floorName: "First Floor", name: "Environmental Engineering Lab", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 210, y: 680 },
  "7114": { id: "7114", bldg: 7, floor: 1, floorName: "First Floor", name: "Computer Laboratory", file: "maps/floor-7-1.webp", mapName: "Building 7: Civil Engg (First Floor)", x: 320, y: 420 },

  // Building 8: Computer Engineering (Series 8000 & 8100)
  "8001": { id: "8001", bldg: 8, floor: 0, floorName: "Ground Floor", name: "H.O.D. Cabin", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 520, y: 890 },
  "8002": { id: "8002", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Server Room / Network Operations", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 560, y: 890 },
  "8003": { id: "8003", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Department Office", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 620, y: 890 },
  "8004": { id: "8004", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Faculty Room", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 590, y: 770 },
  "8005": { id: "8005", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Tutorial Room", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 670, y: 770 },
  "8006": { id: "8006", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Class Room", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 680, y: 640 },
  "8007": { id: "8007", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Class Room", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 580, y: 640 },
  "8008": { id: "8008", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Common Services / Toilet", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 550, y: 480 },
  "8009": { id: "8009", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Chemistry Laboratory / Hardware Lab", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 480, y: 240 },
  "8010": { id: "8010", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Mine Machinery / Embedded Systems Lab", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 340, y: 260 },
  "8011": { id: "8011", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Physics Laboratory", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 220, y: 680 },
  "8012": { id: "8012", bldg: 8, floor: 0, floorName: "Ground Floor", name: "Seminar Hall", file: "maps/floor-8-0.webp", mapName: "Building 8: Computer Engg (Ground Floor)", x: 300, y: 870 },
  "8101": { id: "8101", bldg: 8, floor: 1, floorName: "First Floor", name: "Faculty Room", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 510, y: 890 },
  "8102": { id: "8102", bldg: 8, floor: 1, floorName: "First Floor", name: "Store", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 550, y: 890 },
  "8103": { id: "8103", bldg: 8, floor: 1, floorName: "First Floor", name: "Department Library / Physics Lab", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 610, y: 890 },
  "8104": { id: "8104", bldg: 8, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 580, y: 770 },
  "8105": { id: "8105", bldg: 8, floor: 1, floorName: "First Floor", name: "Tutorial Room", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 650, y: 770 },
  "8106": { id: "8106", bldg: 8, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 720, y: 770 },
  "8107": { id: "8107", bldg: 8, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 700, y: 650 },
  "8108": { id: "8108", bldg: 8, floor: 1, floorName: "First Floor", name: "Tutorial Room", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 640, y: 650 },
  "8109": { id: "8109", bldg: 8, floor: 1, floorName: "First Floor", name: "Class Room", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 570, y: 650 },
  "8110": { id: "8110", bldg: 8, floor: 1, floorName: "First Floor", name: "Common Services / Toilet", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 540, y: 480 },
  "8111": { id: "8111", bldg: 8, floor: 1, floorName: "First Floor", name: "Geology Laboratory / Database Lab", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 480, y: 240 },
  "8112": { id: "8112", bldg: 8, floor: 1, floorName: "First Floor", name: "Rock Mechanics / Cloud Computing Lab", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 340, y: 250 },
  "8113": { id: "8113", bldg: 8, floor: 1, floorName: "First Floor", name: "Mine Environmental / AI Lab", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 210, y: 680 },
  "8114": { id: "8114", bldg: 8, floor: 1, floorName: "First Floor", name: "Language Laboratory / Advanced Computing Lab", file: "maps/floor-8-1.webp", mapName: "Building 8: Computer Engg (First Floor)", x: 320, y: 420 }
};

const ROOM_MAP_DATA = GECP_ROOMS;

const key = "gecp_timetable_2026_27_v1";
const studentKey = "gecp_students_2026_27_v1";
const facultyKey = "gecp_faculty_2026_27_v1";
const privateNotesKey = "gecp_private_notes_2026_27_v1";
const adminKey = "gecp_admin_session";

const DEPARTMENT_ADMINS = {
  "Computer Engineering": "computer123",
  "Electrical Engineering": "electrical123",
  "Civil Engineering": "civil123",
  "Mechanical Engineering": "mechanical123"
};

const API_BASE = (window.location && window.location.protocol && window.location.protocol.startsWith("http"))
  ? `${window.location.origin}/api`
  : "http://127.0.0.1:5000/api";

let entries = [];
let students = [];
let facultyUsers = [];
let privateNotes = [];
let currentStudent = null;
let currentFaculty = null;
let editingId = null;
let liveTimetableTimer = null;
let facultyTimetableTimer = null;
let deferredPrompt = null;
let lastPreviewedRoom = "5104";

// Database Viewer State
let currentDbTable = "students";
let currentDbRows = [];
let currentDbCols = [];

// Navigation State
let currentMapMode = "satellite"; // "satellite" or "floorplan"
let isLiveNavigating = false;
let liveNavInterval = null;
let currentRouteWaypoints = [];
let activeStepIndex = 0;

async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    });
    clearTimeout(timeoutId);

    let data = {};
    try {
      data = await res.json();
    } catch (e) {}

    if (!res.ok) {
      throw new Error(data.error || data.message || `Request failed (${res.status})`);
    }

    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === "AbortError") {
      const netErr = new Error("Connection timed out. Operating in offline/local mode.");
      netErr.isNetworkError = true;
      throw netErr;
    }
    if (err.name === "TypeError" || String(err.message).toLowerCase().includes("fetch")) {
      const netErr = new Error("Backend server is offline or unreachable.");
      netErr.isNetworkError = true;
      throw netErr;
    }
    throw err;
  }
}

function uid() {
  return "e_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
}

function toAMPM(timeStr) {
  if (!timeStr) return "";
  let clean = timeStr.replace(/\s+/g, " ").trim();
  if (/AM|PM/i.test(clean) && (clean.includes("–") || clean.includes("-"))) {
    return clean.replace(/-/g, "–");
  }
  let parts = clean.split(/[–\-]/).map(s => s.trim());
  if (parts.length === 2) {
    let [h0, m0] = parts[0].split(":").map(Number);
    let [h1, m1] = parts[1].split(":").map(Number);
    let s0 = (h0 >= 8 && h0 < 12) ? "AM" : "PM";
    let s1 = (h1 === 12 || (h1 >= 1 && h1 <= 7) || h1 >= 12) ? "PM" : "AM";
    if (h0 === 11 && h1 === 12) { s0 = "AM"; s1 = "PM"; }
    let str0 = (h0 > 12 ? h0 - 12 : h0).toString().padStart(2, "0") + ":" + (m0 || 0).toString().padStart(2, "0") + " " + s0;
    let str1 = (h1 > 12 ? h1 - 12 : h1).toString().padStart(2, "0") + ":" + (m1 || 0).toString().padStart(2, "0") + " " + s1;
    return str0 + " – "+ str1;
  }
  return timeStr;
}

function mergeFinalPeriod(time) {
  const t = toAMPM(time);
  if (t === "03:10 PM – 04:10 PM" || t === "04:10 PM – 05:10 PM" || t === "03:10–04:10" || t === "04:10–05:10") {
    return "03:10 PM – 05:10 PM";
  }
  return t;
}

function getRoomFromEntry(entry) {
  if (entry.room && entry.room.trim()) return entry.room.trim();
  const subj = String(entry.subject || "");
  const m = subj.match(/\b([4578]\d{3}(?:\/[4578]\d{3})?)\b/);
  if (m) return m[1];
  if (/\bWS\w*\b/i.test(subj)) return subj.match(/\bWS\w*\b/i)[0];
  return "";
}

function normalizeTimetableRow(e) {
  return {
    id: String(e.id ?? uid()),
    dept: e.dept ?? e.department ?? "",
    department: e.department ?? e.dept ?? "",
    sem: String(e.sem ?? e.semester ?? "I"),
    semester: String(e.semester ?? e.sem ?? "I"),
    batch: e.batch || "ALL",
    day: e.day || "",
    time: mergeFinalPeriod(e.time || ""),
    subject: e.subject || "",
    faculty: e.faculty || "",
    room: e.room || getRoomFromEntry(e),
    note: e.note || ""
  };
}

function normalizeStudent(s) {
  return {
    id: String(s.id ?? ("s_" + Date.now())),
    name: s.name || "",
    email: s.email || "",
    enroll: s.enroll || s.enrollment_no || "",
    enrollment_no: s.enrollment_no || s.enroll || "",
    mobile: s.mobile || "",
    dept: s.dept || s.department || "",
    department: s.department || s.dept || "",
    sem: String(s.sem ?? s.semester ?? "I"),
    semester: String(s.semester ?? s.sem ?? "I"),
    batch: s.batch || ""
  };
}

function saveAll() {
  localStorage.setItem(key, JSON.stringify(entries));
  localStorage.setItem(studentKey, JSON.stringify(students));
  localStorage.setItem(facultyKey, JSON.stringify(facultyUsers));
  localStorage.setItem(privateNotesKey, JSON.stringify(privateNotes));
}

// =========================
// LOAD & REFRESH DATA
// =========================

async function loadAll() {
  privateNotes = JSON.parse(localStorage.getItem(privateNotesKey) || "[]");

  try {
    const ttData = await apiFetch("/timetable");
    if (Array.isArray(ttData) && ttData.length) {
      entries = ttData.map(normalizeTimetableRow);
    } else {
      entries = (JSON.parse(localStorage.getItem(key) || "null") || []).map(normalizeTimetableRow);
    }
  } catch (e) {
    entries = (JSON.parse(localStorage.getItem(key) || "null") || []).map(normalizeTimetableRow);
  }

  try {
    const studentData = await apiFetch("/students");
    if (Array.isArray(studentData)) {
      students = studentData.map(normalizeStudent);
      localStorage.setItem(studentKey, JSON.stringify(students));
    }
  } catch (e) {
    students = (JSON.parse(localStorage.getItem(studentKey) || "[]")).map(normalizeStudent);
  }

  fillFilterBatch();
  renderPublicTimetable();
  renderStudents();
}

async function refreshData() {
  try {
    const studentData = await apiFetch("/students");
    if (Array.isArray(studentData)) {
      students = studentData.map(normalizeStudent);
      localStorage.setItem(studentKey, JSON.stringify(students));
    }
  } catch (e) {}

  try {
    const ttData = await apiFetch("/timetable");
    if (Array.isArray(ttData) && ttData.length) {
      entries = ttData.map(normalizeTimetableRow);
      localStorage.setItem(key, JSON.stringify(entries));
    }
  } catch (e) {}

  renderStudents();
  renderAdminTable();
  renderPublicTimetable();
}

// =========================
// NAVIGATION & MODES
// =========================

let pageHistory = ["home"];

function showPage(id, pushHistory = true) {
  if (pushHistory) {
    if (pageHistory.length === 0 || pageHistory[pageHistory.length - 1] !== id) {
      pageHistory.push(id);
    }
    try {
      window.history.pushState({ page: id }, "", `#${id}`);
    } catch (e) {}
  }

  const globalBackBtn = document.getElementById("btnGlobalBack");
  if (globalBackBtn) {
    globalBackBtn.style.display = (id === "home") ? "none" : "inline-flex";
  }

  if (id === "login") {
    const lId = document.getElementById("loginId");
    const lPass = document.getElementById("loginPass");
    if (lId) lId.value = "";
    if (lPass) lPass.value = "";
  }

  document.querySelectorAll(".page").forEach(x => x.classList.add("hidden"));
  const target = document.getElementById(id);
  if (target) target.classList.remove("hidden");

  if (id === "timetable") renderPublicTimetable();
  if (id === "navigation") calculateCampusRoute();

  if (id === "admin") {
    const logged = !!currentAdminDept();
    const aLog = document.getElementById("adminLogin");
    const aPan = document.getElementById("adminPanel");
    if (aLog) aLog.classList.toggle("hidden", logged);
    if (aPan) aPan.classList.toggle("hidden", !logged);
    if (logged) {
      const aTitle = document.getElementById("adminTitle");
      if (aTitle) aTitle.textContent = currentAdminDept() + " Admin Dashboard";
      switchAdminSection("timetable");
      renderAdminTable();
      renderStudents();
    }
  }

  if (id === "student" && currentStudent) {
    renderStudentDashboard();
  }

  if (id === "facultyDashboard" && currentFaculty) {
    switchFacultySection("schedule");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  if (pageHistory.length > 1) {
    pageHistory.pop(); // remove current page
    const prev = pageHistory[pageHistory.length - 1] || "home";
    showPage(prev, false);
  } else {
    showPage("home", false);
  }
}

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.page) {
    showPage(e.state.page, false);
  } else {
    showPage("home", false);
  }
});

function openStudentSignup() {
  showPage("login");
  loginMode("signup");
}

function openFacultySignup() {
  showPage("faculty");
  facultyLoginMode("signup");
}

function switchStudentSection(sec) {
  const tabs = ["timetable", "exams", "navigator", "notes", "submissions"];
  tabs.forEach(t => {
    const tabBtn = document.getElementById(`sSecTab_${t}`);
    const secDiv = document.getElementById(`sSection_${t}`);
    if (tabBtn) tabBtn.classList.toggle("active", t === sec);
    if (secDiv) secDiv.classList.toggle("hidden", t !== sec);
  });

  const notesPage = document.getElementById("notesPage");
  const subsPage = document.getElementById("submissionsPage");
  if (notesPage) notesPage.classList.remove("hidden");
  if (subsPage) subsPage.classList.remove("hidden");

  if (sec === "timetable") renderStudentTimetable();
  if (sec === "exams") loadStudentExams();
  if (sec === "notes") renderPrivateNotes();
  if (sec === "submissions") renderPrivateSubmissions();
}

function updateStudentBadges() {
  if (!currentStudent) return;
  const noteCount = privateNotes.filter(n => (n.ownerId === currentStudent.id || n.student_id === currentStudent.id) && n.category === "note").length;
  const subCount = privateNotes.filter(n => (n.ownerId === currentStudent.id || n.student_id === currentStudent.id) && n.category === "submission").length;

  const nBadge = document.getElementById("sNotesBadge");
  const sBadge = document.getElementById("sSubsBadge");
  if (nBadge) nBadge.textContent = noteCount;
  if (sBadge) sBadge.textContent = subCount;
}

function focusNoteInput() {
  setTimeout(() => {
    const el = document.getElementById("noteSubject");
    if (el) el.focus();
  }, 120);
}

function focusSubmissionInput() {
  setTimeout(() => {
    const el = document.getElementById("submissionSubject");
    if (el) el.focus();
  }, 120);
}

function switchFacultySection(sec) {
  const tabs = ["schedule", "exams", "navigator"];
  tabs.forEach(t => {
    const tabBtn = document.getElementById(`fSecTab_${t}`);
    const secDiv = document.getElementById(`fSection_${t}`);
    if (tabBtn) tabBtn.classList.toggle("active", t === sec);
    if (secDiv) secDiv.classList.toggle("hidden", t !== sec);
  });
  if (sec === "schedule") renderFacultyDashboard();
  if (sec === "exams") loadFacultyExams();
}

function switchAdminSection(sec) {
  const tabs = ["timetable", "exams", "students", "database"];
  tabs.forEach(t => {
    const tabBtn = document.getElementById(`aSecTab_${t}`);
    const secDiv = document.getElementById(`aSection_${t}`);
    if (tabBtn) tabBtn.classList.toggle("active", t === sec);
    if (secDiv) secDiv.classList.toggle("hidden", t !== sec);
  });
  if (sec === "timetable") renderAdminTable();
  if (sec === "exams") renderAdminExams();
  if (sec === "students") renderStudents();
  if (sec === "database") loadDatabaseViewer();
}

function quickSelectDemoRoute(start, dest) {
  const startEl = document.getElementById("routeStart");
  const destEl = document.getElementById("routeDest");
  if (startEl) startEl.value = start;
  if (destEl) destEl.value = dest;
  calculateCampusRoute();
}

function loginMode(mode) {
  const lBox = document.getElementById("loginBox");
  const sBox = document.getElementById("signupBox");
  const lt1 = document.getElementById("lt1");
  const lt2 = document.getElementById("lt2");
  if (lBox) lBox.classList.toggle("hidden", mode !== "login");
  if (sBox) sBox.classList.toggle("hidden", mode !== "signup");
  if (lt1) lt1.classList.toggle("active", mode === "login");
  if (lt2) lt2.classList.toggle("active", mode === "signup");
}

function facultyLoginMode(mode) {
  const fLogin = document.getElementById("facultyLoginBox");
  const fSign = document.getElementById("facultySignupBox");
  const ft1 = document.getElementById("ft1");
  const ft2 = document.getElementById("ft2");
  if (fLogin) fLogin.classList.toggle("hidden", mode !== "login");
  if (fSign) fSign.classList.toggle("hidden", mode !== "signup");
  if (ft1) ft1.classList.toggle("active", mode === "login");
  if (ft2) ft2.classList.toggle("active", mode === "signup");
}

function msg(id, text, error = false) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.classList.remove("hidden", "error");
  if (error) el.classList.add("error");
}

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function maskMobile(m) {
  return m ? "••••••" + String(m).slice(-4) : "Not available";
}

// =========================
// STUDENT AUTH & DASHBOARD
// =========================

async function signup() {
  const nameEl = document.getElementById("sName");
  const emailEl = document.getElementById("sEmail");
  const enrollEl = document.getElementById("sEnroll");
  const passEl = document.getElementById("sPass");
  const deptEl = document.getElementById("sDept");
  const semEl = document.getElementById("sSem");
  const batchEl = document.getElementById("sBatch");

  const name = nameEl ? nameEl.value.trim() : "";
  const email = emailEl ? emailEl.value.trim().toLowerCase() : "";
  const en = enrollEl ? enrollEl.value.trim() : "";
  const pass = passEl ? passEl.value : "";
  const dept = deptEl ? deptEl.value : "";
  const sem = semEl ? semEl.value : "";
  const batch = batchEl ? batchEl.value : "";

  if (!name || !email || !pass || !dept || !sem || !batch) {
    return msg("signupMsg", "Please fill all required fields: Name, Email ID, Department, Semester, Batch, and Password.", true);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return msg("signupMsg", "Please enter a valid email address (e.g. name@student.gecp.ac.in).", true);
  }

  const generatedEnroll = en || email.split("@")[0].toUpperCase();

  const studentObj = {
    id: "s_" + Date.now(),
    enrollment_no: generatedEnroll,
    enroll: generatedEnroll,
    name,
    email,
    department: dept,
    dept,
    semester: sem,
    sem,
    batch,
    password: pass
  };

  try {
    const res = await apiFetch("/students/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        enrollment_no: generatedEnroll,
        password: pass,
        department: dept,
        semester: sem,
        batch
      })
    });
    if (res && res.student) {
      Object.assign(studentObj, normalizeStudent(res.student));
    }
  } catch (err) {
    if (err.isNetworkError) {
      console.warn("Backend offline during registration. Saved to local state.");
    } else {
      return msg("signupMsg", err.message || "Failed to register student.", true);
    }
  }

  // Update local students cache immediately
  const existingIdx = students.findIndex(s => (s.email && s.email.toLowerCase() === email) || s.enroll === studentObj.enroll);
  if (existingIdx >= 0) {
    students[existingIdx] = normalizeStudent(studentObj);
  } else {
    students.unshift(normalizeStudent(studentObj));
  }
  localStorage.setItem(studentKey, JSON.stringify(students));

  // Clear signup fields
  if (nameEl) nameEl.value = "";
  if (emailEl) emailEl.value = "";
  if (enrollEl) enrollEl.value = "";
  if (passEl) passEl.value = "";
  if (deptEl) deptEl.value = "";
  if (semEl) semEl.value = "";
  if (batchEl) batchEl.value = "";

  // Switch smoothly to Login form with auto-filled Email
  loginMode("login");
  const loginIdEl = document.getElementById("loginId");
  const loginPassEl = document.getElementById("loginPass");
  if (loginIdEl) loginIdEl.value = email;
  if (loginPassEl) {
    loginPassEl.value = "";
    loginPassEl.focus();
  }

  msg("loginMsg", "✓ Account created successfully! Log in with your password.", false);

  // Instantly re-render admin tables so admin can see new student right away
  renderStudents();
}

async function studentLogin() {
  const idEl = document.getElementById("loginId");
  const passEl = document.getElementById("loginPass");

  const id = idEl ? idEl.value.trim() : "";
  const pass = passEl ? passEl.value : "";

  if (!id || !pass) {
    return msg("loginMsg", "Please enter your registered Email ID or Enrollment Number and password.", true);
  }

  try {
    const data = await apiFetch("/students/login", {
      method: "POST",
      body: JSON.stringify({
        loginId: id,
        password: pass
      })
    });

    currentStudent = normalizeStudent(data.student || data);
  } catch (err) {
    if (err.isNetworkError) {
      // Offline fallback: check local students array
      const searchKey = id.toLowerCase();
      const localS = students.find(s =>
        ((s.email && s.email.toLowerCase() === searchKey) ||
         (s.enroll && s.enroll.toLowerCase() === searchKey) ||
         (s.mobile && s.mobile === id)) &&
        (!s.password || s.password === pass)
      );
      if (localS) {
        currentStudent = normalizeStudent(localS);
      } else {
        return msg("loginMsg", "Invalid email or password (offline).", true);
      }
    } else {
      return msg("loginMsg", err.message || "Invalid credentials.", true);
    }
  }

  if (idEl) idEl.value = "";
  if (passEl) passEl.value = "";

  showPage("student");
  renderStudentDashboard();
  switchStudentSection("timetable");
}

async function renderStudentDashboard() {
  if (!currentStudent) return;

  const titleEl = document.getElementById("studentTitle");
  const infoEl = document.getElementById("studentInfo");
  if (titleEl) titleEl.textContent = `Welcome, ${currentStudent.name}`;
  if (infoEl) {
    infoEl.textContent = `${currentStudent.dept} • Sem ${currentStudent.sem} • Batch ${currentStudent.batch} • ID: ${currentStudent.enroll || currentStudent.mobile}`;
  }

  const notesPage = document.getElementById("notesPage");
  const subsPage = document.getElementById("submissionsPage");
  if (notesPage) notesPage.classList.remove("hidden");
  if (subsPage) subsPage.classList.remove("hidden");

  switchStudentSection("timetable");
  startStudentTimetable();
  await loadStudentNotesAndSubmissions();
}

async function loadStudentNotesAndSubmissions() {
  if (!currentStudent) return;
  try {
    const [notesRes, subsRes] = await Promise.all([
      apiFetch(`/notes?student_id=${currentStudent.id}`).catch(() => []),
      apiFetch(`/submissions?student_id=${currentStudent.id}`).catch(() => [])
    ]);

    if (Array.isArray(notesRes)) {
      notesRes.forEach(n => {
        n.category = "note";
        if (!privateNotes.some(x => x.id === n.id)) privateNotes.push(n);
      });
    }
    if (Array.isArray(subsRes)) {
      subsRes.forEach(s => {
        s.category = "submission";
        if (!privateNotes.some(x => x.id === s.id)) privateNotes.push(s);
      });
    }
    localStorage.setItem(privateNotesKey, JSON.stringify(privateNotes));
  } catch (e) {}

  updateStudentBadges();
  renderPrivateNotes();
  renderPrivateSubmissions();
}

function studentClasses(day = "") {
  if (!currentStudent) return [];
  const semStr = String(currentStudent.sem).toUpperCase();
  return entries.filter(e => {
    const semMatches = String(e.sem).toUpperCase() === semStr ||
      (semStr === "1" && e.sem === "I") ||
      (semStr === "3" && e.sem === "III") ||
      (semStr === "5" && e.sem === "V") ||
      (semStr === "7" && e.sem === "VII");
    const batchMatches = (e.batch === "ALL" || e.batch === currentStudent.batch);
    const dayMatches = (!day || e.day === day);
    return (e.dept === currentStudent.dept || e.department === currentStudent.dept) && semMatches && batchMatches && dayMatches;
  });
}

function renderStudentTimetable() {
  const container = document.getElementById("studentTimetable");
  if (!container || !currentStudent) return;
  const list = studentClasses();
  container.innerHTML = renderTable(list, "My Personalized Timetable");
}

function logout() {
  currentStudent = null;
  if (liveTimetableTimer) {
    clearInterval(liveTimetableTimer);
    liveTimetableTimer = null;
  }
  showPage("home");
}

// =========================
// FACULTY AUTH & DASHBOARD
// =========================

async function signupFaculty() {
  const nameEl = document.getElementById("facultyName");
  const codeEl = document.getElementById("facultyCode");
  const deptEl = document.getElementById("facultyDept");
  const passEl = document.getElementById("facultyPass");

  const name = nameEl ? nameEl.value.trim() : "";
  const code = codeEl ? codeEl.value.trim().toUpperCase() : "";
  const dept = deptEl ? deptEl.value : "";
  const pass = passEl ? passEl.value : "";

  if (!name || !code || !dept || !pass) {
    return msg("facultySignupMsg", "Please complete all required fields.", true);
  }

  if (!/^[A-Z0-9]{2,12}$/.test(code)) {
    return msg("facultySignupMsg", "Faculty code should contain only letters and numbers (e.g. SDJ).", true);
  }

  try {
    const res = await apiFetch("/faculty/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        code,
        department: dept,
        password: pass
      })
    });

    if (nameEl) nameEl.value = "";
    if (codeEl) codeEl.value = "";
    if (deptEl) deptEl.value = "";
    if (passEl) passEl.value = "";

    facultyLoginMode("login");
    const fcLogin = document.getElementById("facultyLoginCode");
    if (fcLogin) fcLogin.value = code;

    msg("facultyLoginMsg", res.message || "Account activated! You can now log in.", false);

  } catch (err) {
    msg("facultySignupMsg", err.message || "Failed to register faculty account.", true);
  }
}

async function facultyLogin() {
  const codeEl = document.getElementById("facultyLoginCode");
  const passEl = document.getElementById("facultyLoginPass");

  const code = codeEl ? codeEl.value.trim().toUpperCase() : "";
  const pass = passEl ? passEl.value : "";

  if (!code || !pass) {
    return msg("facultyLoginMsg", "Enter faculty code and password.", true);
  }

  try {
    const data = await apiFetch("/faculty/login", {
      method: "POST",
      body: JSON.stringify({
        code,
        password: pass
      })
    });

    currentFaculty = data.faculty || data;
    if (codeEl) codeEl.value = "";
    if (passEl) passEl.value = "";

    showPage("facultyDashboard");
    renderFacultyDashboard();

  } catch (err) {
    msg("facultyLoginMsg", err.message || "Incorrect faculty code or password. Please try again.", true);
  }
}

function facultyMatches(entry, faculty) {
  if (!faculty) return false;
  const code = String(faculty.code || "").toUpperCase();
  const subject = String(entry.subject || "").toUpperCase();
  const assigned = String(entry.faculty || "").toUpperCase();
  return (entry.dept === faculty.dept || entry.department === faculty.dept) &&
    (assigned === code || subject.includes(`(${code})`) || new RegExp(`\\b${code}\\b`).test(subject));
}

function facultyClasses(day = "") {
  if (!currentFaculty) return [];
  return entries.filter(e => facultyMatches(e, currentFaculty) && (!day || e.day === day));
}

function renderFacultyDashboard() {
  if (!currentFaculty) return;
  const titleEl = document.getElementById("facultyTitle");
  const infoEl = document.getElementById("facultyInfo");
  if (titleEl) titleEl.textContent = `Welcome, ${currentFaculty.name}`;
  if (infoEl) infoEl.textContent = `${currentFaculty.dept} • Faculty Code: ${currentFaculty.code}`;

  const scheduleEl = document.getElementById("facultySchedule");
  if (scheduleEl) {
    scheduleEl.innerHTML = renderTable(facultyClasses(), "My Teaching Schedule");
  }
  startFacultyTimetable();
}

function facultyLogout() {
  currentFaculty = null;
  if (facultyTimetableTimer) {
    clearInterval(facultyTimetableTimer);
    facultyTimetableTimer = null;
  }
  showPage("home");
}

// =========================
// LIVE TIMETABLE TRACKING
// =========================

function parseTimeMinutes(s) {
  if (!s) return null;
  const clean = s.trim();
  const parts = clean.split(/[–\-]/).map(x => x.trim());
  if (parts.length < 2) return null;

  function toMins(str) {
    const m = str.match(/(\d+):(\d+)\s*(AM|PM)?/i);
    if (!m) return 0;
    let h = parseInt(m[1], 10);
    const min = parseInt(m[2], 10);
    const ampm = m[3] ? m[3].toUpperCase() : null;
    if (ampm === "PM" && h < 12) h += 12;
    if (ampm === "AM" && h === 12) h = 0;
    return h * 60 + min;
  }

  return { start: toMins(parts[0]), end: toMins(parts[1]) };
}

function renderLiveBox(targetId, classList) {
  const box = document.getElementById(targetId);
  if (!box) return;

  const now = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[now.getDay()];
  const currentMins = now.getHours() * 60 + now.getMinutes();

  if (currentDay === "Sunday") {
    box.innerHTML = `
      <div class="live-head">
        <div><div class="live-dot"></div><b>Sunday — College Closed</b></div>
        <span class="live-state">Weekend</span>
      </div>
      <p>No classes scheduled today.</p>
    `;
    return;
  }

  const todayClasses = classList.filter(e => e.day === currentDay);
  let ongoing = null;
  let upcoming = [];

  todayClasses.forEach(e => {
    const span = parseTimeMinutes(e.time);
    if (span) {
      if (currentMins >= span.start && currentMins < span.end) {
        ongoing = e;
      } else if (span.start > currentMins) {
        upcoming.push({ entry: e, startsIn: span.start - currentMins });
      }
    }
  });

  upcoming.sort((a, b) => a.startsIn - b.startsIn);

  let html = `
    <div class="live-head">
      <div><div class="live-dot"></div><b>Live Class Status (${currentDay})</b></div>
      <span class="live-state">${ongoing ? "Class in Session" : (upcoming.length ? "Upcoming" : "Day Completed")}</span>
    </div>
  `;

  if (ongoing) {
    html += `
      <p><b>Happening Now:</b></p>
      <div class="live-classes">
        <div>
          <b>${esc(ongoing.subject)} (${esc(ongoing.time)})</b>
          <span>Room: ${esc(ongoing.room || "TBA")} • Batch: ${esc(ongoing.batch)} • Faculty: ${esc(ongoing.faculty || "TBA")}</span>
          ${ongoing.room ? `<button class="btn" style="padding:4px 10px;font-size:11.5px;margin-top:8px" onclick="navigateToClass('${esc(ongoing.room)}')">🧭 Navigate to Current Class</button>` : ""}
        </div>
      </div>
    `;
  } else if (upcoming.length > 0) {
    const next = upcoming[0];
    html += `
      <p>Next class starts in <b>${next.startsIn} minutes</b>:</p>
      <div class="live-classes">
        <div>
          <b>${esc(next.entry.subject)} (${esc(next.entry.time)})</b>
          <span>Room: ${esc(next.entry.room || "TBA")} • Batch: ${esc(next.entry.batch)}</span>
          ${next.entry.room ? `<button class="btn" style="padding:4px 10px;font-size:11.5px;margin-top:8px" onclick="navigateToClass('${esc(next.entry.room)}')">🧭 Navigate to Next Class</button>` : ""}
        </div>
      </div>
    `;
  } else {
    html += `<p>All classes for today are completed!</p>`;
  }

  box.innerHTML = html;
}

function startStudentTimetable() {
  if (liveTimetableTimer) clearInterval(liveTimetableTimer);
  renderLiveBox("liveTimetableStatus", studentClasses());
  liveTimetableTimer = setInterval(() => renderLiveBox("liveTimetableStatus", studentClasses()), 30000);
}

function startFacultyTimetable() {
  if (facultyTimetableTimer) clearInterval(facultyTimetableTimer);
  renderLiveBox("facultyLiveStatus", facultyClasses());
  facultyTimetableTimer = setInterval(() => renderLiveBox("facultyLiveStatus", facultyClasses()), 30000);
}

// =========================
// ADMIN AUTH & MANAGEMENT
// =========================

function currentAdminDept() {
  try {
    const session = JSON.parse(sessionStorage.getItem(adminKey) || "{}");
    return session.dept || null;
  } catch (e) {
    return null;
  }
}

function adminLogin() {
  const deptEl = document.getElementById("aDept");
  const passEl = document.getElementById("aPass");
  const dept = deptEl ? deptEl.value : "";
  const pass = passEl ? passEl.value : "";

  if (DEPARTMENT_ADMINS[dept] === pass) {
    sessionStorage.setItem(adminKey, JSON.stringify({ dept }));
    if (passEl) passEl.value = "";
    showPage("admin");
    msg("adminMsg", "");
  } else {
    msg("adminMsg", "Incorrect password for the selected department.", true);
  }
}

function adminLogout() {
  sessionStorage.removeItem(adminKey);
  showPage("home");
}

function renderAdminTable() {
  const dept = currentAdminDept();
  if (!dept) return;

  const semFilter = document.getElementById("adminSemFilter")?.value || "ALL";
  const dayFilter = document.getElementById("adminDayFilter")?.value || "ALL";

  const departmentEntries = entries.filter(e => {
    const deptMatches = (e.dept === dept || e.department === dept);
    const semMatches = (semFilter === "ALL" || e.sem === semFilter || e.semester === semFilter);
    const dayMatches = (dayFilter === "ALL" || e.day === dayFilter);
    return deptMatches && semMatches && dayMatches;
  });

  const container = document.getElementById("adminTT");
  if (!container) return;

  if (!departmentEntries.length) {
    container.innerHTML = '<div class="notice">No entries match these filters. Use "Add class, lab or activity" to create one.</div>';
    return;
  }

  let html = `
    <div class="tablewrap">
      <table class="tt">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Dept</th>
            <th>Sem</th>
            <th>Batch</th>
            <th>Subject</th>
            <th>Room</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  `;

  departmentEntries.slice().sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day)).forEach(e => {
    html += `
      <tr>
        <td>${esc(e.day)}</td>
        <td>${esc(mergeFinalPeriod(e.time))}</td>
        <td>${esc(e.dept)}</td>
        <td>${esc(e.sem)}</td>
        <td>${esc(e.batch)}</td>
        <td>${esc(e.subject)}</td>
        <td>
          ${esc(e.room)}
          ${e.room ? `<button type="button" class="btn secondary" style="padding:2px 7px;font-size:11px;margin-left:4px" onclick="previewRoomMap('${esc(e.room)}')">Map</button>` : ""}
        </td>
        <td>
          <button class="btn secondary" onclick="openEntry('${e.id}')">Edit</button>
          <button class="btn danger" onclick="deleteEntry('${e.id}')">Delete</button>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

function openEntry(id) {
  editingId = id || null;
  const e = entries.find(x => String(x.id) === String(id));
  if (e && e.dept !== currentAdminDept() && e.department !== currentAdminDept()) {
    return alert("You can only edit your department's timetable.");
  }

  const titleEl = document.getElementById("entryTitle");
  if (titleEl) titleEl.textContent = e ? "Edit Timetable Entry" : "Add Timetable Entry";

  const eDept = document.getElementById("eDept");
  const eSem = document.getElementById("eSem");
  const eBatch = document.getElementById("eBatch");
  const eDay = document.getElementById("eDay");
  const eTime = document.getElementById("eTime");
  const eSubject = document.getElementById("eSubject");
  const eRoom = document.getElementById("eRoom");
  const eFaculty = document.getElementById("eFaculty");
  const eNote = document.getElementById("eNote");

  if (eDept) eDept.value = currentAdminDept();
  if (eSem) eSem.value = e?.sem || "I";
  if (eBatch) eBatch.value = e?.batch || "ALL";
  if (eDay) eDay.value = e?.day || "Monday";
  if (eTime) eTime.value = mergeFinalPeriod(e?.time) || "10:30 AM – 11:30 AM";
  if (eSubject) eSubject.value = e?.subject || "";
  if (eRoom) eRoom.value = e?.room || "";
  if (eFaculty) eFaculty.value = e?.faculty || "";
  if (eNote) eNote.value = e?.note || "";

  const modal = document.getElementById("entryModal");
  if (modal) modal.classList.remove("hidden");
}

function closeEntry() {
  const modal = document.getElementById("entryModal");
  if (modal) modal.classList.add("hidden");
}

async function saveEntry() {
  const eSubject = document.getElementById("eSubject");
  const eSem = document.getElementById("eSem");
  const eBatch = document.getElementById("eBatch");
  const eDay = document.getElementById("eDay");
  const eTime = document.getElementById("eTime");
  const eRoom = document.getElementById("eRoom");
  const eFaculty = document.getElementById("eFaculty");
  const eNote = document.getElementById("eNote");

  const subject = eSubject ? eSubject.value.trim() : "";
  if (!subject) return alert("Subject / details are required.");

  const payload = {
    dept: currentAdminDept(),
    department: currentAdminDept(),
    sem: eSem ? eSem.value : "I",
    semester: eSem ? eSem.value : "I",
    batch: eBatch ? (eBatch.value.trim() || "ALL") : "ALL",
    day: eDay ? eDay.value : "Monday",
    time: eTime ? mergeFinalPeriod(eTime.value) : "10:30 AM – 11:30 AM",
    subject,
    room: eRoom ? eRoom.value.trim() : "",
    faculty: eFaculty ? eFaculty.value.trim() : "",
    note: eNote ? eNote.value.trim() : ""
  };

  try {
    if (editingId && !editingId.startsWith("e_")) {
      await apiFetch(`/timetable/${editingId}`, {
        method: "PUT",
        body: JSON.stringify(payload)
      });
    } else {
      const res = await apiFetch("/timetable", {
        method: "POST",
        body: JSON.stringify(payload)
      });
      if (res.entry && res.entry.id) {
        payload.id = String(res.entry.id);
      }
    }
  } catch (err) {}

  if (editingId) {
    entries = entries.map(x => String(x.id) === String(editingId) ? { ...x, ...payload } : x);
  } else {
    payload.id = payload.id || uid();
    entries.push(payload);
  }

  saveAll();
  closeEntry();
  renderAdminTable();
  renderPublicTimetable();
  alert("Timetable entry saved successfully.");
}

async function deleteEntry(id) {
  const entry = entries.find(x => String(x.id) === String(id));
  if (!entry || (entry.dept !== currentAdminDept() && entry.department !== currentAdminDept())) {
    return alert("You can only remove entries from your department.");
  }

  if (!confirm("Delete this timetable entry?")) return;

  try {
    if (!String(id).startsWith("e_")) {
      await apiFetch(`/timetable/${id}`, { method: "DELETE" });
    }
  } catch (err) {}

  entries = entries.filter(x => String(x.id) !== String(id));
  saveAll();
  renderAdminTable();
  renderPublicTimetable();
}

function normalizeDept(d) {
  if (!d) return "";
  const s = String(d).trim().toLowerCase();
  if (s.includes("comp")) return "Computer Engineering";
  if (s.includes("elect")) return "Electrical Engineering";
  if (s.includes("civil")) return "Civil Engineering";
  if (s.includes("mech")) return "Mechanical Engineering";
  return d;
}

function renderStudents() {
  const curAdminDept = currentAdminDept();
  if (!curAdminDept) return;

  const totalEl = document.getElementById("studentTotal");
  const tableEl = document.getElementById("studentTable");
  const deptBadge = document.getElementById("adminStudentDeptBadge");
  const deptTitle = document.getElementById("adminDeptStudentsTitle");

  const curDeptNorm = normalizeDept(curAdminDept);
  if (deptBadge) deptBadge.textContent = curAdminDept;
  if (deptTitle) deptTitle.textContent = `👥 ${curAdminDept} — Registered Students Directory`;

  // Filter strictly by current logged-in admin's department
  const deptStudents = students.filter(s => normalizeDept(s.dept || s.department) === curDeptNorm);
  if (totalEl) totalEl.textContent = deptStudents.length;
  if (!tableEl) return;

  if (!deptStudents.length) {
    tableEl.innerHTML = `<div class="notice">No registered students found for <b>${esc(curAdminDept)}</b>. Newly registered students will automatically appear here.</div>`;
    return;
  }

  const searchVal = (document.getElementById("adminStudentSearch")?.value || "").toLowerCase().trim();
  const filtered = searchVal ? deptStudents.filter(s =>
    (s.name || "").toLowerCase().includes(searchVal) ||
    (s.email || "").toLowerCase().includes(searchVal) ||
    (s.enroll || s.enrollment_no || "").toLowerCase().includes(searchVal) ||
    (s.mobile || "").includes(searchVal) ||
    (s.batch || "").toLowerCase().includes(searchVal)
  ) : deptStudents;

  if (!filtered.length) {
    tableEl.innerHTML = `<div class="notice">No students match your search: "<b>${esc(searchVal)}</b>".</div>`;
    return;
  }

  tableEl.innerHTML = `
    <div class="tablewrap">
      <table class="tt">
        <thead>
          <tr>
            <th style="width:36px">#</th>
            <th>Enrollment No</th>
            <th>Student Name</th>
            <th>Registered Email</th>
            <th>Sem</th>
            <th>Batch</th>
            <th style="width:130px">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map((s, idx) => `
            <tr>
              <td>${idx + 1}</td>
              <td><b>${esc(s.enroll || s.enrollment_no || "Not Assigned")}</b></td>
              <td>${esc(s.name)}</td>
              <td>
                <span style="font-weight:600;color:var(--green)">${esc(s.email || "—")}</span>
                ${s.mobile ? `<br><small class="muted">📞 ${esc(s.mobile)}</small>` : ""}
              </td>
              <td><span class="badge">Sem ${esc(s.sem || s.semester || "I")}</span></td>
              <td>${esc(s.batch || "ALL")}</td>
              <td>
                <div class="admin-actions-cell">
                  <button class="btn secondary" style="padding:4px 8px;font-size:11.5px" onclick="openEditStudentModal('${s.id}')" title="Edit Student">✏️ Edit</button>
                  <button class="btn danger" style="padding:4px 8px;font-size:11.5px" onclick="deleteStudentAccount('${s.id}', '${esc(s.name)}')" title="Delete Student">🗑️ Delete</button>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function filterAdminStudents() {
  renderStudents();
}

function openEditStudentModal(id) {
  const s = students.find(x => String(x.id) === String(id));
  if (!s) return alert("Student not found.");

  const idEl = document.getElementById("editStudentId");
  const nameEl = document.getElementById("editStudentName");
  const enrollEl = document.getElementById("editStudentEnroll");
  const mobileEl = document.getElementById("editStudentMobile");
  const semEl = document.getElementById("editStudentSem");
  const batchEl = document.getElementById("editStudentBatch");
  const msgEl = document.getElementById("editStudentMsg");

  if (idEl) idEl.value = s.id;
  if (nameEl) nameEl.value = s.name || "";
  if (enrollEl) enrollEl.value = s.enroll || s.enrollment_no || "";
  if (mobileEl) mobileEl.value = s.mobile || "";
  if (semEl) semEl.value = s.sem || s.semester || "I";
  if (batchEl) batchEl.value = s.batch || "";

  if (msgEl) {
    msgEl.textContent = "";
    msgEl.className = "notice hidden";
  }

  const modal = document.getElementById("editStudentModal");
  if (modal) modal.classList.remove("hidden");
}

function closeEditStudentModal() {
  const modal = document.getElementById("editStudentModal");
  if (modal) modal.classList.add("hidden");
}

async function saveStudentEdit() {
  const id = document.getElementById("editStudentId")?.value;
  const name = document.getElementById("editStudentName")?.value.trim();
  const enroll = document.getElementById("editStudentEnroll")?.value.trim();
  const mobile = document.getElementById("editStudentMobile")?.value.trim();
  const sem = document.getElementById("editStudentSem")?.value.trim();
  const batch = document.getElementById("editStudentBatch")?.value.trim();

  const msgEl = document.getElementById("editStudentMsg");

  if (!name || !enroll || !mobile || !batch) {
    if (msgEl) {
      msgEl.textContent = "Please fill in all required fields.";
      msgEl.className = "notice error";
      msgEl.classList.remove("hidden");
    }
    return;
  }

  const curDept = currentAdminDept();
  try {
    await apiFetch(`/students/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        enrollment_no: enroll,
        mobile,
        semester: sem,
        batch,
        department: curDept
      })
    });
  } catch (err) {
    console.warn("Backend offline during edit. Updated in local storage.");
  }

  const sIdx = students.findIndex(x => String(x.id) === String(id));
  if (sIdx >= 0) {
    students[sIdx].name = name;
    students[sIdx].enroll = enroll;
    students[sIdx].enrollment_no = enroll;
    students[sIdx].mobile = mobile;
    students[sIdx].sem = sem;
    students[sIdx].semester = sem;
    students[sIdx].batch = batch;
    localStorage.setItem(studentKey, JSON.stringify(students));
  }

  if (msgEl) {
    msgEl.textContent = "✓ Student registration updated successfully!";
    msgEl.className = "notice";
    msgEl.classList.remove("hidden");
  }

  renderStudents();

  setTimeout(() => {
    closeEditStudentModal();
  }, 850);
}

async function deleteStudentAccount(id, name) {
  if (!confirm(`Are you sure you want to permanently delete student "${name}"? This action cannot be undone.`)) {
    return;
  }

  try {
    await apiFetch(`/students/${id}`, { method: "DELETE" });
  } catch (err) {
    console.warn("Backend offline during delete. Removed from local storage.");
  }

  students = students.filter(s => String(s.id) !== String(id));
  localStorage.setItem(studentKey, JSON.stringify(students));
  renderStudents();
  alert(`Student "${name}" was successfully removed.`);
}


// ========================================================
// FORGOT PASSWORD & EMAIL OTP SYSTEM
// ========================================================

let forgotPasswordSession = {
  email: "",
  userType: "student",
  otp: ""
};

function openForgotPasswordModal(defaultType = "student") {
  forgotPasswordSession = { email: "", userType: defaultType, otp: "" };
  const modal = document.getElementById("forgotPasswordModal");
  const step1 = document.getElementById("forgotStep1");
  const step2 = document.getElementById("forgotStep2");
  const typeSelect = document.getElementById("forgotUserType");
  const emailInput = document.getElementById("forgotEmail");
  const msg1 = document.getElementById("forgotMsg1");
  const msg2 = document.getElementById("forgotMsg2");
  const demoAlert = document.getElementById("forgotOtpDemoAlert");

  if (typeSelect) typeSelect.value = defaultType;
  if (emailInput) {
    const loginVal = defaultType === "faculty"
      ? (document.getElementById("facultyLoginCode")?.value || "").trim()
      : (document.getElementById("loginId")?.value || "").trim();
    if (loginVal.includes("@")) {
      emailInput.value = loginVal;
    } else {
      emailInput.value = "";
    }
  }

  if (step1) step1.classList.remove("hidden");
  if (step2) step2.classList.add("hidden");
  if (msg1) { msg1.className = "notice hidden"; msg1.textContent = ""; }
  if (msg2) { msg2.className = "notice hidden"; msg2.textContent = ""; }
  if (demoAlert) { demoAlert.className = "otp-demo-alert hidden"; demoAlert.textContent = ""; }

  if (modal) modal.classList.remove("hidden");
  setTimeout(() => { if (emailInput) emailInput.focus(); }, 120);
}

function closeForgotPasswordModal() {
  const modal = document.getElementById("forgotPasswordModal");
  if (modal) modal.classList.add("hidden");
}

function backToForgotStep1() {
  const step1 = document.getElementById("forgotStep1");
  const step2 = document.getElementById("forgotStep2");
  if (step1) step1.classList.remove("hidden");
  if (step2) step2.classList.add("hidden");
  const msg1 = document.getElementById("forgotMsg1");
  if (msg1) { msg1.className = "notice hidden"; msg1.textContent = ""; }
}

async function sendPasswordResetOtp() {
  const typeSelect = document.getElementById("forgotUserType");
  const emailInput = document.getElementById("forgotEmail");
  const msg1 = document.getElementById("forgotMsg1");

  const userType = typeSelect ? typeSelect.value : "student";
  const email = emailInput ? emailInput.value.trim().toLowerCase() : "";

  if (!email) {
    if (msg1) {
      msg1.textContent = "Please enter your registered email address.";
      msg1.className = "notice error";
      msg1.classList.remove("hidden");
    }
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (msg1) {
      msg1.textContent = "Please enter a valid email address format (e.g. user@example.com).";
      msg1.className = "notice error";
      msg1.classList.remove("hidden");
    }
    return;
  }

  try {
    if (msg1) {
      msg1.textContent = "Generating and sending verification OTP...";
      msg1.className = "notice";
      msg1.classList.remove("hidden");
    }

    const res = await apiFetch("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email, user_type: userType })
    });

    forgotPasswordSession = {
      email: res.email || email,
      userType: userType,
      otp: res.otp || ""
    };

    // Transition to Step 2
    const step1 = document.getElementById("forgotStep1");
    const step2 = document.getElementById("forgotStep2");
    const targetDisplay = document.getElementById("forgotTargetEmailDisplay");
    const demoAlert = document.getElementById("forgotOtpDemoAlert");
    const otpInput = document.getElementById("forgotOtp");

    if (step1) step1.classList.add("hidden");
    if (step2) step2.classList.remove("hidden");
    if (targetDisplay) targetDisplay.textContent = forgotPasswordSession.email;

    if (demoAlert && res.otp) {
      demoAlert.innerHTML = `📨 OTP sent! For offline campus demo, your 6-digit OTP code is: <b style="font-size:16px;letter-spacing:2px">${esc(res.otp)}</b> (Valid for 10 min)`;
      demoAlert.classList.remove("hidden");
    }

    if (otpInput) {
      otpInput.value = "";
      setTimeout(() => otpInput.focus(), 150);
    }

  } catch (err) {
    if (msg1) {
      msg1.textContent = err.message || "Failed to find account or dispatch OTP.";
      msg1.className = "notice error";
      msg1.classList.remove("hidden");
    }
  }
}

async function submitResetPassword() {
  const otpInput = document.getElementById("forgotOtp");
  const newPassInput = document.getElementById("forgotNewPass");
  const confirmPassInput = document.getElementById("forgotConfirmPass");
  const msg2 = document.getElementById("forgotMsg2");

  const otp = otpInput ? otpInput.value.trim() : "";
  const newPass = newPassInput ? newPassInput.value : "";
  const confirmPass = confirmPassInput ? confirmPassInput.value : "";

  if (!otp || otp.length < 6) {
    if (msg2) {
      msg2.textContent = "Please enter the complete 6-digit OTP code.";
      msg2.className = "notice error";
      msg2.classList.remove("hidden");
    }
    return;
  }

  if (!newPass || newPass.length < 4) {
    if (msg2) {
      msg2.textContent = "New password must be at least 4 characters long.";
      msg2.className = "notice error";
      msg2.classList.remove("hidden");
    }
    return;
  }

  if (newPass !== confirmPass) {
    if (msg2) {
      msg2.textContent = "Passwords do not match. Please re-enter carefully.";
      msg2.className = "notice error";
      msg2.classList.remove("hidden");
    }
    return;
  }

  try {
    if (msg2) {
      msg2.textContent = "Verifying OTP and updating password...";
      msg2.className = "notice";
      msg2.classList.remove("hidden");
    }

    const res = await apiFetch("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({
        email: forgotPasswordSession.email,
        otp: otp,
        new_password: newPass,
        user_type: forgotPasswordSession.userType
      })
    });

    closeForgotPasswordModal();
    alert("✓ Password reset successfully! You can now log in with your new password.");

    if (forgotPasswordSession.userType === "faculty") {
      showPage("faculty");
      facultyLoginMode("login");
      const fCode = document.getElementById("facultyLoginCode");
      const fPass = document.getElementById("facultyLoginPass");
      if (fCode) fCode.value = forgotPasswordSession.email;
      if (fPass) { fPass.value = ""; fPass.focus(); }
    } else {
      showPage("login");
      loginMode("login");
      const sId = document.getElementById("loginId");
      const sPass = document.getElementById("loginPass");
      if (sId) sId.value = forgotPasswordSession.email;
      if (sPass) { sPass.value = ""; sPass.focus(); }
    }

  } catch (err) {
    if (msg2) {
      msg2.textContent = err.message || "Failed to reset password. Please check the OTP code.";
      msg2.className = "notice error";
      msg2.classList.remove("hidden");
    }
  }
}


// ========================================================
// EXAM TIMETABLE MANAGEMENT SYSTEM
// ========================================================

let cachedExamTimetables = [];

function getExamTypeClass(type) {
  if (!type) return "exam-type-gtu";
  const t = type.toLowerCase();
  if (t.includes("mid")) return "exam-type-mid";
  if (t.includes("remedial")) return "exam-type-remedial";
  if (t.includes("viva") || t.includes("practical")) return "exam-type-viva";
  return "exam-type-gtu";
}

// 1. ADMIN EXAM TIMETABLE MANAGEMENT
async function renderAdminExams() {
  const container = document.getElementById("adminExamsTableContainer");
  if (!container) return;

  const curDept = currentAdminDept();
  if (!curDept) return;

  const semFilter = document.getElementById("adminExamSemFilter")?.value || "ALL";
  const typeFilter = document.getElementById("adminExamTypeFilter")?.value || "ALL";

  container.innerHTML = `<div class="notice">Loading exam timetables for <b>${esc(curDept)}</b>...</div>`;

  try {
    let url = `/exam-timetable?department=${encodeURIComponent(curDept)}`;
    if (semFilter !== "ALL") url += `&semester=${encodeURIComponent(semFilter)}`;
    if (typeFilter !== "ALL") url += `&exam_type=${encodeURIComponent(typeFilter)}`;

    const exams = await apiFetch(url);
    cachedExamTimetables = exams;

    if (!exams.length) {
      container.innerHTML = `
        <div class="notice" style="padding:22px;text-align:center">
          <p style="margin:0 0 10px;font-size:15px">No exam schedule entries found for <b>${esc(curDept)}</b> (Semester: ${esc(semFilter)}).</p>
          <button class="btn" onclick="openExamEntry()">+ Add First Exam Schedule</button>
        </div>
      `;
      return;
    }

    let html = `
      <div style="overflow-x:auto">
        <table class="table">
          <thead>
            <tr>
              <th>Exam Type</th>
              <th>Semester</th>
              <th>Subject & Code</th>
              <th>Date & Time</th>
              <th>Hall / Room</th>
              <th>Block</th>
              <th>Notes</th>
              <th style="min-width:140px">Actions</th>
            </tr>
          </thead>
          <tbody>
    `;

    exams.forEach(e => {
      const typeClass = getExamTypeClass(e.exam_type);
      html += `
        <tr>
          <td><span class="exam-type-pill ${typeClass}">${esc(e.exam_type)}</span></td>
          <td><b>Sem ${esc(e.sem || e.semester)}</b></td>
          <td>
            ${e.subject_code ? `<span class="exam-subject-code">${esc(e.subject_code)}</span>` : ""}
            <b>${esc(e.subject_name || e.subject)}</b>
          </td>
          <td>
            <div style="font-weight:700">📅 ${esc(e.exam_date || e.date)}</div>
            <div class="small muted">⏱️ ${esc(e.exam_time || e.time)}</div>
          </td>
          <td>
            <span class="room-pill">📍 Room ${esc(e.room)}</span>
          </td>
          <td>
            ${e.block ? `<span class="exam-block-badge">${esc(e.block)}</span>` : "—"}
          </td>
          <td><small class="muted">${esc(e.notes || "—")}</small></td>
          <td>
            <div style="display:flex;gap:4px;flex-wrap:wrap">
              <button class="btn" style="padding:4px 8px;font-size:11px" onclick="navigateToClass('${esc(e.room)}')">🧭</button>
              <button class="btn secondary" style="padding:4px 8px;font-size:11px" onclick="openExamEntry('${esc(e.id)}')">✏️ Edit</button>
              <button class="item-delete-btn" onclick="deleteExamEntry('${esc(e.id)}')">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;

  } catch (err) {
    container.innerHTML = `<div class="notice error">Failed to load exam timetable: ${esc(err.message)}</div>`;
  }
}

function openExamEntry(examId = null) {
  const modal = document.getElementById("examEntryModal");
  const title = document.getElementById("examModalTitle");
  const idEl = document.getElementById("examEntryId");
  const deptEl = document.getElementById("examEntryDept");
  const semEl = document.getElementById("examEntrySem");
  const typeEl = document.getElementById("examEntryType");
  const codeEl = document.getElementById("examEntrySubjectCode");
  const nameEl = document.getElementById("examEntrySubjectName");
  const dateEl = document.getElementById("examEntryDate");
  const timeEl = document.getElementById("examEntryTime");
  const roomEl = document.getElementById("examEntryRoom");
  const blockEl = document.getElementById("examEntryBlock");
  const notesEl = document.getElementById("examEntryNotes");
  const msgEl = document.getElementById("examEntryMsg");

  if (msgEl) { msgEl.className = "notice hidden"; msgEl.textContent = ""; }

  const curDept = currentAdminDept() || "Computer Engineering";
  if (deptEl) deptEl.value = curDept;

  if (examId) {
    const existing = cachedExamTimetables.find(x => String(x.id) === String(examId));
    if (title) title.textContent = "Edit Exam Schedule";
    if (idEl) idEl.value = examId;
    if (existing) {
      if (deptEl) deptEl.value = existing.department || curDept;
      if (semEl) semEl.value = existing.sem || existing.semester || "III";
      if (typeEl) typeEl.value = existing.exam_type || "GTU End-Sem Exam";
      if (codeEl) codeEl.value = existing.subject_code || "";
      if (nameEl) nameEl.value = existing.subject_name || existing.subject || "";
      if (dateEl) dateEl.value = existing.exam_date || existing.date || "";
      if (timeEl) timeEl.value = existing.exam_time || existing.time || "";
      if (roomEl) roomEl.value = existing.room || "";
      if (blockEl) blockEl.value = existing.block || "";
      if (notesEl) notesEl.value = existing.notes || "";
    }
  } else {
    if (title) title.textContent = "Add Exam Schedule";
    if (idEl) idEl.value = "";
    if (semEl) semEl.value = "III";
    if (typeEl) typeEl.value = "GTU End-Sem Exam";
    if (codeEl) codeEl.value = "";
    if (nameEl) nameEl.value = "";
    if (dateEl) dateEl.value = "";
    if (timeEl) timeEl.value = "10:30 AM - 01:00 PM";
    if (roomEl) roomEl.value = "";
    if (blockEl) blockEl.value = "";
    if (notesEl) notesEl.value = "";
  }

  if (modal) modal.classList.remove("hidden");
  setTimeout(() => { if (nameEl) nameEl.focus(); }, 120);
}

function closeExamEntryModal() {
  const modal = document.getElementById("examEntryModal");
  if (modal) modal.classList.add("hidden");
}

async function saveExamEntry() {
  const id = document.getElementById("examEntryId")?.value;
  const dept = document.getElementById("examEntryDept")?.value;
  const sem = document.getElementById("examEntrySem")?.value;
  const examType = document.getElementById("examEntryType")?.value;
  const subjectCode = document.getElementById("examEntrySubjectCode")?.value.trim();
  const subjectName = document.getElementById("examEntrySubjectName")?.value.trim();
  const date = document.getElementById("examEntryDate")?.value;
  const time = document.getElementById("examEntryTime")?.value.trim();
  const room = document.getElementById("examEntryRoom")?.value.trim();
  const block = document.getElementById("examEntryBlock")?.value.trim();
  const notes = document.getElementById("examEntryNotes")?.value.trim();
  const msgEl = document.getElementById("examEntryMsg");

  if (!dept || !sem || !subjectName || !date || !time || !room) {
    if (msgEl) {
      msgEl.textContent = "Please fill in all required fields (Department, Semester, Subject, Date, Time, Room).";
      msgEl.className = "notice error";
      msgEl.classList.remove("hidden");
    }
    return;
  }

  try {
    const payload = {
      department: dept,
      semester: sem,
      exam_type: examType,
      subject_code: subjectCode,
      subject_name: subjectName,
      exam_date: date,
      exam_time: time,
      room: room,
      block: block,
      notes: notes
    };

    if (id) {
      await apiFetch(`/exam-timetable/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload)
      });
    } else {
      await apiFetch("/exam-timetable", {
        method: "POST",
        body: JSON.stringify(payload)
      });
    }

    closeExamEntryModal();
    renderAdminExams();
    alert("✓ Exam schedule entry saved successfully.");

  } catch (err) {
    if (msgEl) {
      msgEl.textContent = err.message || "Failed to save exam schedule.";
      msgEl.className = "notice error";
      msgEl.classList.remove("hidden");
    }
  }
}

async function deleteExamEntry(id) {
  if (!confirm("Are you sure you want to delete this exam schedule entry?")) return;

  try {
    await apiFetch(`/exam-timetable/${id}`, { method: "DELETE" });
    renderAdminExams();
  } catch (err) {
    alert("Failed to delete exam entry: " + err.message);
  }
}

// 2. STUDENT EXAM TIMETABLE
async function loadStudentExams() {
  const container = document.getElementById("studentExamsList");
  if (!container || !currentStudent) return;

  container.innerHTML = `<div class="notice">Loading your upcoming exams...</div>`;

  try {
    const dept = currentStudent.dept || currentStudent.department;
    const sem = currentStudent.sem || currentStudent.semester;
    const exams = await apiFetch(`/exam-timetable?department=${encodeURIComponent(dept)}&semester=${encodeURIComponent(sem)}`);

    if (!exams.length) {
      container.innerHTML = `
        <div class="notice" style="padding:20px;text-align:center">
          <p style="margin:0;font-size:14.5px">No exams currently scheduled for <b>${esc(dept)} — Semester ${esc(sem)}</b>.</p>
        </div>
      `;
      return;
    }

    let html = `
      <div style="overflow-x:auto">
        <table class="table">
          <thead>
            <tr>
              <th>Exam Type</th>
              <th>Subject</th>
              <th>Exam Date & Time</th>
              <th>Allocated Hall / Room</th>
              <th>Seat Block</th>
              <th>Important Instructions</th>
              <th>Wayfinding</th>
            </tr>
          </thead>
          <tbody>
    `;

    exams.forEach(e => {
      const typeClass = getExamTypeClass(e.exam_type);
      html += `
        <tr>
          <td><span class="exam-type-pill ${typeClass}">${esc(e.exam_type)}</span></td>
          <td>
            ${e.subject_code ? `<span class="exam-subject-code">${esc(e.subject_code)}</span>` : ""}
            <b>${esc(e.subject_name || e.subject)}</b>
          </td>
          <td>
            <div style="font-weight:700">📅 ${esc(e.exam_date || e.date)}</div>
            <div class="small muted">⏱️ ${esc(e.exam_time || e.time)}</div>
          </td>
          <td>
            <span class="room-pill">📍 Room ${esc(e.room)}</span>
          </td>
          <td>
            ${e.block ? `<span class="exam-block-badge">${esc(e.block)}</span>` : "—"}
          </td>
          <td><small class="muted">${esc(e.notes || "Bring GTU Hall Ticket & College ID")}</small></td>
          <td>
            <button class="btn" style="padding:5px 10px;font-size:12px;white-space:nowrap" onclick="navigateToClass('${esc(e.room)}')">🧭 Navigate</button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;

  } catch (err) {
    container.innerHTML = `<div class="notice error">Failed to load exam timetable: ${esc(err.message)}</div>`;
  }
}

// 3. FACULTY EXAM TIMETABLE
async function loadFacultyExams() {
  const container = document.getElementById("facultyExamsList");
  if (!container || !currentFaculty) return;

  container.innerHTML = `<div class="notice">Loading departmental exam timetable...</div>`;

  try {
    const dept = currentFaculty.dept || currentFaculty.department;
    const exams = await apiFetch(`/exam-timetable?department=${encodeURIComponent(dept)}`);

    if (!exams.length) {
      container.innerHTML = `
        <div class="notice" style="padding:20px;text-align:center">
          <p style="margin:0;font-size:14.5px">No upcoming exam sessions registered for <b>${esc(dept)}</b>.</p>
        </div>
      `;
      return;
    }

    let html = `
      <div style="overflow-x:auto">
        <table class="table">
          <thead>
            <tr>
              <th>Exam Type</th>
              <th>Semester</th>
              <th>Subject</th>
              <th>Date & Time</th>
              <th>Room / Exam Hall</th>
              <th>Block Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
    `;

    exams.forEach(e => {
      const typeClass = getExamTypeClass(e.exam_type);
      html += `
        <tr>
          <td><span class="exam-type-pill ${typeClass}">${esc(e.exam_type)}</span></td>
          <td><b>Sem ${esc(e.sem || e.semester)}</b></td>
          <td>
            ${e.subject_code ? `<span class="exam-subject-code">${esc(e.subject_code)}</span>` : ""}
            <b>${esc(e.subject_name || e.subject)}</b>
          </td>
          <td>
            <div style="font-weight:700">📅 ${esc(e.exam_date || e.date)}</div>
            <div class="small muted">⏱️ ${esc(e.exam_time || e.time)}</div>
          </td>
          <td>
            <span class="room-pill">📍 Room ${esc(e.room)}</span>
          </td>
          <td>${e.block ? `<span class="exam-block-badge">${esc(e.block)}</span>` : "—"}</td>
          <td>
            <button class="btn" style="padding:5px 10px;font-size:12px" onclick="navigateToClass('${esc(e.room)}')">🧭 Navigate</button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;

  } catch (err) {
    container.innerHTML = `<div class="notice error">Failed to load exam timetable: ${esc(err.message)}</div>`;
  }
}

// 4. PUBLIC COLLEGE EXAMS TIMETABLE VIEW
function switchPublicTimetableView(view) {
  const btnClass = document.getElementById("ttViewBtn_class");
  const btnExam = document.getElementById("ttViewBtn_exam");
  const viewClass = document.getElementById("publicClassRoutineView");
  const viewExam = document.getElementById("publicExamScheduleView");

  if (btnClass) btnClass.classList.toggle("active", view === "class");
  if (btnExam) btnExam.classList.toggle("active", view === "exam");

  if (viewClass) viewClass.classList.toggle("hidden", view !== "class");
  if (viewExam) viewExam.classList.toggle("hidden", view !== "exam");

  if (view === "exam") {
    renderPublicExams();
  } else {
    renderPublicTimetable();
  }
}

async function renderPublicExams() {
  const container = document.getElementById("publicExamsContainer");
  if (!container) return;

  const dept = document.getElementById("fExamDept")?.value || "ALL";
  const sem = document.getElementById("fExamSem")?.value || "ALL";
  const type = document.getElementById("fExamType")?.value || "ALL";
  const search = (document.getElementById("fExamSearch")?.value || "").toLowerCase().trim();

  container.innerHTML = `<div class="notice">Fetching exam timetables...</div>`;

  try {
    let url = "/exam-timetable?";
    if (dept !== "ALL") url += `department=${encodeURIComponent(dept)}&`;
    if (sem !== "ALL") url += `semester=${encodeURIComponent(sem)}&`;
    if (type !== "ALL") url += `exam_type=${encodeURIComponent(type)}&`;

    let exams = await apiFetch(url);

    if (search) {
      exams = exams.filter(e =>
        (e.subject_name || "").toLowerCase().includes(search) ||
        (e.subject_code || "").toLowerCase().includes(search) ||
        (e.room || "").toLowerCase().includes(search) ||
        (e.department || "").toLowerCase().includes(search)
      );
    }

    if (!exams.length) {
      container.innerHTML = `<div class="notice" style="padding:22px;text-align:center">No exam schedules found matching the selected filters.</div>`;
      return;
    }

    let html = `
      <div style="overflow-x:auto">
        <table class="table">
          <thead>
            <tr>
              <th>Exam Type</th>
              <th>Department</th>
              <th>Sem</th>
              <th>Subject</th>
              <th>Date & Time</th>
              <th>Hall / Room</th>
              <th>Block Details</th>
              <th>Wayfinding</th>
            </tr>
          </thead>
          <tbody>
    `;

    exams.forEach(e => {
      const typeClass = getExamTypeClass(e.exam_type);
      html += `
        <tr>
          <td><span class="exam-type-pill ${typeClass}">${esc(e.exam_type)}</span></td>
          <td>${esc(e.dept || e.department)}</td>
          <td><b>Sem ${esc(e.sem || e.semester)}</b></td>
          <td>
            ${e.subject_code ? `<span class="exam-subject-code">${esc(e.subject_code)}</span>` : ""}
            <b>${esc(e.subject_name || e.subject)}</b>
          </td>
          <td>
            <div style="font-weight:700">📅 ${esc(e.exam_date || e.date)}</div>
            <div class="small muted">⏱️ ${esc(e.exam_time || e.time)}</div>
          </td>
          <td><span class="room-pill">📍 Room ${esc(e.room)}</span></td>
          <td>${e.block ? `<span class="exam-block-badge">${esc(e.block)}</span>` : "—"}</td>
          <td>
            <button class="btn" style="padding:5px 10px;font-size:12px" onclick="navigateToClass('${esc(e.room)}')">🧭 Navigate</button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;

  } catch (err) {
    container.innerHTML = `<div class="notice error">Failed to load exam timetable: ${esc(err.message)}</div>`;
  }
}


// =========================
// NOTES & SUBMISSIONS
// =========================


function saveStudentItem(category) {
  if (!currentStudent) return;

  const isNote = category === "note";
  const subEl = document.getElementById(isNote ? "noteSubject" : "submissionSubject");
  const textEl = document.getElementById(isNote ? "noteText" : "submissionText");
  const typeEl = document.getElementById(isNote ? "noteType" : "submissionType");
  const photoEl = document.getElementById(isNote ? "notePhoto" : "submissionPhoto");

  const dueEl = document.getElementById("submissionDueDate");
  const subDateEl = document.getElementById("submissionDate");
  const checkEl = document.getElementById("submissionCheckDate");

  const subject = subEl ? subEl.value.trim() : "";
  const text = textEl ? textEl.value.trim() : "";
  if (!subject || !text) return alert("Please fill in subject and details.");

  const save = async (photo = "") => {
    const item = {
      id: uid(),
      student_id: currentStudent.id,
      ownerId: currentStudent.id,
      category,
      subject,
      title: subject,
      type: typeEl ? typeEl.value : (isNote ? "Class note" : "Assignment"),
      text,
      description: text,
      dueDate: dueEl?.value || "",
      submissionDate: subDateEl?.value || "",
      checkDate: checkEl?.value || "",
      photo,
      dept: currentStudent.dept,
      created: new Date().toISOString()
    };

    privateNotes.unshift(item);
    localStorage.setItem(privateNotesKey, JSON.stringify(privateNotes));

    try {
      if (isNote) {
        await apiFetch("/notes", { method: "POST", body: JSON.stringify(item) });
      } else {
        await apiFetch("/submissions", { method: "POST", body: JSON.stringify(item) });
      }
    } catch (e) {}

    if (subEl) subEl.value = "";
    if (textEl) textEl.value = "";
    if (photoEl) photoEl.value = "";
    if (dueEl) dueEl.value = "";
    if (subDateEl) subDateEl.value = "";
    if (checkEl) checkEl.value = "";

    updateStudentBadges();
    isNote ? renderPrivateNotes() : renderPrivateSubmissions();
    alert(isNote ? "Note saved successfully!" : "Submission saved successfully!");
  };

  const file = photoEl?.files?.[0];
  if (!file) return save();
  if (!file.type.startsWith("image/")) return alert("Please upload an image file.");
  if (file.size > 1500000) return alert("Image is too large. Please select an image under 1.5MB.");

  const reader = new FileReader();
  reader.onload = () => save(reader.result);
  reader.readAsDataURL(file);
}

async function deleteStudentItem(id, category) {
  if (!confirm(`Are you sure you want to permanently delete this ${category}?`)) return;

  privateNotes = privateNotes.filter(n => n.id !== id && String(n.id) !== String(id));
  localStorage.setItem(privateNotesKey, JSON.stringify(privateNotes));

  try {
    const endpoint = (category === "note") ? `/notes/${id}` : `/submissions/${id}`;
    await apiFetch(endpoint, { method: "DELETE" });
  } catch (e) {}

  updateStudentBadges();
  if (category === "note") renderPrivateNotes();
  else renderPrivateSubmissions();
}

function renderPrivateNotes() {
  const box = document.getElementById("privateNotes");
  if (!box || !currentStudent) return;
  const mine = privateNotes.filter(n => (n.ownerId === currentStudent.id || n.student_id === currentStudent.id) && n.category === "note");
  updateStudentBadges();
  if (!mine.length) {
    box.innerHTML = '<div class="notice note-empty" style="margin-top:12px;padding:16px;text-align:center">📝 No private notes saved yet. Use the form above to add your first note!</div>';
    return;
  }
  box.innerHTML = privateCards(mine, "note");
}

function renderPrivateSubmissions() {
  const box = document.getElementById("privateSubmissions");
  if (!box || !currentStudent) return;
  const mine = privateNotes.filter(n => (n.ownerId === currentStudent.id || n.student_id === currentStudent.id) && n.category === "submission");
  updateStudentBadges();
  if (!mine.length) {
    box.innerHTML = '<div class="notice note-empty" style="margin-top:12px;padding:16px;text-align:center">📋 No submissions saved yet. Use the form above to track your assignment or lab record deadlines!</div>';
    return;
  }
  box.innerHTML = privateCards(mine, "submission");
}

function privateCards(items, kind) {
  return `
    <div class="note-list" style="margin-top:14px">
      ${items.map(n => `
        <article class="note-card" style="margin-bottom:12px">
          <div class="topline" style="margin-bottom:6px">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <span class="item-badge-pill">${esc(n.type || kind)}</span>
              <h3 style="margin:0;font-size:16px">${esc(n.subject || n.title)}</h3>
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span class="small muted">${new Date(n.created).toLocaleDateString()}</span>
              <button class="item-delete-btn" onclick="deleteStudentItem('${esc(n.id)}', '${kind}')" title="Delete this ${kind}">🗑️ Delete</button>
            </div>
          </div>
          <p style="margin:8px 0;line-height:1.5;color:#334155">${esc(n.text || n.description).replace(/\n/g, "<br>")}</p>
          ${n.photo ? `<div style="margin:8px 0"><img class="note-photo" src="${n.photo}" alt="Attached file" style="max-height:180px;border-radius:8px;border:1px solid #cbd5e1"></div>` : ""}
          ${kind === "submission" ? `
            <div class="note-dates" style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap;font-size:12px">
              ${n.dueDate ? `<span style="background:#fee2e2;color:#991b1b;padding:3px 8px;border-radius:6px;font-weight:600">📅 Due: <b>${esc(n.dueDate)}</b></span>` : ""}
              ${n.submissionDate ? `<span style="background:#dcfce7;color:#166534;padding:3px 8px;border-radius:6px;font-weight:600">✅ Submitted: <b>${esc(n.submissionDate)}</b></span>` : ""}
              ${n.checkDate ? `<span style="background:#fef9c3;color:#854d0e;padding:3px 8px;border-radius:6px;font-weight:600">🔍 Check: <b>${esc(n.checkDate)}</b></span>` : ""}
            </div>
          ` : ""}
        </article>
      `).join("")}
    </div>
  `;
}

// =========================
// PUBLIC TIMETABLE & FILTERS
// =========================

function fillBatch(deptId, batchId) {
  const dept = document.getElementById(deptId)?.value;
  const batchEl = document.getElementById(batchId);
  if (!batchEl) return;
  batchEl.innerHTML = '<option value="">Select</option>';
  if (dept && BATCHES[dept]) {
    BATCHES[dept].forEach(b => {
      const opt = document.createElement("option");
      opt.value = b;
      opt.textContent = b;
      batchEl.appendChild(opt);
    });
  }
}

function fillFilterBatch() {
  const d = document.getElementById("fDept")?.value || "ALL";
  const b = document.getElementById("fBatch");
  if (!b) return;
  b.innerHTML = '<option value="ALL">All Batches</option>';
  if (d === "ALL") {
    ["CP1", "CP2", "CP3", "E1", "E2", "C1", "C2", "C3", "M1", "M2", "M3"].forEach(x => {
      const opt = document.createElement("option");
      opt.value = x;
      opt.textContent = x;
      b.appendChild(opt);
    });
  } else if (BATCHES[d]) {
    BATCHES[d].forEach(x => {
      const opt = document.createElement("option");
      opt.value = x;
      opt.textContent = x;
      b.appendChild(opt);
    });
  }
}

function renderPublicTimetable() {
  const fDept = document.getElementById("fDept");
  const fSem = document.getElementById("fSem");
  const fBatch = document.getElementById("fBatch");
  const fDay = document.getElementById("fDay");
  const fSearch = document.getElementById("fSearch");

  const d = fDept ? fDept.value : "ALL";
  const s = fSem ? fSem.value : "ALL";
  const b = fBatch ? fBatch.value : "ALL";
  const day = fDay ? fDay.value : "ALL";
  const q = fSearch ? fSearch.value.toLowerCase().trim() : "";

  let arr = entries.filter(e => {
    const dMatches = (d === "ALL" || e.dept === d || e.department === d);
    const sMatches = (s === "ALL" || e.sem === s || e.semester === s);
    const bMatches = (b === "ALL" || e.batch === "ALL" || e.batch === b);
    const dayMatches = (day === "ALL" || e.day === day);
    const qMatches = !q || JSON.stringify(e).toLowerCase().includes(q);
    return dMatches && sMatches && bMatches && dayMatches && qMatches;
  });

  const target = document.getElementById("publicTT");
  if (target) {
    target.innerHTML = renderTable(arr, "College Timetable");
  }
}

function renderTable(arr, title) {
  if (!arr.length) {
    return `<div class="notice">No classes found matching the selected filters.</div>`;
  }

  let html = `
    <div class="tablewrap">
      <table class="tt">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Dept</th>
            <th>Sem</th>
            <th>Batch</th>
            <th>Subject</th>
            <th>Room</th>
            <th>Faculty</th>
            <th>Wayfinding</th>
          </tr>
        </thead>
        <tbody>
  `;

  arr.slice().sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day)).forEach(e => {
    html += `
      <tr>
        <td class="day">${esc(e.day)}</td>
        <td class="period">${esc(mergeFinalPeriod(e.time))}</td>
        <td>${esc(e.dept || e.department)}</td>
        <td>${esc(e.sem || e.semester)}</td>
        <td><span class="badge">${esc(e.batch)}</span></td>
        <td><b>${esc(e.subject)}</b>${e.note ? `<br><small class="muted">${esc(e.note)}</small>` : ""}</td>
        <td>${e.room ? `<span class="room-pill">📍 ${esc(e.room)}</span>` : "—"}</td>
        <td>${esc(e.faculty || "—")}</td>
        <td>
          ${e.room ? `
            <div style="display:flex;gap:4px;flex-wrap:wrap">
              <button type="button" class="btn" style="padding:4px 8px;font-size:11px" onclick="navigateToClass('${esc(e.room)}')">🧭 Navigate</button>
              <button type="button" class="btn secondary" style="padding:4px 7px;font-size:11px" onclick="previewRoomMap('${esc(e.room)}')">3D Map</button>
            </div>
          ` : "—"}
        </td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  return html;
}

// ========================================================
// CAMPUS GPS & GOOGLE MAPS NAVIGATION ENGINE
// ========================================================

const CAMPUS_WAYPOINTS = {
  gate: { name: "Main Campus Gate (Palanpur Highway Entry)", x: 123, y: 800, block: "gate", desc: "Main Campus Entrance on Palanpur-Highway Road (SH-41)" },
  live: { name: "📍 My Live GPS Location (Entry)", x: 123, y: 800, block: "gate", desc: "Real-time detected GPS coordinates" },
  admin: { name: "Building 1: Administration Department", x: 102, y: 602, block: "admin", bldg: 1, desc: "Principal Office, Exam Cell & Student Section" },
  library: { name: "Building 2: Central Library", x: 150, y: 471, block: "library", bldg: 2, desc: "Reading Hall, Digital Library & Reference Wing" },
  canteen: { name: "Building 3: College Canteen & Club", x: 120, y: 301, block: "canteen", bldg: 3, desc: "Student Dining Pavilion & Cafeteria" },
  electrical: { name: "Building 4: Electrical Engineering Block", x: 132, y: 111, block: "electrical", bldg: 4, desc: "Block 4000 • High Voltage & Power Systems" },
  mechanical: { name: "Building 5: Mechanical Engineering Block", x: 344, y: 228, block: "mechanical", bldg: 5, desc: "Block 5000 • CAD/CAM, Thermal & RAC Labs" },
  workshop: { name: "Building 6: College Workshop", x: 577, y: 359, block: "workshop", bldg: 6, desc: "Carpentry, Welding, Machine & Fitting Shops (Single Floor)" },
  civil: { name: "Building 7: Civil Engineering Block", x: 498, y: 478, block: "civil", bldg: 7, desc: "Block 7000 • Structural, Soil & Concrete Labs" },
  computer: { name: "Building 8: Computer Engineering Block", x: 337, y: 667, block: "computer", bldg: 8, desc: "Block 8000 • Software Labs & Department Office" },
  lawn: { name: "Central Campus Lawn", x: 328, y: 427, block: "lawn", desc: "Central Quadrangle Lawn & Garden" }
};

let currentSelectedFloor = 0; // 0 = Ground Floor, 1 = First Floor

// 2nd Digit Floor Detection and Room Input Parser
function parseRoomInput(val) {
  if (!val) return null;
  const str = String(val).trim();

  // Exact room key match in GECP_ROOMS
  if (GECP_ROOMS[str]) return GECP_ROOMS[str];

  // 4 digit pattern: e.g. 5104, 8006, 4010, 7109, 1001, 6001
  const m = str.match(/\b([1-8])([0-1])(\d{2})\b/);
  if (m) {
    const bldgNum = parseInt(m[1], 10);
    const floorDigit = parseInt(m[2], 10); // 0 = Ground Floor, 1 = First Floor
    const roomKey = m[0];
    if (GECP_ROOMS[roomKey]) return GECP_ROOMS[roomKey];

    const bldgInfo = CAMPUS_BUILDINGS[bldgNum];
    const isWorkshop = (bldgNum === 6);
    const floor = isWorkshop ? 0 : floorDigit;
    return {
      id: roomKey,
      bldg: bldgNum,
      floor: floor,
      floorName: floor === 0 ? "Ground Floor" : "First Floor",
      name: `Room ${roomKey}`,
      bldgName: bldgInfo ? bldgInfo.name : `Building ${bldgNum}`,
      file: [4, 5, 7, 8].includes(bldgNum) ? `maps/floor-${bldgNum}-${floor}.jpg` : "maps/gecp-aerial-3d.webp",
      x: 580,
      y: 770
    };
  }

  // Campus building key or name match
  const lower = str.toLowerCase();
  for (const bId in CAMPUS_BUILDINGS) {
    const b = CAMPUS_BUILDINGS[bId];
    if (b.type === lower || lower.includes(b.type) || lower.includes(b.shortName.toLowerCase()) || lower.includes(b.series)) {
      return {
        id: b.type,
        bldg: b.id,
        floor: 0,
        floorName: "Ground Floor",
        name: b.name,
        bldgName: b.name,
        isBuildingOnly: true,
        file: [4, 5, 7, 8].includes(b.id) ? `maps/floor-${b.id}-0.jpg` : "maps/gecp-aerial-3d.webp",
        x: b.roadX,
        y: b.roadY
      };
    }
  }

  if (CAMPUS_WAYPOINTS[lower]) {
    const wp = CAMPUS_WAYPOINTS[lower];
    return {
      id: lower,
      bldg: wp.bldg || 5,
      floor: 0,
      floorName: "Ground Floor",
      name: wp.name,
      bldgName: wp.name,
      isBuildingOnly: true,
      file: "maps/gecp-aerial-3d.webp",
      x: wp.x,
      y: wp.y
    };
  }

  return null;
}

function getRoomInfo(roomKey) {
  const clean = String(roomKey || "").trim();
  if (GECP_ROOMS[clean]) return GECP_ROOMS[clean];

  const parsed = parseRoomInput(clean);
  if (parsed) return parsed;

  if (CAMPUS_WAYPOINTS[clean.toLowerCase()]) {
    const b = CAMPUS_WAYPOINTS[clean.toLowerCase()];
    return { id: clean, name: b.name, block: b.block, bldg: b.bldg || 5, floor: 0, floorName: "Ground Floor", file: "maps/gecp-aerial-3d.webp", x: b.x, y: b.y };
  }

  return { id: clean, name: `Room ${clean}`, bldg: 5, floor: 1, floorName: "First Floor", file: "maps/floor-5-1.webp", x: 580, y: 770 };
}

// ========================================================
// GRAPH-BASED CAMPUS ROAD NETWORK (ROD-BY-ROD WAYFINDING)
// ========================================================
const CAMPUS_ROAD_NODES = {
  gate: { id: "gate", x: 123, y: 800, label: "Main Campus Gate (SH-41 Highway Entry)" },
  gate_inner: { id: "gate_inner", x: 150, y: 795, label: "Main Campus Boulevard" },
  security_post: { id: "security_post", x: 195, y: 765, label: "Security Post & Entry Lane" },
  south_junction: { id: "south_junction", x: 240, y: 710, label: "South Campus Junction" },

  comp_lane_start: { id: "comp_lane_start", x: 285, y: 705, label: "Computer Wing Approach Road" },
  comp_lane_mid: { id: "comp_lane_mid", x: 315, y: 688, label: "Computer Block Boulevard" },
  building_8: { id: "building_8", x: 337, y: 667, label: "Building 8: Computer Engineering Entrance" },

  se_ring_1: { id: "se_ring_1", x: 385, y: 650, label: "East Ring Road South" },
  se_ring_2: { id: "se_ring_2", x: 445, y: 605, label: "East Ring Road Mid" },
  se_ring_3: { id: "se_ring_3", x: 480, y: 540, label: "Civil South Approach Junction" },

  central_ave_1: { id: "central_ave_1", x: 240, y: 665, label: "Central Avenue South" },
  admin_junction: { id: "admin_junction", x: 240, y: 620, label: "Administration Access Junction" },
  admin_walk: { id: "admin_walk", x: 160, y: 608, label: "Admin Porch & Walkway" },
  building_1: { id: "building_1", x: 102, y: 602, label: "Building 1: Administration Block Entrance" },

  central_ave_2: { id: "central_ave_2", x: 240, y: 570, label: "Central Avenue (Past Lawn)" },
  library_junction: { id: "library_junction", x: 240, y: 520, label: "Library Crossing Junction" },
  library_walk: { id: "library_walk", x: 190, y: 480, label: "Library Walkway" },
  building_2: { id: "building_2", x: 150, y: 471, label: "Building 2: Central Library Entrance" },

  central_ave_3: { id: "central_ave_3", x: 240, y: 440, label: "Central Avenue (North Section)" },
  canteen_junction: { id: "canteen_junction", x: 240, y: 360, label: "Canteen & Sports Wing Junction" },
  canteen_walk: { id: "canteen_walk", x: 170, y: 320, label: "Canteen Walkway" },
  building_3: { id: "building_3", x: 120, y: 301, label: "Building 3: College Canteen & Club" },

  quad_east_1: { id: "quad_east_1", x: 275, y: 395, label: "Central Quadrangle East Road" },
  quad_east_2: { id: "quad_east_2", x: 315, y: 425, label: "Central Ring Road East" },
  east_crossroads: { id: "east_crossroads", x: 360, y: 450, label: "Civil & Workshop Approach Crossroads" },

  civil_lane_1: { id: "civil_lane_1", x: 420, y: 465, label: "Civil Approach Road" },
  civil_lane_2: { id: "civil_lane_2", x: 460, y: 472, label: "Civil Department Foyer" },
  building_7: { id: "building_7", x: 498, y: 478, label: "Building 7: Civil Engineering Entrance" },

  workshop_lane_1: { id: "workshop_lane_1", x: 440, y: 440, label: "Workshop Access Lane West" },
  workshop_lane_2: { id: "workshop_lane_2", x: 490, y: 420, label: "Workshop Access Lane Central" },
  workshop_lane_3: { id: "workshop_lane_3", x: 535, y: 390, label: "Workshop Loading Bay" },
  building_6: { id: "building_6", x: 577, y: 359, label: "Building 6: College Workshop Entrance (Single Floor)" },

  north_ave_1: { id: "north_ave_1", x: 248, y: 295, label: "North Campus Boulevard" },
  north_junction: { id: "north_junction", x: 255, y: 230, label: "North Campus Circle Junction" },

  elec_lane_1: { id: "elec_lane_1", x: 215, y: 180, label: "Electrical Wing Approach Curve" },
  elec_lane_2: { id: "elec_lane_2", x: 175, y: 145, label: "Electrical Wing Avenue" },
  elec_lane_3: { id: "elec_lane_3", x: 150, y: 125, label: "Electrical Porch" },
  building_4: { id: "building_4", x: 132, y: 111, label: "Building 4: Electrical Engineering Entrance" },

  mech_lane_1: { id: "mech_lane_1", x: 295, y: 230, label: "Mechanical Wing Boulevard" },
  mech_lane_2: { id: "mech_lane_2", x: 325, y: 229, label: "Mechanical Department Walkway" },
  building_5: { id: "building_5", x: 344, y: 228, label: "Building 5: Mechanical Engineering Entrance" },

  ne_ring_1: { id: "ne_ring_1", x: 400, y: 245, label: "North Ring Road West" },
  ne_ring_2: { id: "ne_ring_2", x: 465, y: 275, label: "North Ring Road East" },
  ne_ring_3: { id: "ne_ring_3", x: 530, y: 315, label: "Workshop North Gate Approach" }
};

const CAMPUS_ROAD_EDGES = [
  ["gate", "gate_inner"],
  ["gate_inner", "security_post"],
  ["security_post", "south_junction"],

  ["south_junction", "comp_lane_start"],
  ["comp_lane_start", "comp_lane_mid"],
  ["comp_lane_mid", "building_8"],

  ["building_8", "se_ring_1"],
  ["se_ring_1", "se_ring_2"],
  ["se_ring_2", "se_ring_3"],
  ["se_ring_3", "building_7"],

  ["south_junction", "central_ave_1"],
  ["central_ave_1", "admin_junction"],

  ["admin_junction", "admin_walk"],
  ["admin_walk", "building_1"],

  ["admin_junction", "central_ave_2"],
  ["central_ave_2", "library_junction"],

  ["library_junction", "library_walk"],
  ["library_walk", "building_2"],

  ["library_junction", "central_ave_3"],
  ["central_ave_3", "canteen_junction"],

  ["canteen_junction", "canteen_walk"],
  ["canteen_walk", "building_3"],

  ["canteen_junction", "quad_east_1"],
  ["quad_east_1", "quad_east_2"],
  ["quad_east_2", "east_crossroads"],

  ["east_crossroads", "civil_lane_1"],
  ["civil_lane_1", "civil_lane_2"],
  ["civil_lane_2", "building_7"],

  ["east_crossroads", "workshop_lane_1"],
  ["workshop_lane_1", "workshop_lane_2"],
  ["workshop_lane_2", "workshop_lane_3"],
  ["workshop_lane_3", "building_6"],

  ["building_7", "workshop_lane_2"],

  ["canteen_junction", "north_ave_1"],
  ["north_ave_1", "north_junction"],

  ["north_junction", "elec_lane_1"],
  ["elec_lane_1", "elec_lane_2"],
  ["elec_lane_2", "elec_lane_3"],
  ["elec_lane_3", "building_4"],

  ["north_junction", "mech_lane_1"],
  ["mech_lane_1", "mech_lane_2"],
  ["mech_lane_2", "building_5"],

  ["building_5", "ne_ring_1"],
  ["ne_ring_1", "ne_ring_2"],
  ["ne_ring_2", "ne_ring_3"],
  ["ne_ring_3", "building_6"]
];

function resolveRoadNodeKey(key) {
  if (!key) return "gate";
  const s = String(key).toLowerCase().trim();
  if (s === "gate" || s === "live") return "gate";
  if (s === "admin" || s === "1" || s === "1000") return "building_1";
  if (s === "library" || s === "2" || s === "2000") return "building_2";
  if (s === "canteen" || s === "3" || s === "3000") return "building_3";
  if (s === "electrical" || s === "4" || s === "4000") return "building_4";
  if (s === "mechanical" || s === "5" || s === "5000") return "building_5";
  if (s === "workshop" || s === "6" || s === "6000") return "building_6";
  if (s === "civil" || s === "7" || s === "7000") return "building_7";
  if (s === "computer" || s === "8" || s === "8000") return "building_8";
  if (CAMPUS_ROAD_NODES[s]) return s;
  return "gate";
}

// Road network pathing along actual asphalt campus roads using Dijkstra shortest path
function getCampusRoadPath(startKey, destBlockKey) {
  const startNodeKey = resolveRoadNodeKey(startKey);
  const destNodeKey = resolveRoadNodeKey(destBlockKey);

  // Build graph adjacency map with euclidean weights
  const adj = {};
  for (const k in CAMPUS_ROAD_NODES) adj[k] = [];
  CAMPUS_ROAD_EDGES.forEach(([u, v]) => {
    if (CAMPUS_ROAD_NODES[u] && CAMPUS_ROAD_NODES[v]) {
      const p1 = CAMPUS_ROAD_NODES[u];
      const p2 = CAMPUS_ROAD_NODES[v];
      const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      adj[u].push({ node: v, weight: d });
      adj[v].push({ node: u, weight: d });
    }
  });

  const distances = {};
  const previous = {};
  const unvisited = new Set(Object.keys(CAMPUS_ROAD_NODES));

  for (const k in CAMPUS_ROAD_NODES) {
    distances[k] = Infinity;
  }
  distances[startNodeKey] = 0;

  while (unvisited.size > 0) {
    let curr = null;
    let minD = Infinity;
    for (const node of unvisited) {
      if (distances[node] < minD) {
        minD = distances[node];
        curr = node;
      }
    }

    if (!curr || minD === Infinity || curr === destNodeKey) break;
    unvisited.delete(curr);

    for (const neighbor of adj[curr] || []) {
      if (!unvisited.has(neighbor.node)) continue;
      const alt = distances[curr] + neighbor.weight;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        previous[neighbor.node] = curr;
      }
    }
  }

  const pathKeys = [];
  let step = destNodeKey;
  while (step) {
    pathKeys.unshift(step);
    step = previous[step];
  }

  if (pathKeys.length <= 1 && startNodeKey !== destNodeKey) {
    return [
      CAMPUS_ROAD_NODES[startNodeKey] || CAMPUS_ROAD_NODES.gate,
      CAMPUS_ROAD_NODES[destNodeKey] || CAMPUS_ROAD_NODES.building_8
    ];
  }

  return pathKeys.map(k => ({
    x: CAMPUS_ROAD_NODES[k].x,
    y: CAMPUS_ROAD_NODES[k].y,
    label: CAMPUS_ROAD_NODES[k].label
  }));
}


// Generate architecturally precise indoor corridor path to room door
function getRoomIndoorCorridorPath(roomInfo) {
  const isFloor1 = (roomInfo.floor === 1);
  const targetX = roomInfo.x || 580;
  const targetY = roomInfo.y || 770;
  const path = [];

  if (!isFloor1) {
    // GROUND FLOOR
    path.push({ x: 500, y: 940, label: "Department Main Entrance (Ground Floor)" });
    path.push({ x: 500, y: 850, label: "Central Foyer & Information Board" });

    if (targetY > 800 && targetX > 500) {
      // Front Office / Cabin (East)
      path.push({ x: targetX, y: 850, label: "Front Admin Hallway" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    } else if (targetY > 800 && targetX <= 500) {
      // Seminar Hall (West)
      path.push({ x: 380, y: 850, label: "Seminar Hall Approach" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    } else if (targetX > 500 && targetY <= 800) {
      // East Corridor (Classrooms)
      path.push({ x: 620, y: 850, label: "East Wing Ground Corridor" });
      path.push({ x: 620, y: targetY, label: "Classroom Corridor Walkway" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    } else if (targetX < 500 && targetY <= 800) {
      // West Corridor (Labs)
      path.push({ x: 380, y: 850, label: "West Wing Ground Corridor" });
      path.push({ x: 380, y: targetY, label: "Laboratory Corridor Walkway" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    } else {
      // North Wing (Central Lab)
      path.push({ x: 500, y: 550, label: "North Central Corridor" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    }
  } else {
    // FIRST FLOOR
    path.push({ x: 500, y: 800, label: "Central Stairs (Arrival on First Floor)" });

    if (targetY > 800) {
      // Front Faculty / Library
      path.push({ x: 500, y: 850, label: "First Floor Front Corridor" });
      path.push({ x: targetX, y: 850, label: "Front Wing Walkway" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    } else if (targetX > 500 && targetY <= 800) {
      // East Wing Classrooms
      path.push({ x: 620, y: 800, label: "East Wing First Floor Corridor" });
      path.push({ x: 620, y: targetY, label: "First Floor Classroom Hallway" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    } else if (targetX < 500 && targetY <= 800) {
      // West Wing Labs & Computer Centers
      path.push({ x: 380, y: 800, label: "West Wing First Floor Corridor" });
      path.push({ x: 380, y: targetY, label: "Laboratory Hallway" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    } else {
      // North Wing Drawing Hall
      path.push({ x: 500, y: 550, label: "North Wing Central Corridor" });
      path.push({ x: targetX, y: targetY, label: `Door: Room ${roomInfo.id} (${roomInfo.name})` });
    }
  }

  return path;
}

// Calculate and render campus route
function calculateCampusRoute() {
  const startKey = document.getElementById("routeStart")?.value || "gate";
  const destKey = document.getElementById("routeDest")?.value || "5104";

  const destInfo = getRoomInfo(destKey);
  const startWp = CAMPUS_WAYPOINTS[startKey] || CAMPUS_WAYPOINTS["gate"];
  const bldgNum = destInfo.bldg || 5;
  const bldgInfo = CAMPUS_BUILDINGS[bldgNum] || CAMPUS_BUILDINGS[5];
  const bldgType = bldgInfo.type || "mechanical";
  const destBlockWp = CAMPUS_WAYPOINTS[bldgType] || CAMPUS_WAYPOINTS["mechanical"];

  // Outdoor path calculation on 3D aerial map along actual roads
  const outdoorRoute = getCampusRoadPath(startKey, bldgType);

  // Indoor corridor path
  const indoorRoute = getRoomIndoorCorridorPath(destInfo);

  // Set current selected floor based on room
  currentSelectedFloor = destInfo.floor || 0;
  const btn0 = document.getElementById("btnFloor0");
  const btn1 = document.getElementById("btnFloor1");
  if (btn0) btn0.classList.toggle("active", currentSelectedFloor === 0);
  if (btn1) {
    btn1.classList.toggle("active", currentSelectedFloor === 1);
    btn1.style.display = (bldgNum === 6) ? "none" : ""; // Workshop is 1 floor only
  }

  const mapImg = document.getElementById("navMapImg");
  const svgOverlay = document.getElementById("navSvgOverlay");

  const hasIndoor = [4, 5, 7, 8].includes(bldgNum);

  if (currentMapMode === "floorplan" && hasIndoor) {
    // Indoor Floor Plan Mode
    if (mapImg) mapImg.src = `maps/floor-${bldgNum}-${currentSelectedFloor}.jpg`;
    if (svgOverlay) svgOverlay.setAttribute("viewBox", "0 0 1000 1000");
    currentRouteWaypoints = indoorRoute;
  } else {
    // Outdoor Campus Road Map Mode
    if (mapImg) mapImg.src = "maps/gecp-aerial-3d.webp";
    if (svgOverlay) svgOverlay.setAttribute("viewBox", "0 0 682 1024");
    currentRouteWaypoints = outdoorRoute;
  }

  // Calculate distance & time
  const dist = (currentMapMode === "satellite" || !hasIndoor) ? Math.round(outdoorRoute.length * 48) : 55;
  const time = Math.max(1, Math.round(dist / 75));

  const dEl = document.getElementById("routeDistance");
  const tEl = document.getElementById("routeTime");
  const bEl = document.getElementById("routeFloorBadge");
  const titleEl = document.getElementById("navBottomTitle");
  const descEl = document.getElementById("navBottomDesc");

  if (dEl) dEl.textContent = `🚶 ~${dist} meters`;
  if (tEl) tEl.textContent = `⏱️ ${time} min walk`;
  if (bEl) {
    if (bldgNum === 6) {
      bEl.textContent = "🔧 Single Floor Only";
    } else {
      bEl.textContent = (currentMapMode === "satellite") ? "Campus Road Route" : (destInfo.floorName || "Floor Plan");
    }
  }

  if (titleEl) {
    titleEl.textContent = `Destination: ${destInfo.name} (${destInfo.id})`;
  }
  if (descEl) {
    if (hasIndoor) {
      descEl.textContent = `${bldgInfo.name} • ${destInfo.floorName} (Floor ${destInfo.floor}) • Door-to-Door Wayfinding Active`;
    } else {
      descEl.textContent = `${bldgInfo.name} • ${destInfo.floorName} (Floor ${destInfo.floor}) • Campus Exterior Navigation Active (Interior blueprint pending)`;
    }
  }

  // Turn-by-turn guidance steps
  const steps = [];
  if (currentMapMode === "satellite" || !hasIndoor) {
    outdoorRoute.forEach((wp, idx) => {
      if (idx === 0) {
        steps.push({ icon: "🟢", text: `Start from <b>${esc(wp.label)}</b>` });
      } else if (idx === outdoorRoute.length - 1) {
        steps.push({ icon: "🏢", text: `Arrive at <b>${esc(wp.label)}</b>` });
      } else {
        steps.push({ icon: "🛣️", text: `Follow campus road: <b>${esc(wp.label)}</b>` });
      }
    });
    if (destInfo.id && /^\d+$/.test(destInfo.id)) {
      if (bldgNum === 6) {
        steps.push({ icon: "🔧", text: `Enter workshop hall on <b>Ground Floor</b> (Workshop is 1 floor only) to <b>Room ${destInfo.id} (${esc(destInfo.name)})</b>` });
      } else if (destInfo.floor === 1) {
        steps.push({ icon: "⬆️", text: `Enter building and take central stairs to <b>First Floor</b> for <b>Room ${destInfo.id} (${esc(destInfo.name)})</b>` });
      } else {
        steps.push({ icon: "🚪", text: `Enter building and walk along ground floor for <b>Room ${destInfo.id} (${esc(destInfo.name)})</b>` });
      }
    }
    steps.push({ icon: "🎯", text: `Destination reached: <b>${esc(destInfo.name)}</b>!` });
  } else {
    // Indoor corridor steps
    steps.push({ icon: "🟢", text: `Enter <b>${esc(bldgInfo.name)}</b> main building foyer` });
    if (destInfo.floor === 1) {
      steps.push({ icon: "⬆️", text: `Take central stairs to <b>First Floor (Floor 1)</b>` });
      steps.push({ icon: "➡️", text: `Walk along first floor corridor towards <b>Room ${destInfo.id}</b>` });
    } else {
      steps.push({ icon: "➡️", text: `Proceed along ground floor central corridor` });
    }
    steps.push({ icon: "🚪", text: `Arrive directly at the doorway entrance of <b>Room ${destInfo.id} (${esc(destInfo.name)})</b>` });
    steps.push({ icon: "🎯", text: `Doorway found: <b>Room ${destInfo.id}</b>!` });
  }

  renderRouteSteps(steps);
  drawRouteOnMap(currentRouteWaypoints, destInfo);
}

function renderRouteSteps(steps) {
  const container = document.getElementById("routeStepsList");
  if (!container) return;

  container.innerHTML = steps.map((s, idx) => `
    <div class="step-item ${idx === activeStepIndex ? "active-step" : ""}" id="step_item_${idx}">
      <span class="step-icon">${s.icon}</span>
      <div>${s.text}</div>
    </div>
  `).join("");
}

function setMapViewMode(mode, shouldRecalculate = true) {
  currentMapMode = mode;
  const btnSat = document.getElementById("btnViewSatellite");
  const btn3D = document.getElementById("btnView3DFloor");
  if (btnSat) btnSat.classList.toggle("active", mode === "satellite");
  if (btn3D) btn3D.classList.toggle("active", mode === "floorplan");

  if (shouldRecalculate) {
    calculateCampusRoute();
  }
}

function setUserFloor(floor, shouldRecalculate = true) {
  currentSelectedFloor = (floor === 1) ? 1 : 0;
  const btn0 = document.getElementById("btnFloor0");
  const btn1 = document.getElementById("btnFloor1");
  if (btn0) btn0.classList.toggle("active", currentSelectedFloor === 0);
  if (btn1) btn1.classList.toggle("active", currentSelectedFloor === 1);

  if (shouldRecalculate) {
    const destEl = document.getElementById("routeDest");
    if (destEl) {
      const curKey = destEl.value;
      const curInfo = getRoomInfo(curKey);
      if (curInfo && curInfo.bldg && curInfo.floor !== currentSelectedFloor) {
        const targetBldg = curInfo.bldg;
        const matchingRooms = Object.values(GECP_ROOMS).filter(r => r.bldg === targetBldg && r.floor === currentSelectedFloor);
        if (matchingRooms.length > 0) {
          destEl.value = matchingRooms[0].id;
        }
      }
    }
    calculateCampusRoute();
  }
}

function filterByBuilding(bldg) {
  document.querySelectorAll(".bldg-chip").forEach(c => c.classList.remove("active"));
  const chip = (bldg === "ALL") ? document.getElementById("bldgChip_all") : document.getElementById(`bldgChip_${bldg}`);
  if (chip) chip.classList.add("active");

  const destEl = document.getElementById("routeDest");
  if (!destEl) return;

  const optgroups = destEl.querySelectorAll("optgroup");
  optgroups.forEach(og => {
    if (bldg === "ALL") {
      og.style.display = "";
    } else {
      const label = og.label || "";
      const matches = label.includes(`Building ${bldg}:`) || label.includes(`Series ${bldg}000`);
      og.style.display = matches ? "" : "none";
    }
  });

  if (bldg !== "ALL") {
    const bNum = parseInt(bldg, 10);
    const bldgInfo = CAMPUS_BUILDINGS[bNum];
    if (bldgInfo) {
      const rooms = Object.values(GECP_ROOMS).filter(r => r.bldg === bNum);
      if (rooms.length > 0) {
        destEl.value = rooms[0].id;
      } else if (bldgInfo.type) {
        destEl.value = bldgInfo.type;
      }

      if ([4, 5, 7, 8].includes(bNum)) {
        setMapViewMode("floorplan", false);
      } else {
        setMapViewMode("satellite", false);
      }
      calculateCampusRoute();
    }
  }
}

function drawRouteOnMap(waypoints, destInfo) {
  const poly = document.getElementById("routePolyline");
  const polyGlow = document.getElementById("routePolylineGlow");
  const polyDots = document.getElementById("routePolylineDots");
  const markersContainer = document.getElementById("navMarkersContainer");
  const svgOverlay = document.getElementById("navSvgOverlay");

  if (!waypoints || !waypoints.length) return;

  const isSat = (currentMapMode === "satellite" || ![4, 5, 7, 8].includes(destInfo.bldg));
  const maxX = isSat ? 682 : 1000;
  const maxY = isSat ? 1024 : 1000;

  if (svgOverlay) {
    svgOverlay.setAttribute("viewBox", `0 0 ${maxX} ${maxY}`);
  }

  let dStr = `M ${waypoints[0].x} ${waypoints[0].y}`;
  for (let i = 1; i < waypoints.length; i++) {
    dStr += ` L ${waypoints[i].x} ${waypoints[i].y}`;
  }

  if (poly) {
    poly.setAttribute("d", dStr);
    poly.classList.remove("route-drawn-line");
    void poly.offsetWidth; // trigger reflow for smooth line drawing
    poly.classList.add("route-drawn-line");
  }
  if (polyGlow) polyGlow.setAttribute("d", dStr);
  if (polyDots) polyDots.setAttribute("d", dStr);

  if (!markersContainer) return;

  const startWp = waypoints[0];
  const endWp = waypoints[waypoints.length - 1];

  let markersHtml = `
    <!-- Start Pin -->
    <div class="map-pin pin-start" style="left:${(startWp.x / maxX) * 100}%; top:${(startWp.y / maxY) * 100}%">
      <div class="pin-bubble">🟢 Start: ${esc(startWp.label || "Entry")}</div>
      <div class="pin-pulse"></div>
    </div>

    <!-- Destination Door / Entrance Pin -->
    <div class="map-pin door-pin" style="left:${(endWp.x / maxX) * 100}%; top:${(endWp.y / maxY) * 100}%">
      <div class="pin-bubble" style="background:#b42318;font-weight:700">📍 ${esc(destInfo.id ? `Room ${destInfo.id}: ${destInfo.name}` : destInfo.name)}</div>
      <div class="pin-pulse" style="background:#e11d48;box-shadow:0 0 0 5px rgba(225,29,72,0.4)"></div>
    </div>

    <!-- Live GPS Avatar -->
    <div id="liveAvatarDot" class="map-pin hidden" style="left:0%; top:0%">
      <div class="pin-pulse" style="width:22px;height:22px;background:#00e5ff;box-shadow:0 0 0 6px rgba(0,229,255,0.4)"></div>
      <div class="pin-bubble" style="background:#0b57d0">🏃 You (Walking)</div>
    </div>
  `;

  // Landmark pins in outdoor satellite mode
  if (isSat) {
    const landmarks = [
      { key: "admin", label: "🏛️ 1: Admin Block", x: 102, y: 602 },
      { key: "library", label: "📚 2: Library", x: 150, y: 471 },
      { key: "canteen", label: "🍴 3: Canteen & Club", x: 120, y: 301 },
      { key: "electrical", label: "⚡ 4: Electrical Engg", x: 132, y: 111 },
      { key: "mechanical", label: "⚙️ 5: Mechanical Engg", x: 344, y: 228 },
      { key: "workshop", label: "🔧 6: Workshop (1 Floor)", x: 577, y: 359 },
      { key: "civil", label: "🏗️ 7: Civil Engg", x: 498, y: 478 },
      { key: "computer", label: "💻 8: Computer Engg", x: 337, y: 667 }
    ];

    landmarks.forEach(lm => {
      if (Math.abs(lm.x - endWp.x) > 20 || Math.abs(lm.y - endWp.y) > 20) {
        markersHtml += `
          <div class="map-pin" style="left:${(lm.x / maxX) * 100}%; top:${(lm.y / maxY) * 100}%; opacity:0.88" onclick="selectDestinationAndNavigate('${lm.key}')" title="Click to navigate to ${lm.label}">
            <div class="pin-bubble" style="background:#176b45;font-size:10px;padding:3px 7px">${lm.label}</div>
          </div>
        `;
      }
    });
  }

  markersContainer.innerHTML = markersHtml;
}

function selectDestination(key) {
  const destEl = document.getElementById("routeDest");
  if (destEl) {
    destEl.value = key;
    calculateCampusRoute();
  }
}

function selectDestinationAndNavigate(key) {
  const parsed = parseRoomInput(key);
  if (!parsed) return;

  const destEl = document.getElementById("routeDest");
  if (destEl) {
    let exists = false;
    for (let i = 0; i < destEl.options.length; i++) {
      if (destEl.options[i].value === parsed.id) {
        destEl.selectedIndex = i;
        exists = true;
        break;
      }
    }
    if (!exists) {
      const opt = document.createElement("option");
      opt.value = parsed.id;
      opt.textContent = `Room ${parsed.id} — ${parsed.name} (${parsed.floorName})`;
      destEl.appendChild(opt);
      destEl.value = parsed.id;
    }
  }

  // Update building chips
  document.querySelectorAll(".bldg-chip").forEach(c => c.classList.remove("active"));
  const bChip = document.getElementById(`bldgChip_${parsed.bldg}`);
  if (bChip) bChip.classList.add("active");

  setUserFloor(parsed.floor, false);

  if ([4, 5, 7, 8].includes(parsed.bldg)) {
    setMapViewMode("floorplan", false);
  } else {
    setMapViewMode("satellite", false);
  }

  showPage("navigation");
  calculateCampusRoute();
  hideNavSearchSuggestions();
  hideHomeQuickSuggestions();

  const searchInput = document.getElementById("navRoomSearchInput");
  if (searchInput) searchInput.value = parsed.id ? `Room ${parsed.id} — ${parsed.name}` : parsed.name;
}

// Autocomplete suggestions render engine
function renderSearchSuggestions(val, targetContainerId, isHome = false) {
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  const clean = String(val || "").trim().toLowerCase();
  if (!clean) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }

  const matches = [];

  // Match room numbers and names
  for (const [id, room] of Object.entries(GECP_ROOMS)) {
    const bldgInfo = CAMPUS_BUILDINGS[room.bldg] || {};
    const textToSearch = `${id} ${room.name} ${room.floorName} ${bldgInfo.name || ""} ${bldgInfo.shortName || ""}`.toLowerCase();
    if (id.startsWith(clean) || textToSearch.includes(clean)) {
      matches.push({
        type: "room",
        id: id,
        title: `Room ${id} — ${room.name}`,
        subtitle: `${bldgInfo.shortName || `Building ${room.bldg}`} • ${room.floorName}`,
        icon: bldgInfo.icon || "📍",
        bldg: room.bldg,
        floor: room.floor
      });
    }
    if (matches.length >= 8) break;
  }

  // Match campus buildings
  if (matches.length < 8) {
    for (const [bId, b] of Object.entries(CAMPUS_BUILDINGS)) {
      const bText = `${b.name} ${b.shortName} ${b.series} ${b.type} ${b.desc}`.toLowerCase();
      if (bText.includes(clean) || String(b.id) === clean) {
        matches.push({
          type: "building",
          id: b.type,
          title: `${b.icon} ${b.name}`,
          subtitle: `Series ${b.series} • ${b.desc}`,
          icon: b.icon,
          bldg: b.id,
          floor: 0
        });
      }
      if (matches.length >= 8) break;
    }
  }

  if (matches.length === 0) {
    // Check 2nd digit pattern if user typed unlisted room number e.g. 5109
    const m = clean.match(/^([1-8])([0-1])(\d{2})$/);
    if (m) {
      const bldgNum = parseInt(m[1], 10);
      const floorNum = (bldgNum === 6) ? 0 : parseInt(m[2], 10);
      const bldgInfo = CAMPUS_BUILDINGS[bldgNum] || {};
      matches.push({
        type: "room",
        id: clean,
        title: `Room ${clean}`,
        subtitle: `${bldgInfo.name || `Building ${bldgNum}`} • ${floorNum === 0 ? "Ground Floor" : "First Floor"}`,
        icon: bldgInfo.icon || "📍",
        bldg: bldgNum,
        floor: floorNum
      });
    } else {
      container.innerHTML = `<div class="suggestion-item muted" style="cursor:default">🔍 No matching room found for "${esc(val)}"</div>`;
      container.classList.remove("hidden");
      return;
    }
  }

  container.innerHTML = matches.map(m => `
    <div class="suggestion-item" onclick="selectDestinationAndNavigate('${esc(m.id)}')">
      <div class="suggestion-badge">${esc(m.icon)}</div>
      <div style="flex:1">
        <div style="font-weight:600;font-size:13.5px;color:#1e293b">${esc(m.title)}</div>
        <div class="muted small">${esc(m.subtitle)}</div>
      </div>
      <span style="font-size:12px;color:var(--green);font-weight:600">Navigate ➔</span>
    </div>
  `).join("");

  container.classList.remove("hidden");
}

function handleNavSearchInput(val) {
  const clearBtn = document.getElementById("btnClearSearch");
  if (clearBtn) clearBtn.classList.toggle("hidden", !val);
  renderSearchSuggestions(val, "navSearchSuggestions", false);
}

function clearNavSearch() {
  const input = document.getElementById("navRoomSearchInput");
  if (input) input.value = "";
  const clearBtn = document.getElementById("btnClearSearch");
  if (clearBtn) clearBtn.classList.add("hidden");
  hideNavSearchSuggestions();
}

function hideNavSearchSuggestions() {
  const container = document.getElementById("navSearchSuggestions");
  if (container) container.classList.add("hidden");
}

function executeRoomSearch() {
  const val = document.getElementById("navRoomSearchInput")?.value;
  if (!val) return;
  const parsed = parseRoomInput(val);
  if (parsed) {
    selectDestinationAndNavigate(parsed.id);
  } else {
    alert(`Could not find room or building for "${val}". Please enter a valid room number or building name.`);
  }
}

function handleHomeQuickSearch(val) {
  renderSearchSuggestions(val, "homeQuickSuggestions", true);
}

function hideHomeQuickSuggestions() {
  const container = document.getElementById("homeQuickSuggestions");
  if (container) container.classList.add("hidden");
}

function executeHomeQuickSearch() {
  const val = document.getElementById("homeQuickSearch")?.value;
  if (!val) return;
  const parsed = parseRoomInput(val);
  if (parsed) {
    selectDestinationAndNavigate(parsed.id);
  } else {
    alert(`Could not find room or building for "${val}".`);
  }
}

function toggleLiveNavigation() {
  const btn = document.getElementById("btnStartNav");
  const banner = document.getElementById("liveNavBanner");
  const avatar = document.getElementById("liveAvatarDot");

  if (isLiveNavigating) {
    isLiveNavigating = false;
    if (liveNavInterval) clearInterval(liveNavInterval);
    if (btn) btn.textContent = "▶️ Start Live Navigation";
    if (banner) banner.classList.add("hidden");
    if (avatar) avatar.classList.add("hidden");
    activeStepIndex = 0;
    return;
  }

  isLiveNavigating = true;
  if (btn) btn.textContent = "⏹️ Stop Live Navigation";
  if (banner) banner.classList.remove("hidden");
  if (avatar) avatar.classList.remove("hidden");

  let progress = 0;
  const totalWaypoints = currentRouteWaypoints.length;
  const destKey = document.getElementById("routeDest")?.value || "5104";
  const destInfo = getRoomInfo(destKey);
  const isSat = (currentMapMode === "satellite" || ![4, 5, 7, 8].includes(destInfo.bldg));
  const maxX = isSat ? 682 : 1000;
  const maxY = isSat ? 1024 : 1000;

  liveNavInterval = setInterval(() => {
    if (!isLiveNavigating || !totalWaypoints) {
      clearInterval(liveNavInterval);
      return;
    }

    const currentWpIndex = Math.min(Math.floor(progress), totalWaypoints - 1);
    const nextWpIndex = Math.min(currentWpIndex + 1, totalWaypoints - 1);
    const t = progress - currentWpIndex;

    const cur = currentRouteWaypoints[currentWpIndex];
    const nxt = currentRouteWaypoints[nextWpIndex];

    const currentX = cur.x + (nxt.x - cur.x) * t;
    const currentY = cur.y + (nxt.y - cur.y) * t;

    if (avatar) {
      avatar.style.left = `${(currentX / maxX) * 100}%`;
      avatar.style.top = `${(currentY / maxY) * 100}%`;
    }

    const stepIdx = Math.min(Math.floor((progress / totalWaypoints) * 5), 4);
    if (stepIdx !== activeStepIndex) {
      activeStepIndex = stepIdx;
      document.querySelectorAll(".step-item").forEach((el, idx) => {
        el.classList.toggle("active-step", idx === activeStepIndex);
      });
    }

    progress += 0.08;

    if (progress >= totalWaypoints) {
      clearInterval(liveNavInterval);
      const statusText = document.getElementById("liveNavStatusText");
      if (statusText) statusText.textContent = `🎯 Arrived at Room doorway successfully!`;
      setTimeout(() => {
        toggleLiveNavigation();
      }, 1500);
    }
  }, 190);
}

function swapRouteEndpoints() {
  const startEl = document.getElementById("routeStart");
  if (startEl) {
    startEl.value = "gate";
    calculateCampusRoute();
  }
}

function useLiveGeolocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const startEl = document.getElementById("routeStart");
        if (startEl) startEl.value = "live";
        calculateCampusRoute();
      },
      () => {
        const startEl = document.getElementById("routeStart");
        if (startEl) startEl.value = "gate";
        calculateCampusRoute();
      },
      { timeout: 4000 }
    );
  } else {
    const startEl = document.getElementById("routeStart");
    if (startEl) startEl.value = "gate";
    calculateCampusRoute();
  }
}

// ========================================================
// SHARE & DOWNLOAD APP METHODS
// ========================================================

async function openShareModal() {
  const modal = document.getElementById("shareAppModal");
  if (modal) modal.classList.remove("hidden");

  const input = document.getElementById("shareUrlInput");
  if (input && window.location.protocol.startsWith("http")) {
    input.value = window.location.origin;
  }

  try {
    const res = await fetch("/api/app/info");
    if (res.ok) {
      const data = await res.json();
      if (input && !window.location.protocol.startsWith("http")) {
        input.value = data.shareUrl || data.localIp;
      }
    }
  } catch (err) {
    console.log("App info fetch note:", err);
  }
}

function closeShareModal() {
  const modal = document.getElementById("shareAppModal");
  if (modal) modal.classList.add("hidden");
  const copyMsg = document.getElementById("copySuccessMsg");
  if (copyMsg) copyMsg.classList.add("hidden");
}

function copyShareUrl() {
  const input = document.getElementById("shareUrlInput");
  if (!input) return;
  input.select();
  navigator.clipboard.writeText(input.value).then(() => {
    const copyMsg = document.getElementById("copySuccessMsg");
    if (copyMsg) copyMsg.classList.remove("hidden");
    setTimeout(() => {
      if (copyMsg) copyMsg.classList.add("hidden");
    }, 3000);
  }).catch(() => {
    alert("Share link copied: " + input.value);
  });
}


function navigateToClass(roomNumber) {
  if (!roomNumber) return;
  lastPreviewedRoom = roomNumber;
  selectDestinationAndNavigate(roomNumber);
}

function navigateFromModal() {
  closeMapModal();
  selectDestinationAndNavigate(lastPreviewedRoom);
}

function openDeptNav(dept) {
  const mapping = {
    "Mechanical Engineering": "5104",
    "Electrical Engineering": "4010",
    "Computer Engineering": "8114",
    "Civil Engineering": "7104"
  };
  selectDestinationAndNavigate(mapping[dept] || "5104");
}

// ========================================================
// DATABASE VIEWER ENGINE
// ========================================================

async function loadDatabaseViewer() {
  const elS = document.getElementById("dbStatStudents");
  const elF = document.getElementById("dbStatFaculty");
  const elT = document.getElementById("dbStatTimetable");
  const elN = document.getElementById("dbStatNotes");
  const elSub = document.getElementById("dbStatSubmissions");
  const elSz = document.getElementById("dbStatSize");

  try {
    const summary = await apiFetch("/database/summary");
    if (summary && summary.counts) {
      const s = summary.counts;
      if (elS) elS.textContent = s.students ?? 0;
      if (elF) elF.textContent = s.faculty ?? 0;
      if (elT) elT.textContent = s.timetable ?? 0;
      if (elN) elN.textContent = s.notes ?? 0;
      if (elSub) elSub.textContent = s.submissions ?? 0;
      if (elSz) elSz.textContent = `${summary.size_kb} KB`;
    }
  } catch (e) {
    if (elS) elS.textContent = students.length;
    if (elF) elF.textContent = 4;
    if (elT) elT.textContent = entries.length;
    if (elN) elN.textContent = privateNotes.length;
    if (elSub) elSub.textContent = 0;
    if (elSz) elSz.textContent = "Local Storage";
  }

  await switchDbTable(currentDbTable);
}

async function switchDbTable(tableName) {
  currentDbTable = tableName;

  ["students", "faculty", "timetable", "notes", "submissions"].forEach(t => {
    const btn = document.getElementById(`dbtab_${t}`);
    if (btn) btn.classList.toggle("active", t === tableName);
  });

  const countBadge = document.getElementById("dbRowCount");
  if (countBadge) countBadge.textContent = "Loading...";

  try {
    const data = await apiFetch(`/database/table/${tableName}`);
    currentDbRows = data.rows || [];
    currentDbCols = data.columns || [];

    if (countBadge) countBadge.textContent = `${currentDbRows.length} records in '${tableName}'`;
    renderDbTable(currentDbRows, currentDbCols);
  } catch (err) {
    if (tableName === "students") {
      currentDbRows = students;
      currentDbCols = ["id", "enrollment_no", "name", "department", "semester", "batch", "mobile"];
    } else if (tableName === "timetable") {
      currentDbRows = entries;
      currentDbCols = ["id", "dept", "sem", "batch", "day", "time", "subject", "room", "faculty"];
    } else if (tableName === "notes") {
      currentDbRows = privateNotes;
      currentDbCols = ["id", "subject", "text", "type", "createdAt"];
    } else {
      currentDbRows = [];
      currentDbCols = [];
    }
    if (countBadge) countBadge.textContent = `${currentDbRows.length} records (Local Cache)`;
    renderDbTable(currentDbRows, currentDbCols);
  }
}

function filterDbTableRows() {
  const query = (document.getElementById("dbSearchInput")?.value || "").toLowerCase().trim();
  if (!query) {
    renderDbTable(currentDbRows, currentDbCols);
    return;
  }
  const filtered = currentDbRows.filter(r => JSON.stringify(r).toLowerCase().includes(query));
  renderDbTable(filtered, currentDbCols);
}

function renderDbTable(rows, columns) {
  const container = document.getElementById("dbTableContainer");
  if (!container) return;

  if (!rows || !rows.length) {
    container.innerHTML = '<div class="notice">No records found in this table.</div>';
    return;
  }

  const cols = columns.length ? columns : Object.keys(rows[0]);

  let html = `
    <table class="tt">
      <thead>
        <tr>
          ${cols.map(c => `<th>${esc(c.toUpperCase())}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            ${cols.map(c => `<td>${esc(r[c] !== null && r[c] !== undefined ? String(r[c]) : "—")}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

// =========================
// MAP MODAL
// =========================

function previewRoomMap(room) {
  lastPreviewedRoom = room;
  const info = getRoomInfo(room);
  openMapModal(info.file || "maps/gecp-aerial-3d.webp", `${info.mapName || `Room ${room}`} — Room ${room}`, `Room ${room} (${info.name || ""}) • ${info.floorName || ""}`);
}

function openMapModal(src, title, subtitle = "") {
  const mTitle = document.getElementById("mapModalTitle");
  const mSub = document.getElementById("mapModalSubtitle");
  const mImg = document.getElementById("mapModalImg");
  const modal = document.getElementById("mapModal");

  if (mTitle) mTitle.textContent = title;
  if (mSub) mSub.textContent = subtitle;
  if (mImg) mImg.src = src;
  if (modal) modal.classList.remove("hidden");
}

function closeMapModal() {
  const modal = document.getElementById("mapModal");
  if (modal) modal.classList.add("hidden");
}

function printTimetable() {
  window.print();
}

// =========================
// PWA INSTALLATION & MOBILE ENGINE
// =========================

const isStandaloneApp = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById("pwaInstallBtn");
  if (installBtn) installBtn.classList.remove("hidden");

  if (!isStandaloneApp && !sessionStorage.getItem("pwa_bar_dismissed")) {
    const bottomBar = document.getElementById("mobilePwaInstallBar");
    if (bottomBar) bottomBar.classList.remove("hidden");
  }
});

window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  const bottomBar = document.getElementById("mobilePwaInstallBar");
  if (bottomBar) bottomBar.classList.add("hidden");
  const installBtn = document.getElementById("pwaInstallBtn");
  if (installBtn) installBtn.classList.add("hidden");
  console.log("CampusCompass successfully installed as a native device app.");
});

function dismissMobilePwaBar() {
  const bottomBar = document.getElementById("mobilePwaInstallBar");
  if (bottomBar) bottomBar.classList.add("hidden");
  sessionStorage.setItem("pwa_bar_dismissed", "1");
}

async function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    const installBtn = document.getElementById("pwaInstallBtn");
    if (installBtn) installBtn.classList.add("hidden");
    const bottomBar = document.getElementById("mobilePwaInstallBar");
    if (bottomBar) bottomBar.classList.add("hidden");
  } else {
    openPhoneInstallModal();
  }
}

// Auto-display mobile bottom install bar on mobile devices if not installed
window.addEventListener("DOMContentLoaded", () => {
  if (isStandaloneApp) {
    const banners = document.querySelectorAll(".mobile-app-banner, #mobilePwaInstallBar");
    banners.forEach(b => b.classList.add("hidden"));
    return;
  }

  const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (isMobile && !sessionStorage.getItem("pwa_bar_dismissed")) {
    setTimeout(() => {
      const bottomBar = document.getElementById("mobilePwaInstallBar");
      if (bottomBar) bottomBar.classList.remove("hidden");
    }, 1200);
  }
});

// Register service worker if supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js", { scope: "/" })
      .then(reg => {
        console.log("Service Worker registered with scope:", reg.scope);
      })
      .catch(() => {});
  });
}


// =========================
// MOBILE PHONE INSTALLATION HELPERS
// =========================

function openPhoneInstallModal() {
  const modal = document.getElementById("phoneInstallModal");
  if (modal) modal.classList.remove("hidden");
  const phoneInput = document.getElementById("phoneShareUrlInput");
  if (phoneInput && window.location.protocol.startsWith("http")) {
    phoneInput.value = window.location.origin;
  }
}

function closePhoneInstallModal() {
  const modal = document.getElementById("phoneInstallModal");
  if (modal) modal.classList.add("hidden");
  const notice = document.getElementById("phoneInstallSuccessNotice");
  if (notice) notice.classList.add("hidden");
}

function triggerPhoneInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        const notice = document.getElementById("phoneInstallSuccessNotice");
        if (notice) notice.classList.remove("hidden");
        const bottomBar = document.getElementById("mobilePwaInstallBar");
        if (bottomBar) bottomBar.classList.add("hidden");
      }
      deferredPrompt = null;
    });
  } else {
    openPhoneInstallModal();
  }
}

function copyPhoneShareUrl() {
  const input = document.getElementById("phoneShareUrlInput");
  if (!input) return;
  input.select();
  navigator.clipboard.writeText(input.value).then(() => {
    alert("Mobile share link copied! Share this link with classmates: " + input.value);
  }).catch(() => {
    alert("Share link: " + input.value);
  });
}

// Keyboard shortcuts (Escape closes modals)
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMapModal();
    closeEntry();
  }
});

// Setup dynamic dropdowns
document.addEventListener("DOMContentLoaded", () => {
  // Setup enter key and outside clicks for navigation search bars
  const navInput = document.getElementById("navRoomSearchInput");
  if (navInput) {
    navInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeRoomSearch();
      }
    });
  }

  const homeInput = document.getElementById("homeQuickSearch");
  if (homeInput) {
    homeInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeHomeQuickSearch();
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-input-wrap") && !e.target.closest(".home-room-search-bar")) {
      hideNavSearchSuggestions();
      hideHomeQuickSuggestions();
    }
  });

  const sDept = document.getElementById("sDept");
  if (sDept) {
    sDept.addEventListener("change", () => fillBatch("sDept", "sBatch"));
  }

  const fDept = document.getElementById("fDept");
  if (fDept) {
    fDept.addEventListener("change", () => {
      fillFilterBatch();
      renderPublicTimetable();
    });
  }
});

// Initial boot
loadAll();
showPage("home");