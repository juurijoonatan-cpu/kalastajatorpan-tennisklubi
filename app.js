/* Kalastajatorpan Tennisklubi — site behaviour (vanilla JS, no framework) */
(function () {
  "use strict";

  /* ---------- Content (single source of truth, FI + EN) ---------- */
  var PHOTOS = [
    { src: "./assets/panorama.jpg", w: 560 },
    { src: "./assets/courts-spring.jpg", w: 460 },
    { src: "./assets/terrace.jpg", w: 440 },
    { src: "./assets/aerial.jpg", w: 440 },
    { src: "./assets/courts-summer.jpg", w: 330 }
  ];

  var SOCIALS = [
    { key: "instagram", label: "Instagram", href: "https://www.instagram.com/kalastajatorpantennisklubi/" },
    { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@tennisklubi" },
    { key: "facebook", label: "Facebook", href: "https://www.facebook.com/tennisklubi/?locale=fi_FI" }
  ];

  var ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 8.8l5 3.2-5 3.2z" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V2.8c-.4-.05-1.4-.15-2.5-.15-2.6 0-4.2 1.5-4.2 4.3v1.55H7.6V12h2.7v9h3.3v-9h2.5l.4-3.5H13.6z"/></svg>'
  };

  var FI = {
    navKlubi: "Klubi", navKentat: "Kentät", navRavintola: "Ravintola",
    navBook: "Varaa", navContact: "Yhteystiedot",
    heroTitle: "Massatennistä meren äärellä<br>vuodesta 1938",
    heroSub: "Perinteikäs ulkotenniskeskus Munkkiniemen puistossa, meren rannassa.",
    heroTag: "Munkkiniemi, Helsinki · Est. 1938",
    filmTitle: "Katso esittelyvideo", filmSub: "Koko video · äänellä",
    introEyebrow: "Klubi vuodesta 1938",
    introTitle: "Munkkiniemen sydämessä, meren äärellä",
    introBody: "Kalastajatorpan Tennisklubi on perinteikäs ulkotenniskeskus, jossa on pelattu massatennistä vuodesta 1938. Suomen oloissa ainutlaatuinen kesäinen tenniskeidas sijaitsee kauniissa puistoympäristössä meren äärellä. Klubiravintola terasseineen toivottaa tervetulleeksi nauttimaan talon antimista myös ilman tennismailaa.",
    courtsEyebrow: "Kentät", aerialTag: "Ilmakuva · Kalastajatorppa",
    courtsTitle: "Massakentät puiston keskellä, meren äärellä",
    courtsBody: "Laadukkaat massakentät sijaitsevat Sigurd Steniuksen puistossa Munkkiniemessä, ratikkamatkan päässä keskustasta ja rannan välittömässä läheisyydessä.",
    facilities: [
      { num: "01", name: "Massakentät" }, { num: "02", name: "Klubirakennus" },
      { num: "03", name: "Klubiravintola & terassi" }, { num: "04", name: "Grand Slam Lounge" },
      { num: "05", name: "Pysäköinti" }, { num: "06", name: "Puisto & ranta" }
    ],
    interludeTitle: "Peli on meillä intohimo",
    interludeBody: "Massan tuoksu, pallon kimmoke ja meren tuuli — Torpalla tennis on enemmän kuin laji. Se on kesän tapa elää.",
    restEyebrow: "Klubiravintola", restTitle: "Ruokaa ja juomaa terassilla, ympäri kesän",
    restBody: "Runsas ja raikas aamiaisbuffet arkisin, seisova salaattibuffet joka päivä kesäkuusta syyskuuhun, sekä club menu -herkut: suolaiset piiraat, Torpan Toast Skagen, korvapuustit ja New York cheesecake.",
    restHours: [{ k: "Aamiainen", v: "07:30–10:30" }, { k: "Salaattibuffet", v: "12:00–20:00" }, { k: "Club menu", v: "09:00–22:30" }],
    bookEyebrow: "Varaukset", bookTitle: "Varaa vuorosi Playtomicissa",
    bookBody: "Kentät ovat varattavissa maanantaista torstaihin klo 7–22, perjantaisin klo 7–21, lauantaisin klo 9–21 ja sunnuntaisin klo 9–22. Puhelimitse tehdyistä varauksista ei peritä palvelupalkkiota.",
    bookCta: "Varaa vuoro →", bookPhone: "Tuntivaraukset ja peruutukset: 010 423 9960",
    priceLabel: "Hinnasto",
    prices: [
      { k: "Arki 07:00–09:30", v: "36€" }, { k: "Arki 09:30–15:30", v: "29€" },
      { k: "Arki 15:30–22:00", v: "39€" }, { k: "Viikonloppu", v: "36€" }
    ],
    revEyebrow: "Arvostelut", revTitle: "Mitä jäsenet sanovat",
    reviews: [
      { stars: 5, body: "Suomen kaunein paikka pelata tennistä. Massakentät ovat huippukunnossa ja terassilta avautuu upea merinäköala.", name: "Anni Virtanen", role: "Jäsen vuodesta 2015" },
      { stars: 5, body: "Klubin tunnelma on ainutlaatuinen. Aamupeli ja sen jälkeen aamiainen terassilla — parempaa kesäaamua ei ole.", name: "Mikko Laine", role: "Kausikorttilainen" },
      { stars: 5, body: "Varaaminen Playtomicissa on vaivatonta ja henkilökunta palvelee lämpimästi. Torppa on kesämme kohokohta.", name: "Sofia Nieminen", role: "Vieraileva pelaaja" }
    ],
    evEyebrow: "Tapahtumat & turnaukset", evTitle: "Kesän kohokohdat Torpalla", evLink: "ITF Midnight Sun Open →",
    events: [
      { when: "17.5.2026", what: "LTC:n lipunnosto. Tenniskausi avataan." },
      { when: "19.–21.6.", what: "Juhannus. Klubi suljettu perjantaista 19.6. klo 15 sunnuntaihin 21.6. klo 9." },
      { when: "4.7.", what: "Bermuda-turnaus. Yleisölle avoin klo 11–17." },
      { when: "20.–26.7.", what: "ITF Helsinki Midnight Sun Open by Freja, luokitus MT700." },
      { when: "Syyskuu", what: "SuperSyyskuu. Henkilökohtainen vapaa pelioikeus 69 €/kk." }
    ],
    followEyebrow: "Seuraa meitä", followTitle: "Kesän kuulumiset somessa",
    followBody: "Seuraa arkea kentiltä ja terassilta — kuvat, videot ja tapahtumat Instagramissa, YouTubessa ja Facebookissa.",
    locEyebrow: "Yhteystiedot", locTitle: "Löydä perille",
    locAddress: "Osoite", locBooking: "Tuntivaraukset", locHours: "Aukioloajat", locSocial: "Somessa",
    footBlurb: "Perinteikäs ulkotenniskeskus Munkkiniemessä, meren äärellä. Massatennistä on pelattu Torpalla vuodesta 1938. Klubilla toimii LTC-33 r.f., yksi Suomen vanhimmista tennisseuroista.",
    footHrs: [{ k: "Ma–To", v: "07:00–22:30" }, { k: "Pe", v: "07:00–20:30" }, { k: "La", v: "09:00–20:30" }, { k: "Su", v: "09:00–22:30" }],
    footEst: "LTC-33 r.f. · Perustettu 1933",
    cookie: "Tämä sivusto käyttää evästeitä parhaan kokemuksen takaamiseksi.", cookieOk: "Selvä"
  };

  var EN = {
    navKlubi: "Club", navKentat: "Courts", navRavintola: "Restaurant",
    navBook: "Book", navContact: "Contact",
    heroTitle: "Clay tennis by the sea<br>since 1938",
    heroSub: "A storied outdoor tennis centre in the Munkkiniemi park, right by the shore.",
    heroTag: "Munkkiniemi, Helsinki · Est. 1938",
    filmTitle: "Watch the film", filmSub: "Full video · with sound",
    introEyebrow: "A club since 1938",
    introTitle: "In the heart of Munkkiniemi, by the sea",
    introBody: "Kalastajatorpan Tennisklubi is a storied outdoor tennis centre where clay tennis has been played since 1938. A uniquely Finnish summer retreat, set in a beautiful park by the sea. Our clubhouse restaurant and terraces welcome guests to enjoy the setting even without a racquet.",
    courtsEyebrow: "Courts", aerialTag: "Aerial view · Kalastajatorppa",
    courtsTitle: "Clay courts in the heart of a park, by the sea",
    courtsBody: "Quality clay courts set in Sigurd Stenius Park in Munkkiniemi, a short tram ride from downtown Helsinki and right beside the shore.",
    facilities: [
      { num: "01", name: "Clay courts" }, { num: "02", name: "Clubhouse" },
      { num: "03", name: "Restaurant & terrace" }, { num: "04", name: "Grand Slam Lounge" },
      { num: "05", name: "Parking" }, { num: "06", name: "Park & shore" }
    ],
    interludeTitle: "The game is our passion",
    interludeBody: "The scent of clay, the bounce of the ball and the sea breeze — at Torppa, tennis is more than a sport. It is the way we live the summer.",
    restEyebrow: "Clubhouse restaurant", restTitle: "Food and drink on the terrace, all summer",
    restBody: "A generous fresh breakfast buffet on weekdays, a standing salad buffet every day from June through September, plus club-menu favourites: savoury pies, Torpan Toast Skagen, cinnamon buns and New York cheesecake.",
    restHours: [{ k: "Breakfast", v: "07:30–10:30" }, { k: "Salad buffet", v: "12:00–20:00" }, { k: "Club menu", v: "09:00–22:30" }],
    bookEyebrow: "Booking", bookTitle: "Book your court on Playtomic",
    bookBody: "Courts can be booked Monday to Thursday 07–22, Friday 07–21, Saturday 09–21 and Sunday 09–22. Bookings made by phone carry no service fee.",
    bookCta: "Book a court →", bookPhone: "Court bookings & cancellations: 010 423 9960",
    priceLabel: "Pricing",
    prices: [
      { k: "Weekday 07:00–09:30", v: "€36" }, { k: "Weekday 09:30–15:30", v: "€29" },
      { k: "Weekday 15:30–22:00", v: "€39" }, { k: "Weekend", v: "€36" }
    ],
    revEyebrow: "Reviews", revTitle: "What our members say",
    reviews: [
      { stars: 5, body: "The most beautiful place to play tennis in Finland. The clay courts are in top condition and the terrace has a stunning sea view.", name: "Anni Virtanen", role: "Member since 2015" },
      { stars: 5, body: "The atmosphere here is one of a kind. A morning match followed by breakfast on the terrace — there is no better summer morning.", name: "Mikko Laine", role: "Season pass holder" },
      { stars: 5, body: "Booking on Playtomic is effortless and the staff are wonderfully welcoming. Torppa is the highlight of our summer.", name: "Sofia Nieminen", role: "Visiting player" }
    ],
    evEyebrow: "Events & tournaments", evTitle: "Summer highlights at Torppa", evLink: "ITF Midnight Sun Open →",
    events: [
      { when: "17 May 2026", what: "LTC flag-raising. Season opening." },
      { when: "19–21 Jun", what: "Midsummer. Club closed Friday 19 June 15:00 to Sunday 21 June 09:00." },
      { when: "4 Jul", what: "Bermuda Tournament. Open to the public 11:00–17:00." },
      { when: "20–26 Jul", what: "ITF Helsinki Midnight Sun Open by Freja, MT700 category." },
      { when: "September", what: "SuperSyyskuu. Unlimited personal play for €69/month." }
    ],
    followEyebrow: "Follow us", followTitle: "Summer moments on social",
    followBody: "Follow life on the courts and the terrace — photos, videos and events on Instagram, YouTube and Facebook.",
    locEyebrow: "Contact", locTitle: "Find your way here",
    locAddress: "Address", locBooking: "Court bookings", locHours: "Opening hours", locSocial: "On social",
    footBlurb: "A storied outdoor tennis centre in Munkkiniemi, by the sea. Clay tennis has been played here since 1938. The club is home to LTC-33 r.f., one of Finland’s oldest tennis clubs.",
    footHrs: [{ k: "Mon–Thu", v: "07:00–22:30" }, { k: "Fri", v: "07:00–20:30" }, { k: "Sat", v: "09:00–20:30" }, { k: "Sun", v: "09:00–22:30" }],
    footEst: "LTC-33 r.f. · Founded 1933",
    cookie: "This website uses cookies to ensure the best experience.", cookieOk: "Got it"
  };

  var DICT = { fi: FI, en: EN };
  var lang = "fi";

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ---------- Render ---------- */
  function applyText(t) {
    // keys that legitimately contain markup (a line break)
    var htmlKeys = { heroTitle: true };
    $all("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in t)) return;
      if (htmlKeys[key]) el.innerHTML = t[key];
      else el.textContent = t[key];
    });
    document.documentElement.lang = lang;
  }

  function renderLists(t) {
    // facilities
    $("#facilities").innerHTML = t.facilities.map(function (f) {
      return '<div style="display:flex;align-items:baseline;gap:14px;padding:14px 0;border-bottom:1px solid rgba(242,235,221,0.14);">' +
        '<span class="serif" style="font-size:17px;color:#c77a54;min-width:20px;">' + esc(f.num) + '</span>' +
        '<span style="font-size:13.5px;letter-spacing:.03em;color:#d8d3c8;">' + esc(f.name) + '</span></div>';
    }).join("");

    // restaurant hours (dark text on light bg)
    $("#restHours").innerHTML = t.restHours.map(function (h) {
      return '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:16px 0;border-bottom:1px solid rgba(33,29,23,0.14);">' +
        '<span style="font-size:14.5px;letter-spacing:.02em;color:#3a352c;">' + esc(h.k) + '</span>' +
        '<span class="serif" style="font-size:20px;color:#211d17;">' + esc(h.v) + '</span></div>';
    }).join("");

    // prices
    $("#prices").innerHTML = t.prices.map(function (p) {
      return '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:17px 0;border-bottom:1px solid rgba(242,235,221,0.1);">' +
        '<span style="font-size:14.5px;color:#d8d3c8;">' + esc(p.k) + '</span>' +
        '<span class="serif" style="font-size:23px;">' + esc(p.v) + '</span></div>';
    }).join("");

    // events (dark text on light bg)
    $("#events").innerHTML = t.events.map(function (e) {
      return '<div style="display:grid;grid-template-columns:180px 1fr;gap:clamp(16px,3vw,44px);padding:24px 0;border-bottom:1px solid rgba(33,29,23,0.14);">' +
        '<span class="serif" style="font-size:19px;color:#a94e2b;">' + esc(e.when) + '</span>' +
        '<span style="font-size:16px;color:#3a352c;font-weight:300;">' + esc(e.what) + '</span></div>';
    }).join("");

    // footer hours
    $("#footHrs").innerHTML = t.footHrs.map(function (h) {
      return '<div style="display:flex;justify-content:space-between;max-width:240px;">' +
        '<span style="font-size:14px;color:#c7c1b5;">' + esc(h.k) + '</span>' +
        '<span style="font-size:14px;color:#c7c1b5;">' + esc(h.v) + '</span></div>';
    }).join("");

    // reviews
    $("#reviews").innerHTML = t.reviews.map(function (r) {
      var stars = "";
      for (var i = 0; i < 5; i++) stars += i < r.stars ? "★" : "☆";
      var initial = r.name.charAt(0);
      return '<div class="review-card">' +
        '<div class="review-stars">' + stars + '</div>' +
        '<p class="review-body">“' + esc(r.body) + '”</p>' +
        '<div class="review-who"><div class="review-avatar">' + esc(initial) + '</div>' +
        '<div><div class="review-name">' + esc(r.name) + '</div>' +
        '<div class="review-role">' + esc(r.role) + '</div></div></div></div>';
    }).join("");
  }

  function renderSocials() {
    var groups = [
      { el: $("#socials-main"), dark: false },
      { el: $("#socials-contact"), dark: false },
      { el: $("#socials-footer"), dark: false }
    ];
    var html = SOCIALS.map(function (s) {
      return '<a class="social-ico" href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.label + '" title="' + s.label + '">' + ICONS[s.key] + '</a>';
    }).join("");
    groups.forEach(function (g) { if (g.el) g.el.innerHTML = html; });
  }

  function setLang(next) {
    lang = next;
    var t = DICT[lang];
    applyText(t);
    renderLists(t);
    $("#lang-toggle").textContent = lang === "fi" ? "EN" : "FI";
  }

  /* ---------- Interactions ---------- */
  function initNavScroll() {
    var nav = $("#nav");
    var onScroll = function () {
      if (window.scrollY > 60) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initCookie() {
    var bar = $("#cookie");
    $("#cookie-ok").addEventListener("click", function () { bar.style.display = "none"; });
  }

  function initFilmModal() {
    var modal = $("#film-modal");
    var video = $("#film-video");
    var open = function () {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      try { video.currentTime = 0; video.muted = false; video.volume = 1; var p = video.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {}
    };
    var close = function () {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      try { video.pause(); } catch (e) {}
    };
    $("#open-film").addEventListener("click", open);
    $("#close-film").addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("open")) close(); });
  }

  function initHeroVideo() {
    var vid = $("#hero-video");
    if (!vid) return;
    vid.muted = true; // required for autoplay
    var tryPlay = function () { var p = vid.play(); if (p && p.catch) p.catch(function () {}); };
    vid.addEventListener("canplay", tryPlay, { once: true });
    tryPlay();
    // resume if autoplay was blocked until first interaction
    var kick = function () { if (vid.paused) tryPlay(); };
    window.addEventListener("pointerdown", kick, { passive: true, once: true });
  }

  /* ---------- 3D tennis ball ---------- */
  function feltTexture() {
    var c = document.createElement("canvas");
    c.width = 1024; c.height = 512;
    var g = c.getContext("2d");
    // base optic-yellow felt
    var grad = g.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, "#d7e24a");
    grad.addColorStop(0.5, "#c6d63f");
    grad.addColorStop(1, "#b7c733");
    g.fillStyle = grad; g.fillRect(0, 0, 1024, 512);
    // felt speckle
    for (var i = 0; i < 9000; i++) {
      var x = Math.floor(seededRand() * 1024);
      var y = Math.floor(seededRand() * 512);
      var v = seededRand();
      g.fillStyle = v > 0.5 ? "rgba(255,255,255,0.05)" : "rgba(60,70,20,0.06)";
      g.fillRect(x, y, 1, 1);
    }
    // two interlocking seams (sine waves) — the classic tennis-ball look
    drawSeam(g, 0);
    drawSeam(g, Math.PI);
    return c;
  }

  function drawSeam(g, phase) {
    var W = 1024, H = 512, amp = H * 0.2, mid = H / 2;
    // outer soft white band
    g.lineWidth = 26; g.strokeStyle = "rgba(245,245,238,0.95)"; g.lineJoin = "round";
    seamPath(g, W, H, amp, mid, phase); g.stroke();
    // inner subtle groove
    g.lineWidth = 4; g.strokeStyle = "rgba(150,150,120,0.55)";
    seamPath(g, W, H, amp, mid, phase); g.stroke();
  }

  function seamPath(g, W, H, amp, mid, phase) {
    g.beginPath();
    for (var x = 0; x <= W; x += 4) {
      var y = mid + amp * Math.sin((x / W) * Math.PI * 2 * 2 + phase);
      if (x === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
  }

  // tiny deterministic RNG (Date.now/Math.random-free-friendly seed)
  var _seed = 1337;
  function seededRand() { _seed = (_seed * 16807) % 2147483647; return (_seed - 1) / 2147483646; }

  function init3DBall() {
    var mount = document.getElementById("ball3d");
    if (!mount || typeof THREE === "undefined") { if (mount) mount.style.display = "none"; return; }
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var size = mount.clientWidth || 320;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(size, size);
    mount.appendChild(renderer.domElement);

    var tex = new THREE.CanvasTexture(feltTexture());
    if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
    tex.anisotropy = 4;

    var mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.92, metalness: 0.0 });
    var ball = new THREE.Mesh(new THREE.SphereGeometry(1.15, 96, 96), mat);
    ball.rotation.z = 0.35;
    scene.add(ball);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    var key = new THREE.DirectionalLight(0xffffff, 1.15); key.position.set(3, 4, 5); scene.add(key);
    var rim = new THREE.DirectionalLight(0xffe4b8, 0.5); rim.position.set(-4, -2, -3); scene.add(rim);

    var targetX = 0, targetY = 0, curX = 0, curY = 0, dragging = false, lastX = 0, lastY = 0, spin = 0;

    function onResize() {
      var s = mount.clientWidth || size;
      renderer.setSize(s, s);
    }
    window.addEventListener("resize", onResize, { passive: true });

    mount.addEventListener("pointermove", function (e) {
      var r = mount.getBoundingClientRect();
      var nx = (e.clientX - r.left) / r.width - 0.5;
      var ny = (e.clientY - r.top) / r.height - 0.5;
      targetY = nx * 0.9; targetX = ny * 0.7;
      if (dragging) { spin += (e.clientX - lastX) * 0.01; lastX = e.clientX; lastY = e.clientY; }
    });
    mount.addEventListener("pointerdown", function (e) { dragging = true; lastX = e.clientX; lastY = e.clientY; });
    window.addEventListener("pointerup", function () { dragging = false; });
    mount.addEventListener("pointerleave", function () { targetX = 0; targetY = 0; });

    // Only animate while the ball is on screen (perf + battery friendly)
    var visible = false, rafId = null;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible && rafId === null) animate();
        else if (!visible && rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
      }, { threshold: 0.01 }).observe(mount);
    } else { visible = true; animate(); }

    var t0 = 0;
    function animate() {
      if (!visible) { rafId = null; return; }
      rafId = requestAnimationFrame(animate);
      t0 += 1;
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      if (!reduce) ball.rotation.y += 0.006 + spin * 0.02;
      spin *= 0.9;
      ball.rotation.x = curX * 0.6 + Math.sin(t0 * 0.01) * 0.04;
      ball.position.y = Math.sin(t0 * 0.02) * 0.05;
      camera.position.x = curY * 0.6;
      camera.position.y = -curX * 0.4;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();
  }

  /* ---------- Boot ---------- */
  function boot() {
    renderSocials();
    setLang("fi");
    initNavScroll();
    initCookie();
    initFilmModal();
    initHeroVideo();
    init3DBall();
    $("#lang-toggle").addEventListener("click", function () { setLang(lang === "fi" ? "en" : "fi"); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
