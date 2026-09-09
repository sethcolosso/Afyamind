/* ============================================================
   AfyaMind — Shared Course Engine
   Generic across all courses. A course-data-*.js file (loaded
   BEFORE this one) must define: COURSE_ID, COURSE_TITLE, COURSE,
   RESOURCES, OPENERS (optional), THINKING_TRAPS (optional).
   ============================================================ */

const LS = {
  progress: `afyamind:${COURSE_ID}:progress`,
  triggerLog: `afyamind:${COURSE_ID}:triggerLog`,
  thoughtLog: `afyamind:${COURSE_ID}:thoughtLog`,
  plan: `afyamind:${COURSE_ID}:plan`,
  reflections: `afyamind:${COURSE_ID}:reflections`,
  lastLesson: `afyamind:${COURSE_ID}:lastLesson`,
};

const API_BASE = 'http://localhost:3001'; // change if your backend runs elsewhere
let isEnrolled = false;

function getToken() { return localStorage.getItem('afya_token'); }
function isLoggedIn() { return !!getToken(); }

async function api(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
      ...(options.headers || {})
    }
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.status === 204 ? null : res.json();
}

async function checkEnrollment() {
  const enrollBtn = document.getElementById('enroll-btn');
  const enrolledBadge = document.getElementById('enrolled-badge');
  if (!enrollBtn || !enrolledBadge) return;

  if (!isLoggedIn()) {
    enrollBtn.style.display = 'inline-flex';
    enrollBtn.textContent = 'Log in to enroll';
    enrollBtn.onclick = () => { window.location.href = 'login.html'; };
    return;
  }

  try {
    const courses = await api('/api/user/courses');
    isEnrolled = courses.some(c => c.course_id === COURSE_ID);
  } catch (err) {
    console.error('Failed to check enrollment:', err);
    isEnrolled = false;
  }

  if (isEnrolled) {
    enrollBtn.style.display = 'none';
    enrolledBadge.style.display = 'inline-flex';
  } else {
    enrollBtn.style.display = 'inline-flex';
    enrolledBadge.style.display = 'none';
    enrollBtn.textContent = '+ Enroll in this course';
    enrollBtn.onclick = enrollInCourse;
  }
}

async function enrollInCourse() {
  const enrollBtn = document.getElementById('enroll-btn');
  enrollBtn.disabled = true;
  enrollBtn.textContent = 'Enrolling...';
  try {
    await api(`/api/courses/${COURSE_ID}/enroll`, {
      method: 'POST',
      body: JSON.stringify({ title: COURSE_TITLE })
    });
    isEnrolled = true;
    await pushProgressToServer(); // sync whatever local progress already exists
    document.getElementById('enroll-btn').style.display = 'none';
    document.getElementById('enrolled-badge').style.display = 'inline-flex';
  } catch (err) {
    alert(`Couldn't enroll: ${err.message}`);
    enrollBtn.disabled = false;
    enrollBtn.textContent = '+ Enroll in this course';
  }
}

async function pushProgressToServer() {
  if (!isEnrolled || !isLoggedIn()) return;
  try {
    await api(`/api/courses/${COURSE_ID}/progress`, {
      method: 'PUT',
      body: JSON.stringify({
        progress_percent: Progress.percent(),
        last_lesson_id: currentLessonId
      })
    });
  } catch (err) {
    console.error('Failed to sync progress:', err);
  }
}

/* ---------------- Course content ---------------- */

const Progress = {
  get() {
    try { return JSON.parse(localStorage.getItem(LS.progress)) || {}; }
    catch { return {}; }
  },
  isDone(id) { return !!this.get()[id]; },
  toggle(id, val) {
    const p = this.get();
    if (val === undefined) val = !p[id];
    p[id] = val;
    localStorage.setItem(LS.progress, JSON.stringify(p));
    renderSidebar();
    renderProgressBar();
    pushProgressToServer();
  },
  allItemIds() {
    const ids = [];
    COURSE.modules.forEach(m => {
      m.lessons.forEach(l => ids.push(l.id));
      if (m.capstone) ids.push(m.capstone.id);
    });
    return ids;
  },
  percent() {
    const ids = this.allItemIds();
    const done = this.get();
    const count = ids.filter(id => done[id]).length;
    return Math.round((count / ids.length) * 100);
  }
};

