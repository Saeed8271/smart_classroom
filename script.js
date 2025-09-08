
// ========== SmartClassroom – Shared JS ==========

// Highlight active nav item
(function highlightActive(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar a').forEach(a => {
    const href = a.getAttribute('href');
    if((path === '' && href === 'index.html') || href === path){
      a.classList.add('active');
    }
  });
})();

// Simple toast
function toast(msg='Saved!', duration=1800){
  let t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position:'fixed', bottom:'24px', left:'50%', transform:'translateX(-50%)',
    background:'#111827', color:'#fff', padding:'12px 16px', borderRadius:'12px',
    boxShadow:'0 8px 24px rgba(0,0,0,.22)', zIndex:9999, fontWeight:'700'
  });
  document.body.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transition='opacity .3s'; }, duration-300);
  setTimeout(()=> t.remove(), duration);
}

// Attach fake-submit handlers for all forms
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[data-smart]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      // quick front-end required check
      const invalid = form.querySelector(':invalid');
      if(invalid){ invalid.focus(); toast('Please fill all required fields'); return; }
      toast('Saved locally (connect backend later)');
      form.reset();
    });
  });
});
