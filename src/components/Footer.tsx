import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-10 px-4 border-t border-[#e5e7eb] bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">손사장</h3>
            <p className="text-xs text-slate-500">AI Application Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="p-2 rounded-md border border-[#e5e7eb] hover:bg-slate-100 transition-colors bg-white"
                aria-label={social.label}
              >
                <social.icon size={18} className="text-slate-500 hover:text-slate-700 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by 손사장
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 pt-6 border-t border-[#e5e7eb] text-center text-[11px] text-slate-500"
        >
          <p>© 2026 손사장. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, Tailwind CSS & Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
}