/* ---------------- Simple localStorage list helpers ---------------- */
function loadList(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
function saveList(key, list) { localStorage.setItem(key, JSON.stringify(list)); }

/* ============================================================
   RENDERING
   ============================================================ */
let currentLessonId = null;

function findItem(id) {
  for (const m of COURSE.modules) {
    for (const l of m.lessons) if (l.id === id) return { module: m, lesson: l };
    if (m.capstone && m.capstone.id === id) return { module: m, capstone: m.capstone };
  }
  return null;
}

function flatSequence() {
  const seq = [];
  COURSE.modules.forEach(m => {
    m.lessons.forEach(l => seq.push({ moduleId: m.id, id: l.id }));
    if (m.capstone) seq.push({ moduleId: m.id, id: m.capstone.id });
  });
  return seq;
}

function renderSidebar() {
  const nav = document.getElementById('course-nav');
  const done = Progress.get();
  nav.innerHTML = COURSE.modules.map(m => {
    const items = [...m.lessons.map(l => ({ id: l.id, label: l.title, isCapstone: false })),
      m.capstone ? { id: m.capstone.id, label: '✏️ ' + m.capstone.title, isCapstone: true } : null].filter(Boolean);
    const moduleDoneCount = items.filter(i => done[i.id]).length;
    const isOpen = items.some(i => i.id === currentLessonId) || nav.dataset.opened === m.id;
    return `
    <div class="nav-module ${isOpen ? 'open' : ''}" data-module="${m.id}">
      <button class="nav-module-head" data-toggle="${m.id}">
        <span class="nav-module-icon">${m.icon}</span>
        <span class="nav-module-title">${m.title}</span>
        <span class="nav-module-count">${moduleDoneCount}/${items.length}</span>
        <span class="nav-caret">›</span>
      </button>
      <div class="nav-module-body">
        ${items.map(i => `
          <button class="nav-lesson ${i.id === currentLessonId ? 'active' : ''} ${i.isCapstone ? 'is-capstone' : ''}" data-lesson="${i.id}">
            <span class="nav-dot ${done[i.id] ? 'done' : ''}">${done[i.id] ? '✓' : ''}</span>
            <span>${i.label}</span>
          </button>`).join('')}
      </div>
    </div>`;
  }).join('');

  nav.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = btn.closest('.nav-module');
      el.classList.toggle('open');
    });
  });
  nav.querySelectorAll('[data-lesson]').forEach(btn => {
    btn.addEventListener('click', () => goTo(btn.dataset.lesson));
  });
}

function renderProgressBar() {
  const pct = Progress.percent();
  const bar = document.getElementById('course-progress-fill');
  const label = document.getElementById('course-progress-label');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = pct + '% complete';
  const ring = document.getElementById('hero-progress-num');
  if (ring) ring.textContent = pct + '%';
}

function goTo(id) {
  currentLessonId = id;
  localStorage.setItem(LS.lastLesson, id);
  const found = findItem(id);
  if (!found) return;
  const main = document.getElementById('course-main');

  if (found.lesson) {
    const idx = found.module.lessons.findIndex(l => l.id === id);
    main.innerHTML = renderLesson(found.module, found.lesson, idx);
  } else if (found.capstone) {
    main.innerHTML = renderCapstone(found.module, found.capstone);
  }

  renderSidebar();
  wireLessonInteractions(found);
  window.scrollTo({ top: document.getElementById('course-shell').offsetTop - 20, behavior: 'smooth' });
  document.getElementById('course-nav').dataset.opened = found.module.id;
}

function moduleProgressChip(module) {
  return `<span class="chip">${module.subtitle}</span>`;
}

function navButtons(currentId) {
  const seq = flatSequence();
  const idx = seq.findIndex(s => s.id === currentId);
  const prev = idx > 0 ? seq[idx - 1] : null;
  const next = idx < seq.length - 1 ? seq[idx + 1] : null;
  return `
    <div class="lesson-nav">
      ${prev ? `<button class="btn-ghost" data-nav="${prev.id}">← Previous</button>` : `<span></span>`}
      ${next ? `<button class="btn-primary-course" data-nav="${next.id}" data-complete-and-next="${currentId}">Mark complete & continue →</button>`
             : `<button class="btn-primary-course" data-complete-and-next="${currentId}" data-finish="1">Mark complete & finish ✓</button>`}
    </div>`;
}

function renderLesson(module, lesson, idx) {
  const done = Progress.isDone(lesson.id);
  return `
    <div class="lesson-card">
      <div class="lesson-meta">
        ${moduleProgressChip(module)}
        <span class="lesson-index">Module ${COURSE.modules.indexOf(module) + 1} · Lesson ${idx + 1} of ${module.lessons.length}</span>
        <span class="lesson-time">⏱ ${lesson.time}</span>
      </div>
      <h2 class="lesson-title">${lesson.title}</h2>
      <div class="lesson-body">${lesson.body}</div>
      ${lesson.takeaway ? `<div class="takeaway"><strong>Key takeaway</strong><p>${lesson.takeaway}</p></div>` : ''}
      <label class="complete-toggle">
        <input type="checkbox" data-toggle-complete="${lesson.id}" ${done ? 'checked' : ''}>
        <span>Mark this lesson complete</span>
      </label>
      ${navButtons(lesson.id)}
    </div>`;
}

