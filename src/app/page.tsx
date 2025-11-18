import Link from "next/link";

export default function HomePage() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-start bg-gradient-to-b from-blue-100 to-green-50 text-left pl-[15%]">
      <h1 className="text-5xl font-bold mb-6 text-black">Hi</h1>
      <h1 className="text-5xl font-bold mb-6 text-black">I’m Jaiden Borowski</h1>
      <p className="text-lg text-gray-600 mb-10">
        UI/UX Developer, Video Game Designer, Artist 
      </p>

      <div className="flex space-x-6">
        <a
          href="/about"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-500 transition"
        >
          About
        </a>
        <a
          href="/projectscs"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-500 transition"
        >
          CS Projects
        </a>
        <a
          href="/projectsart"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-500 transition"
        >
          Art Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-500 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
