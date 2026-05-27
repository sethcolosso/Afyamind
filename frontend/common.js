// PAGE NAVIGATION
const pages = ['home','triage','findhelp','dashboard','community','learn','exercises','safety'];
function showPage(id) {
  pages.forEach(p => {
    const el = document.getElementById('page-'+p);
    if (el) el.classList.remove('active');
  });
  const target = document.getElementById('page-'+id);
  if (target) { target.classList.add('active'); window.scrollTo(0,0); }
  const nav = document.getElementById('pageNavBar');
  if (nav) nav.style.display = id !== 'home' ? 'flex' : 'none';
}

// CRISIS MODAL
function openCrisis() { document.getElementById('crisisModal').classList.add('open'); }
function closeCrisis() { document.getElementById('crisisModal').classList.remove('open'); }

// MOOD SELECTORS
function selectMood(el) {
  document.querySelectorAll('.mood-emoji').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
}
function selectDashMood(el) {
  document.querySelectorAll('.mood-btn').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
}

// ACCORDION
function toggleAccordion(header) {
  const body = header.nextElementSibling;
  body.classList.toggle('open');
  header.querySelector('span:last-child').textContent = body.classList.contains('open') ? '▴' : '▾';
}

// MOOD CHART
function buildMoodChart() {
  const chart = document.getElementById('moodChart');
  if (!chart) return;
  chart.innerHTML = '';
  const moods = [3,4,2,3,4,5,4,3,3,4,4,3,2,3,4,5,5,4,3,4,4,3,4,5,4,3,4,4,3,4];
  moods.forEach(m => {
    const bar = document.createElement('div');
    bar.className = 'mood-bar';
    const h = (m/5)*100;
    bar.style.height = h+'%';
    bar.style.background = m >= 3 ? 'var(--primary)' : 'var(--coral)';
    bar.style.opacity = '0.7';
    chart.appendChild(bar);
  });
}

// STATS COUNTUP
function countUp(id, target, suffix) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { current = target; clearInterval(timer); }
    if (suffix === '+') el.textContent = Math.floor(current).toLocaleString() + '+';
    else if (suffix === '/5') el.textContent = (current).toFixed(1) + '/5';
    else el.textContent = Math.floor(current);
  }, 25);
}

// CHAT
const aiResponses = {
  'I feel anxious': 'I hear you. Anxiety can feel overwhelming, but you are not alone in this. 💚\n\nCan you tell me a little more about what has been making you feel anxious? Is it something specific happening in your life, or more of a general feeling that follows you around?',
  'I am struggling with addiction': 'Thank you for sharing something so personal with me. That takes real courage, and I want you to know — there is no judgment here. 💚\n\nRecovery is a journey, not a destination. Can you tell me more about what you are dealing with? I want to understand before I make any suggestions.',
  'I need a therapist': 'Finding the right therapist is a powerful step, and I am here to help you find the right match. 🌿\n\nA few questions to help me guide you:\n→ What brings you here today?\n→ Do you prefer Swahili or English sessions?\n→ In-person or online?',
  'I feel depressed': 'I am so glad you reached out. Feeling depressed can make everything feel heavy and far away. You showed strength just by coming here today. 💙\n\nWould you like to tell me a little about what you have been experiencing? There is no rush — I am here.',
  'I am in crisis': null
};

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const msgs = document.getElementById('chatMessages');
  const text = input.value.trim();
  if (!text) return;
  document.getElementById('quickChips').style.display = 'none';
  addMessage(text, 'user');
  input.value = '';
  if (text.toLowerCase().includes('crisis') || text.toLowerCase().includes('hurt myself') || text.toLowerCase().includes('suicide')) {
    openCrisis();
    addMessage('I am very concerned about your safety right now. I have opened our crisis resources for you. Please reach out to one of those lines immediately — you do not have to face this alone. 💚', 'ai');
    return;
  }
  showTyping();
  await new Promise(r => setTimeout(r, 1500));
  hideTyping();
  const response = aiResponses[text] || generateResponse(text);
  addMessage(response, 'ai');
  if (text === 'I need a therapist') {
    setTimeout(() => addRecommendationCard(), 400);
  }
}

