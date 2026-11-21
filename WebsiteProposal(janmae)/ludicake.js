const menuItems = [
  {
    id: "m1",
    title: "Sizzling Pork Sisig Rice",
    price: 165,
    category: "Meals",
    image: "images/sisig.jpg",
    desc: "Crispy minced pork belly with chili peppers, egg, calamansi, and garlic rice.",
  },
  {
    id: "m2",
    title: "Chicken Inasal with Garlic Rice",
    price: 180,
    category: "Meals",
    image: "images/Chicken Inasal with Garlic Rice.webp",
    desc: "Grilled Bacolod-style marinated chicken with aromatic garlic rice.",
  },
  {
    id: "m3",
    title: "Beef Pares Rice Bowl",
    price: 135,
    category: "Meals",
    image: "images/beef-pares.jpg",
    desc: "Tender braised beef in sweet soy gravy with garlic fried rice.",
  },
  {
    id: "m4",
    title: "Matcha Milk Tea",
    price: 95,
    category: "Drinks",
    image: "images/matcha Milk tea.jpg",
    desc: "Authentic matcha milk tea with fresh milk, honey, and chewy tapioca pearls.",
  },
  {
    id: "m5",
    title: "Special Halo-Halo Overload",
    price: 125,
    category: "Desserts",
    image: "images/Halo-Halo-Overload-with-Custard-Milk-720x480.webp",
    desc: "Shaved ice with leche flan, ube, bananas, sago, and ice cream.",
  },
  {
    id: "m6",
    title: "Fiesta Crispy Pata (Good for 3)",
    price: 580,
    category: "Specials",
    image: "images/crispy-pata.jpg",
    desc: "Golden whole pork leg with garlic soy-vinegar dip.",
  },
  {
    id: "m7",
    title: "Chicken Adobo Rice Meal",
    price: 120,
    category: "Meals",
    image: "images/chicken-adobo.jpg",
    desc: "Tender chicken adobo with garlic rice — the best-selling rice meal.",
  },
  {
    id: "m8",
    title: "Pork Sisig Rice Meal",
    price: 135,
    category: "Meals",
    image: "images/sisig.jpg",
    desc: "Sizzling sisig served over garlic rice with calamansi.",
  },
  {
    id: "m9",
    title: "Fried Chicken with Rice",
    price: 110,
    category: "Meals",
    image: "images/Fried Chicken with Rice.webp",
    desc: "Crispy fried chicken paired with hot garlic rice.",
  },
  {
    id: "m10",
    title: "Beef Tapa Rice Meal",
    price: 140,
    category: "Meals",
    image: "images/Beef Tapa Rice Meal.webp",
    desc: "Buttery beef tapa with garlic rice and fried egg.",
  },
  {
    id: "m11",
    title: "Cheese Burger",
    price: 85,
    category: "Snacks",
    image: "images/cheese-burger.jpg",
    desc: "Juicy beef patty with melted cheese on a toasted bun.",
  },
  {
    id: "m12",
    title: "French Fries",
    price: 60,
    category: "Snacks",
    image: "images/french-fries.jpg",
    desc: "Crispy golden fries, salty and satisfying.",
  },
  {
    id: "m13",
    title: "Chicken Nuggets (6pcs)",
    price: 95,
    category: "Snacks",
    image: "images/chicken-nuggets.jpg",
    desc: "Tender golden chicken nuggets served with dip.",
  },
  {
    id: "m14",
    title: "Siomai (4pcs)",
    price: 50,
    category: "Snacks",
    image: "images/siomai.jpg",
    desc: "Steamed pork and shrimp dumplings with ginger sauce.",
  },
  {
    id: "m15",
    title: "Spaghetti",
    price: 90,
    category: "Pasta & Noodles",
    image: "images/spaghetti.jpg",
    desc: "Classic spaghetti sautéed in garlic and tomato sauce.",
  },
  {
    id: "m16",
    title: "Pancit Malabon",
    price: 100,
    category: "Pasta & Noodles",
    image: "images/pancit-malabon.jpg",
    desc: "Savory pancit with shrimp, pork, and cabbage in a rich broth.",
  },
  {
    id: "m17",
    title: "Carbonara",
    price: 115,
    category: "Pasta & Noodles",
    image: "images/carbonara.jpg",
    desc: "Creamy spaghetti with pancetta, egg, and parmesan.",
  },
  {
    id: "m18",
    title: "Iced Tea",
    price: 45,
    category: "Drinks",
    image: "images/Iced Tea.webp",
    desc: "Chilled brewed tea served over ice.",
  },
  {
    id: "m19",
    title: "Calamansi Juice",
    price: 40,
    category: "Drinks",
    image: "images/Calamansi Juice.webp",
    desc: "Fresh calamansi juice with a hint of sugar.",
  },
  {
    id: "m20",
    title: "Milk Tea",
    price: 75,
    category: "Drinks",
    image: "images/Milk Tea.webp",
    desc: "Tea with milk and brown sugar, served chilled.",
  },
  {
    id: "m21",
    title: "Softdrinks",
    price: 50,
    category: "Drinks",
    image: "images/Softdrinks.webp",
    desc: "Your favorite cold softdrink.",
  },
  {
    id: "m22",
    title: "Halo-Halo",
    price: 90,
    category: "Desserts",
    image: "images/halo-halo.jpg",
    desc: "Shaved ice with leche flan, ube, bananas, sago, and ice cream.",
  },
  {
    id: "m23",
    title: "Leche Flan",
    price: 70,
    category: "Desserts",
    image: "images/Leche Flan.webp",
    desc: "Caramelized custard made from eggs and sweetened condensed milk.",
  },
  {
    id: "m24",
    title: "Mango Float",
    price: 80,
    category: "Desserts",
    image: "images/Mango Float.webp",
    desc: "Sweet mango layers with graham cracker crust and cream top.",
  },
];
let cart = [],
  orders = [],
  users = [],
  currentUser = null,
  category = "All",
  sound = true;
