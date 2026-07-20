/* =====================================================================
   FOR YOU — a digital scrapbook
   ---------------------------------------------------------------------
   EVERYTHING YOU MIGHT WANT TO EDIT LIVES IN THE "CONFIG" SECTION BELOW.
   You should not need to touch anything past that section unless you
   want to change how things behave.
===================================================================== */

/* =====================================================================
   CONFIG — edit me!
===================================================================== */

// The password for Scene 2. Change this to whatever you like.
const PASSWORD = "2221";

// Scene 1 — the two lines that fade in before the "turn on the lights" button
const INTRO_LINE_1 = "I made something for you…";
const INTRO_LINE_2 = "I hope you like it.";
const INTRO_CAPTION = "It's a little dark in here…";

// Scene 3 — Welcome Letter ("A Love Letter").
// Use \n\n for a new paragraph. Replace this with your own words!
const WELCOME_LETTER_TEXT =
`Happy Birthday Aatika, i hope this year will be a little nicer to you than the last one.

I pray this year brings you everything that you have been praying for, and please do not cry on this birthday Pray and ,Give this new year of your life a happy start, and I hope it stays filled with happiness all the way through. `;

// Photos scattered around the welcome letter (top-left, top-right,
// bottom-left, bottom-right). Captions are optional — leave "" for none.
const WELCOME_PHOTOS = [
  { src: "images/photo-01.jpeg", caption: "that smile ♡" },
  { src: "images/photo-06.jpeg", caption: "golden hour" },
  { src: "images/photo-02.jpeg", caption: "you looked happy" },
  { src: "images/photo-08.jpeg", caption: " henna♡" },
];

// Scene 7 — Final Letter ("One More Thing…").
const FINAL_LETTER_TEXT =
`Please do not stress too much ,enjoy your weird interests ,do the things that make you happy, and don't waste your time on things that don't matter. Let God handle the rest ,I truly believe He won't disappoint you.

P.S. I think this is probably the first year I've wished you with more than just a simple "Happy Birthday." 
  `;

// Photos scattered around the final letter — same treatment as the welcome letter.
const FINAL_PHOTOS = [
  { src: "images/photo-14.jpeg", caption: "" },
  { src: "images/photo-15.jpeg", caption: "" },
  { src: "images/photo-16.jpeg", caption: "" },
  { src: "images/photo-17.jpeg", caption: "" },
];

// Scene 6 — Song. The little paragraph next to the photos, and your Spotify link.
const SONG_MESSAGE_TEXT =
"This is currently my favorite song ,i just thought you'll like it.";
const SPOTIFY_LINK = "https://open.spotify.com/track/3GaeH4EFwtkY2IJfs85u8u?si=28b0940131ef4088";

// The two overlapping photos next to the vinyl on the Song page.
const SONG_PHOTOS = [
  "images/photo-08.jpeg",
  "images/photo-09.jpeg",
];

// Scene 5 — Memories gallery. One entry per photo, in order.
// Add/remove/reorder freely — captions are optional (leave "" for none).
const PHOTO_CAPTIONS = [
  { src: "images/photo-01.jpeg", caption: "that smile ♡" },
  { src: "images/photo-02.jpeg", caption: "cuties" },
  { src: "images/photo-03.jpeg", caption: "in reds♡" },
  { src: "images/photo-09.jpeg", caption: "My fav one" },
  { src: "images/photo-10.jpeg", caption: "used to be your fav pose" },
  { src: "images/photo-11.jpeg", caption: "here again" },
  { src: "images/photo-12.jpeg", caption: "for the third time" },
  { src: "images/photo-04.jpeg", caption: "Tomboy hah" },
  { src: "images/photo-05.jpeg", caption: "aesthetic" },
  { src: "images/photo-06.jpeg", caption: "so pretty" },
  { src: "images/photo-07.jpeg", caption: "cutie" },
  { src: "images/photo-13.jpeg", caption: "your smile♡" },
  { src: "images/photo-14.jpeg", caption: "Ma'am" },
  { src: "images/photo-15.jpeg", caption: "woww" },
  { src: "images/photo-16.jpeg", caption: "aesthetic(2)" },
  { src: "images/photo-17.jpeg", caption: "V again" },
];

// Optional background music. Leave empty ("") for no background music —
// a little magical chime still plays automatically when the lights turn
// on either way, no file needed for that part.
// To add your own song: drop an mp3 file into a "music" folder next to
// index.html and put its path here, e.g. "music/our-song.mp3".
const BACKGROUND_MUSIC_SRC = "assets/audio/hbd.mp3";
const BACKGROUND_MUSIC_VOLUME = 0.45;

