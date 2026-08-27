const icons = {
  grid:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></svg>',
  calendar:'<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>',
  cards:'<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="16" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  library:'<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/><path d="M7 4v16"/></svg>',
  spark:'<svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/></svg>',
  settings:'<svg viewBox="0 0 24 24"><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.3a2 2 0 1 1-4 0V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 1 1 4.2 17l.1-.1A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3 14H2.7a2 2 0 1 1 0-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7A2 2 0 1 1 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.7a2 2 0 1 1 4 0V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9c.2.6.8 1 1.6 1h.3a2 2 0 1 1 0 4H21c-.8 0-1.4.4-1.6 1z"/></svg>',
  shield:'<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-5"/></svg>',
  bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
  send:'<svg viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  image:'<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 13l2.8-2.8a1.5 1.5 0 0 1 2.1 0L18 15"/><circle cx="9" cy="9" r="1.4"/></svg>',
  expand:'<svg viewBox="0 0 24 24"><path d="M9 4H4v5M15 4h5v5M20 15v5h-5M4 15v5h5"/></svg>',
  panel:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16M6 9l-2 3 2 3"/></svg>',
  menu:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
};
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icons[el.dataset.icon] || ''; });

const platformMap = {Instagram:'instagram', TikTok:'tiktok', Pinterest:'pinterest-p', X:'x-twitter', Reddit:'reddit-alien'};
const items = [
  {title:'Street Interview Hook',account:'mari_ken7',status:'ready',date:'Aug 28',day:28,platforms:['Instagram','TikTok'],template:'Default Hook Title v1',compliance:'Pass',hook:'Why does this feel like a real street interview?',caption:'Realism comes from camera distance, natural pauses, and imperfect street audio. #ai #video #creator #socialmedia #filmmaking',variants:['Why does this feel real?','Why does this feel like a real street interview?'],img:'assets/thumbs/street_interview_hook_aug25.jpg'},
  {title:'Lip Makeup Hook',account:'mari_ken7',status:'ready',date:'Aug 28',day:28,platforms:['Instagram','TikTok'],template:'Default Hook Title v1',compliance:'Pass',hook:'The face detail makes or breaks beauty AI.',caption:'For beauty clips, texture, lighting, and small hand movements matter more than a flashy prompt. #beauty #ai #video #makeup #creator',variants:['Beauty AI Needs Detail','The face detail makes or breaks beauty AI.'],img:'assets/thumbs/lip_makeup_hook_aug25.jpg'},
  {title:'AI Video Builder',account:'artprodesign.2023',status:'scheduled',date:'Aug 28',day:28,platforms:['Instagram'],template:'Default Hook Title v1',compliance:'Needs check',hook:'Build the shot before generating.',caption:'Write the camera, subject, action, and lighting first. Then generate. #ai #videotools #workflow #content #automation',variants:['Build The Shot First','Build the shot before generating.'],img:'assets/thumbs/artpro_ai_video_builder_aug23.jpg'},
  {title:'Dragon Product Ad',account:'artprodesign.2023',status:'posted',date:'Aug 22',day:22,platforms:['Instagram','Pinterest'],template:'Default Hook Title v1',compliance:'Pass',hook:'A product ad needs one impossible image.',caption:'Surreal ads work best when the product still stays readable. #advertising #aiart #productvideo #design #creative',variants:['Impossible Product Ad','A product ad needs one impossible image.'],img:'assets/thumbs/perfume_dragon_ad.jpg'},
  {title:'GTA Free Roam Test',account:'ai_marie_creator',status:'ready',date:'Aug 30',day:30,platforms:['Instagram','TikTok'],template:'Bahnschrift gameplay overlay',compliance:'Pass',hook:'This is the framing that feels like gameplay.',caption:'Third-person framing makes AI game footage feel more believable than cinematic angles. #gaming #ai #gta #video #creator',variants:['Gameplay Framing','This is the framing that feels like gameplay.'],img:'assets/thumbs/gta_seedance_top_overlay.jpg'},
  {title:'Caesar Rubicon Trap',account:'ai_marie_creator',status:'scheduled',date:'Sep 02',day:2,platforms:['X','Reddit'],template:'Default Hook Title v1',compliance:'Needs check',hook:'History is easier to remember as a trap.',caption:'Draft caption waiting for approval.',variants:['History As A Trap','History is easier to remember as a trap.'],img:'assets/thumbs/caesar_rubicon_trap.jpg'},
  {title:'Noki Prompt Below Title',account:'artprodesign.2023',status:'ready',date:'Sep 04',day:4,platforms:['Instagram'],template:'Prompt below title',compliance:'Failed',hook:'The prompt should not fight the image.',caption:'When the overlay is too busy, the viewer stops watching the video. #design #ai #videoediting #socialmedia #creator',variants:['Prompt Below Title','The prompt should not fight the image.'],img:'assets/thumbs/noki_prompt_below_title.jpg'},
  {title:'Dragon Vertical Edit',account:'artprodesign.2023',status:'posted',date:'Aug 24',day:24,platforms:['TikTok','Pinterest'],template:'Default Hook Title v1',compliance:'Pass',hook:'Vertical crops decide the whole ad.',caption:'A good vertical crop keeps the subject, motion, and title readable at the same time. #tiktok #pinterest #video #design #ads',variants:['Vertical Crop Test','Vertical crops decide the whole ad.'],img:'assets/thumbs/dragons_rotated_vertical.jpg'}
];

