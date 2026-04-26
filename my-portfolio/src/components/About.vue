<template>
  <section id="about" class="about">
    <div class="container">
      <p class="tag" style="display:block;text-align:center;margin-bottom:1rem;">Who am I?</p>
      <h2 class="section-title">About Me</h2>
      <p class="section-subtitle">นักพัฒนาที่หลงรักการแก้ปัญหาด้วยเทคโนโลยี</p>

      <div class="about-grid">
        <!-- Bio card -->
        <div class="bio-card">
          <div class="profile-img-wrap">
            <img :src="profileImg" alt="วุฒิพงศ์ ปิ่นเสริมศักดิ์" class="profile-img" />
          </div>
          <h3>วุฒิพงศ์ ปิ่นเสริมศักดิ์</h3>
          <p class="bio-nickname">เบนซ์ · Banz</p>
          <p class="bio-title">Computer Engineering Student & IoT Developer</p>

          <div class="bio-contacts">
            <a href="mailto:band4869@gmail.com" class="bio-contact-item">
              <span class="contact-icon">📧</span>
              <span>band4869@gmail.com</span>
            </a>
            <a href="tel:0805859329" class="bio-contact-item">
              <span class="contact-icon">📞</span>
              <span>080-585-9329</span>
            </a>
            <div class="bio-contact-item">
              <span class="contact-icon">📍</span>
              <span>แขวงแสมดำ เขตบางขุนเทียน กทม. 10150</span>
            </div>
            <div class="bio-contact-item">
              <span class="contact-icon">🎂</span>
              <span>05 มีนาคม 2540</span>
            </div>
          </div>

          <a href="#contact" class="hire-btn">✉️ ติดต่อว่าจ้าง</a>
        </div>

        <!-- Info panels -->
        <div class="info-panels">
          <p class="about-intro">
            มีความสามารถด้านการคำนวณและคิดวิเคราะห์ สามารถทำงานร่วมกับผู้อื่นได้อย่างราบรื่น
            มีความกระตือรือร้น รับผิดชอบต่องานที่ได้รับมอบหมาย และมีความสนใจด้านการพัฒนา
            ระบบ IoT, AI และ Full-stack Development
          </p>

          <div class="info-card">
            <div class="info-icon">🎓</div>
            <div>
              <h4>การศึกษา</h4>
              <p>
                <strong>มหาวิทยาลัยราชภัฏสวนสุนันทา</strong><br />
                สาขาวิศวกรรมคอมพิวเตอร์ · ปีการศึกษา 2565–2569
              </p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">⚡</div>
            <div>
              <h4>Backend Development</h4>
              <p>ออกแบบเว็บไซต์ Backend ด้วย Framework <strong>.NET 8</strong> และ <strong>Django</strong> · Deploy ระบบด้วย Docker Containers</p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">🔧</div>
            <div>
              <h4>Hardware & IoT</h4>
              <p>ชำนาญระบบ Hardware · เข้าใจระบบ IoT · ทักษะการซ่อมบำรุงคอมพิวเตอร์ · ติดตั้งกล้องวงจรปิดและประตูอัตโนมัติ</p>
            </div>
          </div>

          <!-- Language icons card -->
          <div class="lang-card">
            <h4>💻 ภาษาโปรแกรม</h4>
            <div class="lang-icons-grid">
              <div v-for="l in langs" :key="l.name" class="lang-icon-item">
                <div class="lang-icon-wrap">
                  <img :src="l.icon" :alt="l.name" class="lang-icon-img" />
                </div>
                <span class="lang-icon-name">{{ l.name }}</span>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="skills-block">
            <h4>ระดับทักษะ</h4>
            <div class="skill-bars">
              <div v-for="s in skills" :key="s.name" class="skill-row">
                <div class="skill-meta">
                  <span>{{ s.name }}</span>
                  <span class="skill-pct">{{ s.level }}%</span>
                </div>
                <div class="skill-track">
                  <div class="skill-fill" :style="{ width: s.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">🌍</div>
            <div>
              <h4>ทักษะด้านภาษา</h4>
              <p>สามารถสื่อสารและสนทนาภาษาอังกฤษได้ดี</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImg from '../assets/profile.png'

const langs = [
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C# / .NET',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Django',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Arduino',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

const skills = [
  { name: 'Python / AI / ML',        level: 82 },
  { name: 'Java / C++ / C',          level: 75 },
  { name: '.NET 8 / Django Backend', level: 78 },
  { name: 'RFID / Arduino / IoT',    level: 88 },
  { name: 'Vue.js / Frontend',       level: 72 },
  { name: 'Docker / Deployment',     level: 68 },
]
</script>

<style scoped>
.about {
  padding: 120px 0;
  background: var(--bg-secondary);
}

.about-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2.5rem;
  align-items: start;
}

/* ── Bio Card ── */
.bio-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 2rem 1.5rem;
  text-align: center;
  position: sticky;
  top: calc(var(--nav-height) + 24px);
  transition: box-shadow 0.3s;
}
.bio-card:hover { box-shadow: 0 0 48px var(--accent-glow); }

.profile-img-wrap {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1.1rem;
  padding: 3px;
  background: linear-gradient(135deg, var(--accent), #ec4899, var(--accent-light));
  box-shadow: 0 0 30px var(--accent-glow);
}
.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg-card);
}

.bio-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
.bio-nickname {
  color: var(--accent-light);
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}
.bio-title {
  color: var(--text-muted);
  font-size: 0.76rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.bio-contacts {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: left;
  margin-bottom: 1.5rem;
}
.bio-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.79rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
a.bio-contact-item:hover { color: var(--accent-light); }
.contact-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }

.hire-btn {
  display: block;
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--accent);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 16px var(--accent-glow);
}
.hire-btn:hover { background: var(--accent-light); transform: translateY(-2px); }

/* ── Info Panels ── */
.info-panels { display: flex; flex-direction: column; gap: 1rem; }

.about-intro {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.8;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-sm);
  padding: 1.25rem 1.5rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 1.1rem 1.4rem;
  transition: border-color 0.2s, transform 0.2s;
}
.info-card:hover { border-color: var(--accent); transform: translateX(4px); }
.info-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
.info-card h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem; }
.info-card p { font-size: 0.83rem; color: var(--text-secondary); line-height: 1.65; }
.info-card strong { color: var(--text-primary); }

/* Language icon card */
.lang-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color 0.2s;
}
.lang-card:hover { border-color: var(--accent); }
.lang-card h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem; }

.lang-icons-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
}

.lang-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: default;
}

.lang-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.lang-icon-item:hover .lang-icon-wrap {
  border-color: var(--accent);
  background: rgba(124,58,237,0.12);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(124,58,237,0.2);
}

.lang-icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.lang-icon-name {
  font-size: 0.65rem;
  color: var(--text-muted);
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
}

/* Skills */
.skills-block {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 1.5rem;
}
.skills-block h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem; }
.skill-bars { display: flex; flex-direction: column; gap: 0.8rem; }
.skill-meta {
  display: flex; justify-content: space-between;
  font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 5px;
}
.skill-pct { color: var(--accent-light); font-weight: 600; }
.skill-track { height: 6px; background: var(--bg-secondary); border-radius: 99px; overflow: hidden; }
.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  border-radius: 99px;
  transition: width 0.8s ease;
}
</style>