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
6. Keep Korean speech normalization and dialogue eligibility in `lesson/listening/content.js`. Build listening content in `lesson/listening/queue.js`; keep playback state and the native bridge out of those pure modules.
7. Keep playback following rules in `lesson/listening/follow.js` and absolute-deadline sleep timer utilities in `lesson/listening/sleep-timer.js`.
8. Load and cache lesson chunks through `lesson/data-loader.js`; do not append data scripts from page renderers.
9. Keep native listening protocol changes backward compatible and cover them with Web, Android, and iOS tests. Background timers must run in the native playback service/controller, not in the WebView.
10. Keep navigation URLs free of release or cache versions. Use only business parameters such as `lesson`, `grammar`, and `source`.
11. Generate `lesson_manifest_l*.js` and `lesson_search_l*.js` from the canonical `lesson_data_l*.js` files. Load the generated full-text search index only after the user starts a search.

## Cache policy

- Source files and navigation links must not contain manually maintained `?v=` query parameters.
- Web deployments rely on HTTP validators such as `ETag` and `Last-Modified` while this project is served directly as static files.
- Capacitor bundles Web assets inside each Android or iOS release, so an app update is the resource version boundary.
- If long-lived immutable caching is introduced later, the build must generate content-hashed filenames and rewrite references automatically.

## Validation

Run the Node test suite before syncing Web assets. Mobile builds must call `pnpm sync:web`, which copies this source tree into Capacitor and verifies the same resources on Android and iOS.

After changing top-level lesson metadata or search text, regenerate derived assets with:

```sh
node scripts/generate_lesson_manifests.mjs
```
