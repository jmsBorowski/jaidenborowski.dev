export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900 px-[15%] py-20">

      {/* Top Section */}
      <section className="flex flex-col md:flex-row items-start gap-12">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">About</h1>

          <p className="text-lg leading-relaxed mb-6">
            I'm Jaiden — a developer, designer, and problem solver.
            I’ve always loved being at the intersection of creativity and technology,
            and I’m the kind of person who jumps in and learns by doing.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Fast forward to today and I’ve explored a wide range of fields:
            web development, front-end engineering, UI/UX design, and more. Every step — big or small — has shaped the
            way I create and build.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            What excites me most is building things that matter. I’m not interested
            in making things just for the sake of it — I care about solving real
            problems, improving experiences, and creating products that help people
            do something better, faster, or more meaningfully.
          </p>

          <p className="italic text-lg leading-relaxed mb-6">
            “QUOTE”
            — SOURCE
          </p>

          <p className="text-lg leading-relaxed">
            That quote resonates with me because REASON.
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

        <p className="mb-4 text-lg">Degree in _______</p>
        <p className="mb-8 text-lg">
          X years of experience in Design / Development / Product.
        </p>

        <ul className="space-y-2 text-lg">
          <li>• ___ years experience in Web Design</li>
          <li>• ___ years experience in UI/UX</li>
          <li>• ___ years experience in Front-end Development</li>
          <li>• ___ years experience in Product Management</li>
          <li>• ___ years experience in Webflow / Framer / etc.</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          UI/UX Design / Product Strategy / User Research / Agile Workflows /
          Collaboration / HTML & CSS / React / Next.js / Webflow / Framer /
          Design Systems / Prototyping / Graphic Design / and more
        </p>
      </section>
    </main>
  );
}