const fee = 45;
const $ = (id) => document.getElementById(id);
const money = (n) => `₱${Number(n).toFixed(2)}`;
let audio;

const DEMO_USER = {
  id: "u_demo",
  name: "Juan Dela Cruz",
  email: "juan@bitedash.ph",
  passwordHash: "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f", // SHA-256 for "password123"
  phone: "09171234567",
  address: "Unit 402, Sunshine Towers, Bonifacio Global City, Taguig",
  createdAt: "Nov 8, 2026",
};

async function hashPassword(plain) {
  try {
    if (window.crypto && window.crypto.subtle) {
      const buffer = await window.crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(plain),
      );
      return Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
  } catch (e) {}
  let hash = 0;
  for (let i = 0; i < plain.length; i++) {
    hash = ((hash << 5) - hash) + plain.charCodeAt(i);
    hash |= 0;
  }
  return "fb_" + Math.abs(hash).toString(16);
}

function fx(type = "click") {
  if (!sound) return;
  try {
    audio ??= new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === "suspended") audio.resume();
    const o = audio.createOscillator(),
      g = audio.createGain();
    o.connect(g);
    g.connect(audio.destination);
    o.frequency.value = type === "add" ? 660 : 350;
    g.gain.value = 0.06;
    o.start();
    o.stop(audio.currentTime + 0.06);
  } catch (e) {}
}
function save() {
  try {
    localStorage.setItem("bitedash_custom_cart", JSON.stringify(cart));
    localStorage.setItem("bitedash_custom_orders", JSON.stringify(orders));
    localStorage.setItem("bitedash_users", JSON.stringify(users));
  } catch (e) {}
}
function saveUsers() {
  try {
    localStorage.setItem("bitedash_users", JSON.stringify(users));
  } catch (e) {}
}
function saveSession(user, remember = true) {
  currentUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone || "",
    address: user.address || "",
    createdAt:
      user.createdAt ||
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
  };
  const payload = JSON.stringify(currentUser);
  if (remember) {
    localStorage.setItem("bitedash_session", payload);
    sessionStorage.removeItem("bitedash_session");
  } else {
    sessionStorage.setItem("bitedash_session", payload);
    localStorage.removeItem("bitedash_session");
  }
}
function clearSession() {
  currentUser = null;
  localStorage.removeItem("bitedash_session");
  sessionStorage.removeItem("bitedash_session");
}
function load() {
  try {
    const c = JSON.parse(localStorage.getItem("bitedash_custom_cart") || "[]"),
      o = JSON.parse(localStorage.getItem("bitedash_custom_orders") || "[]");
    cart = Array.isArray(c)
      ? c.filter((x) => x && x.id && Number(x.price) > 0 && Number(x.qty) > 0)
      : [];
    orders = Array.isArray(o)
      ? o.filter((x) => x && x.id && Array.isArray(x.items))
      : [];
    const t = localStorage.getItem("bitedash_custom_theme");
    if (t === "dark") {
      document.documentElement.dataset.theme = "dark";
      $("themeIcon").className = "fa-solid fa-sun";
    }
    sound = localStorage.getItem("bitedash_sound") !== "off";
    if (!sound) $("soundIcon").className = "fa-solid fa-volume-xmark";

    // Load registered users & seed default demo account if needed
    const u = JSON.parse(localStorage.getItem("bitedash_users") || "null");
    if (Array.isArray(u) && u.length > 0) {
      users = u;
      if (!users.some((x) => x.email.toLowerCase() === DEMO_USER.email.toLowerCase())) {
        users.unshift(DEMO_USER);
        saveUsers();
      }
    } else {
      users = [DEMO_USER];
      saveUsers();
    }

    // Load active session from sessionStorage or localStorage
    const s = JSON.parse(
      sessionStorage.getItem("bitedash_session") ||
        localStorage.getItem("bitedash_session") ||
        "null",
    );
    if (s && s.email) {
      const found = users.find(
        (x) => x.email.toLowerCase() === s.email.toLowerCase(),
      );
      currentUser = found
        ? {
            id: found.id,
            name: found.name,
            email: found.email,
            phone: found.phone || "",
            address: found.address || "",
            createdAt: found.createdAt || "2026",
          }
        : s;
    } else {
      currentUser = null;
    }
  } catch (e) {
    cart = [];
    orders = [];
    users = [DEMO_USER];
    currentUser = null;
  }
}
function renderMenu() {
  const q = $("searchInput").value.trim().toLowerCase(),
    items = menuItems.filter(
      (x) =>
        (category === "All" || x.category === category) &&
        (x.title + " " + x.desc).toLowerCase().includes(q),
    );
  $("foodGrid").innerHTML = items
    .map(
      (x) =>
        `<article class="food-card"><div><div class="card-image-wrap"><img src="${x.image}" alt="${x.title}" loading="lazy" onerror="this.onerror=null;this.style.visibility='hidden'"><span class="card-badge">${x.category}</span></div><div class="card-body"><div class="card-header-row"><h3 class="food-title">${x.title}</h3><span class="food-price">${money(x.price)}</span></div><p class="food-desc">${x.desc}</p></div></div><div class="card-footer"><button class="add-cart-btn" data-add="${x.id}"><i class="fa-solid fa-plus"></i> Add to Order</button></div></article>`,
    )
    .join("");
  $("emptyState").hidden = items.length > 0;
}
function add(id) {
  const x = menuItems.find((i) => i.id === id);
  if (!x) return;
  const found = cart.find((i) => i.id === id);
  found ? found.qty++ : cart.push({ ...x, qty: 1 });
  save();
  renderCart();
  fx("add");
  toast(`Added “${x.title}” to cart!`);
}
function qty(id, d) {
  const x = cart.find((i) => i.id === id);
  if (x) x.qty += d;
  cart = cart.filter((i) => i.qty > 0);
  save();
  renderCart();
  fx();
}
function renderCart() {
  const count = cart.reduce((s, x) => s + x.qty, 0),
    sub = cart.reduce((s, x) => s + x.price * x.qty, 0);
  $("cartBadge").textContent = count;
  $("cartSubtotal").textContent = money(sub);
  $("cartTotal").textContent = money(sub ? sub + fee : 0);
  $("cartItemsBody").innerHTML = cart.length
    ? cart
        .map(
          (x) =>
            `<div class="cart-item-row"><img src="${x.image}" alt="${x.title}"><div class="cart-item-info"><div class="cart-item-title">${x.title}</div><div class="cart-item-price">${money(x.price * x.qty)}</div><div class="qty-controls"><button class="qty-btn" data-qty="${x.id}|-1">−</button><b>${x.qty}</b><button class="qty-btn" data-qty="${x.id}|1">+</button></div></div></div>`,
        )
        .join("")
    : '<div style="text-align:center;color:var(--muted);margin:auto"><i class="fa-solid fa-basket-shopping" style="font-size:3rem"></i><p>Your basket is empty</p></div>';
}
function renderOrders() {
  const userOrders = currentUser
    ? orders.filter(
        (o) =>
          !o.userEmail ||
          o.userEmail.toLowerCase() === currentUser.email.toLowerCase(),
      )
    : orders;
  $("orderHistoryList").innerHTML = userOrders.length
    ? userOrders
        .map(
          (o) =>
            `<article class="order-card"><div><b>${o.id}</b> <span class="order-status-badge"><i class="fa-solid fa-circle-notch fa-spin"></i> Out for Express Delivery</span><p style="color:var(--muted);font-size:.8rem">${o.date} · ${o.payment}${o.userEmail ? ` · <i class="fa-regular fa-user"></i> ${o.name}` : ""}</p><p>${o.items.map((i) => `${i.qty}x ${i.title}`).join(", ")}</p><button class="receipt-button" type="button" data-receipt="${o.id}"><i class="fa-solid fa-receipt"></i> View Receipt</button></div><strong class="food-price">${money(o.total)}</strong></article>`,
        )
        .join("")
    : `<div style="text-align:center;color:var(--muted);padding:40px"><i class="fa-solid fa-clock-rotate-left" style="font-size:2.5rem"></i><p>${currentUser ? `No active or past orders tracked for ${currentUser.name}` : "No active or past orders tracked"}</p></div>`;
}
function renderReceipt(o) {
  const sub = o.items.reduce((s, i) => s + i.price * i.qty, 0);
  $("receiptContent").innerHTML =
    `<div class="receipt-brand"><h4>BiteDash PH</h4><small>Express Pinoy Feast</small></div><div class="receipt-meta"><span>Order #: <strong>${o.id}</strong></span><span>Date: <strong>${o.date}</strong></span><span>Name: <strong>${o.name}</strong></span><span>Payment: <strong>${o.payment}</strong></span><span>Phone: <strong>${o.phone}</strong></span><span>Address: <strong>${o.address}</strong></span></div><table class="receipt-items"><thead><tr><th>Item</th><th>Qty</th><th>Amount</th></tr></thead><tbody>${o.items.map((i) => `<tr><td>${i.title}</td><td>${i.qty}</td><td>${money(i.price * i.qty)}</td></tr>`).join("")}</tbody></table><div class="receipt-summary"><div><span>Subtotal</span><span>${money(sub)}</span></div><div><span>Delivery Fee</span><span>${money(o.total - sub)}</span></div><div class="receipt-total"><span>Total</span><span>${money(o.total)}</span></div></div>`;
}
function openReceipt(id) {
  const o = orders.find((x) => x.id === id);
  if (!o) return;
  renderReceipt(o);
  $("modalBackdrop").classList.add("active");
  $("receiptModal").classList.add("active");
}
function toast(msg) {
  $("toastMsg").textContent = msg;
  $("toast").classList.add("active");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $("toast").classList.remove("active"), 3000);
}
function closeAll() {
  $("modalBackdrop")?.classList.remove("active");
  $("cartDrawer")?.classList.remove("active");
  $("checkoutModal")?.classList.remove("active");
  $("receiptModal")?.classList.remove("active");
  $("authModal")?.classList.remove("active");
  $("profileModal")?.classList.remove("active");
  $("userDropdown")?.classList.remove("active");
}
function setAuthAlert(panel, msg, type = "error") {
  const el = $(
    panel === "login"
      ? "loginAlert"
      : panel === "register"
        ? "registerAlert"
        : "profileAlert",
  );
  if (!el) return;
  if (!msg) {
    el.hidden = true;
    el.innerHTML = "";
    el.className = "auth-alert";
  } else {
    el.hidden = false;
    el.className = `auth-alert ${type}`;
    el.innerHTML = `<i class="fa-solid ${type === "error" ? "fa-circle-exclamation" : "fa-circle-check"}"></i> <span>${msg}</span>`;
  }
}

