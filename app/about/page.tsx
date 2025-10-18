import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-10">
      <AboutSection />
    </main>
  );
}