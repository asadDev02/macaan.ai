import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-6 bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Page Under Development</h1>
        <p className="text-lg mb-6">The page you&apos;re looking for is currently under development.</p>
        <p className="text-lg mb-6">You can view my completed task here:</p>
        <Link href="/working" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          View Task
        </Link>
      </div>
    </main>
  );
}