function switchAuthTab(tab = "login") {
  const isLogin = tab === "login";
  if ($("tabLoginBtn")) {
    $("tabLoginBtn").classList.toggle("active", isLogin);
    $("tabLoginBtn").setAttribute("aria-selected", isLogin);
  }
  if ($("tabRegisterBtn")) {
    $("tabRegisterBtn").classList.toggle("active", !isLogin);
    $("tabRegisterBtn").setAttribute("aria-selected", !isLogin);
  }
  if ($("loginPanel")) {
    $("loginPanel").hidden = !isLogin;
    $("loginPanel").classList.toggle("active", isLogin);
  }
  if ($("registerPanel")) {
    $("registerPanel").hidden = isLogin;
    $("registerPanel").classList.toggle("active", !isLogin);
  }
  setAuthAlert("login", null);
  setAuthAlert("register", null);
  setTimeout(() => {
    if (isLogin) {
      $("loginEmail")?.focus();
    } else {
      $("regFullName")?.focus();
    }
  }, 100);
}

function openAuthModal(tab = "login") {
  closeAll();
  switchAuthTab(tab);
  $("modalBackdrop")?.classList.add("active");
  $("authModal")?.classList.add("active");
  fx();
}

function updateAuthUI() {
  const openBtn = $("openAuthBtn");
  const menuWrap = $("userMenuWrap");
  const mobileAuthText = $("mobileAuthText");
  const trackerBadge = $("trackerUserBadge");
  const trackerSubtitle = $("orderTrackerSubtitle");
  const checkoutNotice = $("checkoutAuthNotice");

  if (currentUser) {
    if (openBtn) openBtn.style.display = "none";
    if (menuWrap) menuWrap.hidden = false;
    const nameParts = currentUser.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "User";
    const initials =
      nameParts
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() || "BD";

    if ($("navUserName")) $("navUserName").textContent = firstName;
    if ($("userAvatarMini")) $("userAvatarMini").textContent = initials;
    if ($("dropdownUserName"))
      $("dropdownUserName").textContent = currentUser.name;
    if ($("dropdownUserEmail"))
      $("dropdownUserEmail").textContent = currentUser.email;
    if (mobileAuthText) mobileAuthText.textContent = `${firstName} (Account)`;

    if (trackerBadge) {
      trackerBadge.hidden = false;
      trackerBadge.innerHTML = `<i class="fa-solid fa-circle-user"></i> ${currentUser.name}`;
    }
    if (trackerSubtitle) {
      trackerSubtitle.textContent = `Showing orders placed by ${currentUser.name}`;
    }

    if (checkoutNotice) {
      checkoutNotice.className = "checkout-auth-banner logged-in";
      checkoutNotice.innerHTML = `<div><i class="fa-solid fa-circle-check"></i> Ordering as <b>${currentUser.name}</b> (${currentUser.email}) — Delivery details auto-filled!</div>`;
    }
    if ($("custName") && !$("custName").value)
      $("custName").value = currentUser.name;
    if ($("custPhone") && !$("custPhone").value)
      $("custPhone").value = currentUser.phone || "";
    if ($("custAddress") && !$("custAddress").value)
      $("custAddress").value = currentUser.address || "";
  } else {
    if (openBtn) openBtn.style.display = "inline-flex";
    if (menuWrap) menuWrap.hidden = true;
    if ($("userDropdown")) $("userDropdown").classList.remove("active");
    if (mobileAuthText) mobileAuthText.textContent = "Sign In / Register";

    if (trackerBadge) trackerBadge.hidden = true;
    if (trackerSubtitle)
      trackerSubtitle.textContent =
        "Track recent orders saved in your browser.";

    if (checkoutNotice) {
      checkoutNotice.className = "checkout-auth-banner guest";
      checkoutNotice.innerHTML = `<div><i class="fa-solid fa-circle-info"></i> Ordering as Guest. <a href="#" id="checkoutSignInLink">Sign in</a> to auto-fill saved address.</div>`;
      const link = $("checkoutSignInLink");
      if (link) {
        link.onclick = (e) => {
          e.preventDefault();
          closeAll();
          openAuthModal("login");
        };
      }
    }
  }
}

