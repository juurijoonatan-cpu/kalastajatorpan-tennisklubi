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
    navBook: "Varaa", navContact: "Yhteystiedot", menu: "Valikko",
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
    igSub: "Seuraa Instagramissa", igFollow: "Seuraa", igCta: "Seuraa @kalastajatorpantennisklubi",
    locEyebrow: "Yhteystiedot", locTitle: "Löydä perille",
    locAddress: "Osoite", locBooking: "Yhteystiedot", locHours: "Aukioloajat", locSocial: "Somessa",
    footBlurb: "Perinteikäs ulkotenniskeskus Munkkiniemessä, meren äärellä. Massatennistä on pelattu Torpalla vuodesta 1938. Klubilla toimii LTC-33 r.f., yksi Suomen vanhimmista tennisseuroista.",
    footHrs: [{ k: "Ma–To", v: "07:00–22:30" }, { k: "Pe", v: "07:00–20:30" }, { k: "La", v: "09:00–20:30" }, { k: "Su", v: "09:00–22:30" }],
    footEst: "LTC-33 r.f. · Perustettu 1933",
    cookie: "Tämä sivusto käyttää evästeitä parhaan kokemuksen takaamiseksi.", cookieOk: "Selvä"
  };

  var EN = {
    navKlubi: "Club", navKentat: "Courts", navRavintola: "Restaurant",
    navBook: "Book", navContact: "Contact", menu: "Menu",
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
    igSub: "Follow on Instagram", igFollow: "Follow", igCta: "Follow @kalastajatorpantennisklubi",
    locEyebrow: "Contact", locTitle: "Find your way here",
    locAddress: "Address", locBooking: "Contact", locHours: "Opening hours", locSocial: "On social",
    footBlurb: "A storied outdoor tennis centre in Munkkiniemi, by the sea. Clay tennis has been played here since 1938. The club is home to LTC-33 r.f., one of Finland’s oldest tennis clubs.",
    footHrs: [{ k: "Mon–Thu", v: "07:00–22:30" }, { k: "Fri", v: "07:00–20:30" }, { k: "Sat", v: "09:00–20:30" }, { k: "Sun", v: "09:00–22:30" }],
    footEst: "LTC-33 r.f. · Founded 1933",
    cookie: "This website uses cookies to ensure the best experience.", cookieOk: "Got it"
  };

  var DICT = { fi: FI, en: EN };
  var lang = "fi";
  var chatRelang = null;

  /* ---------- Chat assistant content (scripted FAQ, no backend) ---------- */
  var PLAYTOMIC = "https://playtomic.io/kalastajatorpan-tennisklubi/112e053d-fc2c-4745-ad78-db53dec5f0cf";
  var CHAT = {
    fi: {
      title: "Torppa-avustaja", sub: "Vastaan yleisiin kysymyksiin", placeholder: "Kirjoita kysymys…",
      greeting: "Hei! 👋 Autan mielelläni varauksissa, aukioloajoissa, hinnoissa, ravintolassa ja sijainnissa. Mitä haluaisit tietää?",
      chips: [["Varaukset", "booking"], ["Aukioloajat", "hours"], ["Hinnat", "prices"], ["Sijainti", "location"], ["Ravintola", "restaurant"]],
      fallback: "Hyvä kysymys! En osaa vielä vastata tuohon itse. Soita 010 423 9960 tai kirjoita <a href='mailto:juri.raikkonen@tennisklubi.fi'>juri.raikkonen@tennisklubi.fi</a> — autamme mielellämme.",
      answers: {
        booking: "Varaa vuoro helposti Playtomicissa: <a href='" + PLAYTOMIC + "' target='_blank' rel='noopener'>avaa Playtomic →</a><br>Kentät ovat auki ma–to 7–22, pe 7–21, la 9–21 ja su 9–22. Puhelinvaraukset: 010 423 9960 (ei palvelumaksua).",
        hours: "Kentät: ma–to 7–22, pe 7–21, la 9–21, su 9–22.<br>Klubiravintola: aamiainen 7:30–10:30, salaattibuffet 12–20, club menu 9–22:30.",
        prices: "Kenttävuoron hinnat: arki 7:00–9:30 <b>36€</b>, 9:30–15:30 <b>29€</b>, 15:30–22 <b>39€</b>, viikonloppu <b>36€</b>.",
        location: "Kärkitie 4, 00330 Helsinki — Munkkiniemessä, meren äärellä. <a href='#yhteystiedot'>Katso kartta →</a>",
        restaurant: "Klubiravintola & terassi tarjoaa aamiaisbuffetin arkisin, salaattibuffetin joka päivä kesällä sekä club menun herkut. Tervetuloa myös ilman mailaa! 🥐",
        contact: "Puhelin <b>010 423 9960</b>, sähköposti <a href='mailto:juri.raikkonen@tennisklubi.fi'>juri.raikkonen@tennisklubi.fi</a>.",
        events: "Kesän kohokohtia: kauden avaus 17.5., Bermuda-turnaus 4.7. ja ITF Helsinki Midnight Sun Open 20.–26.7. 🎾",
        hello: "Hei! Kysy vaikka varauksista, hinnoista, ravintolasta tai aukioloajoista. 🎾"
      }
    },
    en: {
      title: "Torppa Assistant", sub: "Answers to common questions", placeholder: "Type a question…",
      greeting: "Hi! 👋 I can help with bookings, opening hours, prices, the restaurant and how to find us. What would you like to know?",
      chips: [["Booking", "booking"], ["Hours", "hours"], ["Prices", "prices"], ["Location", "location"], ["Restaurant", "restaurant"]],
      fallback: "Great question! I can't answer that one myself yet. Please call 010 423 9960 or email <a href='mailto:juri.raikkonen@tennisklubi.fi'>juri.raikkonen@tennisklubi.fi</a> — we're happy to help.",
      answers: {
        booking: "Book a court easily on Playtomic: <a href='" + PLAYTOMIC + "' target='_blank' rel='noopener'>open Playtomic →</a><br>Courts are open Mon–Thu 07–22, Fri 07–21, Sat 09–21 and Sun 09–22. Phone bookings: 010 423 9960 (no service fee).",
        hours: "Courts: Mon–Thu 07–22, Fri 07–21, Sat 09–21, Sun 09–22.<br>Restaurant: breakfast 07:30–10:30, salad buffet 12–20, club menu 09–22:30.",
        prices: "Court prices: weekday 07:00–09:30 <b>€36</b>, 09:30–15:30 <b>€29</b>, 15:30–22 <b>€39</b>, weekend <b>€36</b>.",
        location: "Kärkitie 4, 00330 Helsinki — in Munkkiniemi, by the sea. <a href='#yhteystiedot'>See the map →</a>",
        restaurant: "The clubhouse restaurant & terrace serves a weekday breakfast buffet, a summer salad buffet and club-menu favourites. Welcome even without a racquet! 🥐",
        contact: "Phone <b>010 423 9960</b>, email <a href='mailto:juri.raikkonen@tennisklubi.fi'>juri.raikkonen@tennisklubi.fi</a>.",
        events: "Summer highlights: season opening 17 May, Bermuda Tournament 4 Jul and the ITF Helsinki Midnight Sun Open 20–26 Jul. 🎾",
        hello: "Hi! Ask me about bookings, prices, the restaurant or opening hours. 🎾"
      }
    }
  };
  function chatTopic(q) {
    q = " " + q.toLowerCase() + " ";
    if (/(vara|book|court|kentt|ken-)/.test(q)) return "booking";
    if (/(auki|open|hour|aukiolo|kello| klo|milloin|when)/.test(q)) return "hours";
    if (/(hin|price|cost|maksa|euro|€|paljon|how much)/.test(q)) return "prices";
    if (/(sijain|osoit|locat|address|where|miss|kartta| map|perille|directions)/.test(q)) return "location";
    if (/(ravinto|restaur|food|eat|syö|syo|aamiai|breakfast|lounas|terassi|menu|kahvi|coffee)/.test(q)) return "restaurant";
    if (/(yhtey|contact|puhelin|phone|email|sähk|sahk|soit|mail)/.test(q)) return "contact";
    if (/(tapahtu|event|turnau|tournament|midnight|open by freja)/.test(q)) return "events";
    if (/(^| )(hei|moi|terve|hello|hi|hey|good)/.test(q)) return "hello";
    return null;
  }

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
      return '<div style="display:flex;align-items:baseline;gap:13px;padding:14px 4px;border-bottom:1px solid rgba(242,235,221,0.14);">' +
        '<span style="color:#c77a54;font-size:15px;line-height:1;">—</span>' +
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
    var groups = [$("#socials-main")];
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
    updateMarkers();
    var label = lang === "fi" ? "EN" : "FI";
    $("#lang-toggle").textContent = label;
    var ml = $("#lang-toggle-m"); if (ml) ml.textContent = label;
    if (chatRelang) chatRelang();
    resetRating();
  }

  function updateMarkers() {
    $all(".ball-marker").forEach(function (m) {
      var name = m.getAttribute(lang === "fi" ? "data-fi" : "data-en") || "";
      var tip = m.querySelector(".mk-tip");
      if (tip) tip.textContent = name;
      m.setAttribute("aria-label", name);
    });
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

  function initHeroReveal() {
    var copy = $("#hero-copy");
    if (!copy) return;
    // hold the title/logo well into the film, then let it vanish progressively
    var faded = false;
    var fade = function () { if (!faded) { faded = true; copy.classList.add("faded"); } };
    setTimeout(fade, 22000);
    // if the visitor starts scrolling away, fade immediately
    window.addEventListener("scroll", function () { if (window.scrollY > 40) fade(); }, { passive: true });
  }

  /* animated wave dividers — one shared rAF drives every divider's mask-position
     through --wfx: a continuous flow plus a subtle, eased offset from the pointer
     (desktop) or device tilt (mobile). Position-based, never transform-based, so
     the repeating mask stays seamless on iOS Safari. */
  function initWaves() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var waves = $all(".wave-div");
    if (!waves.length) return;
    var PERIOD = 140, SPEED = 20, MX = 16; // px, px/sec, px
    var mx = 0, mxTarget = 0, flow = 0, last = null, ptrY = -9999, ptrOn = false;
    if (window.matchMedia && window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", function (e) {
        mxTarget = (e.clientX / window.innerWidth - 0.5) * 2 * MX;
        ptrY = e.clientY; ptrOn = true;
      }, { passive: true });
      document.addEventListener("mouseleave", function () { ptrOn = false; }, { passive: true });
    }
    // device tilt (best effort; no-ops where orientation isn't granted)
    window.addEventListener("deviceorientation", function (e) {
      if (e.gamma == null) return;
      mxTarget = Math.max(-25, Math.min(25, e.gamma)) / 25 * MX;
    }, { passive: true });
    var frame = function (t) {
      if (last === null) last = t;
      var dt = Math.min(100, t - last) / 1000; last = t;
      flow = (flow + SPEED * dt) % PERIOD;
      mx += (mxTarget - mx) * 0.08;
      var base = flow + mx;
      for (var i = 0; i < waves.length; i++) {
        var w = waves[i], boost = 0, line = 0.7;
        if (ptrOn) {
          var r = w.getBoundingClientRect();
          // proximity: 1 when the pointer sits right on the wave band, easing out over ~150px
          var prox = Math.max(0, 1 - Math.abs((r.top + r.height / 2) - ptrY) / 150);
          boost = prox * 34;         // the wave ripples faster where you hover
          line = 0.7 + prox * 0.3;   // and its clay line brightens
        }
        w.style.setProperty("--wfx", (base + boost).toFixed(2) + "px");
        w.style.setProperty("--wline", line.toFixed(2));
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  /* highlight the nav link for whichever section is at the viewport middle */
  function initScrollSpy() {
    var links = $all(".nav-links a");
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) {
      var h = a.getAttribute("href");
      if (h && h.charAt(0) === "#") map[h.slice(1)] = a;
    });
    var setActive = function (id) {
      links.forEach(function (a) { a.classList.remove("active"); });
      if (map[id]) map[id].classList.add("active");
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: "-50% 0px -49% 0px", threshold: 0 });
    $all("section[id]").forEach(function (s) { io.observe(s); });
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

  function initMarkers() {
    var markers = $all(".ball-marker");
    if (!markers.length) return;
    markers.forEach(function (m) {
      m.addEventListener("click", function (e) {
        e.preventDefault();
        var wasOpen = m.classList.contains("open");
        markers.forEach(function (x) { x.classList.remove("open"); });
        if (!wasOpen) m.classList.add("open");
      });
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".ball-marker")) markers.forEach(function (x) { x.classList.remove("open"); });
    });
  }

  function initMobileMenu() {
    var menu = $("#mobile-menu"), burger = $("#nav-burger"), close = $("#mm-close");
    if (!menu || !burger) return;
    var open = function () { menu.classList.add("open"); menu.setAttribute("aria-hidden", "false"); burger.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; };
    var shut = function () { menu.classList.remove("open"); menu.setAttribute("aria-hidden", "true"); burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; };
    burger.addEventListener("click", open);
    if (close) close.addEventListener("click", shut);
    $all(".mm-links a").forEach(function (a) { a.addEventListener("click", shut); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("open")) shut(); });
    var ml = $("#lang-toggle-m");
    if (ml) ml.addEventListener("click", function () { setLang(lang === "fi" ? "en" : "fi"); });
  }


  /* always open at the top — ignore any #section left in the URL from an earlier
     in-page click (and the browser's remembered scroll position on reload) */
  function initScrollReset() {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (location.hash) {
      try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    }
    var toTop = function () {
      var el = document.documentElement, prev = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";      // never animate this correction
      window.scrollTo(0, 0);
      el.style.scrollBehavior = prev;
    };
    toTop();
    window.addEventListener("load", toTop);
  }

  /* ---------- Chat assistant (scripted, client-side) ---------- */
  function initChatbot() {
    var launch = $("#chat-launch"), panel = $("#chat-panel"), body = $("#chat-body"),
        chips = $("#chat-chips"), input = $("#chat-text"), send = $("#chat-send"), close = $("#chat-close");
    if (!launch || !panel) return;
    var started = false;
    var c = function () { return CHAT[lang]; };
    function addMsg(html, who) {
      var d = document.createElement("div");
      d.className = "chat-msg " + who;
      d.innerHTML = html;
      body.appendChild(d);
      body.scrollTop = body.scrollHeight;
    }
    function renderChips() {
      chips.innerHTML = "";
      c().chips.forEach(function (ch) {
        var b = document.createElement("button");
        b.className = "chat-chip"; b.type = "button"; b.textContent = ch[0];
        b.addEventListener("click", function () { ask(ch[0], ch[1]); });
        chips.appendChild(b);
      });
    }
    function ask(text, topic) {
      addMsg(esc(text), "user");
      var ans = c().answers[topic || chatTopic(text)] || c().fallback;
      setTimeout(function () { addMsg(ans, "bot"); }, 340);
    }
    function refreshTexts() {
      $("#chat-title").textContent = c().title;
      $("#chat-sub").textContent = c().sub;
      input.placeholder = c().placeholder;
    }
    function start() {
      if (started) return; started = true;
      refreshTexts(); renderChips(); addMsg(c().greeting, "bot");
    }
    function open() {
      panel.classList.add("open"); panel.setAttribute("aria-hidden", "false");
      launch.classList.add("hide"); start();
      setTimeout(function () { try { input.focus(); } catch (e) {} }, 320);
    }
    function shut() {
      panel.classList.remove("open"); panel.setAttribute("aria-hidden", "true");
      launch.classList.remove("hide");
    }
    var submit = function () { var v = input.value.trim(); if (!v) return; input.value = ""; ask(v); };
    launch.addEventListener("click", open);
    close.addEventListener("click", shut);
    send.addEventListener("click", submit);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel.classList.contains("open")) shut(); });
    // keep an open chat's chrome in sync with a language switch (messages stay)
    chatRelang = function () { if (started) { refreshTexts(); renderChips(); } };
  }

  /* ---------- Boot ---------- */
  function boot() {
    initScrollReset();
    renderSocials();
    setLang("fi");
    initNavScroll();
    initCookie();
    initFilmModal();
    initHeroVideo();
    initHeroReveal();
    initWaves();
    initRatingCounter();
    initMarkers();
    initMobileMenu();
    initScrollSpy();
    initChatbot();
    $("#lang-toggle").addEventListener("click", function () { setLang(lang === "fi" ? "en" : "fi"); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
