# ahmad-nayfeh.github.io

Official download pages for Ahmad Nayfeh's Android apps.

- `/khatwa/` — خطوة (Khatwa): step counter, walk-to-unlock, walking as a game.
- `/marathon/` — ماراثون القراءة (Reading Marathon): reading groups, daily logging, points and badges.
  - `/marathon/join/?code=XXXXXX` — invite links (opened directly by the app via `.well-known/assetlinks.json`).
  - `/marathon/privacy/` — privacy policy.

Plain static HTML, no build step. APKs are stored next to each page; to release a new version, replace the APK, then update the file name, version, size and SHA-256 on the page.