function openProfileModal() {
  if (!currentUser) {
    openAuthModal("login");
    return;
  }
  closeAll();
  const nameParts = currentUser.name.trim().split(/\s+/);
  const initials =
    nameParts
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "BD";
  if ($("profileAvatar")) $("profileAvatar").textContent = initials;
  if ($("profileNameDisplay"))
    $("profileNameDisplay").textContent = currentUser.name;
  if ($("profileEmailDisplay"))
    $("profileEmailDisplay").textContent = currentUser.email;
  if ($("profileMemberSince"))
    $("profileMemberSince").textContent = currentUser.createdAt || "2026";

  const userOrders = orders.filter(
    (o) =>
      o.userEmail &&
      o.userEmail.toLowerCase() === currentUser.email.toLowerCase(),
  );
  if ($("profileTotalOrders"))
    $("profileTotalOrders").textContent = userOrders.length;
  const spent = userOrders.reduce((s, o) => s + (Number(o.total) || 0), 0);
  if ($("profileTotalSpent")) $("profileTotalSpent").textContent = money(spent);

  if ($("profileEditName")) $("profileEditName").value = currentUser.name;
  if ($("profileEditPhone"))
    $("profileEditPhone").value = currentUser.phone || "";
  if ($("profileEditAddress"))
    $("profileEditAddress").value = currentUser.address || "";
  setAuthAlert("profile", null);

  $("modalBackdrop")?.classList.add("active");
  $("profileModal")?.classList.add("active");
  fx();
}

