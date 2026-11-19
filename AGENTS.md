# WeLearnTech Agent Guide

## Repository Boundary

- This is the public `WeLearnTech` repository (`master`). `LearnKoreanGame/` is the canonical KIIP web source; other projects and notes here are independent.
- `LearnKoreanMobile/`, if present, is a separate Git checkout with its own `AGENTS.md`, not a directory to add to this repository. Run Git commands from the intended checkout and verify the staged paths before committing.
- Keep `KIIPAudio/`, personal recordings and voice-generation scripts, device backups, credentials, signing material, APKs, local review drafts, and incidental build outputs out of the public repository. Do not change repository visibility or publish from this checkout on behalf of the mobile repo.
- Preserve existing work. Scope commits and PRs to the requested repo and feature; do not push or merge unless requested.

## KIIP Web Development

- Read [`LearnKoreanGame/ARCHITECTURE.md`](LearnKoreanGame/ARCHITECTURE.md) before modifying shared UI, data loading, navigation, or listening. Put shared controls, icons, locale logic, and design tokens in `LearnKoreanGame/shared/`; keep level entry pages declarative.
- Display Korean learning text plus one selected translation language (Chinese or English). Use the shared locale API and existing one-click toggle. Localize labels, tags, menu items, and accessible control names as well as content; do not show parallel Chinese and English UI copy.
- Fix course data in the canonical lesson and translation sources. Preserve lesson IDs and matching translation/grammar references. For textbook vocabulary audits, check both the in-lesson word boxes and end-of-lesson review lists against the corresponding lessons and update the regression fixtures when the audited coverage changes.
- Regenerate lesson manifests and search indexes after changing relevant source data. Keep lesson chunks and full-text search lazy-loaded; do not add hardcoded `?v=` parameters to navigation or asset URLs.
- Preserve the selected tab and reading position when returning from Grammar Wiki. For mobile layout changes, check narrow widths, sticky headers, drawer toggles, and bottom controls for overlap; keep desktop scrolling usable.
- Keep the Web/native listening contract backward compatible. Korean speed controls do not slow Chinese or English translations; translation language follows the current display locale. Preserve playback position and avoid repeated scroll animations or floating-player flicker between items.
- Shared changes that should ship to the apps must also be synced and verified in the mobile checkout. A web commit does not update installed apps, and editing the bundled mobile snapshot is not a substitute for fixing canonical source.

## Validation

From the repository root:

```sh
node LearnKoreanGame/scripts/generate_lesson_manifests.mjs # when lesson data changes
node --test LearnKoreanGame/tests/*.test.js
git diff --check
```

For visible changes, check the affected flow on desktop and at a phone-sized viewport. Report browser checks, app builds, and physical-device results separately.
