// Inline styles injected via JavaScript to keep everything in one place
(function addStyles() {
  const css = `
  :root {
    --bg1: #d9efe8; /* light soft green */
    --bg2: #bfe6dc; /* soft green */
    --card: #ffffff;
    --teal: #078887; /* button color */
    --teal-dark: #056e72; /* button hover */
    --text: #123; /* dark teal text */
    --muted: #355;
    --shadow: 0 12px 24px rgba(0,0,0,0.15);
    --radius: 14px;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    background: linear-gradient(135deg, var(--bg1), var(--bg2));
    color: var(--text);
  }

  .wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  .card {
    width: 100%;
    max-width: 560px;
    background: var(--card);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 28px;
  }

  .title {
    margin: 0 0 18px;
    font-size: clamp(22px, 3.2vw, 28px);
    text-align: center;
    color: var(--teal);
  }

  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
  }

  .field { margin-bottom: 12px; }
  label { display: block; font-weight: 600; margin-bottom: 6px; color: var(--muted); }
  input[type="text"], input[type="email"], input[type="tel"], select {
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    transition: box-shadow .15s ease;
    background: #fff;
  }
  input:focus, select:focus { box-shadow: 0 0 0 3px rgba(7,136,135,0.15); }

  .inline {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .inline .chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid rgba(0,0,0,0.12);
    background: #fff;
    cursor: pointer;
    user-select: none;
  }
  .inline input[type="radio"] { accent-color: var(--teal); }

  .btn {
    width: 100%;
    padding: 12px 18px;
    background: var(--teal);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(7,136,135,0.25);
    transition: transform .05s ease, background .2s ease;
  }
  .btn:hover { background: var(--teal-dark); }
  .btn:active { transform: translateY(1px); }

  .help { font-size: 13px; color: #666; margin-top: 2px; }
  .success {
    margin-top: 14px;
    padding: 12px;
    background: #e8fbf4;
    color: #0a6f5a;
    border: 1px solid #b8eedf;
    border-radius: 10px;
    display: none;
    text-align: center;
    font-weight: 600;
  }
  
  /* Tablet adjustments */
  @media (max-width: 768px) {
    .card { padding: 22px; }
    .inline { gap: 10px; }
  }

  @media (max-width: 560px) {
    .wrap { padding: 16px; }
    .card { padding: 18px; }
    .inline .chip { padding: 9px 12px; }
  }

  /* Very small phones */
  @media (max-width: 400px) {
    .wrap { padding: 12px; }
    .card { padding: 14px; }
    label { font-size: 14px; }
    input[type="text"], input[type="email"], input[type="tel"], select { font-size: 15px; }
  }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();

// Helper to create DOM from HTML string
function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function render() {
  const app = document.getElementById('app');

  const ui = h(`
    <div class="wrap">
      <div class="card">
        <h1 class="title">Book an Appointment</h1>

        <form id="bookingForm" novalidate>
          <div class="field">
            <label for="fullName">Full Name</label>
            <input id="fullName" type="text" placeholder="John Doe" required>
          </div>

          <div class="row">
            <div class="field">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="john@example.com" required>
            </div>
            <div class="field">
              <label for="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="+1 555 123 4567" required>
            </div>
          </div>

          <div class="field">
            <label>Session Type</label>
            <div class="inline" role="radiogroup" aria-label="Session Type">
              <label class="chip"><input type="radio" name="session" value="In Person" checked> In Person</label>
              <label class="chip"><input type="radio" name="session" value="Video Call"> Video Call</label>
            </div>
          </div>

          <div class="field">
            <label>Payment Method</label>
            <div class="inline" role="radiogroup" aria-label="Payment Method">
              <label class="chip"><input type="radio" name="payment" value="Visa" checked> Visa</label>
              <label class="chip"><input type="radio" name="payment" value="MasterCard"> MasterCard</label>
            </div>
          </div>

          <div class="row">
            <div class="field">
              <label for="cardNumber">Card Number</label>
              <input id="cardNumber" type="text" inputmode="numeric" placeholder="1234 5678 9012 3456" maxlength="19" required>
              <div class="help">Enter 16 digits</div>
            </div>
            <div class="field">
              <label for="expiry">Expiry Date</label>
              <input id="expiry" type="text" inputmode="numeric" placeholder="MM/YY" maxlength="5" required>
            </div>
          </div>

          <div class="field">
            <label for="cvv">CVV</label>
            <input id="cvv" type="text" inputmode="numeric" placeholder="123" maxlength="4" required>
          </div>

          <button type="submit" class="btn">Pay & Book</button>
          <div id="success" class="success">Payment successful! Your appointment is confirmed.</div>
        </form>
      </div>
    </div>
  `);

  app.innerHTML = '';
  app.appendChild(ui);

  // Lightweight formatting for card inputs (beginner-friendly)
  const card = ui.querySelector('#cardNumber');
  const expiry = ui.querySelector('#expiry');
  const cvv = ui.querySelector('#cvv');

  card.addEventListener('input', () => {
    let v = card.value.replace(/\D/g, '').slice(0,16);
    // group as 4-4-4-4
    v = v.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    card.value = v;
  });

  expiry.addEventListener('input', () => {
    let v = expiry.value.replace(/\D/g, '').slice(0,4);
    if (v.length >= 3) v = v.slice(0,2) + '/' + v.slice(2);
    expiry.value = v;
  });

  cvv.addEventListener('input', () => {
    cvv.value = cvv.value.replace(/\D/g, '').slice(0,4);
  });

  ui.querySelector('#bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const fullName = ui.querySelector('#fullName').value.trim();
    const email = ui.querySelector('#email').value.trim();
    const phone = ui.querySelector('#phone').value.trim();
    const session = ui.querySelector('input[name="session"]:checked').value;
    const payment = ui.querySelector('input[name="payment"]:checked').value;
    const cardNumber = card.value.replace(/\s/g, '');
    const expiryVal = expiry.value;
    const cvvVal = cvv.value;

    if (!fullName || !email || !phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }

    if (cardNumber.length !== 16 || /\D/.test(cardNumber)) {
      alert('Please enter a valid 16‑digit card number.');
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryVal)) {
      alert('Please enter expiry as MM/YY.');
      return;
    }

    if (!/^\d{3,4}$/.test(cvvVal)) {
      alert('Please enter a valid CVV (3 or 4 digits).');
      return;
    }

    // Simulate success
    const success = ui.querySelector('#success');
    success.style.display = 'block';

    // Optionally reset after a moment
    setTimeout(() => {
      ui.querySelector('#bookingForm').reset();
      success.style.display = 'none';
    }, 2500);

    // Log booking (for devs)
    console.log('Booking confirmed:', {
      fullName, email, phone, session, payment,
      cardNumber: '**** **** **** ' + cardNumber.slice(-4),
      expiry: expiryVal
    });
  });
}

// Boot
render();
