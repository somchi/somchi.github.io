'use client';

import { Badge } from './_components/ui/badge';
import { Button } from './_components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './_components/ui/card';
import {
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Calendar,
  Star,
  GitFork,
  Menu,
  X,
} from 'lucide-react';
import { useState, useEffect, useContext } from 'react';
import { useTypingAnimation } from './hooks/use-typing-animation';
import ProjectModal from './_components/ProjectModal';
import ThemeToggle from './_components/ThemeToggle';
import ContactForm from './_components/ContactForm';
import ScrollToTop from './_components/ScrollToTop';
import ResumeModal from './_components/ResumeModal';
import { OlderProjects, RecentProjects, Skills } from './libs/constants';
import { useScroll } from './hooks/useScroll';
import { Nav } from './_components/Nav';
import { AppContext } from './context/provider';
import { SET_RESUME_MODAL_OPEN } from './context/reducer';

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof RecentProjects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollToSection } = useScroll();
  const { state, dispatch } = useContext(AppContext);

  const typingText = useTypingAnimation({
    text: 'Frontend Heavy',
    speed: 100,
    delay: 1000,
  });

  // Handle scroll to track active section

  const openProjectModal = (project: (typeof RecentProjects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const setIsResumeModalOpen = (isOpen: boolean) => {
    dispatch({
      type: SET_RESUME_MODAL_OPEN,
      payload: { isResumeModalOpen: isOpen },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}

      <Nav />
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full px-4 py-2 mb-8 transition-colors duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-600 dark:text-slate-300 text-sm">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
              Chisom Juliet Nweze
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent min-h-[1.2em]">
                {typingText.displayText}
                {!typingText.isComplete && (
                  <span className="animate-pulse">|</span>
                )}
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Fullstack Engineer with 8+ years of experience building scalable,
              user-centric web applications with a strong focus on frontend
              architecture and performance. Skilled in React, Next.js,
              TypeScript, and modern cloud-native deployments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-8"
                onClick={() =>
                  window.open('https://github.com/somchi', '_blank')
                }
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8"
                onClick={() => setIsResumeModalOpen(true)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Get Resume
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {Skills.slice(0, 6).map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="bg-white/50 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-300 cursor-pointer"
                >
                  {skill.name}
                </Badge>
              ))}
              <Badge
                variant="secondary"
                className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
              >
                +{Skills.length - 6} more
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                About Me
              </h2>
              <div className="prose prose-lg text-slate-600 dark:text-slate-300 max-w-none transition-colors duration-300">
                <p className="mb-4">
                  I&apos;m a passionate fullstack engineer with 8+ years of
                  experience building scalable, user-centric web applications
                  with a strong focus on frontend architecture and performance.
                  I have a proven track record of leading development teams and
                  delivering complex features across React and backend APIs.
                </p>
                <p className="mb-6">
                  My expertise spans modern frontend ecosystems (React, Next.js,
                  TypeScript), backend frameworks (NestJS, Django, Flask), and
                  cloud-native deployments. I&apos;m passionate about clean
                  code, system design, developer experience, and mentoring
                  junior engineers.
                </p>
              </div>

              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>8+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {Skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Recent Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300">
              Here are some of my latest projects showcasing modern web
              development practices and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RecentProjects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {project.stats && (
                      <>
                        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                          <Star className="w-3 h-3" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                          <GitFork className="w-3 h-3" />
                          {project.stats.forks}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-500 dark:text-slate-400 text-sm">
                        {project.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400"
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.demo) window.open(project.demo, '_blank');
                      }}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Older Projects */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Previous Work
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                A collection of earlier projects that showcase my learning
                journey and evolution as a developer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {OlderProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg dark:text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-500 dark:text-slate-400">
                          {project.year}
                        </CardDescription>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Portfolio. Built with React & TailwindCSS.
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => window.open('https://github.com', '_blank')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={state.isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        pdfUrl="https://drive.google.com/file/d/1ndij6skyJOFJlnAVBaoPz5-i6gVNqDbK/preview"
        fileName="Chisom_Nweze-Resume.pdf"
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
