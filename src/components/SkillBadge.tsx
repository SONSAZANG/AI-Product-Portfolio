import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  icon: LucideIcon;
  name: string;
  color: string;
  delay?: number;
}

export default function SkillBadge({ icon: Icon, name, color, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="rounded-lg border border-[#e5e7eb] bg-white p-4 flex flex-col items-center gap-3 hover:border-slate-400 transition-colors cursor-default group shadow-sm"
    >
      <div
        className="p-2.5 rounded-md bg-slate-50 group-hover:bg-slate-100 transition-colors"
      >
        <Icon size={22} className="text-slate-700" />
      </div>
      <span className="text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors text-center">
        {name}
      </span>
    </motion.div>
  );
}
