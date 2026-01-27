import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center px-4">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs text-slate-500 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for AI Application / Frontend Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900"
          >
            From Unity Developer
            <br />
            to <span className="text-sky-600">AI Application Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 text-sm md:text-base leading-relaxed text-slate-600 max-w-xl"
          >
            게임 클라이언트 최적화 경험을 바탕으로,
            AI 파이프라인과 프론트엔드 인터페이스를 함께 설계하는
            서비스 지향형 엔지니어입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-black transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[#d1d5db] bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Github size={16} />
              Github
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden md:block"
        >
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 text-xs text-slate-700 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wide text-slate-400">
                Profile Snapshot
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div className="space-y-1">
                <p className="text-slate-400">Background</p>
                <p className="text-slate-800">4년차 Unity(Client) Dev</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400">Focus</p>
                <p className="text-slate-800">AI 서비스 / 프론트엔드</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400">Strength</p>
                <p className="text-slate-800">E2E 파이프라인 설계</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400">Stack</p>
                <p className="text-slate-800">Unity · Python · React · LLM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
