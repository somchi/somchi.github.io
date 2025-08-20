export const ResumeContent = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-black">
      {/* Header */}
      <header className="text-center mb-8 border-b-2 border-gray-300 pb-6">
        <h1 className="text-4xl font-bold mb-2">FULLSTACK ENGINEER</h1>
        <h2 className="text-2xl text-blue-600 mb-4">Frontend & BaaS Focus</h2>
        <div className="flex justify-center gap-8 text-sm">
          <span>📧 contact@portfolio.dev</span>
          <span>📍 Remote / Global</span>
          <span>💼 5+ Years Experience</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-blue-600 border-b border-gray-300">PROFESSIONAL SUMMARY</h3>
        <p className="leading-relaxed">
          Passionate fullstack engineer with expertise in modern frontend frameworks and backend-as-a-service platforms. 
          Specialized in creating seamless user experiences while leveraging powerful cloud services for scalable backend solutions. 
          Proven track record of delivering high-quality, maintainable applications using React ecosystem, TypeScript, and cloud-native development.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-blue-600 border-b border-gray-300">TECHNICAL SKILLS</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Frontend</h4>
            <ul className="text-sm space-y-1">
              <li>• React 18, TypeScript, Next.js</li>
              <li>• TailwindCSS, Framer Motion</li>
              <li>• React Query, Zustand</li>
              <li>• Responsive Design, PWAs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Backend & BaaS</h4>
            <ul className="text-sm space-y-1">
              <li>• Node.js, Express, PostgreSQL</li>
              <li>• Supabase, Firebase, Prisma</li>
              <li>• RESTful APIs, GraphQL</li>
              <li>• AWS, Vercel, Netlify</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-blue-600 border-b border-gray-300">RECENT PROJECTS</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold text-lg">E-Commerce Dashboard</h4>
          <p className="text-sm text-gray-600 mb-2">2024 • Live Production</p>
          <ul className="text-sm space-y-1 mb-2">
            <li>• Full-stack dashboard with real-time analytics and reporting</li>
            <li>• Inventory management with low-stock alerts and automation</li>
            <li>• Customer relationship management (CRM) integration</li>
            <li>• Built with React, TypeScript, Node.js, PostgreSQL, Prisma</li>
          </ul>
          <p className="text-xs text-gray-500">Technologies: React, TypeScript, Node.js, PostgreSQL, Prisma, TailwindCSS</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-lg">Task Management SaaS</h4>
          <p className="text-sm text-gray-600 mb-2">2024 • Live Production</p>
          <ul className="text-sm space-y-1 mb-2">
            <li>• Modern project management tool with real-time collaboration</li>
            <li>• Drag-and-drop task management with advanced filtering</li>
            <li>• Team collaboration features with notifications</li>
            <li>• Deployed on Vercel with Supabase backend</li>
          </ul>
          <p className="text-xs text-gray-500">Technologies: Next.js, Supabase, React Query, Zustand, Framer Motion</p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-lg">AI Content Generator</h4>
          <p className="text-sm text-gray-600 mb-2">2023 • Live Production</p>
          <ul className="text-sm space-y-1 mb-2">
            <li>• AI-powered content creation platform using OpenAI API</li>
            <li>• SEO optimization with keyword analysis and scoring</li>
            <li>• Content scheduling and multi-platform publishing</li>
            <li>• Stripe integration for subscription billing</li>
          </ul>
          <p className="text-xs text-gray-500">Technologies: React, OpenAI API, Firebase, Stripe, Material-UI</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-blue-600 border-b border-gray-300">EXPERIENCE HIGHLIGHTS</h3>
        <ul className="space-y-2 text-sm">
          <li>• <strong>5+ years</strong> of full-stack development experience</li>
          <li>• <strong>Specialized expertise</strong> in React ecosystem and modern JavaScript/TypeScript</li>
          <li>• <strong>BaaS Integration</strong> - Expert in Supabase, Firebase, and cloud-native architectures</li>
          <li>• <strong>Performance Optimization</strong> - Database query optimization, code splitting, lazy loading</li>
          <li>• <strong>DevOps & Deployment</strong> - CI/CD pipelines, GitHub Actions, cloud deployments</li>
          <li>• <strong>UI/UX Focus</strong> - Modern design principles, accessibility, responsive design</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-xl font-bold mb-3 text-blue-600 border-b border-gray-300">EDUCATION & LEARNING</h3>
        <p className="text-sm">
          Continuous learner staying current with latest web technologies and best practices. 
          Active in open-source community and committed to writing clean, maintainable code.
        </p>
      </section>
    </div>
  );
};

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 text-center">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors print:hidden"
          >
            Print / Save as PDF
          </button>
        </div>
        <ResumeContent />
      </div>
    </div>
  );
}
