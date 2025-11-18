export interface Project {
    title: string;
    blurb: string;
    details: string;
    skills: string[];
    link: string;
    images: string[];
  }
  
  export const projects: Project[] = [
    {
        title: "Portfolio Website",
        blurb: "The website you are currently viewing!",
        details: "This portfolio website was developed with BLANK, BLANK, and BLANK. It includes a minimalist Home page, detailed Projects page, simplified About Me page, and a Contact page. Designed to be an aesthetically pleasing and entertaining way to learn more than what my resume can show, this website is constantly updated to be a up-to-date way to learn all about my skills and interests!",
        skills: ["Web Development", "Next.js", "React", "Tailwind"],
        link: "https://www.jaidenborowski.dev",
        images: [
            "/Portfolio Website 1.png",
            "/Portfolio Website 2.png",
          ],
    },
    {
        title: "Agora: The New Student Marketplace",
        blurb: "Android app for sustainability within the CWRU community",
        details: "This application was designed as part of a 7-person team as a senior capstone project. I was the UI Lead, focusing on the conception and implementation of Case Western Reserve University themed visuals. I researched and designed the user interface of the chat function which used AWS Lambda functions to connect with the DynamoDB database. This app is intended to be used a sustainability-promoting resource that would allow members of the CWRU community to swap items or sell used items securely with other CWRU members. We also incorporated a swiping element to increase engagement that allowed users to filter items and swipe through to quickly select items, similar to Tinder.",
        skills: ["App Development", "HTML", "Java", "CSS", "VS Code", "GitHub", "Version Control", "Teamwork", "Leadership"],
        link: "https://github.com/100KStarsun/2025-Senior-Project",
        images: [
            "/Agora App 1.png",
          ],
    },
    {
        title: "Bad Trip Video Game",
        blurb: "Visually immersive, puzzle-based strategy videogame",
        details: "Within a 10-person team, I was the UI Lead, focusing on the design and programming of an engaging and clear user interface. This video game was built over the course of a semester for Advanced Game Development at CWRU. This game played with themes of sanity, puzzling, and horror.",
        skills: ["Videogame Development", "Unity", "HTML", "Java", "Leadership", "Teamwork", "GitHub", "Version Control"],
        link: "https://cwru-ecse390.itch.io/bad-trip-f2023-team-2",
        images: [
            "/Bad Trip 1.png",
            "/Bad Trip 2.png",
            "/Bad Trip 3.png",
            "/Bad Trip 4.png",
            "/Bad Trip 5.png",
            "/Bad Trip 6.png",
          ],
      
    },
    {
        title: "MedWish Website",
        blurb: "Website for student org",
        details: "Full detailed explanation of your game, development, story, etc...",
        skills: ["C#", "Unity"],
        link: "https://github.com/example/game",
        images: [
            "/CWRU MedWish.png",
          ],
      
    },
    {
        title: "Pizza Rush",
        blurb: "Video GAme",
        details: "Full detailed explanation of your game, development, story, etc...",
        skills: ["C#", "Unity"],
        link: "https://github.com/example/game",
        images: [
            "/Pizza Rush 1.png",
            "/Pizza Rush 2.png",
            "/Pizza Rush 3.png",
          ],
      
    },
    {
        title: "Zen Garden Game",
        blurb: "Video GAme",
        details: "Full detailed explanation of your game, development, story, etc...",
        skills: ["C#", "Unity"],
        link: "https://github.com/example/game",
        images: [
            "/Zen Garden 1.png",
            "/Zen Garden 2.png",
          ],
      
    },
    {
        title: "Rhett & Link Video Game",
        blurb: "Video GAme",
        details: "Full detailed explanation of your game, development, story, etc...",
        skills: ["C#", "Unity"],
        link: "https://github.com/example/game",
        images: [
            "/GMM 1.png",
            "/GMM 2.png",
            "/GMM 3.png",
            "/GMM 4.png",
            "/GMM 5.png",
          ],
      
    },
  ];
