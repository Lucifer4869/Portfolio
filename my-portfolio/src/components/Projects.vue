<script setup>
import awardImg   from '../assets/award.jpg'
import project2Img from '../assets/project2.jpg'

const projects = [
  {
    id: 1,
    title: 'RFID Graduation Check-in System',
    description: 'จัดทำระบบ RFID สำหรับเช็ครายชื่อบัณฑิตที่เข้ารับปริญญาให้มหาวิทยาลัยราชภัฏสวนสุนันทา เชื่อมต่อกับฐานข้อมูลแบบ Real-time พร้อม Dashboard สำหรับเจ้าหน้าที่',
    tags: ['RFID', 'Python', 'FastAPI', 'Django', 'Vue.js'],
    icon: '🎓',
    color: '#7c3aed',
    status: 'Completed',
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Face & Hand Gesture Recognition',
    description: 'ระบบตรวจจับและจดจำใบหน้าและท่าทางมือด้วย MediaPipe — ได้รับรางวัลผลงานระดับดีเด่นด้านความฉลาดทางการคำนวณ และนำเสนอในงานประชุมวิชาการระดับปริญญาตรีด้านคอมพิวเตอร์ภูมิภาคเอเชีย ครั้งที่ 13',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'AI/ML'],
    icon: '👁️',
    color: '#2563eb',
    status: 'Completed',
    image: null,
    featured: false,
  },
  {
    id: 3,
    title: 'CMM Universal Music Website',
    description: 'ทำเว็บไซต์ให้บริษัทค่ายเพลง cmm-universal.com พัฒนาด้วย .NET 8 Backend และออกแบบ UI ให้ตรงตาม Brand Identity ของบริษัท',
    tags: ['.NET 8', 'C#', 'Frontend', 'MySQL'],
    icon: '🎵',
    color: '#059669',
    status: 'Completed',
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: 'AI Line Chatbot System',
    description: 'ออกแบบระบบ AI Line เพื่อประชาสัมพันธ์กับลูกค้าบริษัทแบบอัตโนมัติ ลดภาระงาน Customer Service ได้อย่างมีนัยสำคัญ',
    tags: ['Python', 'Line API', 'AI', 'Chatbot'],
    icon: '🤖',
    color: '#d97706',
    status: 'Completed',
    image: null,
    featured: false,
  },
]
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <p class="tag" style="display:block;text-align:center;margin-bottom:1rem;">What I've built</p>
      <h2 class="section-title">Projects</h2>
      <p class="section-subtitle">ผลงานที่พัฒนาขึ้นจากประสบการณ์จริงและเพื่อการใช้งานจริง</p>

      <!-- Award spotlight -->
      <div class="award-spotlight">
        <div class="award-text">
          <div class="award-badge">🏆 รางวัลดีเด่น</div>
          <h3>งานประชุมวิชาการระดับปริญญาตรีด้านคอมพิวเตอร์ภูมิภาคเอเชีย ครั้งที่ 13</h3>
          <p>Face and Hand Gesture Recognition System using MediaPipe<br />
          ณ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏอุตรดิตถ์</p>
        </div>
        <div class="award-photo-wrap">
          <img :src="awardImg" alt="รับใบเกียรติบัตร" class="award-photo" />
        </div>
      </div>

      <!-- Project cards -->
      <div class="projects-grid">
        <article
          v-for="p in projects"
          :key="p.id"
          class="project-card"
          :class="{ featured: p.featured }"
        >
          <div class="card-glow" :style="{ background: p.color }"></div>
          <div class="card-inner">
            <div class="card-header">
              <span class="project-icon">{{ p.icon }}</span>
              <span class="project-status done">✓ {{ p.status }}</span>
            </div>
            <h3 class="project-title">{{ p.title }}</h3>
            <p class="project-desc">{{ p.description }}</p>
            <div class="project-tags">
              <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Extra photo section -->
      <div class="gallery-section">
        <h3 class="gallery-title">📸 ภาพจากการนำเสนอ</h3>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img :src="awardImg" alt="รับใบเกียรติบัตร" />
            <div class="gallery-caption">รับรางวัลดีเด่น — งานประชุมวิชาการ ครั้งที่ 13</div>
          </div>
          <div class="gallery-item">
            <img :src="project2Img" alt="Project" />
            <div class="gallery-caption">ผลงานและประสบการณ์การพัฒนา</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 120px 0;
  background: var(--bg-primary);
}

/* ── Award Spotlight ── */
.award-spotlight {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 2rem;
  background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06));
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem 2.5rem;
  margin-bottom: 3rem;
  overflow: hidden;
  position: relative;
}
.award-spotlight::before {
  content: '🏆';
  position: absolute;
  right: 280px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 8rem;
  opacity: 0.05;
  pointer-events: none;
}

.award-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 99px;
  background: rgba(251,191,36,0.15);
  border: 1px solid rgba(251,191,36,0.35);
  color: #fbbf24;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 0.75rem;
}
.award-text h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  line-height: 1.4;
}
.award-text p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.7;
}
.award-photo-wrap {
  width: 200px;
  height: 150px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 2px solid var(--border);
  flex-shrink: 0;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
.award-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}
.award-photo-wrap:hover .award-photo { transform: scale(1.06); }

/* ── Project cards ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.project-card {
  position: relative;
  border-radius: var(--radius);
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.project-card:hover { transform: translateY(-6px); border-color: var(--accent); box-shadow: 0 20px 48px rgba(0,0,0,0.4); }
.project-card.featured { border-color: rgba(124,58,237,0.35); }

.card-glow {
  position: absolute; top: -60px; right: -60px;
  width: 180px; height: 180px;
  border-radius: 50%; opacity: 0.12;
  filter: blur(40px); pointer-events: none; transition: opacity 0.3s;
}
.project-card:hover .card-glow { opacity: 0.28; }

.card-inner {
  position: relative; z-index: 1;
  padding: 1.6rem;
  display: flex; flex-direction: column; gap: 0.7rem;
}
.card-header { display: flex; align-items: center; justify-content: space-between; }
.project-icon { font-size: 1.8rem; }
.project-status {
  font-size: 0.7rem; font-weight: 700;
  padding: 3px 10px; border-radius: 99px; letter-spacing: 0.04em;
}
.project-status.done {
  background: rgba(16,185,129,0.15);
  color: #34d399;
  border: 1px solid rgba(16,185,129,0.3);
}
.project-title { font-size: 1rem; font-weight: 700; line-height: 1.3; }
.project-desc { color: var(--text-secondary); font-size: 0.84rem; line-height: 1.7; }
.project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

/* ── Gallery ── */
.gallery-section {
  border-top: 1px solid var(--border-subtle);
  padding-top: 2.5rem;
}
.gallery-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.gallery-item {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  transition: border-color 0.2s, transform 0.25s, box-shadow 0.25s;
}
.gallery-item:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.4); }
.gallery-item img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.gallery-item:hover img { transform: scale(1.04); }
.gallery-caption {
  padding: 0.75rem 1rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
}
</style>