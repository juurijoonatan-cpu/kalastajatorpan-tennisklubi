/* Kalastajatorpan Tennisklubi — site behaviour (vanilla JS, no framework) */
(function () {
  "use strict";

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
    filmTitle: "Katso intro",
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
    ratingScore: 4.9, revCount: "128 Google-arvostelua",
    reviews: [
      { stars: 5, body: "Suomen kaunein paikka pelata tennistä. Massakentät huippukunnossa ja upea merinäköala.", name: "Anni Virtanen" },
      { stars: 5, body: "Aamupeli ja sen jälkeen aamiainen terassilla — täydellinen kesäaamu.", name: "Mikko Laine" },
      { stars: 5, body: "Varaaminen on helppoa ja henkilökunta palvelee lämpimästi. Suosittelen!", name: "Sofia Nieminen" },
      { stars: 5, body: "Upea miljöö meren äärellä ja kentät aina siistit. Kesän ehdoton kohokohta.", name: "Petri Koskinen" }
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
    filmTitle: "Play intro",
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
    ratingScore: 4.9, revCount: "128 Google reviews",
    reviews: [
      { stars: 5, body: "The most beautiful place to play tennis in Finland. Clay courts in top condition and a stunning sea view.", name: "Anni Virtanen" },
      { stars: 5, body: "A morning match followed by breakfast on the terrace — the perfect summer morning.", name: "Mikko Laine" },
      { stars: 5, body: "Booking is effortless and the staff are wonderfully welcoming. Highly recommend!", name: "Sofia Nieminen" },
      { stars: 5, body: "A gorgeous setting by the sea and the courts are always immaculate. The highlight of our summer.", name: "Petri Koskinen" }
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
    $("#facilities").innerHTML = t.facilities.map(function (f) {
      return '<div style="display:flex;align-items:baseline;gap:14px;padding:14px 0;border-bottom:1px solid rgba(242,235,221,0.14);">' +
        '<span class="serif" style="font-size:17px;color:#c77a54;min-width:20px;">' + esc(f.num) + '</span>' +
        '<span style="font-size:13.5px;letter-spacing:.03em;color:#d8d3c8;">' + esc(f.name) + '</span></div>';
    }).join("");

    $("#restHours").innerHTML = t.restHours.map(function (h) {
      return '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:16px 0;border-bottom:1px solid rgba(33,29,23,0.14);">' +
        '<span style="font-size:14.5px;letter-spacing:.02em;color:#3a352c;">' + esc(h.k) + '</span>' +
        '<span class="serif" style="font-size:20px;color:#211d17;">' + esc(h.v) + '</span></div>';
    }).join("");

    $("#prices").innerHTML = t.prices.map(function (p) {
      return '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:17px 0;border-bottom:1px solid rgba(242,235,221,0.1);">' +
        '<span style="font-size:14.5px;color:#d8d3c8;">' + esc(p.k) + '</span>' +
        '<span class="serif" style="font-size:23px;">' + esc(p.v) + '</span></div>';
    }).join("");

    $("#events").innerHTML = t.events.map(function (e) {
      return '<div style="display:grid;grid-template-columns:180px 1fr;gap:clamp(16px,3vw,44px);padding:24px 0;border-bottom:1px solid rgba(33,29,23,0.14);">' +
        '<span class="serif" style="font-size:19px;color:#a94e2b;">' + esc(e.when) + '</span>' +
        '<span style="font-size:16px;color:#3a352c;font-weight:300;">' + esc(e.what) + '</span></div>';
    }).join("");

    $("#footHrs").innerHTML = t.footHrs.map(function (h) {
      return '<div style="display:flex;justify-content:space-between;max-width:240px;">' +
        '<span style="font-size:14px;color:#c7c1b5;">' + esc(h.k) + '</span>' +
        '<span style="font-size:14px;color:#c7c1b5;">' + esc(h.v) + '</span></div>';
    }).join("");

    // compact Google-style review cards
    $("#reviews").innerHTML = t.reviews.map(function (r) {
      var stars = "";
      for (var i = 0; i < 5; i++) stars += i < r.stars ? "★" : "☆";
      return '<div class="review-card">' +
        '<div class="review-stars">' + stars + '</div>' +
        '<p class="review-body">' + esc(r.body) + '</p>' +
        '<div class="review-name">' + esc(r.name) + ' <span>· Google</span></div></div>';
    }).join("");

    // rating summary count
    var rc = $("#rating-count"); if (rc) rc.textContent = t.revCount;
  }

  function renderSocials() {
    var groups = [$("#socials-main"), $("#socials-contact"), $("#socials-footer")];
    var html = SOCIALS.map(function (s) {
      return '<a class="social-ico" href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.label + '" title="' + s.label + '">' + ICONS[s.key] + '</a>';
    }).join("");
    groups.forEach(function (el) { if (el) el.innerHTML = html; });
  }

  function setLang(next) {
    lang = next;
    var t = DICT[lang];
    applyText(t);
    renderLists(t);
    $("#lang-toggle").textContent = lang === "fi" ? "EN" : "FI";
    resetRating();
  }

  /* ---------- Animated rating counter (counts up when in view) ---------- */
  var ratingDone = false, ratingObserver = null;
  function fmtScore(n) {
    var s = n.toFixed(1);
    return lang === "fi" ? s.replace(".", ",") : s;
  }
  function resetRating() {
    var el = $("#rating-score");
    if (!el) return;
    if (ratingDone) { el.textContent = fmtScore(DICT[lang].ratingScore); }
    else { el.textContent = fmtScore(0); }
  }
  function animateRating() {
    var el = $("#rating-score");
    if (!el) return;
    var target = DICT[lang].ratingScore;
    var steps = 34, i = 0;
    (function tick() {
      i++;
      var p = i / steps;
      var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      el.textContent = fmtScore(target * eased);
      if (i < steps) requestAnimationFrame(tick);
      else { el.textContent = fmtScore(target); ratingDone = true; }
    })();
  }
  function initRatingCounter() {
    var el = $("#rating-score");
    if (!el) return;
    if (!("IntersectionObserver" in window)) { animateRating(); return; }
    ratingObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !ratingDone) { animateRating(); }
    }, { threshold: 0.5 });
    ratingObserver.observe(el);
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
    vid.muted = true;
    var tryPlay = function () { var p = vid.play(); if (p && p.catch) p.catch(function () {}); };
    vid.addEventListener("canplay", tryPlay, { once: true });
    tryPlay();
    var kick = function () { if (vid.paused) tryPlay(); };
    window.addEventListener("pointerdown", kick, { passive: true, once: true });
  }

  /* ---------- Boot ---------- */
  function boot() {
    renderSocials();
    setLang("fi");
    initNavScroll();
    initCookie();
    initFilmModal();
    initHeroVideo();
    initRatingCounter();
    $("#lang-toggle").addEventListener("click", function () { setLang(lang === "fi" ? "en" : "fi"); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
