# ahmad-nayfeh.github.io (moved)

This site moved to **https://ahmadnayfeh.com**. The source is now in the repository `Ahmad-Nayfeh/ahmadnayfeh.com`.

What is left here is one forwarding page, saved twice:

- `index.html` answers the old home address.
- `404.html` answers every other old address (GitHub Pages serves it for any path that has no file).

The page sends the visitor to the matching new address and keeps the query string and the part after `#`, so old invite links, app pages and download links still arrive in the right place. The address mapping is the small `target()` function inside the page.

Do not publish apps here any more. Each app's publish script now writes to `public/apps/<app>/` in the new repository.
