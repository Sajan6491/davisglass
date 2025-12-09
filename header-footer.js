/* header-footer.js - inject header + footer and init mega menu */
(function(){
  function HeaderHTML(){
    return `
  <header class="header" role="banner">
    <div class="wrap">
      <div class="logo"><a href="home.html"><img src="https://www.davisglass.com.au/images/stat_imgs/TEMP-davis-glass-logo-header-WBG.jpg" alt="Davis Glass"></a></div>

      <nav class="nav" role="navigation" aria-label="Main navigation">
        <ul class="nav-list">
          <li class="nav-item"><a class="nav-link active" href="home.html">Home</a></li>
          <li class="nav-item has-mega">
            <button type="button" class="nav-btn pro" aria-expanded="false" aria-controls="mega">Products ▾</button>
          </li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="resources.html">Resources</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <button type="button" class="hamburger" aria-label="Menu" aria-expanded="false">
        <span class="bar bar1"></span><span class="bar bar2"></span><span class="bar bar3"></span>
      </button>
    </div>

    <div id="mega" class="mega-panel" aria-hidden="true">
      <div class="inner" role="dialog" aria-label="Products menu" id="mega-menus" >
        <div class="mega-col">
          <h4>PRODUCTS</h4>
          <ul>
            <li><a href="products.html#laminate">Laminate</a></li>
            <li><a href="products.html#acoustic">Acoustic Laminate</a></li>
            <li><a href="products.html#lowe">Low e (Low Emissivity)</a></li>
            <li><a href="products.html#security">Security Laminate</a></li>
            <li><a href="products.html#mirror">Mirror</a></li>
            <li><a href="products.html#oneway">One way mirror</a></li>
          </ul>
        </div>

        <div class="mega-col">
          <h4>MERCHANDISING & SAFETY</h4>
          <ul>
            <li><a href="products.html#merch">Merchandising</a></li>
            <li><a href="products.html#sheets">Sheets</a></li>
            <li><a href="products.html#blocks">Blocks</a></li>
            <li><a href="products.html#toughened">Toughened Safety Glass</a></li>
            <li><a href="products.html#dgu">DGU’s</a></li>
          </ul>

          <h4 style="margin-top:14px">DGU Types</h4>
          <ul>
            <li><a href="products.html#dguclear">i) clear on clear</a></li>
            <li><a href="products.html#dgue">ii) E-tech on clear</a></li>
            <li><a href="products.html#thermalux">iii) ThermaLux</a></li>
            <li><a href="products.html#thermaluxplus">iv) ThermaLux Plus</a></li>
            <li><a href="products.html#thermale">v) ThermaLux Elite</a></li>
          </ul>
        </div>

        <div class="mega-right">
          <div class="feature-box">
            <h4>High performance Low-E</h4>
            <p>High performance Low-E single glazed options. Engineered for thermal efficiency while preserving daylight and views.</p>
          </div>
          <div class="feature-box">
            <h4>Partners</h4>
            <p>Soltech · Viridian · Evantage — contact our team for partner-specific product support.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-panel" aria-hidden="true">
      <ul class="mobile-list">
        <li class="mobile-item"><a href="home.html">Home</a></li>
        <li class="mobile-item"><a href="products.html">Products</a></li>
        <li class="mobile-item"><a href="about.html">About</a></li>
        <li class="mobile-item"><a href="resources.html">Resources</a></li>
        <li class="mobile-item"><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </header>
    `;
  }

  function FooterHTML(){
    return `
<footer class="footer" id="contact">
  <div class="grid">
    <!-- Brand -->
    <div class="brand">
      <img src="https://www.davisglass.com.au/images/stat_imgs/TEMP-davis-glass-logo-header-WBG.jpg" alt="logo">
      <p style="margin-top:8px;color:#cbd7e2">
        Davis Glass — Architectural &amp; performance glass. Technical support and product specs for designers and fabricators.
      </p>
      <p style="margin-top:8px;color:#cbd7e2;font-size:13px;">
        <strong>Partners:</strong> Soltech · Viridian · Evantage
      </p>
    </div>

    <!-- Products -->
    <div class="links">
      <strong style="color:#e6eef6">Products</strong>
      <a class="footer-links" href="products.html#laminate">Laminate</a>
      <a class="footer-links" href="products.html#lowe">Low-E</a>
      <a class="footer-links" href="products.html#dgu">DGU</a>
      <!-- extra product links (optional) -->
      <a class="footer-links" href="products.html#toughened">Toughened glass</a>
      <a class="footer-links" href="products.html#mirror">Mirror</a>
    </div>

    <!-- Company / Info -->
    <div class="links">
      <strong style="color:#e6eef6">Company</strong>
      <a class="footer-links" href="about.html">About Davis Glass</a>
      <a class="footer-links" href="resources.html">Resources</a>
      <a class="footer-links" href="home.html#standfor">What we stand for</a>
      <a class="footer-links" href="home.html#products-showcase-improved">Products overview</a>
    </div>

    <!-- Contact -->
    <div class="contact">
      <strong style="color:#e6eef6">Contact</strong>
      <div class="footer-contact">(03) 9330 1200</div>
      <div class="footer-contact">156 Melrose Drive, Tullamarine VIC 3043</div>
      <div class="footer-contact">
        <a href="mailto:info@davisglass.com.au" class="footer-links">info@davisglass.com.au</a>
      </div>
      <div class="footer-contact" style="margin-top:6px;font-size:13px;color:#cbd7e2;">
        Mon–Fri: 7:30am – 4:30pm
      </div>
    </div>
  </div>

  <!-- Optional bottom bar -->
  <div class="footer-bottom" style="margin-top:20px;padding-top:12px;border-top:1px solid rgba(148,163,184,0.4);font-size:12px;color:#cbd7e2;text-align:center;">
    © <span id="year"></span> Davis Glass. All rights reserved.
  </div>
</footer>

<script>
  // current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
</script>

    `;
  }

  function initMega(){
    try {
      const $$ = s => Array.from(document.querySelectorAll(s));
      const megaPanel = document.getElementById('mega');
      if(!megaPanel) return false;

      // ensure backdrop
      let backdrop = megaPanel.querySelector('.backdrop');
      if(!backdrop){
        backdrop = document.createElement('div');
        backdrop.className = 'backdrop';
        const inner = megaPanel.querySelector('.inner');
        if(inner) megaPanel.insertBefore(backdrop, inner);
        else megaPanel.appendChild(backdrop);
      }

      const megaItem = document.querySelector('.nav-item.has-mega');
      const productsBtn = document.querySelector('.nav-item.has-mega .nav-btn');
      const hamburger = document.querySelector('.hamburger');
      const mobilePanel = document.querySelector('.mobile-panel');

      if(!megaItem || !productsBtn) return false;
      const isMobile = () => window.innerWidth <= 980;

      productsBtn.setAttribute('aria-expanded','false');
      megaPanel.setAttribute('aria-hidden','true');
      if (mobilePanel) mobilePanel.setAttribute('aria-hidden','true');
      if (hamburger) hamburger.setAttribute('aria-expanded','false');

      function openMega(){
        megaPanel.classList.add('open');
        productsBtn.setAttribute('aria-expanded','true');
        megaPanel.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
        const first = megaPanel.querySelector('a,button,[tabindex]:not([tabindex="-1"])');
        if(first) first.focus();
      }
      function closeMega(returnFocus=true){
        megaPanel.classList.remove('open');
        productsBtn.setAttribute('aria-expanded','false');
        megaPanel.setAttribute('aria-hidden','true');
        document.body.style.overflow = '';
        if(returnFocus){ try{ productsBtn.focus({preventScroll:true}); }catch(e){} }
      }

      // replace handlers via clone to avoid duplicates
      const newProductsBtn = productsBtn.cloneNode(true);
      productsBtn.parentNode.replaceChild(newProductsBtn, productsBtn);

      newProductsBtn.addEventListener('click', function(e){
        e.preventDefault(); e.stopPropagation();
        if(isMobile()){ if(mobilePanel){ mobilePanel.classList.add('open'); hamburger && hamburger.classList.add('open'); document.body.style.overflow = 'hidden'; if(hamburger) hamburger.setAttribute('aria-expanded','true'); } return; }
        if(megaPanel.classList.contains('open')) closeMega(); else openMega();
      });

      backdrop.addEventListener('click', function(e){ e.stopPropagation(); closeMega(); });
      $$('.mega-panel a').forEach(a => a.addEventListener('click', function(){ closeMega(false); }));

      document.addEventListener('click', function(e){ if(!megaPanel.classList.contains('open')) return; if(e.target.closest('.mega-panel') || e.target.closest('.nav-item.has-mega')) return; closeMega(); });

      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape' || e.key === 'Esc'){
          if(megaPanel.classList.contains('open')) { e.preventDefault(); closeMega(); }
          if(mobilePanel && mobilePanel.classList.contains('open')){ mobilePanel.classList.remove('open'); hamburger && hamburger.classList.remove('open'); document.body.style.overflow=''; if(hamburger) hamburger.setAttribute('aria-expanded','false'); }
        }
      });

      window.addEventListener('resize', function(){ if(isMobile()) closeMega(); });

      if(hamburger){
        const newHamb = hamburger.cloneNode(true);
        hamburger.parentNode.replaceChild(newHamb, hamburger);
        newHamb.addEventListener('click', function(e){
          e.stopPropagation();
          const open = newHamb.classList.toggle('open');
          newHamb.setAttribute('aria-expanded', String(open));
          if(open){ mobilePanel && mobilePanel.classList.add('open'); document.body.style.overflow='hidden'; }
          else { mobilePanel && mobilePanel.classList.remove('open'); document.body.style.overflow=''; }
        });

        $$('.mobile-panel a').forEach(a => a.addEventListener('click', function(){
          document.querySelector('.mobile-panel')?.classList.remove('open');
          document.querySelector('.hamburger')?.classList.remove('open');
          document.body.style.overflow = '';
          document.querySelector('.hamburger')?.setAttribute('aria-expanded','false');
        }));

        document.addEventListener('click', function(e){
          if(!mobilePanel) return;
          if(!e.target.closest('.mobile-panel') && !e.target.closest('.hamburger')){
            if(mobilePanel.classList.contains('open')){
              mobilePanel.classList.remove('open');
              const hamb = document.querySelector('.hamburger');
              if(hamb) hamb.classList.remove('open');
              document.body.style.overflow = '';
              if(hamb) hamb.setAttribute('aria-expanded','false');
            }
          }
        });
      }

      return true;
    } catch(err){
      window.__devLog && window.__devLog('Mega menu init error: ' + (err && err.message));
      return false;
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const headerEl = document.getElementById('header');
    const footerEl = document.getElementById('footer');

    if(headerEl) headerEl.innerHTML = HeaderHTML();
    if(footerEl) footerEl.innerHTML = FooterHTML();

    const ok = initMega();
    if(!ok && headerEl){
      const mo = new MutationObserver((records, obs) => {
        if(headerEl.querySelector('.nav-item.has-mega')){
          initMega();
          obs.disconnect();
        }
      });
      mo.observe(headerEl, { childList: true, subtree: true });
    }
  });

})();
