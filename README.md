# ahmad-nayfeh.github.io

Official download pages for Ahmad Nayfeh's Android apps.

- `/khatwa/` — خطوة (Khatwa): step counter, walk-to-unlock, walking as a game.
- `/marathon/` — ماراثون القراءة (Reading Marathon): reading groups, daily logging, points and badges.
  - `/marathon/join/?code=XXXXXX` — invite links (opened directly by the app via `.well-known/assetlinks.json`).
  - `/marathon/privacy/` — privacy policy.
- `/shasha/` — شاشة (Shasha): calm, family-safe video app for the TV (Android TV, Google TV, Fire TV) and the phone.
  - `shasha-tv.apk`, `shasha-mobile.apk`, `shasha-setup.zip` (the computer kit that installs the TV app), `guide-ar.pdf`, `guide-en.pdf`.
  - `/shasha/latest.json` — read by both apps' in-app updaters (no credentials). Do not edit it or the page's
    version, size and SHA-256 by hand: run `tools/publish-site.sh` from the shasha repository, which copies the files
    under fixed names, computes size and SHA-256, and rewrites `latest.json` and the values between the page's
    `<!--@name-->…<!--/@name-->` markers.

Plain static HTML, no build step. APKs are stored next to each page; to release a new version, replace the APK, then update the file name, version, size and SHA-256 on the page.