function updatePwdStrength(val) {
  const meter = $("pwdStrengthMeter");
  const label = $("pwdStrengthLabel");
  if (!meter || !label) return;
  if (!val) {
    meter.style.width = "0%";
    label.textContent = "Password strength: enter password";
    meter.style.background = "#dc2626";
    return;
  }
  let score = 0;
  if (val.length >= 6) score++;
  if (val.length >= 10) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  if (score <= 1) {
    meter.style.width = "25%";
    meter.style.background = "#dc2626";
    label.textContent = "Password strength: Weak";
  } else if (score <= 3) {
    meter.style.width = "65%";
    meter.style.background = "#f59e0b";
    label.textContent = "Password strength: Moderate";
  } else {
    meter.style.width = "100%";
    meter.style.background = "#10b981";
    label.textContent = "Password strength: Strong";
  }
}

function fillDemoCredentials() {
  if ($("loginEmail")) $("loginEmail").value = "juan@bitedash.ph";
  if ($("loginPassword")) $("loginPassword").value = "password123";
  toast("Demo credentials loaded! Click Sign In to continue.");
}

function handleLogout() {
  clearSession();
  updateAuthUI();
  renderOrders();
  closeAll();
  fx();
  toast("Signed out successfully. See you next time!");
}

function handleProfileEdit(e) {
  e.preventDefault();
  if (!currentUser) return;
  const name = $("profileEditName").value.trim();
  const phone = $("profileEditPhone").value.trim();
  const address = $("profileEditAddress").value.trim();
  if (!name) return;

  currentUser.name = name;
  currentUser.phone = phone;
  currentUser.address = address;

  const idx = users.findIndex(
    (u) => u.email.toLowerCase() === currentUser.email.toLowerCase(),
  );
  if (idx !== -1) {
    users[idx].name = name;
    users[idx].phone = phone;
    users[idx].address = address;
    saveUsers();
  }
  saveSession(currentUser, true);
  updateAuthUI();
  closeAll();
  toast("Your profile has been updated!");
}