function renderCapstone(module, cap) {
  const done = Progress.isDone(cap.id);
  let inner = '';
  if (cap.type === 'reflection') inner = renderReflectionTool(cap);
  else if (cap.type === 'triggerlog') inner = renderTriggerLogTool(cap);
  else if (cap.type === 'thoughtrecord') inner = renderThoughtRecordTool(cap);
  else if (cap.type === 'plan') inner = renderPlanTool(cap);
  else if (cap.type === 'resources') inner = renderResourcesTool(cap);
  else if (cap.type === 'guidedsession') inner = renderGuidedSessionTool(cap);

  return `
    <div class="lesson-card capstone-card">
      <div class="lesson-meta">
        ${moduleProgressChip(module)}
        <span class="lesson-index">Module ${COURSE.modules.indexOf(module) + 1} · Exercise</span>
      </div>
      <h2 class="lesson-title">✏️ ${cap.title}</h2>
      ${cap.note ? `<p class="capstone-note">${cap.note}</p>` : ''}
      ${inner}
      <label class="complete-toggle">
        <input type="checkbox" data-toggle-complete="${cap.id}" ${done ? 'checked' : ''}>
        <span>Mark this exercise complete</span>
      </label>
      ${navButtons(cap.id)}
    </div>`;
}

/* ---------- Reflection tool ---------- */
function renderReflectionTool(cap) {
  const saved = loadList(LS.reflections).find(r => r.id === cap.id) || {};
  return `<div class="tool reflection-tool" data-reflect-id="${cap.id}">
    ${cap.prompts.map((p, i) => `
      <div class="field">
        <label>${i + 1}. ${p}</label>
        <textarea rows="3" data-r-idx="${i}" placeholder="Write freely — there's no right answer.">${saved['a' + i] || ''}</textarea>
      </div>`).join('')}
    ${cap.note ? `<p class="hint-box">${cap.note}</p>` : ''}
    <button class="btn-ghost" data-save-reflection="${cap.id}">Save my answers</button>
    <span class="save-flash" id="flash-${cap.id}"></span>
  </div>`;
}

/* ---------- Trigger log tool ---------- */
function renderTriggerLogTool(cap) {
  const entries = loadList(LS.triggerLog);
  return `<div class="tool trigger-tool">
    <form class="entry-form" id="trigger-form">
      <div class="field-row">
        <div class="field"><label>Where were you?</label><input type="text" name="location" placeholder="e.g. kitchen, office, matatu" required></div>
        <div class="field"><label>What triggered it?</label><input type="text" name="trigger" placeholder="Event, thought, or person" required></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Physical symptoms</label><input type="text" name="physical" placeholder="e.g. tight chest, racing heart"></div>
        <div class="field"><label>Emotional symptoms</label><input type="text" name="emotional" placeholder="e.g. dread, irritability"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>What did you do?</label><input type="text" name="behavior" placeholder="How you responded"></div>
        <div class="field"><label>Anxiety style</label>
          <select name="style">${ANXIETY_STYLES.map(s => `<option>${s}</option>`).join('')}</select>
        </div>
      </div>
      <button type="submit" class="btn-primary-course">+ Add entry</button>
    </form>
    <div class="entry-list" id="trigger-entries">${renderTriggerEntries(entries)}</div>
  </div>`;
}
function renderTriggerEntries(entries) {
  if (!entries.length) return `<p class="empty-state">No entries yet — your first one will show up here.</p>`;
  return entries.slice().reverse().map(e => `
    <div class="entry-item">
      <div class="entry-item-head">
        <span class="entry-date">${new Date(e.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
        <span class="entry-badge">${e.style}</span>
        <button class="entry-del" data-del-trigger="${e.date}" title="Delete">✕</button>
      </div>
      <p><strong>${e.location}</strong> — ${e.trigger}</p>
      ${e.physical ? `<p class="entry-line">🫀 ${e.physical}</p>` : ''}
      ${e.emotional ? `<p class="entry-line">💭 ${e.emotional}</p>` : ''}
      ${e.behavior ? `<p class="entry-line">↳ ${e.behavior}</p>` : ''}
    </div>`).join('');
}