/* =====================================================================
   END CONFIG — everything below makes the scrapbook run
===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------------
     Fill in editable text nodes from config
  --------------------------------------------------------------- */
  document.getElementById("darkLine1").textContent = INTRO_LINE_1;
  document.getElementById("darkLine2").textContent = INTRO_LINE_2;
  document.getElementById("darkCaption").textContent = INTRO_CAPTION;
  document.getElementById("btnSpotify").href = SPOTIFY_LINK;
  document.getElementById("songParagraph").textContent = SONG_MESSAGE_TEXT;

  const songPhoto1 = document.getElementById("songPhoto1");
  const songPhoto2 = document.getElementById("songPhoto2");
  if (SONG_PHOTOS[0]) songPhoto1.src = SONG_PHOTOS[0];
  if (SONG_PHOTOS[1]) songPhoto2.src = SONG_PHOTOS[1];

  // clicking the photos/vinyl on the Song page also opens Spotify,
  // matching the "click me" cue next to them
  const songPhotoCol = document.getElementById("songPhotoCol");
  songPhotoCol.addEventListener("click", () => {
    window.open(SPOTIFY_LINK, "_blank", "noopener");
  });

  /* ---------------------------------------------------------------
     Ambient sparkles + butterflies (run everywhere, subtle)
  --------------------------------------------------------------- */
  const sparkleLayer = document.getElementById("sparkleLayer");
  const butterflyLayer = document.getElementById("butterflyLayer");

  function spawnSparkle() {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.animationDuration = 3.5 + Math.random() * 3 + "s";
    sparkleLayer.appendChild(el);
    setTimeout(() => el.remove(), 7000);
  }
  setInterval(spawnSparkle, 550);
  for (let i = 0; i < 10; i++) setTimeout(spawnSparkle, i * 200);

  function spawnButterfly() {
    const el = document.createElement("div");
    el.className = "butterfly";
    el.innerHTML = "<span>🦋</span>";
    el.style.left = Math.random() * 90 + "vw";
    el.style.bottom = "-40px";
    el.style.animationDuration = 14 + Math.random() * 8 + "s";
    butterflyLayer.appendChild(el);
    setTimeout(() => el.remove(), 24000);
  }
  setInterval(spawnButterfly, 9000);
  setTimeout(spawnButterfly, 1500);

  /* ---------------------------------------------------------------
     SOUND — a synthesized magical chime (no audio file needed) that
     plays the moment the lights turn on, plus optional looping
     background music if BACKGROUND_MUSIC_SRC is set above.
  --------------------------------------------------------------- */
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    return audioCtx;
  }

  function playChime() {
    try {
      const ctx = getAudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6 — a soft sparkly arpeggio
      notes.forEach((freq, i) => {
        const start = ctx.currentTime + i * 0.16;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.16, start + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 1.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 1.2);
      });
    } catch (err) {
      // Web Audio not available — fail silently, it's a nice-to-have
    }
  }

  const bgMusic = document.getElementById("bgMusic");
  const btnMuteToggle = document.getElementById("btnMuteToggle");
  let musicStarted = false;

  function startBackgroundMusic() {
    if (!BACKGROUND_MUSIC_SRC || musicStarted) return;
    musicStarted = true;
    bgMusic.src = BACKGROUND_MUSIC_SRC;
    bgMusic.volume = BACKGROUND_MUSIC_VOLUME;
    bgMusic.play().catch(() => {
      // autoplay may be blocked on some browsers/devices — that's fine,
      // the person can still use the mute/play toggle button
    });
    btnMuteToggle.hidden = false;
  }

  btnMuteToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      btnMuteToggle.textContent = "🔊";
    } else {
      bgMusic.pause();
      btnMuteToggle.textContent = "🔇";
    }
  });

  /* ---------------------------------------------------------------
     SCENE 1 — Darkness → lights on
  --------------------------------------------------------------- */
  const sceneDark = document.getElementById("scene-dark");
  const darkLine1 = document.getElementById("darkLine1");
  const darkLine2 = document.getElementById("darkLine2");
  const darkCaption = document.getElementById("darkCaption");
  const btnLights = document.getElementById("btnLights");
  const scenePassword = document.getElementById("scene-password");

  setTimeout(() => darkLine1.classList.add("show"), 600);
  setTimeout(() => darkLine2.classList.add("show"), 2200);
  setTimeout(() => darkCaption.classList.add("show"), 3800);
  setTimeout(() => btnLights.classList.add("show"), 4600);

  btnLights.addEventListener("click", () => {
    sceneDark.classList.add("lights-on");
    btnLights.disabled = true;

    // sound: chime + optional background music, both started from
    // within this click handler so the browser treats them as a
    // direct result of a user gesture (required for audio autoplay)
    playChime();
    startBackgroundMusic();

    // extra sparkle burst for the "magical" feeling
    for (let i = 0; i < 26; i++) setTimeout(spawnSparkle, i * 45);

    setTimeout(() => {
      sceneDark.hidden = true;
      scenePassword.hidden = false;
      document.getElementById("passwordInput").focus();
    }, 1500);
  });

  /* ---------------------------------------------------------------
     SCENE 2 — Password lockbox
  --------------------------------------------------------------- */
  const passwordForm = document.getElementById("passwordForm");
  const passwordInput = document.getElementById("passwordInput");
  const passwordCard = document.getElementById("passwordCard");
  const passwordFeedback = document.getElementById("passwordFeedback");
  const mainContent = document.getElementById("mainContent");

  passwordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = passwordInput.value.trim();

    if (value === PASSWORD) {
      passwordFeedback.textContent = "It's you! 🩷";
      passwordFeedback.style.color = "var(--rose-deep)";
      passwordCard.style.pointerEvents = "none";

      setTimeout(() => {
        scenePassword.style.transition = "opacity .8s ease, transform .8s ease";
        scenePassword.style.opacity = "0";
        scenePassword.style.transform = "scale(1.04)";
        setTimeout(() => {
          scenePassword.hidden = true;
          mainContent.hidden = false;
          document.body.style.overflow = "auto";
          initWelcomeScene();
        }, 800);
      }, 500);
    } else {
      passwordFeedback.textContent = "Hmm… that's not it.";
      passwordFeedback.style.color = "var(--rose-deep)";
      passwordCard.classList.remove("shake");
      // force reflow so the animation can retrigger
      void passwordCard.offsetWidth;
      passwordCard.classList.add("shake");
      passwordInput.value = "";
    }
  });

  // lock scroll until unlocked
  document.body.style.overflow = "hidden";

  /* ---------------------------------------------------------------
     TYPEWRITER helper
     Types `text` into `el`, preserving blank-line paragraph breaks.
     Returns a Promise that resolves when typing is finished.
  --------------------------------------------------------------- */
  function typewrite(el, text, speed = 26) {
    return new Promise((resolve) => {
      el.textContent = "";
      const cursor = document.createElement("span");
      cursor.className = "typing-cursor";
      let i = 0;

      function step() {
        if (i <= text.length) {
          el.textContent = text.slice(0, i);
          el.appendChild(cursor);
          i++;
          // slightly longer pause after punctuation for a natural feel
          const prevChar = text[i - 1];
          const pause = (prevChar === "." || prevChar === "," || prevChar === "\n")
            ? speed * 6
            : speed;
          setTimeout(step, pause);
        } else {
          cursor.remove();
          resolve();
        }
      }
      step();
    });
  }

  /* ---------------------------------------------------------------
     Helper — build the four scattered/rotated corner photos,
     used identically by the welcome letter and the final letter.
  --------------------------------------------------------------- */
  function fillCornerPhotos(containerEl, photoList) {
    containerEl.innerHTML = "";
    const slots = ["corner-tl", "corner-tr", "corner-bl", "corner-br"];
    photoList.slice(0, 4).forEach((photo, i) => {
      const fig = document.createElement("figure");
      fig.className = "corner-polaroid " + slots[i % slots.length];
      fig.innerHTML = `
        <span class="tape"></span>
        <img src="${photo.src}" alt="A memory" loading="lazy" />
        ${photo.caption ? `<figcaption>${photo.caption}</figcaption>` : ""}
      `;
      containerEl.appendChild(fig);
    });
  }

  /* ---------------------------------------------------------------
     SCENE 3 — Welcome letter ("A Love Letter") — no envelope,
     appears directly, typewriter starts automatically
  --------------------------------------------------------------- */
  let welcomeInitDone = false;

  function initWelcomeScene() {
    if (welcomeInitDone) return;
    welcomeInitDone = true;

    const letterBody = document.getElementById("letterBody");
    const welcomePhotos = document.getElementById("welcomePhotos");
    const btnScrollDown = document.getElementById("btnScrollDown");

    fillCornerPhotos(welcomePhotos, WELCOME_PHOTOS);

    // start typing once the card's fade/rise entrance has finished
    setTimeout(() => {
      typewrite(letterBody, WELCOME_LETTER_TEXT, 24);
    }, 700);

    btnScrollDown.addEventListener("click", () => {
      document.getElementById("scene-hub").scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------
     SCENE 4 — Memory hub → open overlays
  --------------------------------------------------------------- */
  const overlays = {
    memories: document.getElementById("overlay-memories"),
    song: document.getElementById("overlay-song"),
    finalletter: document.getElementById("overlay-finalletter"),
  };

  function openOverlay(name) {
    const el = overlays[name];
    if (!el) return;
    el.hidden = false;
    // force reflow before adding class so transition plays
    void el.offsetWidth;
    el.classList.add("show");
    document.body.style.overflow = "hidden";

    if (name === "memories") initMemoriesScene();
    if (name === "finalletter") initFinalScene();
  }

  function closeOverlay(name) {
    const el = overlays[name];
    if (!el) return;
    el.classList.remove("show");
    setTimeout(() => {
      el.hidden = true;
      document.body.style.overflow = "auto";
    }, 500);
  }

  document.querySelectorAll(".hub-item").forEach((card) => {
    card.addEventListener("click", () => openOverlay(card.dataset.target));
  });

  document.querySelectorAll(".overlay-close").forEach((btn) => {
    btn.addEventListener("click", () => closeOverlay(btn.dataset.close));
  });

  /* ---------------------------------------------------------------
     SCENE 5 — Memories scrapbook gallery
  --------------------------------------------------------------- */
  let memoriesInitDone = false;

  function initMemoriesScene() {
    if (memoriesInitDone) return;
    memoriesInitDone = true;

    const grid = document.getElementById("scrapbookGrid");
    const rotations = [-8, -5, -3, 2, 4, 7, -6, 5, -4, 3, -2, 6, -7, 8, -3, 4, -5];

    PHOTO_CAPTIONS.forEach((photo, idx) => {
      const item = document.createElement("figure");
      item.className = "polaroid-item";
      const rot = rotations[idx % rotations.length];
      item.style.transform = `rotate(${rot}deg)`;
      // slight vertical stagger for a scattered feel
      item.style.marginTop = (idx % 3 === 0 ? "0px" : idx % 3 === 1 ? "26px" : "8px");

      item.innerHTML = `
        <span class="tape"></span>
        <img src="${photo.src}" alt="A memory together" loading="lazy" />
        ${photo.caption ? `<figcaption class="cap">${photo.caption}</figcaption>` : ""}
      `;

      item.addEventListener("click", () => openLightbox(photo.src, photo.caption));
      grid.appendChild(item);
    });
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
    void lightbox.offsetWidth;
    lightbox.classList.add("show");
  }
  function closeLightbox() {
    lightbox.classList.remove("show");
    setTimeout(() => { lightbox.hidden = true; }, 350);
  }
  lightboxBackdrop.addEventListener("click", closeLightbox);

  /* ---------------------------------------------------------------
     SCENE 7 — Final letter ("One More Thing…") — no envelope,
     appears directly, typewriter runs, then "Happy Birthday" +
     floating hearts reveal inside the same card
  --------------------------------------------------------------- */
  let finalInitDone = false;

  function initFinalScene() {
    if (finalInitDone) return;
    finalInitDone = true;

    const finalLetterBody = document.getElementById("finalLetterBody");
    const finalPhotos = document.getElementById("finalPhotos");
    const happyBirthdayReveal = document.getElementById("happyBirthdayReveal");

    fillCornerPhotos(finalPhotos, FINAL_PHOTOS);
    startFloatingHearts();

    setTimeout(() => {
      typewrite(finalLetterBody, FINAL_LETTER_TEXT, 24).then(() => {
        setTimeout(() => {
          happyBirthdayReveal.classList.add("show");
        }, 500);
      });
    }, 700);
  }

  const floatingHearts = document.getElementById("floatingHearts");
  let heartsInterval = null;

  function startFloatingHearts() {
    if (heartsInterval) return;
    const hearts = ["♡", "❤", "♥"];
    heartsInterval = setInterval(() => {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
      heart.style.animationDuration = 6 + Math.random() * 5 + "s";
      floatingHearts.appendChild(heart);
      setTimeout(() => heart.remove(), 11000);
    }, 550);
  }

});
