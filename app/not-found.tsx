import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-6 bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
        <p className="text-lg mb-6">It might have been removed or you may have entered the wrong URL.</p>
        <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Go to Home
        </Link>
        <br />
        <Link href="/working" className="mt-2 inline-block text-blue-600 hover:underline">
          Or view my completed task
        </Link>
      </div>
    </main>
  );
}