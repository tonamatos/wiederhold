(function () {
  const canvas = document.getElementById('graph-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  let width, height, dpr;
  let nodes = [];
  let visible = true;
  let animId;

  const NODE_COUNT = isMobile ? 25 : 55;
  const MAX_DIST = isMobile ? 120 : 160;
  const NODE_COLOR = [79, 70, 229];
  const FRAME_INTERVAL = 1000 / 30;
  let lastFrame = 0;

  function resize() {
    const hero = canvas.parentElement;
    dpr = window.devicePixelRatio || 1;
    width = hero.offsetWidth;
    height = hero.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }

  function init() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 1.5,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -10) n.x = width + 10;
      if (n.x > width + 10) n.x = -10;
      if (n.y < -10) n.y = height + 10;
      if (n.y > height + 10) n.y = -10;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const base = (1 - dist / MAX_DIST);
          const pulse = 0.5 + 0.5 * Math.sin(time * 0.001 + nodes[i].phase + nodes[j].phase);
          const opacity = base * (0.08 + 0.04 * pulse);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${NODE_COLOR.join(',')}, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    for (const n of nodes) {
      const glow = 0.15 + 0.08 * Math.sin(time * 0.0015 + n.phase);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${NODE_COLOR.join(',')}, ${glow})`;
      ctx.fill();
    }
  }

  function animate(timestamp) {
    animId = requestAnimationFrame(animate);
    if (!visible) return;
    if (timestamp - lastFrame < FRAME_INTERVAL) return;
    lastFrame = timestamp;
    draw(timestamp);
  }

  function drawStatic() {
    draw(0);
  }

  resize();
  init();

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  observer.observe(canvas);

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
      init();
      if (prefersReducedMotion) drawStatic();
    }, 150);
  });

  if (prefersReducedMotion) {
    drawStatic();
  } else {
    requestAnimationFrame(animate);
  }
})();
