import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  gradient: string;
  link?: string;
  github?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  impact,
  tech,
  gradient,
  link,
  github,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-[#e5e7eb] bg-white p-5 md:p-6 transition-transform group relative overflow-hidden shadow-sm"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3.5">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md border border-[#e5e7eb] hover:bg-slate-50 transition-colors bg-white"
              >
                <Github size={18} className="text-slate-500 hover:text-slate-700 transition-colors" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md border border-[#e5e7eb] hover:bg-slate-50 transition-colors bg-white"
              >
                <ExternalLink size={18} className="text-slate-500 hover:text-slate-700 transition-colors" />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-700 mb-3 leading-relaxed text-sm">{description}</p>

        <div className="mb-4 rounded-md border border-dashed border-[#e5e7eb] bg-slate-50 px-3 py-2">
          <p className="text-xs text-slate-700">💡 {impact}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full border border-[#e5e7eb] text-slate-700 bg-slate-50"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
