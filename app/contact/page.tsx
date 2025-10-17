"use client"; // important to use hooks

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
    } else {
      setStatus("❌ Failed to send message.");
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Your name" className="w-full border px-4 py-2 rounded-md" />
        <input name="email" type="email" placeholder="you@example.com" className="w-full border px-4 py-2 rounded-md" />
        <textarea name="message" rows={4} placeholder="Your message" className="w-full border px-4 py-2 rounded-md" />
        <button type="submit" className="bg-[#0047a1] text-white px-6 py-2 rounded-md">Send</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}
