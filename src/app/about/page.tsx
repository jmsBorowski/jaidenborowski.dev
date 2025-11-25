export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900 px-[15%] py-20">

      {/* Top Section */}
      <section className="flex flex-col md:flex-row items-start gap-12">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>

          <p className="text-base leading-relaxed mb-6">
            I'm Jaiden: a creative, a critical thinker, and a problem solver who's still
            figuring out which exact corner of tech I'll call home. Whether it ends up
            being front-end development, software engineering, or even video game design,
            I've always known I belong somewhere in the space where creativity meets
            technology. I learn best by diving in, breaking things, fixing them, and
            teaching myself as I go.
          </p>

          <p className="text-base leading-relaxed mb-6">
            My tech origin story started in the most unexpected way, with Cuties
            oranges. In middle school, I joined the computer science club purely because 
            they gave out free Cuties oranges. A group
            of us went every week and treated it like a mission, we collected every
            single tiny sticker like they were rare Pokémon cards. But somewhere between
            hoarding citrus and playing Geometry Dash knockoffs on Scratch, I got pulled into something deeper.
            I realized it was way more fun to make my own artwork move, react, and
            come to life than to just play with someone else's work. What started as a quest for free fruit ended up becoming the spark
            that made me fall in love with building things.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Fast forward to today, and that tiny spark from middle school has grown into a
            full path. I studied Computer Science and Cognitive Science in college, with
            minors in Art Studio and Computer Game Design. Basically the perfect mix for
            someone who loves when logic, creativity, and human behavior all collide! Since
            then, I've built all kinds of things: websites, small games, interactive
            applications. I'm especially drawn to front-end development, UI work, and game
            design, basically anything that lets me shape how people experience and interact with
            technology in a meaningful way. 
          </p>

          <p className="text-base leading-relaxed mb-6">
            What excites me most is creating things people will actually interact with,
            whether it's something fun, something useful, or something that quietly makes
            someone's day a little better. I love the challenge of turning ideas into
            experiences, of designing things that feel intentional and
            meaningful. If someone walks away feeling delighted, understood, or simply
            able to do something they couldn't before, that's the kind of work that fuels
            me.
          </p>

          <p className="italic text-5xl leading-relaxed tracking-wide text-gray-700 mb-6">
            “I am among those who think that science has great beauty.”  
            <br />
            — Marie Curie
          </p>

          <p className="text-base leading-relaxed">
            That quote resonates with me because I've always seen technology and creativity
            as two sides of the same coin. To me, code, design, and problem-solving all
            carry their own kind of beauty, in the intention and
            the way they come together to make something people can truly experience. It's
            a reminder that building things isn't just technical work; it's meaningful,
            expressive, and often unexpectedly artistic.
          </p>
        </div>

        {/* Profile Image */}
        <img
          src="/LinkedIn Headshot.png"
          alt="Profile Photo"
          className="w-60 h-60 object-cover rounded-xl shadow-lg md:sticky md:top-20"
        />
      </section>

      {/* EXPERIENCE */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <p className="mb-4 text-lg">
          B.A. in Computer Science
          B.A. in Cognitive Science
          Minors in Art Studio & Computer Game Design
        </p>

        <ul className="space-y-2 text-lg">
          <li></li>
          <li>• Designed and built multiple websites and interactive experiences as part of coursework and personal projects</li>
          <li>• Developed UI/UX solutions rooted in cognitive science principles and user behavior</li>
          <li>• Built front-end interfaces with React, Next.js, JavaScript/TypeScript, and Tailwind</li>
          <li>• Applied product thinking across capstones, group work, and game design projects</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          UI/UX Design / User Research / Agile Workflows / Videogame Development / 
          Collaboration / HTML & CSS / React / Next.js / Webflow /
          Design Systems / Prototyping / Graphic Design / and more
        </p>
      </section>
    </main>
  );
}