/* ---------- Thought record tool ---------- */
function renderThoughtRecordTool(cap) {
  const entries = loadList(LS.thoughtLog);
  return `<div class="tool thought-tool">
    <form class="entry-form" id="thought-form">
      <div class="field"><label>Situation</label><input type="text" name="situation" placeholder="What was happening when the thought occurred?" required></div>
      <div class="field"><label>Anxious thought</label><textarea name="thought" rows="2" placeholder="Write it as a sentence." required></textarea></div>
      <div class="field-row">
        <div class="field"><label>Thinking trap</label>
          <select name="trap">${THINKING_TRAPS.map(t => `<option>${t}</option>`).join('')}</select>
        </div>
        <div class="field"><label>Intensity before (1–10)</label>
          <input type="range" name="before" min="1" max="10" value="7" oninput="this.nextElementSibling.textContent=this.value">
          <output>7</output>
        </div>
      </div>
      <div class="field-row">
        <div class="field"><label>Evidence for</label><textarea name="evFor" rows="2" placeholder="What facts actually support this?"></textarea></div>
        <div class="field"><label>Evidence against</label><textarea name="evAgainst" rows="2" placeholder="What facts don't fit?"></textarea></div>
      </div>
      <div class="field"><label>Balanced thought</label><textarea name="balanced" rows="2" placeholder="Rewrite it to be more complete and realistic."></textarea></div>
      <div class="field">
        <label>Intensity after (1–10)</label>
        <input type="range" name="after" min="1" max="10" value="5" oninput="this.nextElementSibling.textContent=this.value">
        <output>5</output>
      </div>
      <button type="submit" class="btn-primary-course">+ Save thought record</button>
    </form>
    <div class="entry-list" id="thought-entries">${renderThoughtEntries(entries)}</div>
  </div>`;
}
function renderThoughtEntries(entries) {
  if (!entries.length) return `<p class="empty-state">No thought records yet.</p>`;
  return entries.slice().reverse().map(e => `
    <div class="entry-item">
      <div class="entry-item-head">
        <span class="entry-date">${new Date(e.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
        <span class="entry-badge">${e.trap}</span>
        <button class="entry-del" data-del-thought="${e.date}" title="Delete">✕</button>
      </div>
      <p><strong>${e.situation}</strong></p>
      <p class="entry-line">💭 "${e.thought}"</p>
      ${e.balanced ? `<p class="entry-line">⚖️ ${e.balanced}</p>` : ''}
      <div class="intensity-shift">
        <span>Before <strong>${e.before}</strong></span>
        <div class="shift-bar"><div class="shift-fill" style="width:${e.before * 10}%"></div></div>
        <span>→</span>
        <div class="shift-bar"><div class="shift-fill after" style="width:${e.after * 10}%"></div></div>
        <span>After <strong>${e.after}</strong></span>
      </div>
    </div>`).join('');
}

/* ---------- Personal plan tool ---------- */
function renderPlanTool(cap) {
  const p = JSON.parse(localStorage.getItem(LS.plan) || '{}');
  const field = (f) => `
    <div class="field">
      <label>${f.label}</label>
      ${f.textarea !== false
        ? `<textarea name="${f.name}" rows="2" placeholder="${f.placeholder || ''}">${p[f.name] || ''}</textarea>`
        : `<input type="text" name="${f.name}" placeholder="${f.placeholder || ''}" value="${p[f.name] || ''}">`}
    </div>`;
  return `<div class="tool plan-tool">
    <form id="plan-form">
      ${cap.sections.map(s => `
        <h4 class="plan-section-title">${s.icon} ${s.title}</h4>
        ${s.fields.map(field).join('')}
      `).join('')}
      <button type="submit" class="btn-primary-course">Save my plan</button>
      <span class="save-flash" id="flash-plan"></span>
    </form>
  </div>`;
}

/* ---------- Resources tool ---------- */
const RESOURCE_GROUP_META = {
  crisis: { title: 'Crisis Support — Immediate Help', icon: '🆘' },
  therapy: { title: 'Finding a Therapist', icon: '🧑\u200d⚕️' },
  community: { title: 'Support Communities', icon: '🫂' },
  reading: { title: 'Further Reading', icon: '📖' },
};
function renderResourcesTool(cap) {
  const group = (key, items) => {
    const meta = RESOURCE_GROUP_META[key] || { title: key, icon: '🔗' };
    return `
    <div class="resource-group">
      <h4>${meta.icon} ${meta.title}</h4>
      <div class="resource-cards">
        ${items.map(r => `
          <div class="resource-card">
            <div>
              <p class="resource-name">${r.name}</p>
              <p class="resource-detail">${r.detail}</p>
            </div>
            ${r.href ? `<a class="btn-ghost small" href="${r.href}" target="_blank" rel="noopener">Open</a>` : ''}
          </div>`).join('')}
      </div>
    </div>`;
  };
  return `<div class="tool resources-tool">
    ${Object.entries(RESOURCES).map(([key, items]) => group(key, items)).join('')}
    <p class="capstone-note">If you are in immediate danger or experiencing a mental health emergency, please contact emergency services in your country or go to your nearest emergency department. You do not need to manage a crisis alone.</p>
  </div>`;
}

