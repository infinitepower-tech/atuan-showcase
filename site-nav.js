(() => {
  const host = document.createElement('div');
  host.setAttribute('aria-label', '页面切换');
  const shadow = host.attachShadow({ mode: 'open' });
  const current = location.pathname.endsWith('api-tutorial.html') ? 'tutorial' : 'showcase';

  shadow.innerHTML = `
    <style>
      :host{display:block;position:relative;z-index:2147483647;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}
      nav{display:flex;justify-content:center;gap:4px;padding:6px max(12px,env(safe-area-inset-right)) 6px max(12px,env(safe-area-inset-left));border-bottom:1px solid #333;background:#151515}
      a{display:flex;align-items:center;justify-content:center;min-height:42px;padding:0 13px;border-radius:5px;color:#ddd;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:0;white-space:nowrap}
      a[aria-current="page"]{background:#fff;color:#111}
      a:focus-visible{outline:2px solid #4de0f2;outline-offset:2px}
      @media(max-width:480px){a{flex:1 1 0;max-width:160px;padding:0 10px;font-size:12px}}
    </style>
    <nav>
      <a href="./" ${current === 'showcase' ? 'aria-current="page"' : ''}>阿团展示</a>
      <a href="api-tutorial.html" ${current === 'tutorial' ? 'aria-current="page"' : ''}>API 教程</a>
    </nav>`;

  document.body.prepend(host);
})();
