// scripts.js - final: click-to-open mega, dark overlay, close on link click, mobile behavior
(function(){
  function $(s){ return document.querySelector(s); }
  function $$(s){ return Array.from(document.querySelectorAll(s)); }

  document.addEventListener('DOMContentLoaded', function(){
    const megaItem = document.querySelector('.nav-item.has-mega');
    const megaPanel = document.querySelector('.mega-panel');
    const productsBtn = document.querySelector('.nav-item.has-mega .nav-btn');
    const hamburger = document.querySelector('.hamburger');
    const mobilePanel = document.querySelector('.mobile-panel');
    const backdrop = megaPanel && megaPanel.querySelector('.backdrop');

    // small utility
    const isMobile = () => window.innerWidth <= 980;

    // ARIA + defensive checks
    if(megaItem && megaPanel && productsBtn){
      productsBtn.setAttribute('aria-expanded', 'false');
      megaPanel.setAttribute('aria-hidden', 'true');

      // open/close helpers (use .open to match CSS)
      function openMega(){
        megaPanel.classList.add('open');
        productsBtn.setAttribute('aria-expanded', 'true');
        megaPanel.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // focus first actionable element inside the panel for accessibility
        const first = megaPanel.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
        if(first) first.focus();
      }

      function closeMega(returnFocus = true){
        megaPanel.classList.remove('open');
        productsBtn.setAttribute('aria-expanded', 'false');
        megaPanel.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if(returnFocus){
          try { productsBtn.focus({ preventScroll: true }); } catch(e) {}
        }
      }

      // Toggle behavior on click
      productsBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();

        // On small screens open mobile panel instead
        if(isMobile()){
          if(mobilePanel){
            mobilePanel.classList.add('open');
            hamburger && hamburger.classList.add('open');
            document.body.style.overflow = 'hidden';
          }
          return;
        }

        // Desktop: toggle mega
        if(megaPanel.classList.contains('open')) closeMega();
        else openMega();
      });

      // Clicking the backdrop closes the mega
      if(backdrop){
        backdrop.addEventListener('click', function(e){
          e.stopPropagation();
          closeMega();
        });
      }

      // Close mega when any link inside mega is clicked (allow navigation)
      $$('.mega-panel a').forEach(a => {
        a.addEventListener('click', function(){
          // close but don't steal focus since user likely navigates
          closeMega(false);
        });
      });

      // Close when clicking outside the panel and its toggle
      document.addEventListener('click', function(e){
        if(!megaPanel.classList.contains('open')) return;
        if(e.target.closest('.mega-panel') || e.target.closest('.nav-item.has-mega')) return;
        closeMega();
      });

      // Close on Escape
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape' || e.key === 'Esc'){
          if(megaPanel.classList.contains('open')) {
            e.preventDefault();
            closeMega();
          }
          // also close mobile panel if open
          if(mobilePanel && mobilePanel.classList.contains('open')){
            mobilePanel.classList.remove('open');
            hamburger && hamburger.classList.remove('open');
            document.body.style.overflow = '';
          }
        }
      });

      // Close when focus leaves the panel completely (keyboard users)
      document.addEventListener('focusin', function(e){
        if(!megaPanel.classList.contains('open')) return;
        const target = e.target;
        if(target.closest('.mega-panel') || target.closest('.nav-item.has-mega')) return;
        closeMega();
      });

      // Responsive safety: ensure desktop mega closed when switching to mobile size and vice versa
      let resizeTimer = null;
      window.addEventListener('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
          if(isMobile()){
            closeMega();
          } else {
            if(mobilePanel && mobilePanel.classList.contains('open')){
              mobilePanel.classList.remove('open');
              hamburger && hamburger.classList.remove('open');
              document.body.style.overflow = '';
            }
          }
        }, 120);
      });
    }

    // Hamburger toggle & close mobile on link click (preserve your original behavior)
    if(hamburger){
      hamburger.addEventListener('click', function(e){
        e.stopPropagation();
        const open = hamburger.classList.toggle('open');
        if(open){
          mobilePanel && mobilePanel.classList.add('open');
          document.body.style.overflow = 'hidden';
        } else {
          mobilePanel && mobilePanel.classList.remove('open');
          document.body.style.overflow = '';
        }
      });

      // close mobile when clicking links inside
      $$('.mobile-panel a').forEach(a => a.addEventListener('click', function(){
        document.querySelector('.mobile-panel')?.classList.remove('open');
        document.querySelector('.hamburger')?.classList.remove('open');
        document.body.style.overflow = '';
      }));

      // clicking outside mobile panel closes it
      document.addEventListener('click', function(e){
        if(!mobilePanel) return;
        if(!e.target.closest('.mobile-panel') && !e.target.closest('.hamburger')){
          if(mobilePanel.classList.contains('open')){
            mobilePanel.classList.remove('open');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
          }
        }
      });
    }
  });
})();

// function disableinspectelement(){
//     document.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//     });
//     document.addEventListener('keydown', function(e) {
//         if (e.keyCode == 123) {
//             e.preventDefault();
//         }
//         if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) {
//             e.preventDefault();
//         }
//         if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0))) {
//             e.preventDefault();
//         }
//     });
// }
// disableinspectelement();