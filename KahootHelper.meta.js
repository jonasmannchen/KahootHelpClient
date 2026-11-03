// ==UserScript==
// @name         KahootHelper
// @version      1.1.6
// @description  A hack for kahoot.it AND kahoot-like clone sites (rogbeast.de, pages.dev mirrors, embedded game portals). Auto-detects Kahoot layout; works with or without Tampermonkey (built-in GM_xmlhttpRequest shim). First tries proxy lookup by Quiz ID. If that fails, uses fallback search and displays a scrollable dropdown for selection. Close menu -> reopen by tapping the profile avatar 3 times.
// @namespace    https://github.com/KRWCLASSIC
// @updateURL    https://raw.githubusercontent.com/KRWCLASSIC/KahootHelper/main/KahootHelper.meta.js
// @downloadURL  https://raw.githubusercontent.com/KRWCLASSIC/KahootHelper/main/KahootHelper.user.js
// @author       KRWCLASSIC, jokeri2222, johnweeky
// @match        https://kahoot.it/*
// @match        https://app.kahoot.com/*
// @match        *://*.rogbeast.de/*
// @match        *://rogbeast.pages.dev/*
// @match        *://*.rogbeast.pages.dev/*
// @match        *://kahoot-scrim.pages.dev/*
// @match        *://*.it-was-kahoot-clone.pages.dev/*
// @match        *://*.itwas-kahoot.pages.dev/*
// @match        https://www.crazygames.com/game/kahoot-it/*
// @match        https://playgame.io/games/kahoot/*
// @match        https://poki.com/de/g/kahoot-answer/*
// @match        https://*/*kahoot*
// @icon         https://raw.githubusercontent.com/KRWCLASSIC/KahootHelper/refs/heads/main/kahoot.svg
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      damp-leaf-16aa.johnwee.workers.dev
// @connect      create.kahoot.it
// ==/UserScript==