function sendQuick(text) {
  document.getElementById('chatInput').value = text;
  sendMessage();
}

function addMessage(text, role) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `msg msg-${role === 'ai' ? 'ai' : 'user'}`;
  const formattedText = text.replace(/\n/g,'<br>').replace(/→/g,'→');
  div.innerHTML = role === 'ai'
    ? `<div class="msg-dot">🌿</div><div><div class="msg-bubble">${formattedText}</div><div style="font-size:11px;color:var(--text-muted);margin-top:4px;">Afya · Just now</div></div>`
    : `<div><div class="msg-bubble">${formattedText}</div><div style="font-size:11px;color:rgba(255,255,255,0.6);margin-top:4px;text-align:right;">You · Just now</div></div><div class="msg-dot" style="background:var(--primary);">👤</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg msg-ai'; div.id = 'typingIndicator';
  div.innerHTML = '<div class="msg-dot">🌿</div><div class="msg-bubble"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>';
  msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function generateResponse(text) {
  return `Asante for sharing that with me. 💚\n\nI hear you, and I want to make sure I understand what you are going through before suggesting next steps. Could you tell me a little more about how long you have been feeling this way, and whether anything in particular triggered it?\n\nRemember — there is no wrong answer here. I am simply here to listen and guide you.`;
}

function addRecommendationCard() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.style.maxWidth = '75%';
  div.innerHTML = `<div class="rec-card"><div class="rec-title">🌿 Afya recommends...</div><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;"><span style="background:#EAF3DE;color:var(--success);padding:3px 10px;border-radius:var(--r-pill);font-size:12px;font-weight:700;">● Low urgency</span><span style="font-size:14px;color:var(--text-sec);">Therapist or counsellor</span></div><p style="font-size:14px;color:var(--text-sec);line-height:1.6;">Based on what you have shared, I recommend connecting with a registered therapist. I found 47 providers near you who match your needs.</p><div class="rec-actions"><button class="btn btn-primary" style="font-size:13px;padding:8px 16px;" onclick="showPage('findhelp')">Find a therapist →</button><button class="btn btn-secondary" style="font-size:13px;padding:8px 16px;" onclick="showPage('dashboard')">Track your mood</button></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// LANG TOGGLE
const i18n = {
  en: { getHelp: 'Get Help Now', notAlone: 'You are not alone.', moodQ: 'Unajisikiaje leo?' },
  sw: { getHelp: 'Pata Msaada Sasa', notAlone: 'Hujasimama peke yako.', moodQ: 'Unajisikiaje leo?' }
};
function switchLang(lang) {
  document.getElementById('lang-en').classList.toggle('active', lang==='en');
  document.getElementById('lang-sw').classList.toggle('active', lang==='sw');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
}

// BREATHING EXERCISE
let breathInterval = null;
let breathPhase = 0;
const boxTechnique = [
  {label:'Breathe in...', duration:4, color:'rgba(15,110,86,0.8)', size:'220px'},
  {label:'Hold...', duration:4, color:'rgba(83,74,183,0.8)', size:'220px'},
  {label:'Breathe out...', duration:4, color:'rgba(15,110,86,0.3)', size:'140px'},
  {label:'Hold...', duration:4, color:'rgba(83,74,183,0.3)', size:'140px'},
];
let currentTechnique = boxTechnique;
let breathTimer = 0;

