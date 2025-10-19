/* AUTH POPUP: Login & Register (ES Module) */
export function initAuth(authOverlay){
  const root = authOverlay; // scope all queries to the injected overlay
  const modal = root.querySelector('.auth-modal');
  const closeAuth = root.querySelector('#closeAuth');
  const tabs = Array.from(root.querySelectorAll('.tab'));
  const panels = Array.from(root.querySelectorAll('.panel'));

  const loginForm = root.querySelector('#loginForm');
  const registerForm = root.querySelector('#registerForm');
  const loginMsg = root.querySelector('#loginMsg');
  const regMsg = root.querySelector('#regMsg');

  // Accessibility state
  root.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  // default to login tab on init
  activateTab('login');

  // Close interactions
  const close = () => {
    root.style.display = 'none';
    root.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    // restore focus to opener if available
    const btn = document.getElementById('openAuthBtn');
    if (btn) btn.focus();
    // remove keydown listener
    document.removeEventListener('keydown', onKeydown);
  };

  closeAuth.addEventListener('click', close, { once: true });
  root.addEventListener('click', (e) => { if (e.target === root) close(); });

  // tab clicking
  tabs.forEach(t => t.addEventListener('click', () => {
    activateTab(t.dataset.tab);
    tabs.forEach(tab => tab.setAttribute('aria-selected', String(tab === t)));
  }));

  function activateTab(name){
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    panels.forEach(p => p.classList.toggle('active', p.id === (name === 'login' ? 'loginForm' : 'registerForm')));
    if (loginMsg) loginMsg.textContent = '';
    if (regMsg) regMsg.textContent = '';
  }

  /* --- LocalStorage helpers --- */
  function getUsers(){ try { return JSON.parse(localStorage.getItem('mv_users') || '[]'); } catch(e){ return []; } }
  function saveUsers(users){ localStorage.setItem('mv_users', JSON.stringify(users)); }
  function setCurrentUser(user){ localStorage.setItem('mv_currentUser', JSON.stringify(user)); }
  function getCurrentUser(){ return JSON.parse(localStorage.getItem('mv_currentUser') || 'null'); }

  // REGISTER
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = root.querySelector('#regName').value.trim();
    const email = root.querySelector('#regEmail').value.trim().toLowerCase();
    const pass = root.querySelector('#regPassword').value;

    if (!name || !email || !pass){ regMsg.textContent = 'Please fill all fields'; return; }
    if (pass.length < 6){ regMsg.textContent = 'Password should be at least 6 characters'; return; }

    const users = getUsers();
    if (users.some(u => u.email === email)){ regMsg.textContent = 'An account with this email already exists'; return; }

    const user = { id: Date.now(), name, email, password: pass };
    users.push(user);
    saveUsers(users);
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
    regMsg.style.color = 'green';
    regMsg.textContent = 'Account created successfully. You are now logged in.';
    setTimeout(() => {
      regMsg.textContent='';
      root.querySelector('#regName').value='';
      root.querySelector('#regEmail').value='';
      root.querySelector('#regPassword').value='';
      close();
      reflectAuthState();
    }, 1000);
  });

  // LOGIN
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = root.querySelector('#loginEmail').value.trim().toLowerCase();
    const pass = root.querySelector('#loginPassword').value;
    if (!email || !pass){ loginMsg.textContent = 'Please complete both fields'; return; }

    const users = getUsers();
    const found = users.find(u => u.email === email && u.password === pass);
    if (!found){ loginMsg.textContent = 'Email or password is incorrect'; return; }

    setCurrentUser({ id: found.id, name: found.name, email: found.email });
    loginMsg.style.color = 'green';
    loginMsg.textContent = 'Signed in successfully.';
    setTimeout(() => { loginMsg.textContent=''; loginForm.reset(); close(); reflectAuthState(); }, 800);
  });

  // reflect button text
  function reflectAuthState(){
    const user = getCurrentUser();
    const openBtn = document.getElementById('openAuthBtn');
    if (!openBtn) return;
    if (user){
      openBtn.textContent = `Hi, ${user.name.split(' ')[0]}`;
      openBtn.disabled = false;
    } else {
      openBtn.textContent = 'Sign In / Register';
      openBtn.disabled = false;
    }
  }
  reflectAuthState();

  // Focus trap inside modal
  const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  const focusables = Array.from(modal.querySelectorAll(focusableSelectors));
  const firstEl = focusables[0];
  const lastEl = focusables[focusables.length - 1];
  if (firstEl) firstEl.focus();

  const onKeydown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    if (e.key === 'Tab' && focusables.length){
      if (e.shiftKey && document.activeElement === firstEl){ e.preventDefault(); lastEl.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl){ e.preventDefault(); firstEl.focus(); }
    }
  };
  document.addEventListener('keydown', onKeydown);
}

export { initAuth };