/**
 * Birthday Wishes - Single Page App with Modal & Full Screen Animations
 * For Shurti's Birthday ✨
 */

const pages = document.querySelectorAll('.page');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

pages.forEach(page => {
  observer.observe(page);
});

(function () {
  'use strict';

  // ----- Welcome Modal -----
  function initModal() {
    const modal = document.getElementById('welcomeModal');
    const enterBtn = document.getElementById('enterBtn');
    const hasVisited = sessionStorage.getItem('visitedWelcome');

    if (!hasVisited) {
      modal.style.display = 'flex';
      enterBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
        setTimeout(() => {
          modal.style.display = 'none';
          sessionStorage.setItem('visitedWelcome', 'true');
        }, 400);
      });
    } else {
      modal.style.display = 'none';
    }
  }

  // ----- Cake Cutting Modal -----
  function initCakeCutting() {
    const celebrateBtn = document.getElementById('celebrateBtn');
    const cakeModal = document.getElementById('cakeModal');
    const countdownEl = document.getElementById('countdown');

    if (!celebrateBtn || !cakeModal) return;

    celebrateBtn.addEventListener('click', function () {
      // Show modal
      cakeModal.classList.add('active');
      
      // Reset countdown
      countdownEl.textContent = '';
      
      // Start countdown
      let count = 3;
      countdownEl.textContent = count;
      
      const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
          countdownEl.textContent = count;
        } else {
          countdownEl.textContent = '🎉';
          clearInterval(countdownInterval);
          
          // Close modal after celebration
          setTimeout(() => {
            cakeModal.classList.remove('active');
          }, 2000);
        }
      }, 1000);
    });

    // Close modal if clicked outside
    cakeModal.addEventListener('click', function (e) {
      if (e.target === cakeModal) {
        cakeModal.classList.remove('active');
      }
    });
  }

  // ----- Add Staggered Animations to Card Elements -----
  function enhanceCardAnimations() {
    // Quality cards
    const qualityCards = document.querySelectorAll('.quality-card');
    qualityCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    // Memory cards
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    // Wish items
    const wishItems = document.querySelectorAll('.wish-item');
    wishItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });

    // Polaroids
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }

  // ----- Observe Sections for Animation on Scroll -----
  function observeSections() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1
    });

    const sections = document.querySelectorAll('.page');
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // ----- Initialize App -----
  function init() {
    initModal();
    initCakeCutting();
    enhanceCardAnimations();
    observeSections();
  }

  // ----- Run on DOM Ready -----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();