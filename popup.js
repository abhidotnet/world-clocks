// ── Default Timezones ──────────────────────────────────────────────────────
const DEFAULT_TIMEZONES = [
    { label: "Pacific - Los Angeles",  zone: "America/Los_Angeles" },
    { label: "Mountain - Denver",      zone: "America/Denver" },
    { label: "Central - Chicago",      zone: "America/Chicago" },
    { label: "Eastern - New York",     zone: "America/New_York" },
    { label: "England - London",       zone: "Europe/London" },
    { label: "France - Paris",         zone: "Europe/Paris" },
    { label: "Germany - Berlin",       zone: "Europe/Berlin" },
    { label: "Russia - Moscow",        zone: "Europe/Moscow" },
    { label: "India - Mumbai",        zone: "Asia/Kolkata" },
    { label: "China - Shanghai",       zone: "Asia/Shanghai" },
  ];
  
  // Full IANA tz database as exposed by Chromium/ICU (same set Windows 10+ & Android use).
  const ALL_ZONES_FALLBACK = [
    "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers",
    "Africa/Asmera", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul",
    "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura",
    "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry",
    "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala",
    "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare",
    "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum",
    "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville",
    "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka",
    "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane",
    "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena",
    "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo",
    "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek",
    "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua",
    "America/Araguaina", "America/Argentina/La_Rioja", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta",
    "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia",
    "America/Aruba", "America/Asuncion", "America/Bahia", "America/Bahia_Banderas",
    "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon",
    "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Buenos_Aires",
    "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas",
    "America/Catamarca", "America/Cayenne", "America/Cayman", "America/Chicago",
    "America/Chihuahua", "America/Ciudad_Juarez", "America/Coral_Harbour", "America/Cordoba",
    "America/Costa_Rica", "America/Coyhaique", "America/Creston", "America/Cuiaba",
    "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek",
    "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton",
    "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza",
    "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk",
    "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil",
    "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo",
    "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City",
    "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indianapolis",
    "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Jujuy",
    "America/Juneau", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz",
    "America/Lima", "America/Los_Angeles", "America/Louisville", "America/Lower_Princes",
    "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot",
    "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Mendoza",
    "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City",
    "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo",
    "America/Montserrat", "America/Nassau", "America/New_York", "America/Nome",
    "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem",
    "America/Ojinaga", "America/Panama", "America/Paramaribo", "America/Phoenix",
    "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico",
    "America/Punta_Arenas", "America/Rankin_Inlet", "America/Recife", "America/Regina",
    "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago",
    "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka",
    "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia",
    "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa",
    "America/Thule", "America/Tijuana", "America/Toronto", "America/Tortola",
    "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat",
    "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie",
    "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera",
    "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen",
    "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr",
    "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau",
    "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok",
    "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei",
    "Asia/Calcutta", "Asia/Chita", "Asia/Colombo", "Asia/Damascus",
    "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe",
    "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Hong_Kong",
    "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura",
    "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi",
    "Asia/Katmandu", "Asia/Khandyga", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur",
    "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan",
    "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia",
    "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral",
    "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar",
    "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh",
    "Asia/Saigon", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul",
    "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei",
    "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu",
    "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi",
    "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk",
    "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda",
    "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faeroe", "Atlantic/Madeira",
    "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley",
    "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Darwin",
    "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe",
    "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam",
    "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade",
    "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest",
    "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen",
    "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki",
    "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad",
    "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana",
    "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta",
    "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow",
    "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague",
    "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino",
    "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje",
    "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane",
    "Europe/Ulyanovsk", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna",
    "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb",
    "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas",
    "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe",
    "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion",
    "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham",
    "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo",
    "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier",
    "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kiritimati",
    "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas",
    "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk",
    "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn",
    "Pacific/Ponape", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan",
    "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Truk",
    "Pacific/Wake", "Pacific/Wallis", "UTC"
  ];

  const ALL_ZONES = (() => {
    if (typeof Intl.supportedValuesOf === "function") {
      const zones = Intl.supportedValuesOf("timeZone");
      if (!zones.includes("UTC")) zones.push("UTC");
      return zones.sort();
    }
    return ALL_ZONES_FALLBACK.slice();
  })();
  
  // ── State ──────────────────────────────────────────────────────────────────
  let timezones = [];
  let isAnalog = false;
  let use24Hour = true;
  let theme = "dark";
  let tickInterval = null;
  let dragSrcIndex = null;
  
  // ── Init ───────────────────────────────────────────────────────────────────
  chrome.storage.local.get(["timezones", "isAnalog", "use24Hour", "theme"], (data) => {
    timezones = data.timezones && data.timezones.length ? data.timezones : DEFAULT_TIMEZONES;
    isAnalog  = data.isAnalog || false;
    use24Hour = data.use24Hour !== false;
    theme     = data.theme === "light" ? "light" : "dark";
    applyTheme();
    applyClockFormat();
    updateToggleBtn();
    updateClockFormatBtn();
    updateThemeBtn();
    renderClocks();
    startTick();
    populateTzSelect();
    renderTzList();
  });
  
  // ── Theme ──────────────────────────────────────────────────────────────────
  document.getElementById("toggleTheme").addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme();
    updateThemeBtn();
    save();
    if (isAnalog) tick();
  });
  
  function applyTheme() {
    document.documentElement.dataset.theme = theme;
  }
  
  function updateThemeBtn() {
    const btn = document.getElementById("toggleTheme");
    if (theme === "dark") {
      btn.textContent = "☀ Light";
      btn.title = "Switch to light theme";
    } else {
      btn.textContent = "🌙 Dark";
      btn.title = "Switch to dark theme";
    }
  }
  
  function themeColor(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  
  // ── Toggle analog / digital ────────────────────────────────────────────────
  document.getElementById("toggleMode").addEventListener("click", () => {
    isAnalog = !isAnalog;
    save();
    updateToggleBtn();
    renderClocks();
  });
  
  function updateToggleBtn() {
    document.getElementById("toggleMode").textContent = isAnalog ? "⏱ Digital" : "🕐 Analog";
  }

  // ── Toggle 12h / 24h (digital clocks) ────────────────────────────────────
  document.getElementById("toggleClockFormat").addEventListener("click", () => {
    use24Hour = !use24Hour;
    applyClockFormat();
    updateClockFormatBtn();
    save();
    if (!isAnalog) tick();
  });

  function applyClockFormat() {
    document.documentElement.dataset.clockFormat = use24Hour ? "24" : "12";
  }

  function updateClockFormatBtn() {
    const btn = document.getElementById("toggleClockFormat");
    if (use24Hour) {
      btn.textContent = "12h";
      btn.title = "Switch to 12-hour clock";
    } else {
      btn.textContent = "24h";
      btn.title = "Switch to 24-hour clock";
    }
  }
  
  // ── Settings panel ─────────────────────────────────────────────────────────
  document.getElementById("openSettings").addEventListener("click", () => {
    document.getElementById("settingsPanel").classList.toggle("hidden");
    renderTzList();
  });
  document.getElementById("closeSettings").addEventListener("click", () => {
    document.getElementById("settingsPanel").classList.add("hidden");
  });
  
  // ── Render clock grid ──────────────────────────────────────────────────────
  function renderClocks() {
    const grid = document.getElementById("clockGrid");
    grid.innerHTML = "";
    timezones.forEach((tz, i) => {
      const card = document.createElement("div");
      card.className = "clock-card";
      card.dataset.index = i;
      if (isAnalog) {
        card.innerHTML = `
          <div class="tz-label">${tz.label}</div>
          <canvas class="analog-clock" width="90" height="90" data-zone="${tz.zone}"></canvas>
          <div class="tz-date" data-zone="${tz.zone}" data-type="date"></div>
        `;
      } else {
        card.innerHTML = `
          <div class="tz-label">${tz.label}</div>
          <div class="tz-time" data-zone="${tz.zone}" data-type="time">--:--:--</div>
          <div class="tz-date" data-zone="${tz.zone}" data-type="date"></div>
        `;
      }
      grid.appendChild(card);
    });
    tick(); // immediate first draw
  }
  
  // ── Tick ───────────────────────────────────────────────────────────────────
  function startTick() {
    if (tickInterval) clearInterval(tickInterval);
    tickInterval = setInterval(tick, 1000);
  }
  
  function tick() {
    const now = new Date();
    if (isAnalog) {
      document.querySelectorAll("canvas.analog-clock").forEach(canvas => {
        drawAnalog(canvas, canvas.dataset.zone, now);
      });
    } else {
      document.querySelectorAll("[data-type='time']").forEach(el => {
        el.textContent = getTime(el.dataset.zone, now);
      });
    }
    document.querySelectorAll("[data-type='date']").forEach(el => {
      el.textContent = getDate(el.dataset.zone, now);
    });
  }
  
  // ── Time helpers ───────────────────────────────────────────────────────────
  function getTime(zone, now) {
    return now.toLocaleTimeString("en-US", {
      timeZone: zone, hour: "numeric", minute: "2-digit", second: "2-digit",
      hour12: !use24Hour
    });
  }
  
  function getDate(zone, now) {
    return now.toLocaleDateString("en-US", {
      timeZone: zone, weekday: "short", month: "short", day: "numeric"
    });
  }
  
  // ── Analog drawing ─────────────────────────────────────────────────────────
  function drawAnalog(canvas, zone, now) {
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2, r = W / 2 - 4;
  
    const parts = {};
    new Intl.DateTimeFormat("en-US", {
      timeZone: zone, hour: "numeric", minute: "numeric", second: "numeric",
      hour12: false
    }).formatToParts(now).forEach(p => { parts[p.type] = parseInt(p.value, 10); });
  
    const hrs  = parts.hour   % 12;
    const mins = parts.minute;
    const secs = parts.second;
  
    const secAngle  = (secs / 60) * 2 * Math.PI - Math.PI / 2;
    const minAngle  = ((mins + secs / 60) / 60) * 2 * Math.PI - Math.PI / 2;
    const hourAngle = ((hrs + mins / 60) / 12) * 2 * Math.PI - Math.PI / 2;
  
    ctx.clearRect(0, 0, W, H);
  
    // Face
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.fillStyle = themeColor("--analog-face");
    ctx.fill();
    ctx.strokeStyle = themeColor("--analog-border");
    ctx.lineWidth = 2;
    ctx.stroke();
  
    // Hour ticks
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * 2 * Math.PI;
      const x1 = cx + Math.cos(a) * (r - 4);
      const y1 = cy + Math.sin(a) * (r - 4);
      const x2 = cx + Math.cos(a) * (r - 10);
      const y2 = cy + Math.sin(a) * (r - 10);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = themeColor("--analog-tick");
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  
    drawHand(ctx, cx, cy, hourAngle, r * 0.5, 4, themeColor("--analog-hour"));
    drawHand(ctx, cx, cy, minAngle,  r * 0.72, 3, themeColor("--analog-minute"));
    drawHand(ctx, cx, cy, secAngle,  r * 0.82, 1.5, themeColor("--analog-second"));
  
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, 2 * Math.PI);
    ctx.fillStyle = themeColor("--analog-center");
    ctx.fill();
  }
  
  function drawHand(ctx, cx, cy, angle, length, width, color) {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * length, cy + Math.sin(angle) * length);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.stroke();
  }
  
  // ── Settings: TZ list ──────────────────────────────────────────────────────
  function renderTzList() {
    const list = document.getElementById("tzList");
    list.innerHTML = "";
    timezones.forEach((tz, i) => {
      const li = document.createElement("li");
      li.className = "tz-item";
      li.draggable = true;
      li.dataset.index = i;
      li.innerHTML = `
        <span class="drag-handle">⠿</span>
        <span class="tz-item-label">${tz.label}</span>
        <span class="tz-item-zone">${tz.zone}</span>
        <button class="remove-btn" data-index="${i}">✕</button>
      `;
      li.addEventListener("dragstart", onDragStart);
      li.addEventListener("dragover",  onDragOver);
      li.addEventListener("drop",      onDrop);
      li.addEventListener("dragend",   onDragEnd);
      li.querySelector(".remove-btn").addEventListener("click", (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        timezones.splice(idx, 1);
        save();
        renderClocks();
        renderTzList();
      });
      list.appendChild(li);
    });
  }
  
  // ── Drag & Drop reorder ────────────────────────────────────────────────────
  function onDragStart(e) {
    dragSrcIndex = parseInt(this.dataset.index, 10);
    e.dataTransfer.effectAllowed = "move";
  }
  function onDragOver(e) {
    e.preventDefault();
    document.querySelectorAll(".tz-item").forEach(el => el.classList.remove("drag-over"));
    this.classList.add("drag-over");
  }
  function onDrop(e) {
    e.preventDefault();
    const destIndex = parseInt(this.dataset.index, 10);
    if (dragSrcIndex === destIndex) return;
    const moved = timezones.splice(dragSrcIndex, 1)[0];
    timezones.splice(destIndex, 0, moved);
    save();
    renderClocks();
    renderTzList();
  }
  function onDragEnd() {
    document.querySelectorAll(".tz-item").forEach(el => el.classList.remove("drag-over"));
  }
  
  // ── Add timezone ───────────────────────────────────────────────────────────
  function populateTzSelect() {
    const sel = document.getElementById("tzSelect");
    ALL_ZONES.forEach(z => {
      const opt = document.createElement("option");
      opt.value = z;
      opt.textContent = z.replace("_", " ");
      sel.appendChild(opt);
    });
  }
  
  document.getElementById("addTz").addEventListener("click", () => {
    if (timezones.length >= 12) {
      alert("Maximum 12 timezones reached.");
      return;
    }
    const zone  = document.getElementById("tzSelect").value;
    const label = document.getElementById("tzLabel").value.trim() ||
                  zone.split("/").pop().replace("_", " ");
    timezones.push({ label, zone });
    document.getElementById("tzLabel").value = "";
    save();
    renderClocks();
    renderTzList();
  });
  
  // ── Persist ────────────────────────────────────────────────────────────────
  function save() {
    chrome.storage.local.set({ timezones, isAnalog, use24Hour, theme });
  }