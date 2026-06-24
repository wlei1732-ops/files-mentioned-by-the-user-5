import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: '云山映水',
    category: 'AI Fashion / Digital Guofeng',
    period: '2026.03 - 2026.05',
    result: '全国二等奖',
    desc: '以东方山水美学为核心，融合传统服饰与现代数字时尚，完成新中式服装系列效果图、款式图与视觉表达。',
    tags: ['ChatGPT', 'Midjourney', 'Stable Diffusion', 'ComfyUI']
  },
  {
    title: '皮影戏',
    category: 'AI Film / Intangible Heritage',
    period: '2026.05 - 2026.06',
    result: '非遗视觉转译',
    desc: '围绕皮影戏完成 AI 短片主题策划、故事设定、分镜设计、镜头描述与提示词优化。',
    tags: ['可灵AI', '即梦AI', 'ChatGPT', 'AI Video']
  },
  {
    title: '设计工作流',
    category: 'AI Workflow / Design Ops',
    period: 'Ongoing',
    result: '效率工具化',
    desc: '使用 Codex 辅助资料归类、批量处理、提示词库管理与作品集素材归档，把 AI 编程能力转译为设计效率。',
    tags: ['Codex', 'Prompt Library', 'Automation', 'Archive']
  }
];

const strengths = [
  ['AI 视觉生成', '熟练使用 Midjourney、即梦、可灵、VEO、Stable Diffusion 与 ComfyUI，将主题调研转化为可落地的视觉方向。'],
  ['品牌与版式', '具备服饰设计、作品集排版、视觉秩序搭建能力，能够保持高级、克制且具识别度的表达。'],
  ['动态叙事', '能够完成 AI 视频分镜、镜头描述、动态衔接和非遗视觉转译，关注叙事节奏与风格一致性。'],
  ['设计工作流', '熟悉 Codex 在设计流程中的应用，能用自动化和结构化方法提升素材管理与提示词迭代效率。']
];

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasHeroVideo, setHasHeroVideo] = useState(false);

  useEffect(() => {
    fetch('/assets/hero-video.mp4', { method: 'HEAD' })
      .then((response) => setHasHeroVideo(response.ok))
      .catch(() => setHasHeroVideo(false));
  }, []);

  useEffect(() => {
    if (hasHeroVideo) return;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video || !canvas.captureStream) return;

    const context = canvas.getContext('2d');
    let frame = 0;
    let animationId;

    const resize = () => {
      canvas.width = Math.max(window.innerWidth, 1280);
      canvas.height = Math.max(window.innerHeight, 720);
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#050607');
      gradient.addColorStop(0.52, '#122022');
      gradient.addColorStop(1, '#120b0a');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < 42; i += 1) {
        const x = (i * 97 + frame * 1.8) % (width + 240) - 120;
        const y = (Math.sin((frame + i * 18) * 0.014) * 0.18 + 0.5) * height;
        context.strokeStyle = `rgba(220, 207, 151, ${0.035 + (i % 5) * 0.012})`;
        context.lineWidth = i % 6 === 0 ? 1.4 : 0.7;
        context.beginPath();
        context.moveTo(x - 240, y + i * 3);
        context.lineTo(x + 440, y - 96);
        context.stroke();
      }

      context.fillStyle = 'rgba(232, 65, 48, 0.08)';
      context.beginPath();
      context.arc(width * 0.78, height * 0.36, 260 + Math.sin(frame * 0.02) * 28, 0, Math.PI * 2);
      context.fill();

      frame += 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    video.srcObject = canvas.captureStream(30);
    video.play().catch(() => {});
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      const stream = video.srcObject;
      if (stream) stream.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
    };
  }, [hasHeroVideo]);

  return (
    <main>
      <section className="hero" id="top">
        <canvas className="video-source" ref={canvasRef} aria-hidden="true" />
        <video
          className="hero-video"
          ref={videoRef}
          src={hasHeroVideo ? '/assets/hero-video.mp4' : undefined}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-shade" aria-hidden="true" />
        <nav className="nav">
          <a className="brand" href="#top">
            <span>PORTFOLIO</span>
            王磊 / LEI WANG
          </a>
          <div className="nav-links">
            <a className="active" href="#top">首页</a>
            <a href="#projects">项目</a>
            <a href="#about">关于</a>
            <a href="#contact">联系</a>
          </div>
          <span className="menu-mark" aria-hidden="true">||||</span>
        </nav>

        <div className="container hero-inner">
          <div className="hero-content">
            <h1>WANGLEI</h1>
            <p className="hero-role">Fashion Designer / AI Visual Creator</p>
            <p className="hero-text">聚焦服装设计、AI视觉与数字创意表达。</p>
            <div className="hero-stats">
              <div><strong>2</strong><span>核心项目</span></div>
              <div><strong>10+</strong><span>AI / 设计工具</span></div>
              <div><strong>2025</strong><span>二等奖学金</span></div>
              <div><strong>Top</strong><span>全国二等奖</span></div>
            </div>
          </div>
          <div className="hero-bottom-nav" aria-label="首页分区导航">
            <a href="#top">引言</a>
            <a href="#projects">精选项目</a>
            <a href="#about">关于我</a>
            <a href="#strengths">技能</a>
            <a href="#contact">联系方式</a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="portrait-panel">
            <img src="/assets/profile-photo.png" alt="王磊头像" />
          </div>
          <div className="about-copy">
            <p className="section-kicker">Profile</p>
            <h2>视觉设计师，正在把 AI 变成可管理的创作系统。</h2>
            <p>
              本人具备从主题调研、灵感提取、效果图生成、款式图整理到作品集排版的完整项目执行能力。
              除使用 ChatGPT、Midjourney、即梦、VEO 等工具进行视觉创作外，也运用 Codex 辅助搭建设计工作流。
            </p>
            <div className="contact-line">
              <a href="mailto:2107231086@qq.com">2107231086@qq.com</a>
              <a href="tel:15180473492">15180473492</a>
            </div>
            <div className="stats">
              <div><strong>2</strong><span>核心项目</span></div>
              <div><strong>10+</strong><span>AI / 设计工具</span></div>
              <div><strong>2025</strong><span>二等奖学金</span></div>
              <div><strong>Top</strong><span>全国二等奖</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Selected Works</p>
            <h2>精选项目</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-${index + 1}`} key={project.title}>
                <div className="project-visual">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-title-bg">{project.title}</span>
                </div>
                <div className="project-info">
                  <div>
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span>{project.period}</span>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <strong className="result">{project.result}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section strengths" id="strengths">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Capabilities</p>
            <h2>个人优势</h2>
          </div>
          <div className="strength-grid">
            {strengths.map(([title, text], index) => (
              <article className="strength-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-contact" id="contact">
        <div className="container contact-grid">
          <p className="section-kicker">Contact</p>
          <h2>让视觉系统，拥有更清晰的未来感。</h2>
          <div className="contact-actions">
            <a href="mailto:2107231086@qq.com">2107231086@qq.com</a>
            <a href="tel:15180473492">15180473492</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
