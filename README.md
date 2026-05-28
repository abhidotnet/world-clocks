# World Clocks

A Chrome extension that shows multiple world time zones at a glance in your browser toolbar. Switch between digital and analog views, customize which zones you track, and reorder them to match how you work.

## Features

- **Multiple time zones** — Display up to 12 clocks at once
- **Digital or analog** — Toggle between 24-hour digital readouts and analog clock faces
- **Live updates** — Times refresh every second
- **Customizable list** — Add zones from a curated IANA list, set custom labels, remove entries, and drag to reorder
- **Persistent settings** — Your time zone list and display mode are saved locally via `chrome.storage`

## Installation (developer mode)

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the project folder (`world-clocks`).
5. Pin the extension from the puzzle icon in the toolbar for quick access.

## Usage

1. Click the **World Clocks** icon to open the popup.
2. View the default US and international zones, or open **Manage** to:
   - Reorder zones by dragging the handle
   - Remove a zone with **✕**
   - Add a zone from the dropdown and optional label, then **+ Add**
3. Use the header button to switch between **Analog** and **Digital** display.

## Default time zones

On first run, the extension shows: Pacific, Mountain, Central, Eastern (US), plus England, France, Germany, Russia, India, and China. You can change this list anytime in settings.

## Project structure

```
world-clocks/
├── manifest.json    # Extension manifest (Manifest V3)
├── popup.html       # Popup UI
├── popup.css        # Styles
├── popup.js         # Clock logic, storage, settings
├── icons/           # Extension icons (16, 48, 128 px)
└── README.md
```

## Permissions

| Permission | Purpose |
|------------|---------|
| `storage` | Save your time zone list and analog/digital preference |

No network access or host permissions are required; all time formatting uses the browser’s built-in `Intl` APIs.

## Tech stack

- Chrome Extension Manifest V3
- Vanilla HTML, CSS, and JavaScript
- `Intl.DateTimeFormat` / `toLocaleTimeString` for IANA time zone support

## Development

After editing files, reload the extension on `chrome://extensions` (click the reload icon on the World Clocks card), then reopen the popup to see changes.

## License

Add your chosen license here (e.g. MIT) if you plan to publish or share the repository.
