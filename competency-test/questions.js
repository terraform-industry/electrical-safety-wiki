// Electrical Safety Competency Test Question Pool
// Minimum 30 questions for good randomization
const questions = [
    {
        question: "What is the primary purpose of electrical safety training?",
        options: [
            "To increase productivity in the workplace",
            "To keep you and your coworkers safe from burns, electric shock, and death",
            "To reduce equipment maintenance costs",
            "To comply with insurance requirements"
        ],
        correctAnswer: 1,
        explanation: "The primary purpose of electrical safety training is to prevent injuries and fatalities from electrical hazards."
    },
    {
        question: "What does LOTO stand for in electrical safety?",
        options: [
            "Lock Out, Tag Out",
            "Live Operation Test Observation",
            "Local Operational Testing Organization",
            "Load Optimization and Testing Operations"
        ],
        correctAnswer: 0,
        explanation: "LOTO stands for Lock Out, Tag Out - a critical safety procedure for de-energizing equipment."
    },
    {
        question: "At what voltage level do OSHA electrical safety standards typically begin?",
        options: [
            "12 volts",
            "24 volts",
            "50 volts",
            "120 volts"
        ],
        correctAnswer: 2,
        explanation: "OSHA electrical safety standards typically begin at 50 volts, as this is considered potentially dangerous."
    },
    {
        question: "What is the first step before working on any electrical equipment?",
        options: [
            "Put on safety gloves",
            "Verify the equipment is de-energized",
            "Check the weather conditions",
            "Notify your supervisor"
        ],
        correctAnswer: 1,
        explanation: "Always verify equipment is de-energized before beginning work to prevent electrical shock."
    },
    {
        question: "What class of hard hat provides both impact and electrical protection?",
        options: [
            "Class A",
            "Class B",
            "Class C",
            "Class E"
        ],
        correctAnswer: 3,
        explanation: "Class E (Electrical) hard hats provide protection from high-voltage electrical conductors."
    },
    {
        question: "What is the safe approach distance for a qualified person working near 480V equipment?",
        options: [
            "6 inches",
            "12 inches",
            "24 inches",
            "36 inches"
        ],
        correctAnswer: 2,
        explanation: "The minimum approach distance for 480V is 24 inches for qualified persons."
    },
    {
        question: "Which type of fire extinguisher should be used on electrical fires?",
        options: [
            "Class A (Water)",
            "Class B (Foam)",
            "Class C (CO2 or Dry Chemical)",
            "Class D (Metal)"
        ],
        correctAnswer: 2,
        explanation: "Class C fire extinguishers are designed for electrical fires and won't conduct electricity."
    },
    {
        question: "What does GFCI stand for?",
        options: [
            "Ground Fault Circuit Interrupter",
            "General Facility Current Inspector",
            "Grounded Fuse Circuit Isolator",
            "Ground Force Current Indicator"
        ],
        correctAnswer: 0,
        explanation: "GFCI (Ground Fault Circuit Interrupter) protects against electrical shock by detecting ground faults."
    },
    {
        question: "How often should electrical safety equipment be inspected?",
        options: [
            "Only when it looks damaged",
            "Once a year",
            "Before each use",
            "Every five years"
        ],
        correctAnswer: 2,
        explanation: "Electrical safety equipment should be inspected before each use to ensure it's in safe working condition."
    },
    {
        question: "What is the most common cause of electrical injuries in the workplace?",
        options: [
            "Lightning strikes",
            "Contact with overhead power lines",
            "Failure to properly lock out/tag out",
            "Static electricity"
        ],
        correctAnswer: 2,
        explanation: "Failure to properly implement LOTO procedures is a leading cause of electrical injuries."
    },
    {
        question: "What color is typically used for equipment grounding conductors?",
        options: [
            "Red",
            "Black",
            "White",
            "Green or bare copper"
        ],
        correctAnswer: 3,
        explanation: "Green or bare copper conductors are used for equipment grounding per electrical codes."
    },
    {
        question: "What is an Arc Flash?",
        options: [
            "A camera flash used in dark areas",
            "An explosive release of energy caused by an electrical arc",
            "A type of welding technique",
            "A warning light on electrical panels"
        ],
        correctAnswer: 1,
        explanation: "An arc flash is a dangerous explosion of energy from an electrical arc that can cause severe burns."
    },
    {
        question: "What PPE is required when working on energized electrical equipment?",
        options: [
            "Steel-toed boots only",
            "Arc-rated clothing, insulated gloves, face shield, and safety glasses",
            "Hard hat only",
            "Regular work clothes"
        ],
        correctAnswer: 1,
        explanation: "Comprehensive PPE including arc-rated clothing and insulated gloves is required for energized work."
    },
    {
        question: "What should you do if you see damaged electrical equipment?",
        options: [
            "Try to fix it yourself",
            "Ignore it if it's still working",
            "Report it immediately and tag it out of service",
            "Wait until the next scheduled maintenance"
        ],
        correctAnswer: 2,
        explanation: "Damaged electrical equipment should be immediately reported and removed from service to prevent hazards."
    },
    {
        question: "What is the purpose of an electrical permit system?",
        options: [
            "To generate revenue for the company",
            "To ensure only qualified persons perform electrical work safely",
            "To slow down work processes",
            "To create more paperwork"
        ],
        correctAnswer: 1,
        explanation: "Electrical permit systems ensure work is performed safely by qualified personnel with proper precautions."
    },
    {
        question: "How many volts can a typical carpet static discharge reach?",
        options: [
            "100 volts",
            "500 volts",
            "5,000 volts",
            "35,000 volts"
        ],
        correctAnswer: 3,
        explanation: "Static electricity from walking on carpet can reach up to 35,000 volts, though at very low current."
    },
    {
        question: "What is the minimum insulation resistance considered safe for 480V equipment?",
        options: [
            "100 ohms",
            "1,000 ohms",
            "100,000 ohms",
            "1 megohm or greater"
        ],
        correctAnswer: 3,
        explanation: "Equipment operating at 480V should have insulation resistance of at least 1 megohm to be considered safe."
    },
    {
        question: "When should you test a voltage detector?",
        options: [
            "Once a month",
            "Before and after each use",
            "Only when new",
            "When it looks damaged"
        ],
        correctAnswer: 1,
        explanation: "Voltage detectors should be tested before and after each use on a known live source to ensure proper operation."
    },
    {
        question: "What is the 'One Hand Rule' in electrical safety?",
        options: [
            "Only use one hand to carry tools",
            "Keep one hand in your pocket when testing circuits to avoid creating a path through your heart",
            "Only one person should work on equipment at a time",
            "Wave with one hand when entering electrical rooms"
        ],
        correctAnswer: 1,
        explanation: "The one hand rule prevents current from flowing across your chest and through your heart."
    },
    {
        question: "What does an Approach Boundary define?",
        options: [
            "The property line of a facility",
            "The distance from energized equipment where special precautions are required",
            "The maximum reach of a worker",
            "The edge of a construction site"
        ],
        correctAnswer: 1,
        explanation: "Approach boundaries define distances from energized equipment where various safety measures are required."
    },
    {
        question: "What current level is considered potentially lethal?",
        options: [
            "1 milliamp",
            "10 milliamps",
            "50-100 milliamps",
            "1 amp"
        ],
        correctAnswer: 2,
        explanation: "Currents of 50-100 milliamps across the heart can cause ventricular fibrillation and death."
    },
    {
        question: "What should you do if someone is being shocked by electrical equipment?",
        options: [
            "Immediately pull them away with your hands",
            "Throw water on them",
            "Turn off the power source or use a non-conductive object to separate them",
            "Wait for them to let go"
        ],
        correctAnswer: 2,
        explanation: "Never touch someone being shocked. Turn off power or use non-conductive materials to break contact."
    },
    {
        question: "What is the purpose of bonding in electrical systems?",
        options: [
            "To make equipment look better",
            "To create an electrically continuous path for fault current",
            "To increase resistance",
            "To generate heat"
        ],
        correctAnswer: 1,
        explanation: "Bonding creates a low-resistance path for fault current to safely trip protective devices."
    },
    {
        question: "How far should ladders extend above the landing surface?",
        options: [
            "Not at all",
            "1 foot",
            "3 feet",
            "5 feet"
        ],
        correctAnswer: 2,
        explanation: "Ladders should extend at least 3 feet above the landing surface for safe mounting and dismounting."
    },
    {
        question: "What type of ladder should NEVER be used near electrical equipment?",
        options: [
            "Fiberglass ladder",
            "Wooden ladder",
            "Aluminum ladder",
            "Plastic ladder"
        ],
        correctAnswer: 2,
        explanation: "Aluminum ladders conduct electricity and should never be used near electrical equipment."
    },
    {
        question: "What does CAT III rating on a multimeter indicate?",
        options: [
            "It can measure up to 3 volts",
            "It's suitable for distribution-level measurements",
            "It's only for automotive use",
            "It measures temperature"
        ],
        correctAnswer: 1,
        explanation: "CAT III rated meters are designed for measurements on distribution boards and fixed installations."
    },
    {
        question: "When is it acceptable to work on energized electrical equipment?",
        options: [
            "When you're in a hurry",
            "Only when de-energizing creates a greater hazard or is infeasible",
            "During normal business hours",
            "When the supervisor isn't watching"
        ],
        correctAnswer: 1,
        explanation: "Energized work should only be performed when de-energizing creates greater hazards or is infeasible."
    },
    {
        question: "What information must be on an electrical safety tag?",
        options: [
            "The weather forecast",
            "Name of person who placed it, date, and reason for tagging",
            "Equipment serial number only",
            "Company logo"
        ],
        correctAnswer: 1,
        explanation: "Safety tags must identify who placed them, when, and why the equipment is tagged out."
    },
    {
        question: "What is the '4 to 1' rule for ladder placement?",
        options: [
            "4 people to 1 ladder",
            "For every 4 feet of height, the base should be 1 foot from the wall",
            "Check the ladder 4 times before using once",
            "Replace ladders every 4 years"
        ],
        correctAnswer: 1,
        explanation: "The 4:1 rule ensures proper ladder angle - for every 4 feet of height, place the base 1 foot from the wall."
    },
    {
        question: "What causes most arc flash incidents?",
        options: [
            "Weather conditions",
            "Human error such as dropped tools or improper procedures",
            "Equipment age",
            "Power surges"
        ],
        correctAnswer: 1,
        explanation: "Most arc flash incidents result from human error, including dropped tools or improper work procedures."
    },
    {
        question: "What should be done with electrical cords that have exposed wires?",
        options: [
            "Wrap them with electrical tape",
            "Continue using if they still work",
            "Remove from service immediately and destroy or repair properly",
            "Paint over the exposed areas"
        ],
        correctAnswer: 2,
        explanation: "Cords with exposed wires must be immediately removed from service and properly repaired or destroyed."
    },
    {
        question: "What is the minimum working space required in front of electrical panels?",
        options: [
            "12 inches",
            "24 inches",
            "36 inches",
            "48 inches"
        ],
        correctAnswer: 2,
        explanation: "A minimum of 36 inches of clear working space is required in front of electrical panels for safety."
    },
    {
        question: "What does 'double insulated' mean on power tools?",
        options: [
            "They're waterproof",
            "They have two layers of insulation and don't require grounding",
            "They're twice as powerful",
            "They can be used in winter"
        ],
        correctAnswer: 1,
        explanation: "Double insulated tools have two layers of insulation for protection and don't require a ground wire."
    },
    {
        question: "When must electrical gloves be tested?",
        options: [
            "Never",
            "Every 10 years",
            "Before first use and every 6 months thereafter",
            "Only if they look damaged"
        ],
        correctAnswer: 2,
        explanation: "Electrical gloves must be tested before first use and every 6 months to ensure they provide proper protection."
    },
    {
        question: "What is the primary hazard of working in confined spaces with electrical equipment?",
        options: [
            "Better lighting",
            "Limited escape routes and increased shock hazard",
            "Too much ventilation",
            "Excessive space"
        ],
        correctAnswer: 1,
        explanation: "Confined spaces present increased electrical hazards due to limited escape routes and conductive surfaces."
    }
];