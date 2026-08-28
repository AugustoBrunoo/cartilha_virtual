import { ProgressBar } from '../../components/ProgressBar';
import { Navbar } from '../../components/Navbar';
import { EmergencyModals } from '../../components/EmergencyModals';
import { Hero } from '../../components/Hero';
import { Section1 } from '../../components/Section1';
import { Section2 } from '../../components/Section2';
import { Section3 } from '../../components/Section3';
import { Section4 } from '../../components/Section4';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    /* ---------------- Reading progress bar ---------------- */
    const progressFill = document.getElementById('progressFill');
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressFill.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    /* ---------------- Navbar scrollspy + mobile toggle ---------------- */
    const navLinks = document.querySelectorAll('#navLinks a');
    const sections = document.querySelectorAll('main section[id]');
    const navToggle = document.getElementById('navToggle');
    const navLinksEl = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
      const open = navLinksEl.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
    });
    navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinksEl.classList.remove('is-open');
    }));

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('is-active'));
          const active = document.querySelector(`#navLinks a[data-nav="${entry.target.id}"]`);
          if (active) active.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => spyObserver.observe(s));

    /* ---------------- Emergency FAB + modal ---------------- */
    const emergencyModal = document.getElementById('emergencyModal');
    const fabBtn = document.getElementById('fabBtn');
    const emergencyClose = document.getElementById('emergencyClose');
    const emergencySeeMore = document.getElementById('emergencySeeMore');

    function openModal(modal) { modal.classList.add('is-open'); }
    function closeModal(modal) { modal.classList.remove('is-open'); }

    fabBtn.addEventListener('click', () => openModal(emergencyModal));
    emergencyClose.addEventListener('click', () => closeModal(emergencyModal));
    emergencyModal.addEventListener('click', (e) => { if (e.target === emergencyModal) closeModal(emergencyModal); });
    emergencySeeMore.addEventListener('click', () => closeModal(emergencyModal));

    /* ---------------- Body privacy-zone modal ---------------- */
    const bodyModal = document.getElementById('bodyModal');
    const bodyModalClose = document.getElementById('bodyModalClose');
    document.querySelectorAll('.zone--private').forEach(zone => {
      zone.addEventListener('click', () => openModal(bodyModal));
      zone.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(bodyModal); } });
    });
    bodyModalClose.addEventListener('click', () => closeModal(bodyModal));
    bodyModal.addEventListener('click', (e) => { if (e.target === bodyModal) closeModal(bodyModal); });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { closeModal(emergencyModal); closeModal(bodyModal); }
    });



    /* ---------------- Copy-to-clipboard channel cards ---------------- */
    const copyToast = document.getElementById('copyToast');
    let toastTimeout;
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const text = btn.dataset.copy;
        try {
          await navigator.clipboard.writeText(text);
        } catch (err) { /* clipboard unavailable, fail silently */ }
        copyToast.textContent = 'Copiado: ' + text;
        copyToast.classList.add('is-shown');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => copyToast.classList.remove('is-shown'), 2400);
      });
    });

    /* ---------------- Spotlight cards (cursor-follow glow) ---------------- */
    document.querySelectorAll('[data-spotlight]').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--y', (e.clientY - rect.top) + 'px');
      });
    });

    /* ---------------- 3D tilt cards ---------------- */
    if (!prefersReduced) {
      document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-2px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
      });
    }

    /* ---------------- Magnetic buttons ---------------- */
    if (!prefersReduced) {
      document.querySelectorAll('[data-magnetic]').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
          btn.style.transform = `translate(${x}px, ${y}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
      });
    }

    /* ---------------- GSAP scroll reveals ---------------- */
    if (window.gsap && !prefersReduced) {
      gsap.utils.toArray('[data-reveal]').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: i * 0.12,
          scrollTrigger: { trigger: el, start: 'top 88%' }
        });
      });

      document.querySelectorAll('[data-reveal-group]').forEach(group => {
        gsap.to(group.children, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15,
          scrollTrigger: { trigger: group, start: 'top 82%' }
        });
      });

      gsap.utils.toArray('.tilt-card').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: (i % 4) * 0.1,
          scrollTrigger: { trigger: el, start: 'top 90%' }
        });
      });

      gsap.utils.toArray('.flip-card').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: (i % 4) * 0.1,
          scrollTrigger: { trigger: el, start: 'top 90%' }
        });
      });

      gsap.utils.toArray('[data-reveal-left]').forEach(el => {
        gsap.to(el, { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });
      gsap.utils.toArray('[data-reveal-right]').forEach(el => {
        gsap.to(el, { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });

      // Ambient hero blobs
      gsap.to('.hero-blob--1', { y: 24, x: -14, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.hero-blob--2', { y: -20, x: 16, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    } else {
      // Reduced motion / no GSAP fallback: reveal everything immediately
      document.querySelectorAll('[data-reveal], [data-reveal-group] > *, .tilt-card, .flip-card, [data-reveal-left], [data-reveal-right]')
        .forEach(el => el.classList.add('is-visible'));
    }


    // Cleanup function
    return () => {
      // Basic cleanup for gsap
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <ProgressBar />
      <Navbar />
      <EmergencyModals />
      <main>
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
}

export default Home;
