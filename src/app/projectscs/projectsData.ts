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
        title: "Portfolio Website",
        date: "2025", 
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
        date: "2025", 
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
        date: "2023", 
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
        date: "2023", 
        blurb: "A professional-grade website for a student service organization",
        details: "This website was built as part of a volunteer project during my time as a part of the CWRU Association for Computing Machinery Women’s Student Chapter. Within the span of one summer, we as a group of 5 designed, implemented, and published an informational website for the CWRU MedWish student club. I specifically. focused on linking the website to Google Sheets to create a fully functional contact form, which was all a fun exploration in self-teaching. I also helped design the UI and overall layout and worked together as a team on all of the pages. It was a very rewarding project and a wonderful way to continue learning while also helping a non-profit student organization on campus. I love seeing how computer science can be used to help others, and reach so many people.",
        skills: ["Web Development", "UI/UX", "HTML"],
        link: "https://github.com/jmsBorowski/cwru-medwish-website",
        images: [
            "/CWRU MedWish.png",
          ],
    },
    {
        title: "Pizza Rush",
        date: "2023", 
        blurb: "A dynamic 3D first-person shooter game, pineapple pizza themed!",
        details: "This extremely controversial game began with one question: Should you put pineapple on a pizza? We bravely answered “yes!” to that question, and then decided to add a laser gun. In this quirky game, the player shoots at moving food items to collect the correct foods (dough, sauce, cheese, etc.) in the correct order with their laser gun. They then must use a different shooting mechanic to fling the ingredients on a spinning pizza stone to correctly put it all together. Sound exciting? You can play it instantly with the link below! As a part of this group, I was the UI/UX lead and focused on making the player UI on track with the pizza theme. I specifically made the UI for the grocery store scene and the spinning pizza scene. I loved incorporating little nods to the grocery store theme through the game, such as making the needed ingredients list reminiscent of a grocery store receipt! As our first dive into the world of 3D gaming, it was a wonderful of learning, laughing, and creating together. ",
        skills: ["UI/UX", "C#", "Unity"],
        link: "https://ecse-csds290.itch.io/pizza-rush-2023-team-10",
        images: [
            "/Pizza Rush 1.png",
            "/Pizza Rush 2.png",
            "/Pizza Rush 3.png",
          ],
    },
    {
        title: "Zen Garden Game",
        date: "2023", 
        blurb: "A contemplative, serene take on the classic Simon-Says game",
        details: "The Zen Garden Game was made independently with all assents and functionality created by me. I loved getting to dive into the art-side of video game development especially, getting to hand make every asset out of pixel art! To add to the relaxing tone of the game, I included a list of meaningful quotes that are selected at random with each turn the player takes. Following along with “Simon”, the player gets to see a small animation play with every tile clicked. As the game says: “enjoy the little things”. I hope this game allows players to take a step back and relax with a simple brain tease.",
        skills: ["Videogame Development", "Pixel Art", "C#"],
        link: "https://jmsborowski.github.io/",
        images: [
            "/Zen Garden 1.png",
            "/Zen Garden 2.png",
          ],
    },
    {
        title: "Rhett & Link Video Game",
        date: "2022", 
        blurb: "A two-player pixel-art fan game in GameMaker Studio",
        details: "This 2-D pixel art videogame was created entirely independently as a final project for ARTS Intro to Video Game Design. This was the first videogame course I ever took, ironically part of my art minor instead of a computer science course, and it is what inspired me to add a video game design minor to my list of degrees! I loved getting to wholly devote myself to a project and build it from the ground up. This project required self-teaching to accomplish the scope I wanted to fulfil, and it was such a wonderful time of discovery. I learned how to compose simple background music, create and animate pixel art, and code in GameMaker Studio. This game was inspired by my freshman year love of the YouTube channel Good Mythical Morning, which features co-hosts Rhett and Link. I incorporated their friendship into the game mechanics of my game by making the mini-games two-player games and using friendly competition to invigorate the players! I was featured for this game and course on the university website here: https://case.edu/news/class-spotlight-introduction-video-game-design",
        skills: ["Videogame Development", "Pixel Art", "C#", "GameMaker Studio"],
        link: "https://github.com/jmsBorowski/ARTS286",
        images: [
            "/GMM 1.png",
            "/GMM 2.png",
            "/GMM 3.png",
            "/GMM 4.png",
            "/GMM 5.png",
          ],
    },
  ];
