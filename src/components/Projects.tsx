import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Auto-Content Gen',
      description:
        '텍스트 입력만으로 대본 생성, 음성 합성, 영상 편집, 유튜브 업로드까지 자동화하는 End-to-End AI 영상 제작 파이프라인입니다. 콘텐츠 제작자의 반복 작업을 획기적으로 줄입니다.',
      impact: '작업 시간 98% 단축 (8시간 → 10분)',
      tech: ['Python', 'FFmpeg', 'OpenAI Whisper', 'ElevenLabs', 'YouTube API', 'FastAPI'],
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com',
    },
    {
      title: 'Sermon AI Assistant',
      description:
        '비전문가를 위한 교회 설교 영상 자동 제작 솔루션입니다. 음성을 텍스트로 변환하고, 자막을 자동으로 타이밍에 맞춰 싱크하며, 원클릭으로 영상을 완성합니다.',
      impact: '제작 시간 90% 감소, 편집 전문 지식 불필요',
      tech: ['STT (Speech-to-Text)', 'Auto-Sync Logic', 'React', 'TypeScript', 'Supabase'],
      gradient: 'from-violet-500 to-purple-500',
      link: 'https://example.com',
      github: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-sm font-medium text-slate-500 mb-2">Projects</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
            실제 워크플로우를 줄여주는 AI & 툴링 프로젝트들
          </h3>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl">
            단순 데모가 아닌, 실제 사용자의 시간을 줄이고
            반복적인 작업을 자동화하는 방향으로 설계했습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
