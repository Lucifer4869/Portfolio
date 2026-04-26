<template>
  <section id="contact" class="contact">
    <div class="container">
      <p class="tag" style="display:block;text-align:center;margin-bottom:1rem;">Get in touch</p>
      <h2 class="section-title">Contact Me</h2>
      <p class="section-subtitle">มีโปรเจคที่น่าสนใจ? ติดต่อได้เลยครับ</p>

      <div class="contact-grid">
        <!-- LEFT: Contact info -->
        <div class="contact-info">
          <a v-for="info in contacts" :key="info.label"
             :href="info.href" class="info-item" target="_blank">
            <span class="info-icon">{{ info.icon }}</span>
            <div>
              <div class="info-label">{{ info.label }}</div>
              <div class="info-value">{{ info.value }}</div>
            </div>
          </a>

          <div class="response-note">
            <span class="note-icon">⚡</span>
            <div>
              <div class="note-title">ตอบกลับเร็ว</div>
              <div class="note-desc">ภายใน 24 ชั่วโมง · ทุกวัน</div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Form -->
        <form class="contact-form" @submit.prevent="handleSubmit">
          <!-- Success -->
          <transition name="fade">
            <div v-if="status === 'success'" class="status-box success">
              <div class="status-icon">✅</div>
              <div>
                <div class="status-title">ส่งสำเร็จแล้วครับ! 🎉</div>
                <div class="status-desc">ผมได้รับข้อความแล้ว จะตอบกลับโดยเร็วนะครับ</div>
              </div>
            </div>
          </transition>

          <!-- Error -->
          <transition name="fade">
            <div v-if="status === 'error'" class="status-box error">
              <div class="status-icon">❌</div>
              <div>
                <div class="status-title">ส่งไม่สำเร็จ</div>
                <div class="status-desc">{{ errorMsg }}</div>
              </div>
            </div>
          </transition>

          <div v-show="status !== 'success'">
            <div class="form-row">
              <div class="form-group">
                <label for="cf-name">ชื่อ <span class="req">*</span></label>
                <input id="cf-name" v-model="form.name" type="text"
                       placeholder="ชื่อ-นามสกุล" required />
              </div>
              <div class="form-group">
                <label for="cf-email">Email <span class="req">*</span></label>
                <input id="cf-email" v-model="form.email" type="email"
                       placeholder="your@email.com" required />
              </div>
            </div>
            <div class="form-group">
              <label for="cf-subject">หัวข้อ</label>
              <input id="cf-subject" v-model="form.subject" type="text"
                     placeholder="เรื่องที่ต้องการติดต่อ" />
            </div>
            <div class="form-group">
              <label for="cf-message">ข้อความ <span class="req">*</span></label>
              <textarea id="cf-message" v-model="form.message" rows="5"
                        placeholder="บอกเล่าโปรเจคหรือสิ่งที่ต้องการให้ผมช่วยครับ..."
                        required></textarea>
            </div>
            <button type="submit" class="submit-btn" :disabled="status === 'loading'">
              <span v-if="status === 'loading'" class="loading-dots">
                <span></span><span></span><span></span>
              </span>
              <span v-else>ส่งข้อความ ✉️</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>
      Built with ❤️ using
      <span class="ft-accent">Vue.js</span> ·
      © 2025 วุฒิพงศ์ ปิ่นเสริมศักดิ์
    </p>
  </footer>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

// ── EmailJS config ──────────────────────────────────────────
// ⚠️ ใส่ค่าจาก EmailJS Dashboard ของคุณ
const EJS_SERVICE_ID  = import.meta.env.VITE_EJS_SERVICE_ID  || 'YOUR_SERVICE_ID'
const EJS_TEMPLATE_ID = import.meta.env.VITE_EJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EJS_PUBLIC_KEY  = import.meta.env.VITE_EJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'

// ──────────────────────────────────────────────────────────
const status   = ref('idle')   // idle | loading | success | error
const errorMsg = ref('')
const form = reactive({ name: '', email: '', subject: '', message: '' })

