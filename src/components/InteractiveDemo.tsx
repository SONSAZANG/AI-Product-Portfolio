import { motion } from 'framer-motion';
import { Play, Activity } from 'lucide-react';
import { useState } from 'react';

export default function InteractiveDemo() {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!text.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section id="demo" className="py-16 md:py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-sm font-medium text-slate-500 mb-2">Interactive Demo (UI)</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
            브라우저에서 바로 AI 나레이션 플로우를 설계합니다.
          </h3>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            아직 API는 연결하지 않았지만, 실제 서비스 레벨을 기준으로 입력 → 처리 →
            피드백 구조를 먼저 UI로 정의했습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-[#e5e7eb] bg-white p-6 md:p-7 shadow-sm"
        >
          <div className="mb-6">
            <label className="block text-xs font-medium text-slate-500 mb-2">
              텍스트 입력
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="여기에 나레이션으로 변환할 스크립트를 입력하세요..."
              className="w-full h-32 px-3.5 py-3 bg-white border border-[#e5e7eb] rounded-md text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors resize-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={!text.trim() || isGenerating}
            className="w-full py-2.5 rounded-md bg-slate-900 text-slate-50 text-sm font-medium hover:bg-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Activity size={20} />
                </motion.div>
                Generating UI...
              </>
            ) : (
              <>
                <Play size={20} />
                Generate (Mock)
              </>
            )}
          </button>

          {/* Audio Visualizer Placeholder */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isGenerating ? 1 : 0,
              height: isGenerating ? 'auto' : 0,
            }}
            className="mt-6 overflow-hidden"
          >
            <div className="bg-slate-100 rounded-md p-5 border border-[#e5e7eb]">
              <div className="flex items-center justify-center gap-1 h-24">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [
                        Math.random() * 60 + 20,
                        Math.random() * 60 + 20,
                        Math.random() * 60 + 20,
                      ],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                    className="w-[3px] bg-slate-500 rounded-full"
                  />
                ))}
              </div>
            <p className="text-center text-xs text-slate-600 mt-4">
                실제 서비스에서는 이 영역에 오디오 파형 및 재생 컨트롤이 들어갑니다.
              </p>
            </div>
          </motion.div>

          <div className="mt-6 text-center">
            <p className="text-[11px] text-slate-500">
              * 현재는 API 대신 UI/인터랙션 구조만 보여주는 데모입니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
