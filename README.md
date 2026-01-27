# 손사장 · AI Application Engineer 포트폴리오

Unity 기반 클라이언트 개발 경험을 바탕으로, **AI 파이프라인 및 웹 애플리케이션**을 설계·구현하는 엔지니어의 포트폴리오용 웹사이트입니다.  
React, Vite, TypeScript, Tailwind CSS를 활용하여 **노션(Notion) 스타일의 라이트 모드 단일 페이지**로 구성되어 있습니다.

## 개요

- **페이지 구성**: Hero, About, Projects, Interactive Demo, Footer로 이루어진 단일 스크롤 페이지
- **UI 스타일**: 밝은 그레이 배경, 화이트 카드, 얇은 테두리를 활용한 미니멀 레이아웃
- **핵심 프로젝트**:
  - Auto-Content Gen (AI Video Pipeline)
  - Sermon AI Assistant
- **인터랙션**: Framer Motion을 통한 진입 애니메이션 및 마이크로 인터랙션
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 해상도를 모두 고려한 레이아웃

## 기술 스택

- **Framework**: React 18, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts, `src/index.css`에서 로드)

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 폴더 구조 (요약)

```text
sonsazang/
├── src/
│   ├── components/
│   │   ├── Hero.tsx            # 상단 Hero 섹션
│   │   ├── About.tsx           # 경력 및 기술 스택 소개
│   │   ├── Projects.tsx        # 프로젝트 섹션 컨테이너
│   │   ├── ProjectCard.tsx     # 개별 프로젝트 카드 컴포넌트
│   │   ├── SkillBadge.tsx      # 스킬 배지 컴포넌트
│   │   ├── InteractiveDemo.tsx # AI 나레이션 UI 데모
│   │   └── Footer.tsx          # 하단 푸터
│   ├── App.tsx                 # 전체 레이아웃 및 내비게이션
│   ├── main.tsx                # 진입 스크립트
│   └── index.css               # Tailwind 및 전역 스타일 정의
├── tailwind.config.js          # Tailwind 설정
├── postcss.config.js           # PostCSS 설정
├── vite.config.ts              # Vite 설정
└── package.json
```

## 커스터마이징 가이드

- **개인 정보 및 문구**
  - `Hero.tsx`: 이름, 역할, 소개 문구, CTA 버튼 링크
  - `About.tsx`: 경력 요약, 전환 스토리, Journey 타임라인 텍스트
  - `Projects.tsx`: 프로젝트 목록, 설명, 사용 기술, 외부 링크
  - `Footer.tsx`: GitHub, LinkedIn, 이메일 등 연락처 및 소셜 링크

- **디자인 조정**
  - 전역 배경색 및 기본 텍스트 색: `src/index.css` 내 `body` 스타일
  - 카드 및 패널 스타일: 각 컴포넌트의 `bg-*`, `border-*`, `shadow-*` 클래스

- **애니메이션 조정**
  - Framer Motion 관련 설정은 각 컴포넌트(`Hero`, `About`, `Projects`, `InteractiveDemo` 등)의
    `motion.div`, `motion.button` 등의 `initial`, `animate`, `transition` 속성에서 변경할 수 있습니다.

## 배포

일반적인 Vite 기반 애플리케이션과 동일하게, 빌드 결과물(`dist/`)을 정적 호스팅 환경에 배포할 수 있습니다.

예시:
- Vercel, Netlify, Cloudflare Pages 등에 `npm run build` 실행 후 `dist` 디렉터리를 사용하여 배포

## 작성자

- **손사장 (AI Application Engineer 지향)**
- GitHub: [`SONSAZANG`](https://github.com/SONSAZANG)

