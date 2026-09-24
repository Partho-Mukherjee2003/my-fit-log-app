import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0d0d0d] px-4 text-center">
      <h1 className="text-6xl font-extrabold text-[#b6f000]">404</h1>
      <p className="mb-6 mt-2 text-gray-400">Page not found</p>
      <Link
        href="/"
        className="rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black"
      >
        Go to Home
      </Link>
    </div>
  );
}
