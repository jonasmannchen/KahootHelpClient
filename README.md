# KahootHelper `1.1.6`

This is a Kahoot cheat made for browsers and Tampermonkey – **and it now works on kahoot-like clone sites too** (rogbeast.de, pages.dev mirrors, embedded game portals), not just kahoot.it.
(Forked/fixed from [KaHoax](https://github.com/KRWCLASSIC/KaHoax) – see "Fixes" below.)

## Instructions (Manual)

1. Open the `KahootHelper.user.js`

2. Click raw to install this script to Tampermonkey or copy-paste it on the console. Ctrl+Shift+i opens the developer tab and there you can find the console. Paste the code there and press enter to run it.

3. Type in the quiz ID. You should see it on the host's screen. If the quiz ID box is still red after typing in the right quiz ID that means the Kahoot is private and this cannot be used with it.

### Works without Tampermonkey ("integrated Tampermonkey")

The script contains a built-in `GM_xmlhttpRequest` shim:

- **With Tampermonkey/Violentmonkey:** the real `GM_xmlhttpRequest` is used (proxy requests bypass CORS via `@connect`).
- **Without any extension** (console paste, bookmarklet, or injected `<script>` tag into a clone site): all quiz-API calls automatically fall back to an internal XHR layer, so the quiz lookup/search keeps working exactly like under Tampermonkey.

### Kahoot-like sites & iframes

Instead of only running on `kahoot.it`, the script **auto-detects the Kahoot layout** (`data-functional-selector` attributes / game-pin input) on any matched page and starts itself as soon as that structure appears – even in SPAs that render late, and inside cross-origin-friendly iframes on game portals. On foreign pages where no Kahoot structure shows up within 30 s, it never injects its overlay. Supported example domains (add more via `@match`): `*.rogbeast.de`, `*.pages.dev` mirrors, CrazyGames/Poki-style embeds, plus any URL containing "kahoot".

## Features

The latest version includes Auto Answer, Show Answers and Quiz search based on John Weeky API. Only quiz and multi-select answers are supported. Type answers etc. are not supported. You can drag the menu from the top bar and minimize it if you want.

### Closing & reopening the menu

- Pressing **✕ (Close)** now only *hides* the menu instead of killing the whole script. Both cheats are switched off and all colored answer markers are removed, so the game looks completely normal (works as a panic button).
- To bring the menu back during a round, simply **tap the Kahoot profile picture (avatar, top-right corner) 3 times** within ~1.5 seconds. The menu reappears with both toggles correctly reset to "off".

## Fixes compared to KaHoax 1.1.4.1

1. **Colored answer marking fixed:** the old version painted the entire answer buttons neon green (`rgb(0,255,0)`) / red (`rgb(255,0,0)`), which destroyed Kahoot's layout and made answers unreadable. Correct answers are now marked with a small blue diamond shape and wrong answers with a muted gray circle in the corner of each button – subtle, readable and never overriding Kahoot's own styles. Markers are automatically cleaned up when "Show Answers" is turned off or the menu is closed.
2. **Harsh neon-green highlighting in the quiz browser dropdown** replaced with the same soft green style used in the main question list.
3. **Mobile toggle bug fixed** ("toggles stuck on enabled"): the hidden checkboxes now sit exactly on top of their switches so their state can never desync from the visual slider; when the menu reopens, both toggles are properly reset to off.
4. **Closing the menu no longer ends the script unrecoverably** – reopen via triple-tap on the profile avatar (see above).
5. Renamed project to **KahootHelper** (userscript header, title bar, meta file, icon/update/download URLs).

## New in 1.1.6

- **Runs on kahoot-like clone sites**, not only kahoot.it: extra `@match` rules plus runtime Kahoot-layout auto-detection (works with late-rendering SPAs and iframe embeds; never shows an overlay on pages that aren't Kahoot).
- **"Integrated Tampermonkey":** built-in `GM_xmlhttpRequest` shim with automatic XHR fallback, so quiz lookup/search works even when pasted into the console or injected without any userscript manager.
- `@run-at document-start` so detection catches the page before/while it renders.

## TODO etc

- Support for auto type answers

## Credits

Huge thanks to:

[johnweeky](https://github.com/johnweeky) for efforts made to scale up and adapt it to mobile use, and idea of hosting preinjected kahoot.it with cheats!

[jokeri2222](https://github.com/jokeri2222) for great base to work on.

[Epic0001](https://github.com/Epic0001) for bug testing and general bug fixing.
