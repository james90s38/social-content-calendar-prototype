
const items = [
  {title:'AI Agent Mistakes', status:'ready', date:'Aug 28', platforms:['Instagram','TikTok'], template:'Default Hook Title v1', compliance:'Pass', hook:'Stop Asking AI This Way', caption:'Most people give AI vague tasks. Give it a role, constraints, and an example instead. #ai #automation #contentcreator #prompting #workflow', variants:['Stop Asking AI This Way','The Prompt Mistake Costing You Time','Approved: Stop Asking AI This Way'], bg:'#f3c7a6'},
  {title:'Prompt Hook Test', status:'approved', date:'Aug 29', platforms:['X','Reddit'], template:'Default Hook Title v1', compliance:'Needs check', hook:'Your Hook Is Too Soft', caption:'A strong hook makes one promise. If your title tries to say everything, people scroll. #content #marketing #copywriting #socialmedia #hooks', variants:['Weak Hook vs Strong Hook','Your Hook Is Too Soft'], bg:'#b9c9ff'},
  {title:'Automation Calendar', status:'edited', date:'Not set', platforms:['Pinterest'], template:'Experimental Split v2', compliance:'Failed', hook:'Plan Before You Post', caption:'Draft caption waiting for approval.', variants:['Plan Before You Post'], bg:'#d9f1cb'},
  {title:'Content Batch Workflow', status:'scheduled', date:'Sep 01', platforms:['Instagram','TikTok'], template:'Default Hook Title v1', compliance:'Pass', hook:'Batching Saves The Week', caption:'Batch ideas, edits, approvals, then scheduling. Do not mix those steps in one messy folder. #workflow #creator #productivity #socialmedia #planning', variants:['Batching Saves Time','Batching Saves The Week'], bg:'#ffdca8'},
  {title:'Posted: Caption Lesson', status:'posted', date:'Aug 22', platforms:['Instagram','TikTok','X'], template:'Default Hook Title v1', compliance:'Pass', hook:'Captions Should Teach', caption:'Short captions work when they teach one thing clearly. #content #captiontips #marketing #creator #social', variants:['Captions Should Teach'], bg:'#c6efe3'},
  {title:'Reddit Reuse Check', status:'ready', date:'Aug 30', platforms:['Reddit','X'], template:'Default Hook Title v1', compliance:'Pass', hook:'Reuse Content Carefully', caption:'Same idea can work on different platforms, but the caption should match the room. #reddit #socialstrategy #content #distribution #creator', variants:['Reuse Content Carefully','Don’t Copy Paste Everywhere'], bg:'#e9c7ff'}
];
const events = { 22:[['posted','Caption Lesson']], 28:[['ready','AI Agent Mistakes']], 29:[['approved','Prompt Hook Test']], 30:[['ready','Reddit Reuse']], 1:[['scheduled','Content Batch']] };
const grid = document.getElementById('calendarGrid');
['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].forEach(d => grid.insertAdjacentHTML('beforeend', `<div class="day-name">${d}</div>`));
for (let i=0; i<35; i++) {
  const day = i < 5 ? 27 + i : i - 4;
  const muted = i < 5 || day > 31 ? 'muted' : '';
  const list = events[day] || [];
  grid.insertAdjacentHTML('beforeend', `<div class="day ${muted}"><div class="day-number">${day}</div>${list.map(e=>`<div class="event ${e[0]}">${e[1]}</div>`).join('')}</div>`);
}
const cardRoot = document.getElementById('contentCards');
function complianceClass(value){ return value === 'Pass' ? '' : value === 'Needs check' ? 'warn' : 'bad'; }
function render(filter='all', query='') {
  cardRoot.innerHTML = '';
  const q = query.toLowerCase();
  items.filter(item => (filter === 'all' || item.status === filter) && JSON.stringify(item).toLowerCase().includes(q)).forEach((item, idx) => {
    cardRoot.insertAdjacentHTML('beforeend', `<article class="content-card" data-index="${idx}">
      <div class="preview" style="--thumb-bg:${item.bg}">
        <div class="status-ribbon"><span class="status-pill ${item.status}">${item.status}</span></div>
        <div class="video-thumb"><b>${item.hook}</b><div class="mini-video">Preview / first frame</div><span>Read The Caption</span></div>
      </div>
      <div class="card-body">
        <div class="card-title-row"><h3>${item.title}</h3><span class="date-text">${item.date}</span></div>
        <div class="platforms">${item.platforms.map(p=>`<span class="platform">${p}</span>`).join('')}</div>
        <div class="meta-grid">
          <span><strong>Hook:</strong> ${item.hook}</span>
          <span><strong>Template:</strong> ${item.template}</span>
          <span><strong>Caption:</strong> ${item.caption.slice(0, 72)}...</span>
        </div>
        <div class="card-actions"><span class="compliance ${complianceClass(item.compliance)}">Template: ${item.compliance}</span><button class="open-detail">Details</button></div>
      </div>
    </article>`);
  });
}
render();
let activeStatus = 'all';
document.querySelectorAll('.chip').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.chip').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); activeStatus = btn.dataset.status; render(activeStatus, searchInput.value); }));
document.querySelectorAll('.quick-filter').forEach(btn => btn.addEventListener('click', () => { activeStatus = btn.dataset.filter; document.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active', b.dataset.status === activeStatus)); render(activeStatus, searchInput.value); document.getElementById('board').scrollIntoView({behavior:'smooth'}); }));
searchInput.addEventListener('input', () => render(activeStatus, searchInput.value));
const drawer = document.getElementById('drawer');
cardRoot.addEventListener('click', (event) => {
  const card = event.target.closest('.content-card'); if(!card || !event.target.closest('.open-detail')) return;
  const item = items[Number(card.dataset.index)];
  drawerContent.innerHTML = `<p class="eyebrow">${item.status} / ${item.date}</p><h2>${item.title}</h2><div class="detail-preview" style="--thumb-bg:${item.bg}"><div class="video-thumb"><b>${item.hook}</b><div class="mini-video">Preview / first frame</div><span>Read The Caption</span></div></div><div class="platforms">${item.platforms.map(p=>`<span class="platform">${p}</span>`).join('')}</div><div class="detail-section"><h4>Caption</h4><p>${item.caption}</p></div><div class="detail-section"><h4>Template + compliance</h4><p>${item.template} — ${item.compliance}. Approved content stays separate from edited/not-approved items.</p></div><div class="detail-section"><h4>Title variant history</h4><p>${item.variants.join(' → ')}</p></div>`;
  drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false');
});
drawerClose.addEventListener('click', () => { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true'); });
drawer.addEventListener('click', e => { if(e.target === drawer) drawerClose.click(); });
