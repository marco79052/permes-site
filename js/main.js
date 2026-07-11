/* =========================================================
 * Permes 展示网站 · 主交互脚本
 * 语言切换 · 滚动动画 · 模块渲染与筛选 · 导航交互
 * ========================================================= */

(function () {
  'use strict';

  // ============ 语言管理 ============
  const LANG_KEY = 'permes_lang';

  function getLang() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'zh' || stored === 'en') return stored;
    // 首次访问：按浏览器语言判断
    return navigator.language.startsWith('zh') ? 'zh' : 'en';
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    const dict = window.I18N[lang];
    if (!dict) return;

    // 遍历所有 data-i18n 节点
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      if (text !== undefined) {
        el.innerHTML = text;
      }
    });

    // 更新语言切换按钮文字
    const toggleText = document.querySelector('#langToggle span');
    if (toggleText) {
      toggleText.textContent = lang === 'zh' ? 'English' : '简体中文';
    }

    // 更新 title 和 meta description
    if (lang === 'en') {
      document.title = 'Permes · AI-Powered WoW Combat Assistant';
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Permes - AI-powered WoW combat assistant. No memory reading, no process injection. Computer vision technology, DPS aligned to SimC ±2%, CPU usage under 10%, zero account risk.');
      }
    } else {
      document.title = 'Permes · AI 驱动的魔兽世界战斗辅助';
      var metaDescZh = document.querySelector('meta[name="description"]');
      if (metaDescZh) {
        metaDescZh.setAttribute('content', 'Permes - AI 驱动的魔兽世界战斗辅助。不读内存、不注入进程，计算机视觉技术，DPS 对齐 SimC ±2%，CPU 占用不足 10%，账号零风险。');
      }
    }

    // 重新渲染模块网格（因为模块名需要切换语言）
    renderModules();

    // 移除防闪烁 class，恢复文本显示
    document.documentElement.classList.remove('lang-loading');
  }

  // ============ 导航栏 ============
  const navbar = document.getElementById('navbar');
  const navBurger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // 返回顶部按钮
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // 汉堡菜单
  if (navBurger) {
    navBurger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // 点击导航链接后关闭菜单
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  // 返回顶部
  document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============ 语言切换 ============
  document.getElementById('langToggle').addEventListener('click', function () {
    const current = getLang();
    const next = current === 'zh' ? 'en' : 'zh';
    setLang(next);
  });

  // ============ 滚动渐显动画 ============
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);

          // 数字递增动画
          if (entry.target.classList.contains('stat-item')) {
            const numEl = entry.target.querySelector('[data-count]');
            if (numEl) animateCount(numEl);
          }
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ============ 数字递增动画 ============
  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    const duration = 1200;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // ============ 职业模块渲染 ============
  const modGrid = document.getElementById('modGrid');
  let currentFilter = 'all';

  function getModuleStatus(mod) {
    if (!mod.released) return 'dev';
    if (mod.visibility === 'developing') return 'dev';
    return 'released';
  }

  function getStatusLabel(status, lang) {
    const dict = window.I18N[lang];
    const labels = {
      released: dict['mod.status.released'],
      dev: dict['mod.status.dev'],
    };
    return labels[status] || status;
  }

  function renderModules() {
    if (!modGrid) return;
    const lang = getLang();
    const dict = window.I18N[lang];
    modGrid.innerHTML = '';

    window.MODULES.forEach(function (mod) {
      // 角色筛选
      if (currentFilter !== 'all' && mod.role !== currentFilter) return;

      const status = getModuleStatus(mod);
      const card = document.createElement('div');
      card.className = 'mod-card' + (mod.hot ? ' is-hot' : '');

      const name = lang === 'zh' ? mod.zh : mod.en;
      const className = lang === 'zh' ? mod.class : mod.classEn;
      const statusLabel = getStatusLabel(status, lang);
      const hotLabel = dict['mod.tag.hot'] || 'Hot';
      const hotBadge = mod.hot ? '<span class="mod-hot-badge">' + hotLabel + '</span>' : '';

      // 职业图标路径
      const iconPath = 'assets/icons/' + mod.icon;

      card.innerHTML =
        hotBadge +
        '<div class="mod-card-icon">' +
          '<img src="' + iconPath + '" alt="' + name + '" onerror="this.style.display=\'none\'">' +
        '</div>' +
        '<div class="mod-card-name">' + name + '</div>' +
        '<div class="mod-card-class">' + className + '</div>' +
        '<div class="mod-card-status ' + status + '">' +
          '<span class="status-dot"></span>' + statusLabel +
        '</div>';

      modGrid.appendChild(card);
    });
  }

  // 筛选按钮
  document.querySelectorAll('.mod-filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.mod-filter').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');

      // 淡出 -> 渲染 -> 淡入
      modGrid.style.opacity = '0';
      setTimeout(function () {
        renderModules();
        modGrid.style.opacity = '1';
      }, 150);
    });
  });

  // ============ Hero 演示动画 ============
  // 模拟 OCR 数字变化和按键切换
  const ocrValues = [
    ['12', '3', '85', '0'],
    ['8', '3', '72', '0'],
    ['5', '4', '60', '0'],
    ['0', '5', '90', '1'],
    ['15', '3', '100', '0'],
    ['3', '3', '80', '0'],
  ];
  const keys = ['F5', '8', 'F5', '6', '9', 'F5'];
  let demoIndex = 0;

  function updateDemo() {
    const vals = ocrValues[demoIndex];
    for (let i = 1; i <= 4; i++) {
      const el = document.getElementById('ocr' + i);
      if (el) el.textContent = vals[i - 1];
    }
    const keyEl = document.getElementById('demoKey');
    if (keyEl) keyEl.textContent = keys[demoIndex];
    demoIndex = (demoIndex + 1) % ocrValues.length;
  }

  setInterval(updateDemo, 2000);

  // ============ 图表动画 ============
  // 当 SimC 图表进入视口时触发柱状图宽度动画
  const chartObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // CSS transition 已设置，只需确保宽度生效
          // 由于初始宽度已在 inline style 中，进入视口时已有
          // 这里做二次触发确保动画
          const fills = entry.target.querySelectorAll('.chart-fill');
          fills.forEach(function (fill) {
            const w = fill.style.width;
            fill.style.width = '0';
            setTimeout(function () {
              fill.style.width = w;
            }, 100);
          });
          chartObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const simcChart = document.querySelector('.simc-chart');
  if (simcChart) chartObserver.observe(simcChart);

  // ============ 初始化 ============
  applyLang(getLang());
  handleScroll();
})();