/* ---------- Guided session player ---------- */
function renderGuidedSessionTool(cap) {
  return `<div class="tool session-tool" id="session-${cap.id}" data-steps='${JSON.stringify(cap.steps)}'>
    <div class="session-player">
      <div class="session-ring">
        <svg viewBox="0 0 120 120" class="session-ring-svg">
          <circle cx="60" cy="60" r="52" class="ring-track"></circle>
          <circle cx="60" cy="60" r="52" class="ring-fill" id="session-ring-fill-${cap.id}"></circle>
        </svg>
        <div class="session-ring-label">
          <span class="session-step-label" id="session-step-label-${cap.id}">Ready</span>
          <span class="session-step-count" id="session-step-count-${cap.id}">0 / ${cap.steps.length}</span>
        </div>
      </div>
      <p class="session-text" id="session-text-${cap.id}">Press play to begin the 5-minute guided reset. You can pause anytime.</p>
      <div class="session-controls">
        <button class="btn-primary-course" id="session-play-${cap.id}">▶ Play</button>
        <button class="btn-ghost" id="session-pause-${cap.id}" disabled>⏸ Pause</button>
        <button class="btn-ghost" id="session-restart-${cap.id}">↺ Restart</button>
        <label class="voice-toggle"><input type="checkbox" id="session-voice-${cap.id}"> Read aloud</label>
      </div>
    </div>
  </div>`;
}

/* ============================================================
   TOOL WIRING (event listeners after render)
   ============================================================ */
function wireLessonInteractions(found) {
  document.querySelectorAll('[data-toggle-complete]').forEach(cb => {
    cb.addEventListener('change', () => Progress.toggle(cb.dataset.toggleComplete, cb.checked));
  });
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.completeAndNext) Progress.toggle(btn.dataset.completeAndNext, true);
      goTo(btn.dataset.nav);
    });
  });
  const finishBtn = document.querySelector('[data-finish]');
  if (finishBtn) finishBtn.addEventListener('click', () => {
    Progress.toggle(finishBtn.dataset.completeAndNext, true);
    showCompletion();
  });

  // reflection save
  document.querySelectorAll('[data-save-reflection]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.saveReflection;
      const wrap = document.querySelector(`[data-reflect-id="${id}"]`);
      const answers = {};
      wrap.querySelectorAll('textarea[data-r-idx]').forEach(t => answers['a' + t.dataset.rIdx] = t.value);
      const list = loadList(LS.reflections).filter(r => r.id !== id);
      list.push({ id, ...answers });
      saveList(LS.reflections, list);
      Progress.toggle(id, true);
      const flash = document.getElementById(`flash-${id}`);
      flash.textContent = 'Saved ✓';
      setTimeout(() => flash.textContent = '', 1800);
    });
  });

  // trigger log
  const triggerForm = document.getElementById('trigger-form');
  if (triggerForm) {
    triggerForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(triggerForm);
      const entry = Object.fromEntries(fd.entries());
      entry.date = Date.now();
      const list = loadList(LS.triggerLog); list.push(entry); saveList(LS.triggerLog, list);
      document.getElementById('trigger-entries').innerHTML = renderTriggerEntries(list);
      triggerForm.reset();
      Progress.toggle('m2-triggerlog', true);
      wireDeleteButtons();
    });
  }

  // thought record
  const thoughtForm = document.getElementById('thought-form');
  if (thoughtForm) {
    thoughtForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(thoughtForm);
      const entry = Object.fromEntries(fd.entries());
      entry.date = Date.now();
      const list = loadList(LS.thoughtLog); list.push(entry); saveList(LS.thoughtLog, list);
      document.getElementById('thought-entries').innerHTML = renderThoughtEntries(list);
      thoughtForm.reset();
      Progress.toggle('m4-thoughtrecord', true);
      wireDeleteButtons();
    });
  }
  wireDeleteButtons();

  // plan
  const planForm = document.getElementById('plan-form');
  if (planForm) {
    planForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(planForm);
      localStorage.setItem(LS.plan, JSON.stringify(Object.fromEntries(fd.entries())));
      Progress.toggle('m5-plan', true);
      const flash = document.getElementById('flash-plan');
      flash.textContent = 'Saved ✓';
      setTimeout(() => flash.textContent = '', 1800);
    });
  }

  // openers (module 6.3)
  const openerMount = document.getElementById('tool-openers');
  if (openerMount) renderOpeners(openerMount);

  // module 3 tools
  const breathingMount = document.getElementById('tool-breathing');
  if (breathingMount) initBreathingTool(breathingMount);
  const groundingMount = document.getElementById('tool-grounding');
  if (groundingMount) initGroundingTool(groundingMount);
  const bodyscanMount = document.getElementById('tool-bodyscan');
  if (bodyscanMount) initBodyScanTool(bodyscanMount);

  // guided session
  const sessionTool = document.querySelector('.session-tool');
  if (sessionTool) initGuidedSession(sessionTool);
}

