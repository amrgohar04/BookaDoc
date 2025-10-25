// ======== BASIC STYLE IN JS ========
document.body.style.fontFamily = "Times New Roman, Times,serif";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#f3f3f3";

const popup = document.getElementById("authPopup");
popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.backgroundColor = "rgba(0,0,0,0.6)";
popup.style.display = "none";
popup.style.justifyContent = "center";
popup.style.alignItems = "center";
popup.style.zIndex = "1000";

const content = document.getElementById("popupContent");
content.style.background = "linear-gradient(135deg, rgba(245, 255, 245, 0.9), rgba(183, 255, 218, 0.6))";
content.style.padding = "20px";
content.style.borderRadius = "8px";
content.style.width = "300px";
content.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
content.style.textAlign = "center";

// ======== LOAD USERS FROM LOCALSTORAGE ========
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = localStorage.getItem("currentUser");

// ======== RENDER FORMS ========
function renderLoginForm() {
  content.innerHTML = `
  <h2 style="
  text-align: center;
  color: #008C95;
  font-family: Times New Roman, Times,serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 15px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
">Login</h2>
    <input type="text" id="loginUser" placeholder="Username" style="margin-bottom:10px; width:90%; padding:5px"><br>
    <input type="password" id="loginPass" placeholder="Password" style="margin-bottom:10px; width:90%; padding:5px"><br>
    <button id="loginBtn" 
style="
  background: linear-gradient(135deg, #008C95, #008C95);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 25px;
  font-size: 16px;
  font-family:Times New Roman, Times,serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  margin: 10px auto;
  display: block;
">
  Login
</button>
<script>
  const btn = document.getElementById("loginBtn");
  btn.addEventListener("mouseover", () => {
    btn.style.background = "linear-gradient(135deg, #008C95, #008C95)";
    btn.style.boxShadow = "0 3px 8px rgba(0,0,0,0.3)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.background = "linear-gradient(135deg, #008C95, #008C95)";
    btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  });
</script>
    <p>Don't have an account? <a href="#" id="showRegister">Register</a></p>
    <button id="closePopup" class="close-btn">Close</button>

<style>
  .close-btn {
    background: linear-gradient(135deg, #008C95, #008C95);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.25s ease;
  }

  .close-btn:hover {
    background: linear-gradient(135deg, #008C95, #008C95);
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }

  .close-btn:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
</style>
  `;
}

function renderRegisterForm() {
  content.innerHTML = `
  <h2 style="
  text-align: center;
  color: #008C95;
  font-family: Times New Roman, Times,serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 15px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
">Register</h2>
    <input type="text" id="regUser" placeholder="Username" style="margin-bottom:10px; width:90%; padding:5px"><br>
    <input type="password" id="regPass" placeholder="Password" style="margin-bottom:10px; width:90%; padding:5px"><br>
    <button id="loginBtn" 
style="
  background: linear-gradient(135deg, #008C95, #008C95);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 25px;
  font-size: 16px;
  font-family: Times New Roman, Times,serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  margin: 10px auto;
  display: block;
">
  Register
</button>
<script>
  const btn = document.getElementById("loginBtn");
  btn.addEventListener("mouseover", () => {
    btn.style.background = "linear-gradient(135deg, #008C95, #008C95)";
    btn.style.boxShadow = "0 3px 8px rgba(0,0,0,0.3)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.background = "linear-gradient(135deg, #008C95, #008C95)";
    btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  });
</script>
    <p>Already have an account? <a href="#" id="showLogin">Login</a></p>
    <button id="closePopup" class="close-btn">Close</button>

<style>
  .close-btn {
    background: linear-gradient(135deg, #008C95, #008C95);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.25s ease;
  }

  .close-btn:hover {
    background: linear-gradient(135deg, #008C95, #008C95);
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }

  .close-btn:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
</style>
  `;
}

// ======== SHOW POPUP ========
document.getElementById("authBtn").addEventListener("click", () => {
  popup.style.display = "flex";
  renderLoginForm();
  attachEvents();
});

// ======== ATTACH EVENTS ========
function attachEvents() {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });

  const closeBtn = document.getElementById("closePopup");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  const regLink = document.getElementById("showRegister");
  if (regLink) {
    regLink.addEventListener("click", (e) => {
      e.preventDefault();
      renderRegisterForm();
      attachEvents();
    });
  }

  const loginLink = document.getElementById("showLogin");
  if (loginLink) {
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      renderLoginForm();
      attachEvents();
    });
  }

  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) loginBtn.addEventListener("click", handleLogin);

  const registerBtn = document.getElementById("registerBtn");
  if (registerBtn) registerBtn.addEventListener("click", handleRegister);
}

// ======== HANDLE REGISTER ========
function handleRegister() {
  const username = document.getElementById("regUser").value.trim();
  const password = document.getElementById("regPass").value.trim();

  if (!username || !password) return alert("Please fill all fields");

  const userExists = users.some(u => u.username === username);
  if (userExists) return alert("Username already exists");

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  renderLoginForm();
  attachEvents();
}

// ======== REDIRECT TO HOME ========
function redirectToHome() {
  window.location.href = "../Home/home.html"; // ←غيّر المسار هنا
}

// ======== HANDLE LOGIN ========
function handleLogin() {
  const username = document.getElementById("loginUser").value.trim();
  const password = document.getElementById("loginPass").value.trim();

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    currentUser = username;
    localStorage.setItem("currentUser", username);
    popup.style.display = "none";
    updateNavbarToLoggedIn(username);
    alert("Welcome back, " + username + "!");
    redirectToHome();
  } else {
    alert("Invalid username or password!");
  }
}

// ======== HANDLE LOGOUT ========
function handleLogout() {
  localStorage.removeItem("currentUser");
  currentUser = null;
  document.getElementById("authBtn").textContent = "Sign In / Register";
  document.getElementById("authBtn").onclick = null;
  document.getElementById("authBtn").addEventListener("click", () => {
    popup.style.display = "flex";
    renderLoginForm();
    attachEvents();
  });
  alert("You have logged out.");
}

// ======== UPDATE NAVBAR AFTER LOGIN ========
function updateNavbarToLoggedIn(username) {
  const authBtn = document.getElementById("authBtn");
  authBtn.textContent = "Logout (" + username + ")";
  authBtn.onclick = handleLogout;
}

// ======== AUTO LOGIN IF SAVED ========
if (currentUser) {
  updateNavbarToLoggedIn(currentUser);
}