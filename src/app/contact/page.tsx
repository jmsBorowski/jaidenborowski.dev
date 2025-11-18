"use client";

export default function ContactPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 bg-white">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h1>
  
        <p className="text-lg text-gray-700 max-w-xl text-center mb-10">
          Have a question, project idea, or just want to connect?  
          Fill out the form below or reach out via social links in the footer.
        </p>
  
        <form
          className="w-full max-w-md bg-white shadow-md rounded-xl p-8 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>
    );
  }
  