async function handleLogin(e) {
  e.preventDefault();
  setAuthAlert("login", null);
  const email = $("loginEmail") ? $("loginEmail").value.trim() : "";
  const pwd = $("loginPassword") ? $("loginPassword").value : "";
  const remember = $("loginRemember") ? $("loginRemember").checked : true;

  if (!email || !pwd) {
    setAuthAlert("login", "Please enter both your email address and password.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setAuthAlert(
      "login",
      "Please provide a valid email address (e.g. name@example.com).",
    );
    return;
  }

  const pwdHash = await hashPassword(pwd);
  const user = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() &&
      (u.passwordHash === pwdHash ||
        (pwd === "password123" && u.email.toLowerCase() === "juan@bitedash.ph")),
  );

  if (!user) {
    setAuthAlert(
      "login",
      "Invalid email or password. Please verify your credentials or use Demo Login.",
    );
    return;
  }

  saveSession(user, remember);
  updateAuthUI();
  renderOrders();
  closeAll();
  fx("add");
  toast(`Welcome back, ${user.name}!`);
  if ($("loginForm")) $("loginForm").reset();
}

async function handleRegister(e) {
  e.preventDefault();
  setAuthAlert("register", null);
  const name = $("regFullName") ? $("regFullName").value.trim() : "";
  const phone = $("regPhone") ? $("regPhone").value.trim() : "";
  const email = $("regEmail") ? $("regEmail").value.trim().toLowerCase() : "";
  const address = $("regAddress") ? $("regAddress").value.trim() : "";
  const pwd = $("regPassword") ? $("regPassword").value : "";
  const confirmPwd = $("regConfirmPassword")
    ? $("regConfirmPassword").value
    : "";
  const terms = $("regTerms") ? $("regTerms").checked : false;

  if (!name || name.length < 2) {
    setAuthAlert(
      "register",
      "Please enter your full name (at least 2 characters).",
    );
    return;
  }
  if (!phone || phone.replace(/\D/g, "").length < 10) {
    setAuthAlert(
      "register",
      "Please provide a valid mobile number (at least 10 digits).",
    );
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setAuthAlert("register", "Please enter a valid email address.");
    return;
  }
  if (users.some((u) => u.email.toLowerCase() === email)) {
    setAuthAlert(
      "register",
      "An account with this email is already registered. Please sign in instead.",
    );
    return;
  }
  if (pwd.length < 6) {
    setAuthAlert("register", "Password must be at least 6 characters long.");
    return;
  }
  if (pwd !== confirmPwd) {
    setAuthAlert("register", "Passwords do not match. Please re-enter.");
    return;
  }
  if (!terms) {
    setAuthAlert(
      "register",
      "Please accept the BiteDash express guidelines to proceed.",
    );
    return;
  }

  const passwordHash = await hashPassword(pwd);
  const newUser = {
    id: "u_" + Date.now(),
    name,
    email,
    phone,
    address,
    passwordHash,
    createdAt: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  };

  users.push(newUser);
  saveUsers();
  saveSession(newUser, true);
  updateAuthUI();
  renderOrders();
  closeAll();
  fx("add");
  toast(`Account created! Welcome to BiteDash, ${newUser.name}!`);
  if ($("registerForm")) $("registerForm").reset();
  updatePwdStrength("");
}

