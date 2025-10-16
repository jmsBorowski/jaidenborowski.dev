export default function CSProjectsPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">CS Projects</h1>
  
        <p className="text-lg text-gray-700 max-w-xl text-center mb-10">
          Here are a few of the projects I’ve worked on.  
          More coming soon!
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Example Project Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Portfolio Website
            </h2>
            <p className="text-gray-700 mb-4">
              A personal website built with Next.js and Tailwind CSS to showcase my work and experience.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
  
          {/* Example Project Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Weather App
            </h2>
            <p className="text-gray-700 mb-4">
              A simple weather dashboard that fetches live data from the OpenWeather API.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
  
          {/* Example Project Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Game Prototype
            </h2>
            <p className="text-gray-700 mb-4">
              A 2D platformer prototype built in Unity, exploring physics and character movement systems.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
      </main>
    );
  }
  