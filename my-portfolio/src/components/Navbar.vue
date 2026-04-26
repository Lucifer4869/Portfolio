<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const activeSection = ref('home')

function handleScroll() {
  scrolled.value = window.scrollY > 40
  const sections = ['home', 'about', 'projects', 'contact']
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = id
        break
      }
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="nav" :class="{ scrolled }">
    <a href="#home" class="logo">
      <span class="logo-dot">B</span>anz<span class="logo-accent">.</span>
    </a>
    <ul class="menu">
      <li v-for="item in ['about','projects','contact']" :key="item">
        <a :href="`#${item}`" :class="{ active: activeSection === item }">
          {{ item.charAt(0).toUpperCase() + item.slice(1) }}
        </a>
      </li>
    </ul>
    <a href="#contact" class="cta-btn">Hire Me</a>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: var(--nav-height);
  transition: background 0.3s, box-shadow 0.3s;
  background: transparent;
}

.nav.scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--border-subtle);
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration: none;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}
.logo-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 800;
  margin-right: 2px;
}
.logo-accent { color: var(--accent-light); }

/* Menu */
.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}
.menu a {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.2s;
}
.menu a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-light);
  border-radius: 99px;
  transition: width 0.25s;
}
.menu a:hover,
.menu a.active {
  color: var(--text-primary);
}
.menu a:hover::after,
.menu a.active::after {
  width: 100%;
}

/* CTA */
.cta-btn {
  padding: 8px 20px;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
  box-shadow: 0 0 0 0 var(--accent-glow);
}
.cta-btn:hover {
  background: var(--accent-light);
  box-shadow: 0 0 20px var(--accent-glow);
  transform: translateY(-1px);
}
</style>