function wireDeleteButtons() {
  document.querySelectorAll('[data-del-trigger]').forEach(b => {
    b.addEventListener('click', () => {
      const list = loadList(LS.triggerLog).filter(e => String(e.date) !== b.dataset.delTrigger);
      saveList(LS.triggerLog, list);
      document.getElementById('trigger-entries').innerHTML = renderTriggerEntries(list);
      wireDeleteButtons();
    });
  });
  document.querySelectorAll('[data-del-thought]').forEach(b => {
    b.addEventListener('click', () => {
      const list = loadList(LS.thoughtLog).filter(e => String(e.date) !== b.dataset.delThought);
      saveList(LS.thoughtLog, list);
      document.getElementById('thought-entries').innerHTML = renderThoughtEntries(list);
      wireDeleteButtons();
    });
  });
}

function renderOpeners(mount) {
  const tabs = Object.keys(OPENERS);
  let active = 'friend';
  function draw() {
    mount.innerHTML = `
      <div class="opener-tool">
        <div class="opener-tabs">
          ${tabs.map(t => `<button class="opener-tab ${t === active ? 'active' : ''}" data-opener-tab="${t}">${t[0].toUpperCase() + t.slice(1)}</button>`).join('')}
        </div>
        <div class="opener-list">
          ${OPENERS[active].map(line => `
            <div class="opener-line">
              <span>"${line}"</span>
              <button class="copy-btn" data-copy="${encodeURIComponent(line)}">Copy</button>
            </div>`).join('')}
        </div>
      </div>`;
    mount.querySelectorAll('[data-opener-tab]').forEach(b => b.addEventListener('click', () => { active = b.dataset.openerTab; draw(); }));
    mount.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => {
      navigator.clipboard?.writeText(decodeURIComponent(b.dataset.copy)).then(() => {
        const old = b.textContent; b.textContent = 'Copied ✓';
        setTimeout(() => b.textContent = old, 1500);
      });
    }));
  }
  draw();
}

/* ---------- Breathing tool ---------- */
function initBreathingTool(mount) {
  const PATTERNS = {
    box: { label: 'Box Breathing', phases: [['Inhale', 4], ['Hold', 4], ['Exhale', 4], ['Hold', 4]] },
    '478': { label: '4-7-8 Breathing', phases: [['Inhale', 4], ['Hold', 7], ['Exhale', 8]] }
  };
  let pattern = 'box', running = false, phaseIdx = 0, cycles = 0, timer = null, secLeft = 0;

  mount.innerHTML = `
    <div class="breathing-widget">
      <div class="breath-tabs">
        <button class="breath-tab active" data-pattern="box">Box Breathing</button>
        <button class="breath-tab" data-pattern="478">4-7-8 Breathing</button>
      </div>
      <div class="breath-circle-wrap">
        <div class="breath-circle" id="breath-circle"><span id="breath-phase">Ready</span></div>
      </div>
      <p class="breath-count">Cycle <span id="breath-cycles">0</span></p>
      <div class="session-controls">
        <button class="btn-primary-course" id="breath-start">▶ Start</button>
        <button class="btn-ghost" id="breath-stop" disabled>⏸ Stop</button>
      </div>
    </div>`;

  const circle = mount.querySelector('#breath-circle');
  const phaseLabel = mount.querySelector('#breath-phase');
  const cyclesLabel = mount.querySelector('#breath-cycles');
  const startBtn = mount.querySelector('#breath-start');
  const stopBtn = mount.querySelector('#breath-stop');

  mount.querySelectorAll('[data-pattern]').forEach(btn => btn.addEventListener('click', () => {
    if (running) return;
    pattern = btn.dataset.pattern;
    mount.querySelectorAll('[data-pattern]').forEach(b => b.classList.toggle('active', b === btn));
  }));

  function tick() {
    const phases = PATTERNS[pattern].phases;
    const [name, dur] = phases[phaseIdx];
    if (secLeft === 0) secLeft = dur;
    phaseLabel.textContent = `${name} ${secLeft}`;
    circle.className = 'breath-circle ' + (name === 'Inhale' ? 'grow' : name === 'Exhale' ? 'shrink' : 'hold');
    secLeft--;
    if (secLeft < 0) {
      phaseIdx++;
      if (phaseIdx >= phases.length) { phaseIdx = 0; cycles++; cyclesLabel.textContent = cycles; }
      secLeft = 0;
    }
  }

  startBtn.addEventListener('click', () => {
    running = true; phaseIdx = 0; secLeft = 0;
    startBtn.disabled = true; stopBtn.disabled = false;
    mount.querySelectorAll('[data-pattern]').forEach(b => b.disabled = true);
    tick();
    timer = setInterval(tick, 1000);
  });
  stopBtn.addEventListener('click', stopBreathing);
  function stopBreathing() {
    running = false; clearInterval(timer);
    startBtn.disabled = false; stopBtn.disabled = true;
    mount.querySelectorAll('[data-pattern]').forEach(b => b.disabled = false);
    circle.className = 'breath-circle';
    phaseLabel.textContent = 'Ready';
  }
}

