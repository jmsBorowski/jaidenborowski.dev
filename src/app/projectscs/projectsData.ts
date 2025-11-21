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
        blurb: "The website you are exploring right now!",
        details: "This portfolio website is my cozy little corner of the internet, a place where I get to experiment, tinker, and show off the projects I’m most proud of. Thank you for stopping by! Built with Next.js, React, and Tailwind, it was designed to be clean and easy to explore. Instead of a static resume, I wanted a space where I could genuinely show how I think and share what I make. It features a minimalist Home page, a dynamic Projects section, an editorial-style About page, and a clean Contact page. I continue to update and expand it as I grow, making this site an always up-to-date snapshot of my skills and interests.",
        skills: ["Web Development", "Next.js", "React", "Tailwind", "UI/UX", "Responsive Design"],
        link: "https://www.jaidenborowski.dev",
        images: [
            "/Portfolio Website 1.png",
            "/Portfolio Website 2.png",
          ],
    },
    {
        title: "Agora: The New Student Marketplace",
        blurb: "A sustainability-focused marketplace app for the CWRU community",
        details: "Agora was developed by a 7-person team as our senior capstone project, an adventure into app development, teamwork, and realizing just how many shades of CWRU Blue exist. I worked as the UI Lead, designing CWRU-themed interfaces that aligned with our goal of encouraging sustainable item reuse within the campus community. I designed the messaging interface and collaborated on its integration with AWS Lambda and DynamoDB. We also incorporated a swipe-based item browsing feature to help users quickly filter through posts (imagine Tinder but for used office items and forgotten CWRU merch), a small detail that made the app feel more modern and intuitive. Agora promotes sustainability by allowing students, faculty, and staff to securely swap, sell, and reuse items through authenticated campus-based interactions. Ultimately: Sustainable, secure, and unexpectedly fun to use.",
        skills: ["App Development", "UI/UX Design", "HTML", "Java", "CSS", "AWS", "VS Code", "GitHub", "Version Control", "Team Leadership", "Collaboration"],
        link: "https://github.com/100KStarsun/2025-Senior-Project",
        images: [
            "/Agora App 1.png",
          ],
    },
    {
        title: "Bad Trip Video Game",
        blurb: "A visually immersive, puzzle-driven psychological horror game",
        details: "Bad Trip was created as part of a 10-person development team in the Advanced Game Development course at CWRU. As the UI Lead, I designed and programmed the user interface to create a cohesive, unsettling, and intuitive gameplay experience. I focused on building UI interactions that supported the game’s core themes (sanity, perception, and environmental puzzling) while ensuring players could navigate puzzles and game mechanics without breaking immersion. Because the game centers on perception, tension, and figuring things out under pressure, the UI needed to feel clear without breaking the mood. I developed and implemented the UI using Unity, making sure the visual atmosphere and the game mechanics complemented the unsettling vibe we were going for. It’s eerie and challenging, but extremely fun, one of my favorite team projects ever!",
        skills: ["Game Development", "Unity", "C#", "HTML", "Java", "Team Leadership", "GitHub", "Version Control", "Creative Collaboration"],
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
