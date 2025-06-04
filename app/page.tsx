import Image from 'next/image';
import AnimatedSection from './components/AnimatedSection';
import TestimonialSlider from './components/TestimonialSlider';
import NewsletterSignup from './components/NewsletterSignup';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 sm:px-6 py-8 sm:py-10 scroll-smooth">

      {/* 🔷 Banner Section */}
      <AnimatedSection>
        <div className="mb-8">
          <Image
            src="/aws-banner.png"
            alt="AWS DevSecOps Banner"
            width={1280}
            height={600}
            sizes="(max-width: 768px) 100vw, 1280px"
            className="rounded-xl shadow mx-auto"
            priority
          />
        </div>
      </AnimatedSection>

      {/* 🔷 Header Section */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto text-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Cloud Confidence. Delivered.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Secure, Scalable AWS Services with Justine Tekang — Certified DevSecOps & Cloud Automation Expert
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="bg-blue-600 text-white py-3 px-6 rounded-xl text-lg hover:bg-blue-700 text-center"
            >
              Book a Free Assessment
            </a>
            <a
              href="/brochure.pdf"
              className="border border-blue-600 text-blue-600 py-3 px-6 rounded-xl text-lg hover:bg-blue-50 text-center"
            >
              Download Brochure
            </a>
          </div>
        </section>
      </AnimatedSection>

      {/* 🔷 Services Section */}
      <AnimatedSection>
        <section id="services" className="max-w-5xl mx-auto mb-16 px-2 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Launch & Migrate',
                description: 'Secure AWS starter migration services for startups and small businesses.',
                price: 'From $3,500',
              },
              {
                title: 'Secure & Scale',
                description: 'DevSecOps pipelines, automation, and compliance for growing teams.',
                price: '$8,000 – $12,000',
              },
              {
                title: 'Operate & Optimize',
                description: 'Managed AWS services, cost audits, and 24/7 monitoring.',
                price: 'Starting at $1,250/month',
              },
            ].map(({ title, description, price }) => (
              <div key={title} className="p-6 border rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm sm:text-base">{description}</p>
                <p className="mt-2 font-medium">{price}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* 🔷 Why Work With Me */}
      <AnimatedSection>
        <section className="max-w-3xl mx-auto text-center mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Work With Me?</h2>
          <ul className="list-disc list-inside text-left text-sm sm:text-base leading-relaxed">
            <li>7+ years in cloud architecture, DevOps, and automation</li>
            <li>AWS & Microsoft certified</li>
            <li>Multilingual support – English, French, Dutch</li>
            <li>Proven success in healthcare, fintech, and e-commerce</li>
          </ul>
        </section>
      </AnimatedSection>

      {/* 🔷 Testimonials */}
      <AnimatedSection>
        <section id="testimonials" className="max-w-3xl mx-auto px-4 mb-16 scroll-mt-24">
          <TestimonialSlider />
        </section>
      </AnimatedSection>
      {/* 🔷 Certifications & Expertise */}
<AnimatedSection>
  <section id="certifications" className="max-w-5xl mx-auto text-center px-4 mb-16 scroll-mt-24">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Certifications & Expertise</h2>
    <p className="text-base sm:text-lg text-gray-700 mb-10">
      AWS and Microsoft certifications that back every architecture decision and automation pipeline I deliver.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* AWS Certification */}
      <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
        <img
          src="https://images.credly.com/size/340x340/images/6840cb1c-2957-4d8f-82f8-8b9832128b3c/image.png"
          alt="AWS Certified Solutions Architect"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">AWS Certified Solutions Architect – Associate</h3>
        <a
          href="https://www.credly.com/badges/04c47a15-71b1-48db-a5bc-48b427b521e3/linked_in"
          target="_blank"
          className="text-blue-600 hover:underline inline-block mt-2"
        >
          View Credential
        </a>
      </div>

      {/* Microsoft Certifications */}
      <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
        <img
          src="https://learn.microsoft.com/favicon.ico"
          alt="Microsoft Certifications"
          className="w-12 h-12 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold">Microsoft Azure & Power Platform</h3>
        <p className="text-gray-500">DevOps, AI Engineer, Power BI Analyst</p>
        <a
          href="https://learn.microsoft.com/en-us/users/fnulonglajustinetekang-3036/credentials"
          target="_blank"
          className="text-blue-600 hover:underline inline-block mt-2"
        >
          View Credentials
        </a>
      </div>
    </div>
  </section>
</AnimatedSection>


      {/* 🔷 Contact */}
      <AnimatedSection>
        <section id="contact" className="max-w-2xl mx-auto text-center px-2 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Get In Touch</h2>
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              Email:{' '}
              <a href="mailto:info@jutellane.com" className="text-blue-600 break-all">
                info@jutellane.com
              </a>
            </p>
            <p>Phone: +1 405.934.5864</p>
            <p>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/longlatjustine" className="text-blue-600">
                longlatjustine
              </a>
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* 🔷 Blog & Newsletter */}
      <AnimatedSection>
        <section id="blog" className="scroll-mt-20 max-w-3xl mx-auto text-center px-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            🚧 Our blog and newsletter are coming soon! You’ll soon be able to explore in-depth insights,
            DevSecOps tips, and cloud automation tutorials curated by Justine Tekang.
          </p>
          <NewsletterSignup />
        </section>
      </AnimatedSection>
      
    </main>
  );
}
