import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, Zap } from 'lucide-react';
import SkillBadge from './SkillBadge';

export default function About() {
  const skills = [
    { icon: Code2, name: 'Unity / C#', color: '' },
    { icon: Cpu, name: 'Python / FastAPI', color: '' },
    { icon: Layers, name: 'React / TS', color: '' },
    { icon: Zap, name: 'GenAI / LLM', color: '' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-sm font-medium text-slate-500 mb-2">About</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
            Unity에서 시작해, AI 서비스로 확장 중입니다.
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
            4년간 모바일 게임 클라이언트와 실시간 시스템을 다루면서
            성능 최적화와 사용자 경험에 집중해 왔습니다.
            지금은 그 경험을 바탕으로, AI 파이프라인과 웹 인터페이스를
            연결하는 실용적인 서비스를 만드는 데 집중하고 있습니다.
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-slate-800">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <SkillBadge key={skill.name} {...skill} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-[#e5e7eb] bg-white p-6 md:p-7 shadow-sm"
        >
          <h3 className="text-sm font-medium text-slate-500 mb-4">Journey</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-[11px] text-slate-500">
                1
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1 text-slate-900">Unity Game Developer</h4>
                <p className="text-slate-600 text-xs">
                  모바일 게임 클라이언트 개발, 메모리 최적화, 프레임 드랍 개선
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-[11px] text-slate-500">
                2
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1 text-slate-900">AI Pipeline Engineer</h4>
                <p className="text-slate-600 text-xs">
                  영상 자동화 파이프라인 구축, STT/TTS 통합, FFmpeg 활용한 E2E 시스템 설계
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-[11px] text-slate-500">
                3
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1 text-slate-900">AI Application Engineer</h4>
                <p className="text-slate-600 text-xs">
                  LLM 기반 서비스 개발, React를 활용한 AI 인터페이스 구축 (현재 목표)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
