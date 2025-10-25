
let userData = JSON.parse(localStorage.getItem("users"));

if (!userData) {
  alert("No user found. Please sign in first.");
  window.location.href = "login.html"; 
} else {

  document.getElementById("name").value = userData.name || "";
  document.getElementById("birthdate").value = userData.birthdate || "";
  (function () {
    var g = userData.gender || "";
    if (g === "ذكر") g = "Male";
    if (g === "أنثى") g = "Female";
    document.getElementById("gender").value = g;
  })();
  document.getElementById("country").value = userData.country || "";
  document.getElementById("email").value = userData.email || "";
  document.getElementById("password").value = userData.password || "";
}


document.getElementById("saveBtn").addEventListener("click", function () {
  userData.name = document.getElementById("name").value;
  userData.birthdate = document.getElementById("birthdate").value;
  userData.gender = document.getElementById("gender").value;
  userData.country = document.getElementById("country").value;
  userData.password = document.getElementById("password").value;


  localStorage.setItem("users", JSON.stringify(userData));

  var status = document.getElementById("statusMsg");
  var btn = document.getElementById("saveBtn");
  if (status) {
    status.textContent = "Changes saved successfully";
    status.classList.add("show");
    setTimeout(function () {
      status.classList.remove("show");
      status.textContent = "";
    }, 2000);
  }
  btn.classList.add("btn-success");
  setTimeout(function () {
    btn.classList.remove("btn-success");
  }, 800);
});

(function applyStyles() {
  var style = document.createElement("style");
  style.setAttribute("data-profile-styles", "");
  style.textContent = `
  :root {
    --bg1: #d9efe8;
    --bg2: #bfe6dc;
    --card: #ffffff;
    --teal: #078887;
    --teal-dark: #056e72;
    --text: #123;
    --muted: #355;
    --shadow: 0 12px 24px rgba(0,0,0,0.15);
    --radius: 14px;
  }

  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
    color: var(--text);
    background: radial-gradient(1200px 600px at 10% 0%, var(--bg2), transparent),
                radial-gradient(1200px 600px at 90% 100%, var(--bg1), transparent),
                linear-gradient(180deg, var(--bg1), var(--bg2));
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  }

  .page {
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 24px;
  }

  .profile-card {
    width: 100%;
    max-width: 760px;
    background: var(--card);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: clamp(16px, 2.5vw, 24px);
    border: 1px solid rgba(0,0,0,0.04);
  }

  .card-header { margin-bottom: 12px; }
  .card-header h1 {
    margin: 0 0 6px 0;
    font-size: clamp(1.25rem, 2.2vw, 1.6rem);
    letter-spacing: 0.2px;
  }
  .subtitle { margin: 0; color: var(--muted); font-size: 0.95rem; }

  .form { display: grid; gap: 16px; }
  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 16px;
  }
  @media (max-width: 640px) {
    .form-grid { grid-template-columns: 1fr; }
    .profile-card { padding: 18px; }
  }

  .field { display: grid; gap: 8px; }
  .field label { font-weight: 600; font-size: 0.95rem; color: var(--text); }
  .field input, .field select {
    appearance: none;
    width: 100%;
    padding: 12px 14px;
    min-height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,0.12);
    background: #fff;
    color: var(--text);
    box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset;
    transition: border-color .2s, box-shadow .2s, background .2s;
  }
  .field input::placeholder { color: #667085; }
  .field input:focus, .field select:focus {
    outline: none;
    border-color: var(--teal);
    box-shadow: 0 0 0 4px color-mix(in oklab, var(--teal) 20%, white);
  }
  #email[disabled] {
    background: #f6fbfa;
    color: #50646a;
    cursor: not-allowed;
    opacity: 0.9;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
    margin-top: 8px;
  }
  .btn-primary {
    background: var(--teal);
    color: #fff;
    border: none;
    padding: 12px 18px;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.2px;
    cursor: pointer;
    transition: transform .06s ease, background .2s ease, box-shadow .2s ease;
    box-shadow: 0 6px 16px rgba(7,136,135,0.25);
  }
  .btn-primary:hover { background: var(--teal-dark); }
  .btn-primary:active { transform: translateY(1px); }
  .btn-success { box-shadow: 0 0 0 3px color-mix(in oklab, var(--teal) 25%, white); }

  .status {
    min-height: 1.25rem;
    font-size: 0.95rem;
    color: var(--teal-dark);
    opacity: 0;
    transition: opacity .2s ease;
  }
  .status.show { opacity: 1; }

  /* Small screens: stack actions and full-width button */
  @media (max-width: 480px) {
    .actions {
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
    }
    .btn-primary { width: 100%; }
    .status { text-align: center; }
  }
  `;
  document.head.appendChild(style);
})();