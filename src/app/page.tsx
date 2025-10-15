import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to my site!</h1>
      <Link href="/about" className="text-blue-600 underline">
        Go to About Page
      </Link>
    </main>
  );
}