const contacts = [
  { icon: '📧', label: 'Email',    value: 'band4869@gmail.com',                     href: 'mailto:band4869@gmail.com' },
  { icon: '📞', label: 'Phone',    value: '080-585-9329',                            href: 'tel:0805859329' },
  { icon: '📍', label: 'Location', value: 'แขวงแสมดำ เขตบางขุนเทียน กทม. 10150',   href: 'https://maps.google.com/?q=Samae+Dam+Bangkok' },
]

async function handleSubmit() {
  status.value   = 'loading'
  errorMsg.value = ''

  try {
    // EmailJS template params — ต้องตรงกับ template variables
    const params = {
      from_name:   form.name,
      from_email:  form.email,
      subject:     form.subject || '(ไม่ระบุหัวข้อ)',
      message:     form.message,
      to_email:    'band4869@gmail.com',
      reply_to:    form.email,
    }

    await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_ID, params, EJS_PUBLIC_KEY)

    status.value = 'success'
    Object.assign(form, { name: '', email: '', subject: '', message: '' })

  } catch (err) {
    console.error('EmailJS error:', err)
    status.value   = 'error'
    errorMsg.value = err?.text || 'เกิดข้อผิดพลาด กรุณาลองอีกครั้ง หรือติดต่อทาง band4869@gmail.com'
    setTimeout(() => { status.value = 'idle' }, 6000)
  }
}
</script>

<style scoped>
.contact {
  padding: 120px 0;
  background: var(--bg-secondary);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  gap: 3rem;
  align-items: start;
}

/* ── Info side ── */
.contact-info { display: flex; flex-direction: column; gap: 1rem; }

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 1rem 1.25rem;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}
.info-item:hover { border-color: var(--accent); transform: translateX(3px); }
.info-icon { font-size: 1.4rem; flex-shrink: 0; }
.info-label {
  font-size: 0.68rem; color: var(--text-muted);
  font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 3px;
}
.info-value { color: var(--text-primary); font-size: 0.88rem; font-weight: 500; }

.response-note {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(124,58,237,0.07);
  border: 1px dashed var(--border);
  border-radius: var(--radius-sm);
  padding: 1rem 1.25rem;
}
.note-icon { font-size: 1.4rem; }
.note-title { font-size: 0.82rem; font-weight: 700; color: var(--accent-light); margin-bottom: 2px; }
.note-desc  { font-size: 0.78rem; color: var(--text-secondary); }

/* ── Form ── */
.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

/* Status */
.status-box {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-sm);
}
.status-icon { font-size: 1.4rem; flex-shrink: 0; }
.status-title { font-weight: 700; margin-bottom: 4px; font-size: 0.95rem; }
.status-desc  { font-size: 0.82rem; opacity: 0.85; line-height: 1.5; }
.status-box.success {
  background: rgba(16,185,129,0.1);
  border: 1px solid rgba(16,185,129,0.3);
  color: #34d399;
}
.status-box.error {
  background: rgba(239,68,68,0.08);
  border: 1px solid rgba(239,68,68,0.3);
  color: #f87171;
}

/* Transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-6px); }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); }
.req { color: var(--accent-light); }

.form-group input,
.form-group textarea {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: vertical;
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-muted); }
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
}

.submit-btn {
  display: flex; align-items: center; justify-content: center;
  padding: 13px 24px; border-radius: 10px;
  background: var(--accent); color: #fff;
  font-size: 0.95rem; font-weight: 600;
  border: none; cursor: pointer; min-height: 48px;
  transition: all 0.25s; box-shadow: 0 4px 20px var(--accent-glow);
}
.submit-btn:hover:not(:disabled) {
  background: var(--accent-light); transform: translateY(-2px);
  box-shadow: 0 8px 28px var(--accent-glow);
}
.submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

.loading-dots { display: flex; gap: 5px; align-items: center; }
.loading-dots span {
  width: 8px; height: 8px; border-radius: 50%; background: #fff;
  animation: dotPulse 1.2s ease-in-out infinite;
}
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes dotPulse {
  0%,100% { transform: scale(0.6); opacity: 0.4; }
  50%      { transform: scale(1);   opacity: 1; }
}

/* Footer */
.footer {
  text-align: center; padding: 24px;
  background: var(--bg-primary);
  border-top: 1px solid var(--border-subtle);
  color: var(--text-muted); font-size: 0.875rem;
}
.ft-accent { color: var(--accent-light); font-weight: 600; }
</style>
