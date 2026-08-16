# KIIP Web Architecture

## Runtime boundaries

- `shared/` contains design tokens, reusable controls, icons, locale persistence, and page bootstraps.
- `lesson/` contains Lesson Guide renderers, lesson data loading, listening queue construction, and schemas.
- `grammar/` contains Grammar Wiki styles and bootstrap logic.
- Root `lesson_data_*`, `lesson_chunks/`, and translation files remain static data assets.
- `lesson_listening_native.js` is the stable Web-to-native protocol adapter used by Android and iOS.

## Extension rules

1. Add shared colors, sizing, or typography to `shared/styles/tokens.css`; do not redefine theme values in page files.
2. Add reusable controls to `shared/styles/components.css` and reusable SVGs to `shared/icons.js`.
3. Use `shared/locale.js` for locale normalization and persistence. Preserve the legacy storage keys through its API.
4. New Level pages must use `shared/lesson-page.js`; a Level entry should only declare its `data-level` value.
5. Keep page-specific layout in `lesson/home.css`, `lesson_guide.css`, or `grammar/wiki.css`.
6. Build listening content in `lesson/listening/queue.js`; keep playback state and the native bridge out of that pure module.
7. Keep playback following rules in `lesson/listening/follow.js` and absolute-deadline sleep timer utilities in `lesson/listening/sleep-timer.js`.
8. Load and cache lesson chunks through `lesson/data-loader.js`; do not append data scripts from page renderers.
9. Keep native listening protocol changes backward compatible and cover them with Web, Android, and iOS tests. Background timers must run in the native playback service/controller, not in the WebView.

## Validation

Run the Node test suite before syncing Web assets. Mobile builds must call `pnpm sync:web`, which copies this source tree into Capacitor and verifies the same resources on Android and iOS.
