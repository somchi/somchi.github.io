import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar, Star, GitFork } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
  status: string;
  year: string;
  features?: string[];
  challenges?: string[];
  stats?: {
    stars?: number;
    forks?: number;
    commits?: number;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
            {project.title}
          </DialogTitle>
          <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.year}
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
              {project.status}
            </Badge>
            {project.stats && (
              <div className="flex items-center gap-3 ml-auto">
                {project.stats.stars && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stats.stars}
                  </div>
                )}
                {project.stats.forks && (
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.stats.forks}
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Image */}
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-slate-400 text-sm">Project Screenshot</div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Description</h3>
              <p className="text-slate-600 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-slate-200 text-slate-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
              {project.demo && (
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>

        {project.features && (
          <div className="mt-6">
            <h3 className="font-semibold text-slate-900 mb-3">Key Features</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && (
          <div className="mt-6">
            <h3 className="font-semibold text-slate-900 mb-3">Technical Challenges</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