function setup() {
  load();
  updateAuthUI();
  renderMenu();
  renderCart();
  renderOrders();
  $("searchInput").addEventListener("input", renderMenu);
  document.querySelectorAll(".filter-btn").forEach((b) =>
    b.addEventListener("click", () => {
      category = b.dataset.category;
      document
        .querySelectorAll(".filter-btn")
        .forEach((x) => x.classList.toggle("active", x === b));
      renderMenu();
      fx();
    }),
  );
  $("foodGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (b) add(b.dataset.add);
  });
  $("orderHistoryList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-receipt]");
    if (b) openReceipt(b.dataset.receipt);
  });
  $("cartItemsBody").addEventListener("click", (e) => {
    const b = e.target.closest("[data-qty]");
    if (b) {
      const [id, d] = b.dataset.qty.split("|");
      qty(id, Number(d));
    }
  });
  $("openCartBtn").onclick = () => {
    $("modalBackdrop").classList.add("active");
    $("cartDrawer").classList.add("active");
    fx();
  };
  $("closeCartBtn").onclick = closeAll;
  $("modalBackdrop").onclick = closeAll;
  $("checkoutBtn").onclick = () => {
    if (!cart.length) return toast("Your basket is empty!");
    updateAuthUI();
    $("cartDrawer").classList.remove("active");
    $("checkoutModal").classList.add("active");
  };
  $("closeCheckoutBtn").onclick = closeAll;
  $("closeReceiptBtn").onclick = closeAll;
  $("closeReceiptActionBtn").onclick = closeAll;
  $("printReceiptBtn").onclick = () => window.print();
  $("checkoutForm").onsubmit = (e) => {
    e.preventDefault();
    const sub = cart.reduce((s, x) => s + x.price * x.qty, 0);
    const order = {
      id: "PH-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleString(),
      name: $("custName").value.trim(),
      phone: $("custPhone").value.trim(),
      address: $("custAddress").value.trim(),
      payment: $("custPayment").value,
      items: [...cart],
      total: sub + fee,
      userEmail: currentUser ? currentUser.email : null,
      userName: currentUser ? currentUser.name : null,
    };
    orders.unshift(order);
    cart = [];
    save();
    renderCart();
    renderOrders();
    e.target.reset();
    closeAll();
    openReceipt(order.id);
    toast("Order confirmed and receipt ready!");
  };
  $("clearHistoryBtn").onclick = () => {
    if (confirm("Clear all saved order history?")) {
      orders = [];
      save();
      renderOrders();
      toast("Order history cleared");
    }
  };
  $("themeToggleBtn").onclick = () => {
    const dark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    $("themeIcon").className = dark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    localStorage.setItem("bitedash_custom_theme", dark ? "dark" : "light");
  };
  $("soundToggleBtn").onclick = () => {
    sound = !sound;
    localStorage.setItem("bitedash_sound", sound ? "on" : "off");
    $("soundIcon").className = sound
      ? "fa-solid fa-volume-high"
      : "fa-solid fa-volume-xmark";
    toast(sound ? "Sound FX Enabled" : "Sound FX Muted");
  };
  $("contactForm").onsubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast("Message sent! We will contact you soon.");
  };
  $("mobileToggle").onclick = () =>
    document.querySelector("nav").classList.toggle("mobile-open");
  // Authentication UI event listeners
  const openAuth = $("openAuthBtn");
  if (openAuth) openAuth.onclick = () => openAuthModal("login");

  const mobileAuth = $("mobileAuthBtn");
  if (mobileAuth)
    mobileAuth.onclick = () => {
      document.querySelector("nav")?.classList.remove("mobile-open");
      currentUser ? openProfileModal() : openAuthModal("login");
    };

  const closeAuth = $("closeAuthBtn");
  if (closeAuth) closeAuth.onclick = closeAll;

  const tabLogin = $("tabLoginBtn");
  if (tabLogin) tabLogin.onclick = () => switchAuthTab("login");

  const tabReg = $("tabRegisterBtn");
  if (tabReg) tabReg.onclick = () => switchAuthTab("register");

  const toReg = $("switchToRegister");
  if (toReg) toReg.onclick = () => switchAuthTab("register");

  const toLogin = $("switchToLogin");
  if (toLogin) toLogin.onclick = () => switchAuthTab("login");

  const demoBtn = $("fillDemoBtn");
  if (demoBtn) demoBtn.onclick = fillDemoCredentials;

  const loginFm = $("loginForm");
  if (loginFm) loginFm.onsubmit = handleLogin;

  const regFm = $("registerForm");
  if (regFm) regFm.onsubmit = handleRegister;

  const regPwd = $("regPassword");
  if (regPwd) {
    regPwd.addEventListener("input", (e) => updatePwdStrength(e.target.value));
  }

  // Password visibility buttons
  document.querySelectorAll(".pwd-toggle-btn").forEach((btn) => {
    btn.onclick = () => {
      const targetId = btn.dataset.target;
      const input = $(targetId);
      if (!input) return;
      const isPwd = input.type === "password";
      input.type = isPwd ? "text" : "password";
      btn.innerHTML = `<i class="fa-regular ${isPwd ? "fa-eye-slash" : "fa-eye"}"></i>`;
    };
  });

  // User menu dropdown controls
  const userBtn = $("userMenuBtn");
  if (userBtn) {
    userBtn.onclick = (e) => {
      e.stopPropagation();
      $("userDropdown")?.classList.toggle("active");
    };
  }

  const dropProfile = $("dropdownProfileBtn");
  if (dropProfile)
    dropProfile.onclick = () => {
      closeAll();
      openProfileModal();
    };

  const dropOrders = $("dropdownOrdersBtn");
  if (dropOrders)
    dropOrders.onclick = () => {
      closeAll();
      $("orders")?.scrollIntoView({ behavior: "smooth" });
    };

  const dropLogout = $("dropdownLogoutBtn");
  if (dropLogout) dropLogout.onclick = handleLogout;

  // Profile modal controls
  const closeProfile = $("closeProfileBtn");
  if (closeProfile) closeProfile.onclick = closeAll;

  const profLogout = $("profileLogoutBtn");
  if (profLogout) profLogout.onclick = handleLogout;

  const profForm = $("profileEditForm");
  if (profForm) profForm.onsubmit = handleProfileEdit;

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const wrap = $("userMenuWrap");
    const drop = $("userDropdown");
    if (drop && drop.classList.contains("active")) {
      if (!wrap || !wrap.contains(e.target)) {
        drop.classList.remove("active");
      }
    }
  });

  // Escape key closes modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

}
document.addEventListener("DOMContentLoaded", setup);
