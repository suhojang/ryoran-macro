// 백화요란 매크로 홈페이지: 아이콘, 최신 버전, 컴퓨터 종류에 맞는 다운로드, 화면 설명 번호, 크게 보기, 목차, 탭
(() => {
  // 앱(electron/renderer.js)과 같은 아이콘
  const I = {
    gift: 'M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8C10 4 6 4 6 6.5S9 8 12 8 M12 8c2-4 6-4 6-1.5S15 8 12 8',
    gem: 'M6 3h12l4 6-10 12L2 9z M2 9h20 M12 21 8 9l4-6 4 6-4 12',
    flame: 'M12 3c1 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 2-6 1 1 2 2 2 3 0-3 1-6 2-8z',
    target: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0z M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z',
    moon: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z',
    swords: 'M4 4l10 10 M4 4h4 M4 4v4 M20 4 10 14 M20 4h-4 M20 4v4 M7 15l-3 3 2 2 3-3 M17 15l3 3-2 2-3-3',
    school: 'M3 10l9-6 9 6 M5 10v10h14V10 M10 20v-5h4v5',
    oni: 'M5 4l3 3h8l3-3v8a7 7 0 0 1-14 0z M9 12h.01 M15 12h.01 M10 16h4',
    castle: 'M4 21V9l2-1V5h2v2h2V5h4v2h2V5h2v3l2 1v12z M10 21v-4a2 2 0 0 1 4 0v4',
    clock: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z M12 7v5l3 2',
    tower: 'M12 3 8 7h8z M7 11h10l-1-4H8z M6 15h12l-1-4H7z M5 21h14l-1-6H6z',
    cards: 'M3 8.5 11 6l3.5 12-8 2.5z M13 4.5h6.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H16 M8 12.5h.01',
    sprout: 'M12 21v-9 M12 12c0-4-3-7-8-7 0 4 3 7 8 7z M12 10c0-3 2-6 7-6 0 4-3 6-7 6z',
    bowl: 'M3 11h18a9 9 0 0 1-18 0z M8 7c0-1 1-1 1-2s-1-1-1-2 M12 7c0-1 1-1 1-2s-1-1-1-2 M16 7c0-1 1-1 1-2s-1-1-1-2',
    pick: 'M3 21l9.5-9.5 M5 8c4-4 10-4 14 0 M9.5 5.5l5 5',
    pouchIn: 'M8 8h8l3 10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z M9 8 7 4h10l-2 4 M12 11v6 M9.5 14.5 12 17l2.5-2.5',
    pouchOut: 'M8 8h8l3 10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z M9 8 7 4h10l-2 4 M12 17v-6 M9.5 13.5 12 11l2.5 2.5',
    cup: 'M7 3h10l-1 7a4 4 0 0 1-8 0z M12 14v6 M8 21h8',
    trend: 'M3 17l6-6 4 4 8-8 M15 7h6v6',
    hammer: 'M15 5l4 4 M4 20l9-9 M11 7l4-4 5 5-4 4z',
    flag: 'M5 21V4 M5 4h12l-2 4 2 4H5',
    crown: 'M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z M5 19h14',
    star: 'M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6L12 16.4 6.6 19.4l1.3-6L3.4 9.3l6-.7z',
    lock: 'M6 11h12v10H6z M8 11V7a4 4 0 0 1 8 0v4',
    play: 'M7 4v16l13-8z',
    game: 'M6 9h4 M8 7v4 M15 10h.01 M18 8h.01 M7 4h10a5 5 0 0 1 5 5v4a5 5 0 0 1-9 3h-2a5 5 0 0 1-9-3V9a5 5 0 0 1 5-5z',
    trophy: 'M8 4h8v5a4 4 0 0 1-8 0z M8 6H5a3 3 0 0 0 3 4 M16 6h3a3 3 0 0 1-3 4 M12 13v4 M8 21h8 M9 17h6v4H9z',
    users: 'M15 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z M3 21a8.5 8.5 0 0 1 17 0 M17 3.5a3.5 3.5 0 0 1 0 7 M20.5 14a8 8 0 0 1 1.5 7',
    calendar: 'M4 6h16v15H4z M4 10h16 M8 3v4 M16 3v4',
    log: 'M4 5h16v14H4z M7 9l3 3-3 3 M12 15h5',
    sliders: 'M4 6h9 M17 6h3 M15 4v4 M4 12h3 M11 12h9 M9 10v4 M4 18h11 M19 18h1 M17 16v4',
    home: 'M3 11l9-7 9 7 M5 10v10h14V10 M10 20v-6h4v6',
    shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4',
    refresh: 'M20 11a8 8 0 0 0-14.6-4.5 M4 4v4h4 M4 13a8 8 0 0 0 14.6 4.5 M20 20v-4h-4',
    download: 'M12 4v11 M7 10l5 5 5-5 M5 20h14',
    windows: 'M3 5.5l7.5-1v7H3z M12 4.3 21 3v8.5h-9z M3 12.5h7.5v7L3 18.5z M12 12.5h9V21l-9-1.3z',
    android: 'M4.5 18a7.5 7.5 0 0 1 15 0z M7.6 10.4 5.8 7.6 M16.4 10.4l1.8-2.8 M9 14.6h.01 M15 14.6h.01',
    apple: 'M16.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8C7 7.4 5.6 8.3 4.8 9.7c-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-.9-2.4-3.8z M14.3 5.6c.6-.8 1.1-1.8 1-2.9-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.7-1 2.8 1 .1 2.1-.5 2.7-1.3z',
  };
  const FILLED = new Set(['windows', 'apple', 'play']);
  for (const el of document.querySelectorAll('[data-i]')) {
    const n = el.dataset.i, d = I[n];
    if (!d) continue;
    el.classList.add('ico');
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = FILLED.has(n)
      ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="${d}"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
  }

  // 기기 종류: 맥이면 맥 다운로드를, 안드로이드 휴대폰이면 안드로이드 다운로드를 먼저. 그 밖의 휴대폰(아이폰)은 안내
  const ua = navigator.userAgent, mobile = /Android|iPhone|iPad|iPod|Mobile|KAKAOTALK/i.test(ua) && !/Macintosh/.test(ua);
  const android = /Android/i.test(ua);
  const mac = /Macintosh|Mac OS X/.test(ua) && !mobile;
  const os = android ? 'android' : mac ? 'mac' : mobile ? null : 'win';
  if (mobile) document.documentElement.classList.add('is-mobile');
  if (android) document.documentElement.classList.add('is-android');
  if (mac) document.documentElement.classList.add('is-mac');
  for (const row of document.querySelectorAll('[data-dl-row]')) {
    const first = os && row.querySelector(`[data-os="${os}"]`);
    if (!first || os === 'win') continue;
    for (const b of row.querySelectorAll('[data-os]')) b.classList.replace('btn-main', 'btn-line');
    first.classList.replace('btn-line', 'btn-main');
    row.prepend(first);
  }
  for (const c of document.querySelectorAll('[data-rec]')) if (c.dataset.rec === os) c.classList.add('rec');

  // 최신 버전 (GitHub 릴리즈)
  const verEls = document.querySelectorAll('[data-ver]');
  if (verEls.length) {
    fetch('https://api.github.com/repos/suhojang/ryoran-macro/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
      .then(r => (r.ok ? r.json() : null)).then(rel => {
        if (!rel?.tag_name) return;
        const d = new Date(rel.published_at), date = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
        for (const el of verEls) {
          const b = document.createElement('b'), a = document.createElement('a');
          b.textContent = rel.tag_name.replace(/[^\w.]/g, '');
          a.href = 'https://github.com/suhojang/ryoran-macro/releases/latest';
          a.style.color = 'inherit';
          a.textContent = '바뀐 점';
          el.replaceChildren('최신 버전 ', b, ` · ${date} · `, a);
        }
        const size = {};
        for (const a of rel.assets || []) size[a.name] = `${Math.round(a.size / 1048576)}MB`;
        for (const el of document.querySelectorAll('[data-size]')) if (size[el.dataset.size]) el.textContent = size[el.dataset.size];
      }).catch(() => {});
  }

  // 화면 이미지 위 설명 번호 (img/shots.json: 영역 위치 0~1)
  const marked = document.querySelectorAll('[data-marks]');
  if (marked.length) {
    fetch('img/shots.json').then(r => r.json()).then(({ marks }) => {
      for (const fig of marked) {
        const m = marks[fig.dataset.shot];
        if (!m) continue;
        fig.dataset.marks.split(',').forEach((key, i) => {
          const r = m[key.trim()];
          if (!r || r.y >= 1) return;
          const box = document.createElement('span');
          box.className = 'mark';
          Object.assign(box.style, { left: `${r.x * 100}%`, top: `${r.y * 100}%`, width: `${r.w * 100}%`, height: `${r.h * 100}%` });
          box.innerHTML = `<b>${i + 1}</b>`;
          fig.append(box);
        });
      }
    }).catch(() => {});
  }

  // 크게 보기
  const dlg = document.createElement('dialog');
  dlg.className = 'zoom';
  dlg.innerHTML = '<img alt="">';
  document.body.append(dlg);
  dlg.addEventListener('click', () => dlg.close());
  document.addEventListener('click', e => {
    const img = e.target.closest('.shot img, .phone img');
    if (!img) return;
    const big = dlg.querySelector('img');
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    dlg.showModal();
  });
  for (const b of document.querySelectorAll('[data-zoom]')) b.addEventListener('click', () => {
    const big = dlg.querySelector('img');
    big.src = b.dataset.zoom; big.alt = b.dataset.alt || '';
    dlg.showModal();
  });

  // 탭 (화면 둘러보기·운영체제)
  for (const tabs of document.querySelectorAll('[data-tabs]')) {
    const btns = [...tabs.querySelectorAll('button[data-tab]')];
    const show = id => {
      for (const b of btns) b.setAttribute('aria-selected', String(b.dataset.tab === id));
      for (const p of document.querySelectorAll(`[data-panel-of="${tabs.dataset.tabs}"]`)) p.hidden = p.dataset.panel !== id;
    };
    for (const b of btns) b.addEventListener('click', () => show(b.dataset.tab));
    show(tabs.dataset.tabs === 'os' && (mac || android) ? (android ? 'android' : 'mac') : btns[0].dataset.tab);
  }

  // 목차: 지금 읽는 곳
  const toc = document.querySelector('.toc');
  if (toc && 'IntersectionObserver' in window) {
    const links = new Map([...toc.querySelectorAll('a[href^="#"]')].map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(es => {
      for (const e of es) if (e.isIntersecting) { for (const a of links.values()) a.classList.remove('cur'); links.get(e.target.id)?.classList.add('cur'); }
    }, { rootMargin: '-80px 0px -70% 0px' });
    for (const id of links.keys()) { const el = document.getElementById(id); if (el) io.observe(el); }
  }
})();
