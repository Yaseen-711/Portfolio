/* ==========================================================================
   AI & DATA SCIENCE PORTFOLIO — JAVASCRIPT
   Vanilla JS, no frameworks, no dependencies
   ========================================================================== */

(function () {
  'use strict';

  /* ========================================================================
     CONFIGURATION
     ======================================================================== */

  var PARALLAX_COLORS_DARK = ['#1a1a12', '#25251c', '#313128', '#3d3d32'];
  var PARALLAX_COLORS_LIGHT = ['#F5F5F0', '#E8E8E0', '#D0D0C8', '#B8B8B0'];

  var SHAPE_COUNT = 30;
  var MIN_WIDTH = 500;
  var MAX_WIDTH = 1400;
  var MIN_HEIGHT = 300;
  var MAX_HEIGHT = 800;
  var MIN_ROTATION = -15;
  var MAX_ROTATION = 15;
  var MIN_SPEED = 0.3;
  var MAX_SPEED = 0.5;

  /* ========================================================================
     STATE
     ======================================================================== */

  var shapes = [];
  var isDesktop = window.innerWidth >= 1024;
  var ticking = false;

  /* ========================================================================
     UTILITY
     ======================================================================== */

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomInt(min, max) {
    return Math.floor(random(min, max + 1));
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function getParallaxColors() {
    return getCurrentTheme() === 'light' ? PARALLAX_COLORS_LIGHT : PARALLAX_COLORS_DARK;
  }

  /* ========================================================================
     GEOMETRIC PARALLAX BACKGROUND
     ======================================================================== */

  /**
   * Generate random rectangular shapes and append them to the parallax
   * background container. Each shape gets a random size, position, rotation,
   * color, z-index, and scroll-speed factor.
   */
  function generateShapes() {
    var container = document.getElementById('parallaxBg');
    if (!container) return;

    container.innerHTML = '';
    shapes = [];

    var colors = getParallaxColors();
    var viewW = window.innerWidth;
    var viewH = window.innerHeight;

    for (var i = 0; i < SHAPE_COUNT; i++) {
      var el = document.createElement('div');
      el.className = 'parallax-shape';

      var w = random(MIN_WIDTH, MAX_WIDTH);
      var h = random(MIN_HEIGHT, MAX_HEIGHT);
      var rot = random(MIN_ROTATION, MAX_ROTATION);
      var x = random(-200, viewW + 100);
      var y = random(-200, viewH + 400);
      var color = colors[randomInt(0, colors.length - 1)];
      var speed = random(MIN_SPEED, MAX_SPEED);
      var zIdx = randomInt(1, 3);

      el.style.width = w + 'px';
      el.style.height = h + 'px';
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.backgroundColor = color;
      el.style.zIndex = zIdx;

      container.appendChild(el);

      shapes.push({
        element: el,
        rotation: rot,
        speed: speed,
        baseY: y
      });

      /* Apply initial transform (rotation only, no translate yet) */
      el.style.transform = 'rotate(' + rot + 'deg) translateY(0px)';
    }
  }

  /**
   * Update parallax shape positions based on current scroll offset.
   * Shapes translate vertically at 0.3x–0.5x of the scroll speed.
   * Desktop only; no-op on mobile/tablet.
   */
  function updateParallax() {
    if (!isDesktop) {
      ticking = false;
      return;
    }

    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    for (var i = 0; i < shapes.length; i++) {
      var s = shapes[i];
      var offset = -(scrollY * s.speed);
      s.element.style.transform =
        'rotate(' + s.rotation + 'deg) translateY(' + offset + 'px)';
    }

    ticking = false;
  }

  /**
   * Recolor parallax shapes to match the current theme.
   */
  function updateShapeColors() {
    var colors = getParallaxColors();
    for (var i = 0; i < shapes.length; i++) {
      var color = colors[randomInt(0, colors.length - 1)];
      shapes[i].element.style.backgroundColor = color;
    }
  }

  /* ========================================================================
     SCROLL HANDLER
     ======================================================================== */

  function onScroll() {
    /* Throttle parallax updates with requestAnimationFrame */
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  /* ========================================================================
     THEME TOGGLE
     ======================================================================== */

  /**
   * Initialise the theme from localStorage or default to dark.
   */
  function initTheme() {
    var saved = localStorage.getItem('theme');
    var theme = saved || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }

  /**
   * Toggle between dark and light themes. Persists choice to localStorage,
   * recolors parallax shapes, and rotates the toggle icon.
   */
  function toggleTheme() {
    var current = getCurrentTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    /* Recolor parallax shapes */
    updateShapeColors();

    /* Rotate toggle icon 180° */
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.style.transition = 'transform 300ms ease-in-out';
      btn.style.transform = 'rotate(180deg)';
      setTimeout(function () {
        btn.style.transform = '';
      }, 300);
    }
  }

  /* ========================================================================
     CONTACT POPUP
     ======================================================================== */

  function openPopup() {
    var overlay = document.getElementById('contactPopup');
    if (overlay) {
      overlay.classList.add('active');
    }
  }

  function closePopup() {
    var overlay = document.getElementById('contactPopup');
    if (overlay) {
      overlay.classList.remove('active');
    }
  }

  function isPopupOpen() {
    var overlay = document.getElementById('contactPopup');
    return overlay && overlay.classList.contains('active');
  }

  /* ========================================================================
     RESIZE HANDLER
     ======================================================================== */

  function onResize() {
    var wasDesktop = isDesktop;
    isDesktop = window.innerWidth >= 1024;

    /* If switching between desktop/mobile, regenerate shapes */
    if (wasDesktop !== isDesktop) {
      generateShapes();
    }
  }

  function initProfileImage() {
    var imgEl = document.getElementById('profileImage');
    if (!imgEl) return;
    
    // Toggle the image based on localStorage to guarantee alternation
    var lastImg = localStorage.getItem('lastProfileImg');
    var nextImg = 'assets/profile1.png';
    
    if (lastImg === 'profile1.png') {
      nextImg = 'assets/profile2.png';
      localStorage.setItem('lastProfileImg', 'profile2.png');
    } else {
      nextImg = 'assets/profile1.png';
      localStorage.setItem('lastProfileImg', 'profile1.png');
    }
    
    imgEl.src = nextImg;
  }

  /* ========================================================================
     INITIALISATION
     ======================================================================== */

  function init() {
    /* Theme */
    initTheme();

    /* Alternate profile image */
    initProfileImage();

    /* Parallax shapes */
    generateShapes();

    /* ---- Event listeners ---- */

    /* Theme toggle button */
    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    /* Contact popup — open */
    var contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
      contactBtn.addEventListener('click', openPopup);
    }

    /* Anti-bot Email Reveal */
    var revealEmailBtn = document.getElementById('revealEmailBtn');
    if (revealEmailBtn) {
      revealEmailBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var u = 'yaseen0706';
        var d = 'gmail.com';
        var m = u + '@' + d;
        this.textContent = m;
        this.href = 'mailto:' + m;
        this.style.textDecoration = 'none';
        this.style.color = 'var(--color-text-primary)';
      });
    }

    /* Contact popup — close via × button */
    var popupClose = document.getElementById('popupClose');
    if (popupClose) {
      popupClose.addEventListener('click', closePopup);
    }

    /* Contact popup — close via click outside */
    var popupOverlay = document.getElementById('contactPopup');
    if (popupOverlay) {
      popupOverlay.addEventListener('click', function (e) {
        if (e.target === popupOverlay) {
          closePopup();
        }
      });
    }

    /* Contact popup — close via Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isPopupOpen()) {
        closePopup();
      }
    });

    /* Scroll — parallax + scroll indicator */
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Resize — recalculate desktop flag */
    window.addEventListener('resize', onResize);
  }

  /* ---- Boot ---- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
