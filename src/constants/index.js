import {
  brush,
  bullseye,
  camera,
  haircare,
  haircolor,
  haircut,
  magnifying,
} from "../assets";

export const navigation = [
  {
    option: "ABOUT",
    link: "#about",
  },
  {
    option: "BOOK ONLINE",
    link: "/online-booking",
  },
  {
    option: "PRICES",
    link: "#prices",
  },
  {
    option: "GALLERY",
    link: "#gallery",
  },
  {
    option: "LOCATION",
    link: "#contact",
  },
  {
    option: "HOURS",
    link: "#contact",
  },
];

export const services = [
  {
    name: "COLOUR",
    image: haircolor,
  },
  {
    name: "CUTS",
    image: haircut,
  },
  {
    name: "CARE",
    image: haircare,
  },
];

export const aboutContent = [
  {
    logo: brush,
    content:
      "Welcome to our salon, operated by Korean hairdressers, where we prioritize the health and beauty of your hair. Utilizing both Olaplex and K18 treatments as needed, we ensure the highest quality results while preserving the strength and integrity of your hair.",
  },
  {
    logo: bullseye,
    content:
      "Specializing in foilyage, balayage, digital perm, cold perm, trendy makeovers, and personalized color services, we’re dedicated to bringing out your unique style and enhancing your natural beauty. We take pride in our ability to achieve and prolong a customer’s desired hair.",
  },
  {
    logo: camera,
    content:
      "Welcome to our salon, where expertise meets experience. With a director boasting 23 years of experience and a team of skilled designers recognized as Melbourne’s best hairdressers, we’re here to fulfill all your beauty needs.",
  },
  {
    logo: magnifying,
    content:
      "Like many Melbourne icons and laneways, Aery Salon is hidden from the main street. Get your hair done in the privacy of our comfortable salon, enjoy a drink and snacks while you wait and emerge onto the streets of Melbourne, as a new person!",
  },
];


export const appointmentCategory=[
  "'Others","**New","Hair colouring","Haircut","Perm","Styling","Treatment"
]

export const othersAppointment=[
  {
    category:"perm test",
    price:"$30.00"
  }
]

export const newAppointment=[
  {
    category:"Woman's haircut with Treatment",
    price:"$150.00",
    categoryDetails:["Ladies cut with choice of hair or scalp treatment + 1 Olaplex product","Special price from $224"]
  },
  {
    category:"Men's haircut with Scalp Treatment",
    price:"$60.00",
    categoryDetails:["Scalp treatment with men’s cut","Special price from $95"]
  }
]

export const colouringCategory=[
  {
    category:"Toning / hair colour without bleach",
    price:"$180.00",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"],
    time:"2 hours"
  },
  {
    category:"Hair colour with bleach once",
    price:"$400.00",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON PREVIOUSLY PERMED/STRAIGHTENED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"],
    time:"3~4 hours"
  },
  {
    category:"Hair colour with bleach twice",
    price:"$500.00",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON PREVIOUSLY PERMED/STRAIGHTENED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"],
    time:"6~7 hours"
  },
  {
    category:"Hair colour with highlights (foil/balayage) - Brown shade",
    price:"$400.00",
    categoryDetails:["Inclusive of bleach (all types of brown shade balayage/highlights require bleaching!)","Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON PREVIOUSLY PERMED/STRAIGHTENED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"],
    time:"3~4 hours"
  },
  {
    category:"Hair colour with highlights (foils/balayage) - Blonde shade",
    price:"$500.00",
    categoryDetails:["Inclusive of bleach (all types of blonde shade balayage/highlights require bleaching!)","Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON PREVIOUSLY PERMED/STRAIGHTENED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"],
    time:"6~7 hours"
  }
]

export const cuttingCategory=[
  {
    category:"Men's Hair cut with Director Aery",
    price:"$55.00",
  },
  {
    category:"Woman's haircut with Director Aery",
    price:"$75.00",
  },
  {
    category:"Haircut (female) - short hair",
    price:"$60.00",
    time:"45 minutes",
    categoryDetails:["Above shoulders","Inclusive of wash and blow dry"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Haircut (female) - medium hair",
    price:"$65.00",
    time:"45 minutes",
    categoryDetails:["Until armpit","Inclusive of wash and blow dry"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Haircut (female) - long hair",
    price:"$70.00",
    time:"45 minutes",
    categoryDetails:["Until elbow","Inclusive of wash and blow dry"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Haircut (female) - extra long",
    price:"$75.00",
    time:"45 minutes",
    categoryDetails:["Below elbow","Inclusive of wash and blow dry"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Fringe cut",
    price:"$20.00",
    time:"10 minutes",
    categoryDetails:["FRINGE ONLY. For curtain bangs, a regular haircut booking is required."],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Haircut (male)",
    price:"$45.00",
    time:"45 minutes",
    categoryDetails:["Inclusive of wash and styling"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Haircut (kids)",
    price:"$35.00",
    time:"45 minutes",
    categoryDetails:["This service is for under 8 years old only"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  }
]

export const permCategory=[
  {
    category:"Perm"
  },
  {
    category:"Permanent waves (Cold - Female)",
    price:"$280.00",
    time:"2~3 hours",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON BLEACHED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Permanent waves (Digital/Iron/Setting - Female)",
    price:"$330.00",
    time:"2~3 hours",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON BLEACHED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Straightening",
    price:"$300.00",
    time:"2~3 hours",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON BLEACHED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Hair softening/relaxing",
    price:"$250.00",
    time:"2~3 hours",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON BLEACHED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Men's perm",
    price:"$200.00",
    time:"2 hours",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*UNABLE TO PERFORM THIS ON BLEACHED HAIR","*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  }
]

export const stylingCategory=[
  {
    category:"Wash and blow dry/styling (Female)",
    price:"$55.00",
    time:"30 minutes",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Wash and blow dry/styling (Male)",
    price:"$35.00",
    time:"30 minutes",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  },
  {
    category:"Up-style/ Up-do",
    price:"$100.00",
    time:"45 minutes",
    categoryDetails:["Price will vary depending on hair length and style","Please call/message us at 0423 791 941 to make an appointment for up-do!"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  }
]

export const treatmentCategory=[
  {
    category:"Olaplex treatment",
    price:"$100.00",
    time:"1 hour",
    categoryDetails:["Price will vary depending on hair length and style"],
    categoryPrecautions:["*WE DO NOT DO HAIRS WITH EXTENSIONS"]
  }
]