/* ---------- Grounding tool ---------- */
function initGroundingTool(mount) {
  const STEPS = [
    { n: 5, sense: 'SEE', icon: '👀', placeholder: 'e.g. a blue chair with a scratch on the armrest' },
    { n: 4, sense: 'TOUCH', icon: '✋', placeholder: 'e.g. the fabric of your sleeve' },
    { n: 3, sense: 'HEAR', icon: '👂', placeholder: 'e.g. traffic in the distance' },
    { n: 2, sense: 'SMELL', icon: '👃', placeholder: 'e.g. coffee, fresh air' },
    { n: 1, sense: 'TASTE', icon: '👅', placeholder: 'e.g. lingering mint' },
  ];
  let step = 0;

  function draw() {
    if (step >= STEPS.length) {
      mount.innerHTML = `
        <div class="grounding-widget grounding-done">
          <p>✅ You are here. Present. That's the exercise.</p>
          <button class="btn-ghost" id="ground-restart">↺ Do it again</button>
        </div>`;
      mount.querySelector('#ground-restart').addEventListener('click', () => { step = 0; draw(); });
      return;
    }
    const s = STEPS[step];
    mount.innerHTML = `
      <div class="grounding-widget">
        <div class="ground-progress">${STEPS.map((_, i) => `<span class="ground-dot ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}"></span>`).join('')}</div>
        <div class="ground-step">
          <div class="ground-icon">${s.icon}</div>
          <p class="ground-instruction">Name <strong>${s.n}</strong> things you can <strong>${s.sense}</strong></p>
          <div class="ground-inputs">
            ${Array.from({ length: s.n }).map((_, i) => `<input type="text" placeholder="${i === 0 ? s.placeholder : '…'}">`).join('')}
          </div>
          <button class="btn-primary-course" id="ground-next">Next →</button>
        </div>
      </div>`;
    mount.querySelector('#ground-next').addEventListener('click', () => { step++; draw(); });
  }
  draw();
}

/* ---------- Body scan tool ---------- */
function initBodyScanTool(mount) {
  const PARTS = [
    'Head & scalp', 'Forehead & eyes', 'Jaw & mouth', 'Neck & shoulders',
    'Chest', 'Arms & hands', 'Stomach & core', 'Lower back & hips', 'Legs & feet'
  ];
  let idx = 0, running = false, timer = null;

  function draw() {
    mount.innerHTML = `
      <div class="bodyscan-widget">
        <div class="bodyscan-track">
          ${PARTS.map((p, i) => `<div class="bodyscan-part ${i === idx ? 'active' : ''} ${i < idx ? 'done' : ''}">${p}</div>`).join('')}
        </div>
        <p class="bodyscan-current">Focus on: <strong>${PARTS[idx]}</strong></p>
        <p class="bodyscan-hint">Notice any tightness here. Breathe, and let it soften.</p>
        <div class="session-controls">
          <button class="btn-primary-course" id="scan-toggle">${running ? '⏸ Pause' : '▶ Start guided scan'}</button>
          <button class="btn-ghost" id="scan-restart">↺ Restart</button>
        </div>
      </div>`;
    mount.querySelector('#scan-toggle').addEventListener('click', toggle);
    mount.querySelector('#scan-restart').addEventListener('click', () => { idx = 0; stop(); draw(); });
  }
  function step() {
    idx++;
    if (idx >= PARTS.length) { stop(); idx = PARTS.length - 1; draw(); return; }
    draw();
  }
  function toggle() {
    if (running) { stop(); } else { running = true; timer = setInterval(step, 6000); draw(); }
  }
  function stop() { running = false; clearInterval(timer); }
  draw();
}

