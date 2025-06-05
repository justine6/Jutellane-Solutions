"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16 py-6 text-center text-sm text-gray-600 animate-fadeInUp">
      <p>
        &copy; {new Date().getFullYear()} Jutellane Solutions. All rights
        reserved.
      </p>
      <div className="mt-2 space-x-2">
        <a
          href="mailto:justinelongla@yahoo.com"
          className="text-blue-600 hover:underline"
        >
          justinelongla@yahoo.com
        </a>
        <span>·</span>
        <a
          href="https://www.linkedin.com/in/longlatjustine"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