const state = { calendarStatus:'all', boardStatus:'all', calendarAccount:'all', boardAccount:'all', zoom:2, query:'' };
const zoomNames = ['Compact', 'Comfort', 'Roomy', 'Focus', 'Focus+'];
const zoomClasses = ['zoom-compact', 'zoom-comfort', 'zoom-roomy', 'zoom-focus', 'zoom-ultra'];
const calendarDays = [27,28,29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const dayNames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

const searchInput = document.getElementById('searchInput');
const contentCards = document.getElementById('contentCards');
const calendarGrid = document.getElementById('calendarGrid');
const calendarPanel = document.getElementById('calendarPanel');
const zoomLabel = document.getElementById('zoomLabel');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
const calendarStatusFilter = document.getElementById('calendarStatusFilter');
const boardStatusFilter = document.getElementById('boardStatusFilter');
const calendarAccountFilter = document.getElementById('calendarAccountFilter');
const boardAccountFilter = document.getElementById('boardAccountFilter');
const searchToggle = document.getElementById('searchToggle');
const searchPopover = document.getElementById('searchPopover');

function cls(v){return v === 'Pass' ? '' : v === 'Needs check' ? 'warn' : 'bad';}
function platformHtml(a){return a.map(p=>`<span class="platform platform-${p.toLowerCase().replaceAll(' ','-')}" title="${p}" aria-label="${p}"><i class="fa-brands fa-${platformMap[p] || 'circle'}"></i></span>`).join('');}
function statusLabel(status){return status === 'ready' ? 'Ready To Post' : status[0].toUpperCase() + status.slice(1);}
function matchesQuery(item){return JSON.stringify(item).toLowerCase().includes(state.query.toLowerCase());}
function matchesStatus(item, section){
  const s = section === 'calendar' ? state.calendarStatus : state.boardStatus;
  return s === 'all' || item.status === s;
}
function matchesAccount(item, section){
  const a = section === 'calendar' ? state.calendarAccount : state.boardAccount;
  return a === 'all' || item.account === a;
}
function accountLabel(account){ return account === 'artprodesign.2023' ? 'artprodesign' : account; }
function accountHtml(account){ return `<span class="account-pill">${accountLabel(account)}</span>`; }
function sectionItems(section){return items.filter(item => matchesQuery(item) && matchesStatus(item, section) && matchesAccount(item, section));}

function renderCards(){
  contentCards.innerHTML = '';
  sectionItems('board').forEach(it => {
    const idx = items.indexOf(it);
    contentCards.insertAdjacentHTML('beforeend', `
      <article class="content-card" data-index="${idx}">
        <button class="preview-card-button" aria-label="Open ${it.title} details">
          <div class="preview"><img src="${it.img}" alt="${it.title} preview"><span class="badge ${it.status}">${statusLabel(it.status)}</span></div>
          <div class="card-body">
            <div class="card-top"><h3>${it.title}</h3><span class="date-text">${it.date}</span></div>
            <div class="platforms">${platformHtml(it.platforms)}${accountHtml(it.account)}</div>
            <div class="meta">
              <span><strong>Hook:</strong> ${it.hook}</span>
              <span><strong>Caption:</strong> ${it.caption.slice(0, 82)}...</span>
            </div>
            <div class="card-actions card-actions-right"><span class="open-detail">Details</span></div>
          </div>
        </button>
      </article>`);
  });
}

function renderCalendar(){
  calendarGrid.className = `calendar-grid ${zoomClasses[state.zoom]}`;
  calendarGrid.innerHTML = '';
  dayNames.forEach(d => calendarGrid.insertAdjacentHTML('beforeend', `<div class="day-name">${d}</div>`));
  calendarDays.forEach((day, i) => {
    const muted = i > 30 ? 'muted' : '';
    const dayItems = muted ? [] : sectionItems('calendar').filter(item => item.day === day);
    calendarGrid.insertAdjacentHTML('beforeend', `
      <button class="day ${muted} ${dayItems.length ? 'has-events' : ''} ${dayItems.length > 1 ? 'multi-events' : ''}" data-day="${day}" aria-label="Open day ${day}">
        <div class="day-head"><span class="day-number">${day}</span><span class="day-count">${dayItems.length ? `${dayItems.length} item${dayItems.length>1?'s':''}` : ''}</span></div>
        <div class="day-events">
          ${dayItems.map(it => `
            <div class="cal-event" data-index="${items.indexOf(it)}">
              <img src="${it.img}" alt="${it.title}">
              <div class="cal-title"><span class="dot ${it.status}"></span><span>${it.title}</span></div>
              <div class="cal-footer"><span class="cal-status ${it.status}">${statusLabel(it.status)}</span><span class="cal-platforms">${platformHtml(it.platforms)}</span></div><div class="cal-account">${accountLabel(it.account)}</div>
            </div>`).join('')}
        </div>
      </button>`);
  });
  zoomLabel.textContent = zoomNames[state.zoom];
}

function openModal(html){ modalContent.innerHTML = html; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
function renderItemDetail(item){
  openModal(`<p class="eyebrow">${statusLabel(item.status)} / ${item.date}</p><h2>${item.title}</h2><img class="detail-img" src="${item.img}" alt="${item.title}"><div class="platforms">${platformHtml(item.platforms)}${accountHtml(item.account)}</div><div class="detail-section"><h4>Hook/title</h4><p>${item.hook}</p></div><div class="detail-section"><h4>Caption</h4><p>${item.caption}</p></div><div class="detail-section"><h4>Template + compliance</h4><p>${item.template} — ${item.compliance}</p></div><div class="detail-section"><h4>Title variant history</h4><p>${item.variants.join(' → ')}</p></div>`);
}
function renderDayDetail(day){
  const dayItems = sectionItems('calendar').filter(item => item.day === day);
  if (dayItems.length === 1) return renderItemDetail(dayItems[0]);
  openModal(`<p class="eyebrow">Calendar day</p><h2>Day ${day}</h2><div class="day-modal-grid">${dayItems.length ? dayItems.map(item => `<article class="day-modal-item"><img src="${item.img}" alt="${item.title}"><div><strong>${item.title}</strong><span>${statusLabel(item.status)} · ${item.date}</span><div class="platforms">${platformHtml(item.platforms)}${accountHtml(item.account)}</div><p>${item.hook}</p></div></article>`).join('') : '<p class="empty-state">No items on this day for the current filter.</p>'}</div>`);
}
function renderTemplateDetail(){
  openModal(`<p class="eyebrow">Approved template</p><h2>Black background title template</h2><img class="detail-img" src="assets/thumbs/street_interview_hook_aug25.jpg" alt="Approved template preview"><div class="detail-section"><h4>Layout</h4><p>Black background, rounded-corner inset video, title above the video, and “Read The Caption” below.</p></div><div class="detail-section"><h4>Use rule</h4><p>This is the locked default style unless a new direction is explicitly approved.</p></div>`);
}
function rerender(){renderCards();renderCalendar();}
function setZoom(next){ state.zoom = Math.max(0, Math.min(4, next)); renderCalendar(); }
function toggleSidebar(){ document.body.classList.toggle('sidebar-collapsed'); }

renderCards(); renderCalendar();
searchInput.addEventListener('input', () => { state.query = searchInput.value; rerender(); });
searchToggle.addEventListener('click', () => { searchPopover.classList.toggle('open'); if (searchPopover.classList.contains('open')) searchInput.focus(); });
document.addEventListener('click', e => { if (!searchPopover.contains(e.target)) searchPopover.classList.remove('open'); });
calendarStatusFilter.addEventListener('change', () => { state.calendarStatus = calendarStatusFilter.value; renderCalendar(); });
boardStatusFilter.addEventListener('change', () => { state.boardStatus = boardStatusFilter.value; renderCards(); });
calendarAccountFilter.addEventListener('change', () => { state.calendarAccount = calendarAccountFilter.value; renderCalendar(); });
boardAccountFilter.addEventListener('change', () => { state.boardAccount = boardAccountFilter.value; renderCards(); });
document.getElementById('zoomOut').addEventListener('click', () => setZoom(state.zoom - 1));
document.getElementById('zoomIn').addEventListener('click', () => setZoom(state.zoom + 1));
document.getElementById('calendarExpand').addEventListener('click', async () => { if (document.fullscreenElement) await document.exitFullscreen(); else await calendarPanel.requestFullscreen(); });
contentCards.addEventListener('click', e => { const card=e.target.closest('.content-card'); if(card) renderItemDetail(items[Number(card.dataset.index)]); });
calendarGrid.addEventListener('click', e => { const day=e.target.closest('.day'); if(day) renderDayDetail(Number(day.dataset.day)); });
document.getElementById('templatePreviewCard').addEventListener('click', renderTemplateDetail);
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
sidebarToggle.addEventListener('click', toggleSidebar);
mobileSidebarToggle.addEventListener('click', toggleSidebar);
