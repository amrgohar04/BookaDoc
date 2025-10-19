import {initAuth} from "./login-register.js"

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll('.nav-link'));
  const underline = document.getElementById('navUnderline');
  const menuToggle = document.getElementById('menuToggle');

  function placeUnderline(el) {
    if (!underline) return;
    if (!el) { underline.style.opacity = '0'; return; }
    const rect = el.getBoundingClientRect();
    const parentRect = nav.getBoundingClientRect();
    underline.style.opacity = '1';
    underline.style.width = rect.width + 'px';
    underline.style.transform = `translateX(${rect.left - parentRect.left}px)`;
  }

  const active = nav.querySelector('.nav-link.active') || links[0];
  placeUnderline(active);

  // link click: smooth scroll + underline
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // normal anchor behavior on same page: scroll smoothly
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      placeUnderline(link);

      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 64,
            behavior: 'smooth'
          });
        }
      }

      // if mobile menu open, close it so links work and user sees content
      if (nav.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  });

  // resize handler
  window.addEventListener('resize', () => {
    const cur = nav.querySelector('.nav-link.active');
    placeUnderline(cur);
  });

  // hamburger toggle
  const toggleMenu = (open) => {
    const isOpen = open ?? !nav.classList.contains('open');
    nav.classList.toggle('open', isOpen);
    if (menuToggle) menuToggle.classList.toggle('open', isOpen);
    if (menuToggle) menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);

    // ensure nav links are interactive
    if (isOpen) {
      nav.style.pointerEvents = 'auto';
    } else {
      // small delay to allow click/transition to finish
      setTimeout(() => { nav.style.pointerEvents = ''; }, 250);
    }

    // re-place underline in case layout changed
    const cur = nav.querySelector('.nav-link.active');
    placeUnderline(cur);
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => toggleMenu());
    menuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
      if (e.key === 'Escape') toggleMenu(false);
    });
  }

  // close menu on global Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) toggleMenu(false);
  });

  // ensure clicking outside nav closes it (useful on mobile)
  document.addEventListener('click', (e) => {
    const clickedToggle = menuToggle && menuToggle.contains(e.target);
    if (!nav.contains(e.target) && !clickedToggle && nav.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  /* ---------------------------
     DOWNLOAD BUTTON (example)
  ----------------------------*/
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadSectionBtn = document.getElementById('downloadSectionBtn');
  const onDownload = () => {
    // Replace with real store URLs when available
    window.open('https://play.google.com/', '_blank');
  };
  if (downloadBtn) downloadBtn.addEventListener('click', onDownload);
  if (downloadSectionBtn) downloadSectionBtn.addEventListener('click', onDownload);

  /* ---------------------------
     AUTH POPUP LOADER (lazy load)
  ----------------------------*/
  const openBtn = document.getElementById("openAuthBtn");
  if (openBtn) {
    openBtn.addEventListener("click", async () => {
      try {
        const container = document.getElementById("authPopupContainer");
        if (!container) throw new Error('Missing #authPopupContainer');
        const res = await fetch("login-register.html", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load login-register.html: ${res.status}`);
        const html = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const overlay = doc.querySelector(".auth-overlay");
        if (!overlay) throw new Error('Auth overlay not found in fetched HTML');

        // remove existing to avoid duplicates
        const existing = container.querySelector(".auth-overlay");
        if (existing) existing.remove();
        container.appendChild(overlay);

        // inject CSS only once
        if (!document.getElementById("authStyles") && !document.querySelector('link[href="login-register.css"]')) {
          const link = document.createElement("link");
          link.id = "authStyles";
          link.rel = "stylesheet";
          link.href = "login-register.css";
          document.head.appendChild(link);
        }

        // dynamic import of module (ES module)
        const mod = await import("./login-register.js");
        if (typeof mod.initAuth === "function") {
          // pass the overlay root so initAuth scopes its selectors
          mod.initAuth(overlay);
        }
        overlay.style.display = "flex";
        const modal = overlay.querySelector('.auth-modal');
        if (modal) modal.scrollTop = 0;
      } catch (err) {
        console.error(err);
        // Fallback: navigate to the dedicated page
        window.location.href = 'login-register.html';
      }
    });
  }
});