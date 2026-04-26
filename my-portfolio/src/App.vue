<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <Projects />
    <About />
    <Contact />
  </main>
</template>

<style>
/* Global reset is in style.css */
</style>