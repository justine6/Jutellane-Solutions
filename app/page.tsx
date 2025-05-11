export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Cloud Confidence. Delivered.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Secure, Scalable AWS Services with Justine Tekang — Certified DevSecOps & Cloud Automation Expert
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a href="#contact" className="bg-blue-600 text-white py-2 px-6 rounded-xl text-lg hover:bg-blue-700">
            Book a Free Assessment
          </a>
          <a href="/brochure.pdf" className="border border-blue-600 text-blue-600 py-2 px-6 rounded-xl text-lg hover:bg-blue-50">
            Download Brochure
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Launch & Migrate</h3>
            <p>Secure AWS starter migration services for startups and small businesses.</p>
            <p className="mt-2 font-medium">From $3,500</p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Secure & Scale</h3>
            <p>DevSecOps pipelines, automation, and compliance for growing teams.</p>
            <p className="mt-2 font-medium">$8,000 – $12,000</p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Operate & Optimize</h3>
            <p>Managed AWS services, cost audits, and 24/7 monitoring.</p>
            <p className="mt-2 font-medium">Starting at $1,250/month</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Why Work With Me?</h2>
        <ul className="list-disc list-inside text-left">
          <li>7+ years in cloud architecture, DevOps, and automation</li>
          <li>AWS & Microsoft certified</li>
          <li>Multilingual support – English, French, Dutch</li>
          <li>Proven success in healthcare, fintech, and e-commerce</li>
        </ul>
      </section>

      <section id="contact" className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p>Email: <a href="mailto:justinelongla@yahoo.com" className="text-blue-600">justinelongla@yahoo.com</a></p>
        <p>Phone: +1 405.934.5864</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/longlatjustine" className="text-blue-600">longlatjustine</a></p>
      </section>
    </main>
  );
}