/* ---------- Guided session (audio-style) ---------- */
function initGuidedSession(mount) {
  const capId = mount.id.replace('session-', '');
  const steps = JSON.parse(mount.dataset.steps);
  let idx = -1, playing = false, timer = null, elapsed = 0;
  const total = steps.reduce((s, st) => s + st.seconds, 0);

  const ring = document.getElementById(`session-ring-fill-${capId}`);
  const stepLabel = document.getElementById(`session-step-label-${capId}`);
  const stepCount = document.getElementById(`session-step-count-${capId}`);
  const textEl = document.getElementById(`session-text-${capId}`);
  const playBtn = document.getElementById(`session-play-${capId}`);
  const pauseBtn = document.getElementById(`session-pause-${capId}`);
  const restartBtn = document.getElementById(`session-restart-${capId}`);
  const voiceToggle = document.getElementById(`session-voice-${capId}`);

  const CIRC = 2 * Math.PI * 52;
  ring.style.strokeDasharray = CIRC;
  ring.style.strokeDashoffset = CIRC;

  function speak(text) {
    if (!voiceToggle.checked || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.85; u.pitch = 0.95;
    window.speechSynthesis.speak(u);
  }

  function renderStep() {
    const s = steps[idx];
    stepLabel.textContent = s.label;
    stepCount.textContent = `${idx + 1} / ${steps.length}`;
    textEl.textContent = s.text;
    speak(s.text);
  }

  function advance() {
    idx++;
    if (idx >= steps.length) { finish(); return; }
    renderStep();
    let secLeft = steps[idx].seconds;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      secLeft--; elapsed++;
      ring.style.strokeDashoffset = CIRC - (elapsed / total) * CIRC;
      if (secLeft <= 0) { clearInterval(timer); advance(); }
    }, 1000);
  }

  function finish() {
    playing = false;
    stepLabel.textContent = 'Complete';
    textEl.textContent = 'Session complete. Notice how you feel now compared to when you started.';
    playBtn.disabled = false; playBtn.textContent = '▶ Play again';
    pauseBtn.disabled = true;
    Progress.toggle('m3-session', true);
    window.speechSynthesis?.cancel();
  }

  playBtn.addEventListener('click', () => {
    playing = true;
    playBtn.disabled = true; pauseBtn.disabled = false;
    if (idx === -1 || idx >= steps.length) { idx = -1; elapsed = 0; ring.style.strokeDashoffset = CIRC; }
    advance();
  });
  pauseBtn.addEventListener('click', () => {
    playing = false;
    clearInterval(timer);
    window.speechSynthesis?.cancel();
    playBtn.disabled = false; playBtn.textContent = '▶ Resume'; pauseBtn.disabled = true;
  });
  restartBtn.addEventListener('click', () => {
    clearInterval(timer); window.speechSynthesis?.cancel();
    idx = -1; elapsed = 0; playing = false;
    ring.style.strokeDashoffset = CIRC;
    stepLabel.textContent = 'Ready'; stepCount.textContent = `0 / ${steps.length}`;
    textEl.textContent = 'Press play to begin the 5-minute guided reset. You can pause anytime.';
    playBtn.disabled = false; playBtn.textContent = '▶ Play'; pauseBtn.disabled = true;
  });
}

/* ---------- Completion screen ---------- */
function showCompletion() {
  const main = document.getElementById('course-main');
  const pct = Progress.percent();
  main.innerHTML = `
    <div class="lesson-card completion-card">
      <div class="completion-badge">🎓</div>
      <h2 class="lesson-title">You've Come a Long Way</h2>
      <p>When you started this course, anxiety may have felt like something happening to you — unpredictable, overwhelming, and outside your control.</p>
      <p>You now understand what anxiety actually is, can recognize your personal triggers and thinking patterns, and have real, evidence-based tools you can reach for the moment anxiety spikes.</p>
      <p>This isn't the end of the work — managing anxiety is an ongoing practice, not a destination. There will be hard days. That's normal. What matters is that you keep coming back.</p>
      <div class="completion-stat">Course progress: <strong>${pct}%</strong></div>
      <div class="field"><label>What's the single most important thing you're taking away from this course?</label><textarea rows="2" id="final-q1"></textarea></div>
      <div class="field"><label>Which tool do you think will be most useful for where you are right now?</label><textarea rows="2" id="final-q2"></textarea></div>
      <div class="field"><label>Is there anything from this course that makes you think professional support might be worth exploring?</label><textarea rows="2" id="final-q3"></textarea></div>
      <button class="btn-primary-course" id="save-final">Save my answers</button>
      <span class="save-flash" id="flash-final"></span>
      <p class="capstone-note" style="margin-top:24px;">📚 Next recommended course: <strong>Understanding Depression — A Companion Course</strong> (coming soon to Learn &amp; Grow).</p>
    </div>`;
  document.getElementById('save-final').addEventListener('click', () => {
    const answers = {
      id: 'final', a0: document.getElementById('final-q1').value,
      a1: document.getElementById('final-q2').value, a2: document.getElementById('final-q3').value
    };
    const list = loadList(LS.reflections).filter(r => r.id !== 'final');
    list.push(answers); saveList(LS.reflections, list);
    const flash = document.getElementById('flash-final');
    flash.textContent = 'Saved ✓'; setTimeout(() => flash.textContent = '', 1800);
  });
  window.scrollTo({ top: document.getElementById('course-shell').offsetTop - 20, behavior: 'smooth' });
}

/* ============================================================
   INIT
   ============================================================ */
function initCourse() {
  document.getElementById('course-title').textContent = COURSE.title;
  renderSidebar();
  renderProgressBar();
  const last = localStorage.getItem(LS.lastLesson);
  const seq = flatSequence();
  const startId = (last && findItem(last)) ? last : seq[0].id;
  goTo(startId);

  document.getElementById('resume-btn')?.addEventListener('click', () => goTo(startId));
  checkEnrollment();
}

document.addEventListener('DOMContentLoaded', initCourse);