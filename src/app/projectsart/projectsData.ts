export interface Project {
    title: string;
    date: string; 
    blurb: string;
    details: string;
    skills: string[];
    link: string;
    images: string[];
  }
  
  export const projects: Project[] = [
    {
        title: "Button Maker Tutorial",
        date: "2025", 
        blurb: "Visual guide for the button maker machine at think[box]",
        details: "This project was an interative design process that culminated in a helpful, child-friendly guide! This was made specifically for the button maker at think[box] during my time as a Prototyping Technician.",
        skills: ["Tutorial Building", "Digital Art", "Iterative Process", "Laminator"],
        link: "",
        images: [
            "/ButtonMaker1.png",
            "/ButtonMaker2.png",
          ],
    },
    {
        title: "Fantasy Dice Tower",
        date: "2025", 
        blurb: "Wooden dice tower with engravings (10\"x4\"x4\")",
        details: "Functional dice tower with original designs engraved and painted on the sides. I digitally draw all aspects of this design, then combined those designs with a basic dice tower vector design to create this 3-D piece. Each wooden board within the tower is covered with fabric to muffle the die as it rolls (hopefully to a nat 20!).",
        skills: ["Laser Cutter", "CorelDraw", "Digital Art", "Painting"],
        link: "",
        images: [
            "/DiceTower1.png",
            "/DiceTower2.png",
            "/DiceTower3.png",
            "/DiceTower4.png",
          ],
    },
    {
        title: "Community Taco Night",
        date: "2025", 
        blurb: "Colored Pencil on Paper (24\"x18\")",
        details: "This piece was developed over the course of a semester as part of my Art Studio minor. I focused on color, composition, and realistic rendering. I loved using color playfully to convey the fun mood and atmosphere of that memory.",
        skills: ["Color Pencil", "Composition", "Rendering"],
        link: "",
        images: [
            "/TacoNight1.png",
          ],
    },
    {
        title: "Self Portrait",
        date: "2023", 
        blurb: "Graphite on Paper (36\"x24\")",
        details: "This piece was a study on rendering within a grayscale. Based from a photograph taken by a fellow art student, I focused on dramatic shading to tell a story (where are the stairs going..?). For some parts I took a more realistic approach (such as the eyes) and for others I gave them a subtle hint of abstraction (such as the hair).",
        skills: ["Rendering", "Graphite"],
        link: "",
        images: [
            "/SelfPortrait1.png",
          ],
    },
    {
        title: "Playing with Geese!",
        date: "2023", 
        blurb: "Digital Art",
        details: "For this piece, I focused on abstracting a 3-D memory into simplified cartoon shapes. I loved giving these simple shapes connection in a way that gave them life.",
        skills: ["Digital Art", "Cartoon Drawing"],
        link: "",
        images: [
            "/PlayingWithGeese1.png",
          ],
    },
    {
        title: "Tomato Stamp Shirt",
        date: "2023", 
        blurb: "Digital Art, Heat Press Vinyl, Coton T-Shirt",
        details: "For this project, I fully designed the Tomato drawing based on a lino-cut stamp aesthetic. I then processed this digital drawing in CorelDraw to convert it into vector shapes for the Cricut machine. After cuting the heat press vinyl, I appropriately weeded the vinyl and successfully applied it, resulting in this unique shirt.",
        skills: ["Digital Art", "Cricut", "Vinyl Cutting", "Heat Press"], 
        link: "",
        images: [
            "/TomatoStamp1.png",
            "/TomatoStamp2.png",
          ],
    },
    {
        title: "Lord of the Rings Light Box",
        date: "2024", 
        blurb: "Acrylic, 1/8\" Wood, Circuit Board",
        details: "I designed and constructed this light box based off a Lord of the Rings aesthetic. I designed the acrylic piece digitally, then processed it in CorelDraw, where I also completed the rest of the design. Additionally, I wired a simple circuit board to make the lamp function with the press of a button.",
        skills: ["Laser Cutter", "Circut Board Wiring", "Digital Art"],
        link: "",
        images: [
            "/LOTR1.png",
          ],
    },
    {
        title: "Landmark, The Pink Palace Apartments",
        date: "2024", 
        blurb: "Digital Art, Inktober Day 31",
        details: "For years I have completed Inktober as a fun way to challenge myself creatively. This Inktober drawing was completed as the final day of Inktober 2024. With the prompt \"Landmark\" and having recently finished rewatching Coraline, I decided to try my hand at the iconic Pink Palace from the movie.",
        skills: ["Digital Art", "Consistency"],
        link: "",
        images: [
            "/InktoberLandmark1.png",
          ],
    },
  ];