function openBreathing() {
  document.getElementById('breathingModal').classList.add('open');
  startBreathing();
}
function closeBreathing() {
  document.getElementById('breathingModal').classList.remove('open');
  if (breathInterval) clearInterval(breathInterval);
}
function setTechnique(t) {
  const techniques = {
    box: [{label:'Breathe in...',duration:4,color:'rgba(15,110,86,0.8)',size:'220px'},{label:'Hold...',duration:4,color:'rgba(83,74,183,0.8)',size:'220px'},{label:'Breathe out...',duration:4,color:'rgba(15,110,86,0.3)',size:'140px'},{label:'Hold...',duration:4,color:'rgba(83,74,183,0.3)',size:'140px'}],
    '478': [{label:'Breathe in...',duration:4,color:'rgba(15,110,86,0.8)',size:'220px'},{label:'Hold...',duration:7,color:'rgba(83,74,183,0.8)',size:'220px'},{label:'Breathe out...',duration:8,color:'rgba(15,110,86,0.2)',size:'120px'}],
    calm: [{label:'Breathe in...',duration:5,color:'rgba(15,110,86,0.8)',size:'220px'},{label:'Hold...',duration:2,color:'rgba(83,74,183,0.8)',size:'220px'},{label:'Breathe out...',duration:5,color:'rgba(15,110,86,0.2)',size:'120px'}]
  };
  currentTechnique = techniques[t];
  breathPhase = 0; breathTimer = 0;
  if (breathInterval) clearInterval(breathInterval);
  startBreathing();
}
function startBreathing() {
  breathPhase = 0; breathTimer = 0;
  updateBreathPhase();
  breathInterval = setInterval(() => {
    breathTimer--;
    document.getElementById('breathTimer').textContent = breathTimer;
    if (breathTimer <= 0) {
      breathPhase = (breathPhase + 1) % currentTechnique.length;
      updateBreathPhase();
    }
  }, 1000);
}
function updateBreathPhase() {
  const phase = currentTechnique[breathPhase];
  breathTimer = phase.duration;
  document.getElementById('breathPhase').textContent = phase.label;
  document.getElementById('breathTimer').textContent = breathTimer;
  const circle = document.getElementById('breathCircle');
  circle.style.width = circle.style.height = phase.size;
  circle.style.background = `radial-gradient(circle, ${phase.color} 0%, ${phase.color.replace('0.8','0.1').replace('0.3','0.05')} 70%)`;
  circle.style.borderColor = phase.color;
}

// FILTER PILLS TOGGLE
document.querySelectorAll('.filter-pills .pill, .filter-pills ~ div .pill').forEach(pill => {
  pill.addEventListener('click', function() {
    const siblings = this.closest('div').querySelectorAll('.pill');
    if (this.closest('.filter-pills')) {
      siblings.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
    } else {
      this.classList.toggle('active');
    }
  });
});
document.querySelectorAll('.content-type-tabs .tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.content-type-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// INIT
window.addEventListener('load', () => {
  buildMoodChart();
  // Stats countup
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        countUp('stat1', 10000, '+');
        countUp('stat2', 500, '+');
        countUp('stat3', 5, '');
        countUp('stat4', 4.9, '/5');
        observer.disconnect();
      }
    });
  });
  const statsEl = document.getElementById('stat1');
  if (statsEl) observer.observe(statsEl);
});

// Note: talk.html has its own sendMessage implementation with proper auth
// This common.js file is only for non-authenticated pages (home.html, help.html, etc)
// common.js - Shared functions for all pages

function updateAuthUI() {
  const token = localStorage.getItem('afya_token');
  
  const loggedInDiv = document.getElementById('nav-logged-in');
  const loggedOutDiv = document.getElementById('nav-logged-out');

  if (loggedInDiv && loggedOutDiv) {
    if (token) {
      loggedInDiv.style.display = 'flex';
      loggedOutDiv.style.display = 'none';
    } else {
      loggedInDiv.style.display = 'none';
      loggedOutDiv.style.display = 'flex';
    }
  }
}

function logout() {
  localStorage.removeItem('afya_token');
  localStorage.removeItem('afya_user');
  window.location.href = 'home.html';
}

// Run auth update automatically when header is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to let header load
  setTimeout(updateAuthUI, 400);
});
