// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // ---------------------------------------------------------------
  // Interactive 3D cube module (Home hero + The Cube page)
  // ---------------------------------------------------------------
  var ROTATIONS = {
    front:  'rotateX(-14deg) rotateY(-26deg)',
    right:  'rotateY(-90deg)',
    back:   'rotateY(-180deg)',
    left:   'rotateY(90deg)',
    top:    'rotateX(-90deg)',
    bottom: 'rotateX(90deg)'
  };

  document.querySelectorAll('[data-cube-module]').forEach(function (mod) {
    var cube = mod.querySelector('[data-cube3d]');
    var buttons = mod.querySelectorAll('[data-cube-btn]');
    var panel = mod.querySelector('[data-cube-panel]');
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var autoplayTimer = null;
    var currentIndex = 0;

    function activate(btn, opts) {
      opts = opts || {};
      buttons.forEach(function (b) { b.classList.remove('is-active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');

      if (cube) {
        var slot = btn.dataset.slot;
        cube.style.transform = ROTATIONS[slot] || ROTATIONS.front;
      }
      if (panel) {
        var ink = btn.dataset.ink;
        panel.style.borderTopColor = ink;
        var num = panel.querySelector('[data-cp-num]');
        var title = panel.querySelector('[data-cp-title]');
        var question = panel.querySelector('[data-cp-question]');
        var line = panel.querySelector('[data-cp-line]');
        var link = panel.querySelector('[data-cp-link]');
        if (num) { num.textContent = btn.dataset.num; num.style.color = ink; }
        if (title) { title.textContent = btn.dataset.title; }
        if (question) { question.textContent = btn.dataset.question; }
        if (line) { line.textContent = btn.dataset.line; line.style.color = ink; }
        if (link) { link.href = btn.dataset.href; link.style.color = ink; }
      }
      if (!opts.silent) { stopAutoplay(); }
    }

    function stopAutoplay() {
      if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
    }

    buttons.forEach(function (btn, i) {
      btn.addEventListener('click', function () { currentIndex = i; activate(btn); });
    });

    // Stop the idle rotation the moment a person interacts with the module at all.
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (evt) {
      mod.addEventListener(evt, stopAutoplay, { passive: true });
    });

    if (!reducedMotion && cube && buttons.length) {
      autoplayTimer = setInterval(function () {
        currentIndex = (currentIndex + 1) % buttons.length;
        activate(buttons[currentIndex], { silent: true });
      }, 3800);
    }
  });

  // Legacy flat face-selector (kept for any page still using it standalone)
  var selector = document.querySelector('[data-face-selector]');
  if (selector) {
    var sButtons = selector.querySelectorAll('[data-face-btn]');
    var sPanel = document.querySelector('[data-face-panel]');
    function sActivate(btn) {
      sButtons.forEach(function (b) { b.classList.remove('is-active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      if (sPanel) {
        sPanel.style.borderColor = btn.dataset.color;
        sPanel.querySelector('[data-panel-num]').textContent = btn.dataset.num;
        sPanel.querySelector('[data-panel-num]').style.color = btn.dataset.color;
        sPanel.querySelector('[data-panel-title]').textContent = btn.dataset.title;
        sPanel.querySelector('[data-panel-question]').textContent = btn.dataset.question;
        sPanel.querySelector('[data-panel-line]').textContent = btn.dataset.line;
        sPanel.querySelector('[data-panel-line]').style.color = btn.dataset.color;
        var link = sPanel.querySelector('[data-panel-link]');
        if (link) { link.href = btn.dataset.href; }
      }
    }
    sButtons.forEach(function (btn) {
      btn.addEventListener('click', function () { sActivate(btn); });
    });
  }
});
