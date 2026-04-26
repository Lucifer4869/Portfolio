<template>
  <section id="home" class="hero">
    <!-- Cover image overlay -->
    <div class="hero-cover">
      <img :src="coverImg" alt="cover" class="cover-img" />
      <div class="cover-overlay"></div>
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <!-- Main layout: text left, photo right -->
    <div class="hero-inner">
      <!-- LEFT: Text -->
      <div class="hero-text">
        <span class="badge">👋 พร้อมรับงาน · Available for work</span>

        <h1>
          สวัสดีครับ ผม<br />
          <span class="name-highlight">วุฒิพงศ์ ปิ่นเสริมศักดิ์</span>
        </h1>
        <p class="hero-role">Computer Engineering · IoT &amp; AI Developer</p>

        <p class="hero-desc">
          นักศึกษาปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์ ม.ราชภัฏสวนสุนันทา<br />
          หลงใหลในการสร้างระบบที่ผสาน Hardware, Software และ AI
        </p>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">4+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">🏆</span>
            <span class="stat-label">Award</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">IoT</span>
            <span class="stat-label">Specialty</span>
          </div>
        </div>

        <div class="hero-actions">
          <a href="#projects" class="btn-primary">ดูผลงาน</a>
          <a href="#contact" class="btn-ghost">ติดต่อ</a>
        </div>

        <!-- Tech stack with devicons -->
        <div class="tech-row">
          <div v-for="t in techs" :key="t.name" class="tech-icon-pill">
            <img :src="t.icon" :alt="t.name" class="tech-img" />
            <span>{{ t.name }}</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: Profile photo -->
      <div class="hero-photo-col">
        <div class="photo-ring">
          <img :src="profileImg" alt="วุฒิพงศ์ ปิ่นเสริมศักดิ์" class="profile-photo" />
        </div>
        <div class="photo-badge">🎓 CE Student</div>
      </div>
    </div>

    <div class="scroll-hint"><span></span></div>
  </section>
</template>

<script setup>
import coverImg   from '../assets/cover.jpg'
import profileImg from '../assets/profile.png'

const techs = [
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: '.NET',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'Django',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Vue.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Arduino',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
]
</script>

<style scoped>
/* ── Base ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: var(--nav-height);
}

/* ── Cover ── */
.hero-cover {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.cover-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 30%;
  opacity: 0.18;
  filter: saturate(0.5);
}
.cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
    rgba(10,10,15,0.5) 0%,
    rgba(10,10,15,0.7) 50%,
    rgba(10,10,15,1) 100%
  );
}

/* ── Blobs ── */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
  pointer-events: none;
  animation: blobFloat 9s ease-in-out infinite alternate;
}
.blob-1 { width: 480px; height: 480px; background: var(--accent); top: -100px; left: -120px; }
.blob-2 { width: 360px; height: 360px; background: #2563eb; bottom: -80px; right: -80px; animation-delay: 3s; }
@keyframes blobFloat {
  from { transform: translate(0,0) scale(1); }
  to   { transform: translate(24px,16px) scale(1.07); }
}

/* ── Inner: two-column grid ── */
.hero-inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 320px;
  align-items: center;
  gap: 5rem;
  width: 100%;
  max-width: 1100px;
  padding: 40px 50px;
}

/* ── Text column ── */
.hero-text {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.badge {
  display: inline-block;
  width: fit-content;
  padding: 6px 16px;
  border-radius: 99px;
  background: rgba(124,58,237,0.15);
  border: 1px solid var(--border);
  color: var(--accent-light);
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
}

h1 {
  font-size: clamp(1.9rem, 3.5vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}
.name-highlight {
  background: linear-gradient(135deg, var(--accent-light), #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.85;
  margin-bottom: 1.5rem;
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.75rem;
}
.stat { display: flex; flex-direction: column; }
.stat-num { font-size: 1.25rem; font-weight: 800; color: var(--accent-light); }
.stat-label { font-size: 0.65rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; }
.stat-divider { width: 1px; height: 30px; background: var(--border-subtle); }

/* Buttons */
.hero-actions { display: flex; gap: 0.85rem; flex-wrap: wrap; margin-bottom: 1.75rem; }
.btn-primary {
  padding: 10px 24px; border-radius: 10px; background: var(--accent);
  color: #fff; font-size: 0.9rem; font-weight: 600; text-decoration: none;
  transition: all 0.2s; box-shadow: 0 4px 20px var(--accent-glow);
}
.btn-primary:hover { background: var(--accent-light); transform: translateY(-2px); }
.btn-ghost {
  padding: 10px 24px; border-radius: 10px; border: 1px solid var(--border-subtle);
  color: var(--text-secondary); font-size: 0.9rem; font-weight: 600;
  text-decoration: none; background: transparent; transition: all 0.2s;
}
.btn-ghost:hover { border-color: var(--accent); color: var(--text-primary); background: rgba(124,58,237,0.08); }

/* Tech icons row */
.tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tech-icon-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 99px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
}
.tech-icon-pill:hover {
  border-color: var(--accent);
  color: var(--text-primary);
  background: rgba(124,58,237,0.1);
}
.tech-img {
  width: 18px;
  height: 18px;
  object-fit: contain;
  flex-shrink: 0;
}

/* ── Photo column ── */
.hero-photo-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.photo-ring {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, var(--accent), #ec4899, var(--accent-light));
  box-shadow: 0 0 50px var(--accent-glow), 0 0 100px rgba(236,72,153,0.15);
  animation: ringPulse 4s ease-in-out infinite;
}
@keyframes ringPulse {
  0%,100% { box-shadow: 0 0 40px var(--accent-glow); }
  50%      { box-shadow: 0 0 80px var(--accent-glow), 0 0 120px rgba(236,72,153,0.25); }
}
.profile-photo {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg-primary);
}

.photo-badge {
  padding: 6px 18px;
  border-radius: 99px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent-light);
  box-shadow: 0 4px 16px rgba(0,0,0,0.4);
}

/* Scroll hint */
.scroll-hint {
  position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 2;
}
.scroll-hint span {
  display: block; width: 22px; height: 36px;
  border: 2px solid var(--border-subtle); border-radius: 99px; position: relative;
}
.scroll-hint span::after {
  content: ''; position: absolute; top: 6px; left: 50%; transform: translateX(-50%);
  width: 4px; height: 8px; background: var(--accent-light); border-radius: 99px;
  animation: scrollDot 1.8s ease-in-out infinite;
}
@keyframes scrollDot {
  0%   { opacity: 1; top: 6px; }
  100% { opacity: 0; top: 18px; }
}
</style>